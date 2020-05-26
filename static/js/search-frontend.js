var idx, pagesIndex = null;

function call_search() {
    const urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('query');

    res = idx.search('*' + query + '*').map(function (result) {
        return pagesIndex.filter(function (page) {
            return page.uri === result.ref;
        })[0];
    })
    render(res);
}

function render(result) {
    output = $('#front-posts');
    output.empty();

    if (result.length != 0)
        for (var i = 0; i < result.length; ++i) {
            output.append('<li class="list-group-item"><a href="' + result[i].uri.toLowerCase() + '">' + result[i].title + '</a></li>');
        }
    else
        output.append('<li class="list-group-item">Found nothing</li>');
}


function initLunr() {
    $.getJSON("https://www.cerbz.com/gen/lunr-index.json")
        .done(function (index) {
            pagesIndex = index;

            idxCreate(pagesIndex, function () {
                call_search();
            })
        });
}

function idxCreate(index, callback) {
    idx = lunr(function () {
        this.field("uri", {
            boost: 10
        });
        
        this.field("content");

        this.field("tags");
        
        this.field('title');

        this.ref("uri");

        for (var i = 0; i < pagesIndex.length; ++i) {
            this.add(pagesIndex[i]);
        }
    });
    callback();
}

initLunr();
