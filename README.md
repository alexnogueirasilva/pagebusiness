# ---------------------------------- #
# Criado por: Alex Nogueira da Silva #
# E-mail: alex@devaction.com.br      #
# Contato: (75) 9.8804-4529          #
# ---------------------------------- #

# --------------------------------------------------------------------------------- Passo a Passo

## Estrutura do projeto:

Pasta **database**: Aqui fica o arquivo de configuração para conexão do MySQL.

**app.js**:  É o arquivo de inicialização do projeto, é nele que faço a importação dos módulos node.js, defino a porta e a rota principal para a aplicação [app.js->route].

Pasta **route**: É aqui que temos o arquivo de direcionamento das rotas e, é nele que defino qual rota o app deve seguir quando o usuário entra em uma determinada tela/endereço ou faz um post [app.js->route->dao].

Pasta  **dao**: É aqui que fica minhas rotas e é aqui que fica o CRUD (Create, Ready, Update e Delete) da aplicação [app.js->route->dao->view].

Pasta **view**: É aqui que fica meu front-end

Pasta **public**: Nesta pasta ficam todos os meus arquivos públicos como imagens, css, js, etc... é nesta pasta que ficam os arquivos carregados pelo usuário no front-end.

## Instalando as dependências:
Instale o Node JS: https://nodejs.org/en/download/
Instale o VS Code: https://code.visualstudio.com/download
instale o HeidSQL: https://www.heidisql.com/download.php?download=installer
instale o MySQL  : https://dev.mysql.com/downloads/windows/installer/8.0.html

1.Configure o MySQL definindo um usuário e senha

2.Reinicie o Windows

 2.1 Na máquina que será utilizada como servidor do Node.JS/MySQL, coloque o código fonte do projeto numa pasta de sua preferência.

 2.2 Com o cmd aberto dentro da pasta do projeto execute: `npm install`

 2.3 Após instalação do npm entre no arquivo **package.json** e veja todos os módulos que necessitam ser instalados, para instalação execute: npm install --save modulo_a_instalar_aqui

 2.4 Instale o nodemon, execute: `npm install -g nodemon`

 2.5 Faça a instalação do Redis nesta mesma máquina (servidor) máquina, para SO Windows faça a instalação do executável mantido pela microsoft disponível neste endereço: https://github.com/microsoftarchive/redis/releases

3.Abra o HeidSQL

4.Configure a conexão ao BD (pasta database) e rode o script para criação do BD no seu servidor MySQL, o script está na pasta **database**.

Inicie sua aplicação executando no CMD dentro da pasta do projeto, o comando: `nodemon app.js`

Acesse a aplicação pelo endereço: `27 packages are looking for funding
    `
Observação:
    - Se aparecer algum erro "module not found", é porque precisa instalar algum módulo necessário
    - Dê "CTRL+C" para resetar o cmd e instale o módulo solicitado utilizando o comando conforme 2.3: 
      npm install digite-nome-do-módulo-faltante-aqui

### Informações adicionais: