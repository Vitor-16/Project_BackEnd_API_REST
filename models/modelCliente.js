//IMPORTANDO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//FAZENDO CONEXÃO COM ARQUIVO DO BANCO
const connection = require('../database/database');

//CRIANDO OS ATRIBUTOS E VALORES DA MODEL
const modelCliente = connection.define(
    'tbl_Cliente',
    {
        IdCliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_Cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        cpf_Cliente:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        email_Cliente:{
            type: Sequelize.STRING(90),
            allowNull: false
        },
        senha_Cliente:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        dataNasc_Cliente:{
            type: Sequelize.STRING(45),
            allowNull: false,
            timestamp: true
        },
        telefone_Cliente:{
            type: Sequelize.STRING(15),
            allowNull: false
        },
    }
);

//model.sync({force:true});
module.exports = model;