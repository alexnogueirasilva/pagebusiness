//NPM Install
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const mysql = require('mysql2');
const path = require('path');
const redis = require('redis');
const session = require('express-session');

//================================================================== Configurações
//Cria o objeto da aplicação
var app = express();

//Inicializa o socket.io
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Separa as partes enviadas pelo POST para facilitar a utilização dos parâmetros
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Diretório onde estão as views ejs (páginas frontend)
app.set("views", path.join(__dirname, "view"));

//Seta como engine arquivos no formato "ejs"
app.set("view engine", "ejs");

//Criando a sessão redis
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();
app.use(
    session({
        store: new RedisStore({ client: redisClient }),
        host: 'localhost',
        port: 6379,
        secret: 'argenton123*',
        resave: true,
        saveUninitialized: true
    })
);

//Globais
app.locals.moment = require('moment');

//Diretório que possui os arquivos públicos como imagens, etc...
app.use(express.static(path.join(__dirname, "public")));

//Utilizado para upload de arquivos
app.use(fileUpload());

//================================================================== Conexão ao Banco de dados
//Importamos a String de coneção que está na pasta database
var config = require('./database/config');

//Realizamos a conexão no BD
const connection = mysql.createConnection(config);

//Validamos se conectou no BD
connection.connect(function (error) {
    if (!!error)
        console.log('Erro ao conectar no BD:', error);
    else
        console.log('Desenvolvido por : alex@devaction.com.br');
    console.log('Servidor host    :', connection.config.host);
    console.log('Banco de dados   :', connection.config.database);
    console.log('----------------------------------------------');
});

// A variável "db" global recebe a conexão
global.db = connection;

//================================================================== Servidor http
//Server Listening do Node para utilizar uma porta, aqui faz a aplicação rodar
var port = 3000;
var visitas = 0;
var usuarioConectado = 0;
let messages = [];

io.on('connection', socket => {
    visitas++;
    usuarioConectado++;
    console.log('Endereço do site  : localhost:', port);
    console.log('Desenvolvido por  : alex@devaction.com.br');
    console.log('Servidor host     :', connection.config.host);
    console.log('Banco de dados    :', connection.config.database);
    console.log(`Token conectado   : ${socket.id}`);
    console.log('Usuários online   :', usuarioConectado);
    console.log('Número de acessos :', visitas);
    console.log('----------------------------------------------');

    //Escuta o sendMessage do front end e add a msg no array messages[]
    socket.on('sendMessage', data => {
        //Emite a mensagem aos demais usuários    
        socket.broadcast.emit('receivedMessage', data);
        messages.push(data);
    });

    //Emite as mensagens guardandas na memoria para o front-end
    socket.emit('previousMessages', messages);    

    socket.on('disconnect', socket => {
        usuarioConectado--;
        console.log('Endereço do site  : localhost:', port);
        console.log('Desenvolvido por  : fabio.argenton@hotmail.com');
        console.log('Servidor host     :', connection.config.host);
        console.log('Banco de dados    :', connection.config.database);
        console.log('Usuários online   :', usuarioConectado);
        console.log('Número de acessos :', visitas);
        console.log('----------------------------------------------');
    });
});

/**
 * Ao acessar o sistema vai entrar no routes/rotas e 
 * passar como "get" o "/login" (ver no "route/rotas.js")
 * Onde tem os GET e POST e direcionamento das páginas passando também o io (socket) */
const rotas = require('./route/rotas')(io);
app.use('/', rotas);

/* Inicia a o servidor Node.JS */
server.listen(port, () => {
    console.log('----------------------------------------------');
    console.log('Endereço do site : localhost:', port);
});

//================================================================== Fim