//Variável que setamos a página do conteúdo central a ser incluído na tela
var page = './includes/default/3-content';
var status_Login = '';

//================================================================== Funções recebidas da rota
module.exports = {

    //Pagina inicial de login ao acessar localhost:3000 ou fazer logoff
    pageLogin: (req, res) => {

        //Deleta a sessão do usuário do redis
        delete req.session.nome_login;

        //Abre a página de login
        res.render('./pageLogin', {
            status_Login,
            body: req.body
        });
    },

    //Função que verifica usuário e senha digitados na tela de login
    verificaLogin: (req, res) => {
        var username = req.body.usuario;
        var password = req.body.senha;

        let sql = "SELECT * FROM tb_usuario WHERE " +
            "usuario = '" + username + "' AND " +
            "senha = '" + password + "'";

        //Valida e executa o login na aplicação
        db.query(sql, (err, results, fields) => {

            //Verifica se usuário e senha digitados conferem
            if (results.length > 0) {

                //Verifica se o usuário está ativo
                if (results[0].status == '1') {
                    //Seta o conteúdo da página                   
                    page = './includes/default/3-content';

                    //Grava dados do usuário logado na sessão do redis
                    req.session.cod_login = results[0].cod;
                    req.session.nome_login = results[0].nome;
                    req.session.foto_login = results[0].foto;
                    req.session.usuario_login = results[0].usuario;
                    req.session.perfil_login = results[0].perfil;

                    //Login OK - Passa o conteúdo das variáveis para a página index
                    res.render('./pageAdmin', {
                        cod_login: req.session.cod_login,
                        nome_login: req.session.nome_login,
                        foto_login: req.session.foto_login,
                        usuario_login: req.session.usuario_login,
                        perfil_login: req.session.perfil_login,
                        page,
                        //Cadastros
                        CadastroOpen: '',
                        Cadastro: '',
                        CadUsuario: '',
                        CadMaterial: '',
                        //Chat
                        ChatOpen: '',
                        Chat: '',
                        CadChat: ''
                    });

                    //Limpa campos
                    req.body = {};
                    res.end();

                } else { //Usuário bloqueado
                    status_Login = 'loginBloqueado';
                    res.render('./pageLogin', {
                        status_Login,
                        body: req.body
                    });
                    res.end();
                }

            } else { //Usuário e senha não conferem
                status_Login = 'loginIncorreto';
                res.render('./pageLogin', {
                    status_Login,
                    body: req.body
                });
                res.end();
            }
        });
    },

    pageAdmin: (req, res) => {
        page = './includes/default/3-content';
        res.render('./pageAdmin', {
            cod_login: req.session.cod_login,
            nome_login: req.session.nome_login,
            foto_login: req.session.foto_login,
            usuario_login: req.session.usuario_login,
            perfil_login: req.session.perfil_login,
            page,
            //Cadastros
            CadastroOpen: '',
            Cadastro: '',
            CadUsuario: '',
            CadMaterial: '',
            //Chat
            ChatOpen: '',
            Chat: '',
            CadChat: ''
        });
        res.end();
    },
};