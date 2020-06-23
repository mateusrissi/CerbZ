+++
authors = [
  "Mateus",
]

title = "Instalação do Check_MK no CentOS 6"
date = "2020-06-22"
description = "Instalação do Check_MK no CentOS 6"
summary = "Testing summary"

tags = [
  "tutorial",
  "check_mk",
  "centos",
]

images = [
  "code.jpg",
]
+++

O [Check_MK](https://checkmk.com/ "Check_MK's Homepage") é uma ferramenta, de código aberto, para realizar monitoramento (MK vem de Mathias Kettner, o autor da ferramenta). Oferece dashboards com métricas e gráficos, sua interface é amigável e totalmente customizável.

Esta postagem serve de tutorial para a instalação do Check_MK 1.5 Raw Edition no sistema operacional CentOS 6.

# Particionar o diretório /OPT

O diretório __/opt__ é tradicionalmente usado para softwares de terceiros.

O Check_MK é instalado no path __/opt/omd__. Se o servidor for usado exclusivamente pelo Check_MK, então é aconselhável que __/opt__ ou o __/opt/omd__ tenha uma partição própria.

Vantagens de particionar o /opt

* Não afeta a estrutura do sistema operacional;
* Todos os arquivos referentes ao Check_MK ficam em um único lugar (facilitando encontrar arquivos de configuração, por exemplo);
* Maior facilidade em redimensionar o disco;
* Possibilidade de utilizar diferentes Sistemas de Arquivos (ext4, JFS, XFS);
* Maior facilidade na hora de realizar o backup.

É possível particionar na hora da instalação do SO ou então lvm


# Emails

# Tempo do sistema

# SELinux

O Security-Enhanced Linux é uma arquitetura de segurança que permite que administradores tenham mais controle sobre quem pode acessar o sistema. Usando políticas de segurança, um conjunto de regras que dizem ao SELinux o que pode ou não ser acessado, ele define controles de acesso para aplicações, processos e arquivos em um sistema.

Aqui temos duas opções:

## Desabilitar SELinux

Podemos desabilitar o SELinux (não aconselhado para ambientes de produção) editando o arquivo __/etc/selinux/config__.

```bash
# vi /etc/selinux/config
```

Troque "enforcing" por "disabled" e reinicie o servidor.

```bash
# reboot
```

## Configurar o SELinux

Podemos adicionar uma regra que permita o funcionamento do Check_MK.

```bash
# 
```