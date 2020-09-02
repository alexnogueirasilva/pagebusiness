//Classe de consultas
class DB {

    //Construtor que recebe a conexão quando instanciado a classe
    constructor(db) {
        this.db = db;
    }

    //-------------------------------------------------------------------------------------- Funções internas

    //Consulta sem parâmetro
    async doQuery(queryToDo) {
        let pro = new Promise((resolve, reject) => {
            let query = queryToDo;

            //Executando a consulta
            this.db.query(query, function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        })

        //Retornando o resultado
        return pro.then((val) => {
            return val;
        })
    }

    //Consulta com parâmetro
    async doQueryParams(queryToDo, array) {
        let pro = new Promise((resolve, reject) => {
            let query = queryToDo;

            //Executando a consulta com parâmetro
            this.db.query(query, array, function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        })

        //Retornando o resultado
        return pro.then((val) => {
            return val;
        })
    }

    //-------------------------------------------------------------------------------------- Funções exportadas
    //Funções contendo os selects responsáveis por retornar o resultado caso chamado

    //Perfis de usuário
    async getPerfilUsuario() {
        let query = "SELECT * FROM tb_perfil_usuario ORDER BY perfil ASC";
        return this.doQuery(query)
    }

    //Materiais
    async getMateriais() {
        let query = "SELECT * FROM tb_material ORDER BY material ASC";
        return this.doQuery(query)
    }

    //Familias de material
    async getFamiliaMaterial() {
        let query = "SELECT * FROM tb_familia_material ORDER BY familia ASC";
        return this.doQuery(query)
    }

    //Grupos de material
    async getGrupoMaterial() {
        let query = "SELECT * FROM tb_grupo_material ORDER BY grupo ASC";
        return this.doQuery(query)
    }

};

//Exportando esta classe
module.exports = DB;