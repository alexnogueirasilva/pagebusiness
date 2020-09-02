//Importando arquivo site-model.js que possui a classe com as funções de consulta
const DB = require('./../listas/selects');
const mysql = require('mysql2');
const config = require('./../../database/config');
const conn = mysql.createConnection(config);

//Importando o móduto routes/login.js 
const jsLogin = require('./../login');

//Variáveis a serem utilizadas
var status_Crud = '';

//Variável que recebe a página do conteúdo central a incluir na tela
var page = './includes/default/3-content';

module.exports = {
    pageChat: (req, res) => {

        //Executa certas funções em tempo de execução passando para a página
        let DBModel = new DB(conn);
        (async function () {

            //Atribuindo o conteúdo central
            page = './includes/chat/inc_chat';

            //Passa o conteúdo das variáveis para a página principal
            res.render('./pageAdmin', {
                status_Crud,
                cod_login: req.session.cod_login,
                nome_login: req.session.nome_login,
                foto_login: req.session.foto_login,
                usuario_login: req.session.usuario_login,
                perfil_login: req.session.perfil_login,
                page,
                //Cadastros
                Cadastro: '',
                CadastroOpen: '',
                CadUsuario: '',
                CadMaterial: '',
                //Chat
                ChatOpen: 'menu-open',
                Chat: 'active',
                CadChat: 'active'
            });
        })();
    },

};