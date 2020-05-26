var hugolunr = require('hugo-lunr');
var h = new hugolunr();

h.setInput('content/post/**');
h.setOutput('static/gen/lunr-index.json');
h.index();

/* 
from root directory, run the following command to generate the lunr index:
    node .\static\js\search.js
*/
