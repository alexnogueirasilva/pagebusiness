module.exports = (io) => { //Aqui recebo o socket.io lá do app.js

    //Instanciando o Router do express
    var express = require('express');
    var rotas = express.Router();

    //Trecho que verifica se a seção está ativa
    rotas.use(function(req, res, next){
        //Se a rota for diferente da página inicial e nome_login da seção redis estiver vazio
        if (['/'].indexOf(req.url) === -1 && req.session.nome_login == undefined) {
            //Redireciona para a página de login
            res.redirect('/')
        } else {//senão
            //Passa para as próximas rotas abaixo 
            next();
        }        
    });

    //================================================================== Setando as rotas da aplicação
    //Rotas para a página de "Login"
    const { pageLogin, verificaLogin, pageAdmin } = require('../dao/login.js');
    rotas.get('/', pageLogin); //localhost:3000 - Tela inicial de login
    rotas.post('/', verificaLogin); //localhost:3000 - Usado no post do botão "Entrar" da tela de login
    rotas.get('/admin', pageAdmin); //localhost:3000/admin - Tela inicial da página administrativa

    //================================================================== CADASTROS
    //Rotas para a página de "Cadastro de Usuário"
    const { pageUsuario, addUsuario, editUsuario, delUsuario, } = require('../dao/cadastros/usuario.js');
    rotas.get('/usuario', pageUsuario); //localhost:3000/usuario (ao clicar no menu da sidebar: Cadastros > Usuário (C"R"UD))
    rotas.post('/addUsuario', addUsuario); //Usado no post do botão "Salvar" do modal que cadastra um novo registro ("C"RUD)
    rotas.post('/editUsuario/:id', editUsuario); //Usado no post do botão "Salvar" do modal que altera um registro (CR"U"D)
    rotas.get('/delUsuario/:id', delUsuario); //Usado no get do botão "Sim, eliminar" do modal que deleta um registro (CRU"D")

    //Rotas para a página de "Cadastro de Material"
    const { pageMaterial, addMaterial, editMaterial, delMaterial, } = require('../dao/cadastros/material.js');
    rotas.get('/material', pageMaterial); //localhost:3000/material (ao clicar no menu da sidebar: Cadastros > Material (C"R"UD))
    rotas.post('/addMaterial', addMaterial); //Usado no post do botão "Salvar" do modal que cadastra um novo registro ("C"RUD)
    rotas.post('/editMaterial/:id', editMaterial); //Usado no post do botão "Salvar" do modal que altera um registro (CR"U"D)
    rotas.get('/delMaterial/:id', delMaterial); //Usado no get do botão "Sim, eliminar" do modal que deleta um registro (CRU"D")

    //================================================================== Chat
    //Rotas para a página de "Chat"
    const { pageChat, } = require('../dao/chat/chat.js');
    rotas.get('/chat', pageChat); //localhost:3000/chat (ao clicar no menu da sidebar: Comunicação > Chat

    //Exportando este módulo
    return rotas;
};