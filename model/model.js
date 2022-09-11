//IMPORTANDO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//FAZENDO CONEXÃO COM BD ATRAVÉS DE SEU ARQUIVO
const connection = require('../database/database');
const model = connection.define(
    //'DEVE CONTER O NOME DA TABELA DO BD',
    {
        //DEVE CONTER NOME DO CAMPO DA TABELA
        //TIPO DOS DADOS DO CAMPO DA TABELA
        //REGRAS DO CAMPO DA TABELA
    }
);
//model.sync({force:true});
module.exports = model;