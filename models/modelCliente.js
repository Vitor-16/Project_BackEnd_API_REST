//IMPORTANDO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//FAZENDO CONEXÃO COM ARQUIVO DO BANCO
const connection = require('../database/database');

//CRIANDO OS ATRIBUTOS E VALORES DA MODEL
const modelCliente = connection.define(
    'tbl_Clientes',
    {
        id_Cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_Cliente:{
            type: Sequelize.STRING(255),
            allowNull: false
        },
        email_Cliente:{
            type: Sequelize.STRING(255),
            allowNull: false
        },
        senha_Cliente:{
            type: Sequelize.STRING(255),
            allowNull: false
        },
    }
);

//modelCliente.sync({force:true}); 

module.exports = modelCliente;