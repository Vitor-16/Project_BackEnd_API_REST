/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const modelCliente = require('./modelCliente');

const modelLivro = connection.define(
    'tbl_livro',
    {
        titulo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        preco:{
            type: Sequelize.STRING,
            allowNull: false
        },
        imagen_peq:{
            type: Sequelize.STRING,
            allowNull: false
        },
        imagen_grd:{
            type: Sequelize.STRING,
            allowNull: false
        },
        detalhes:{
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
modelCliente.hasMany(modelLivro);


/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
modelLivro.belongsTo(modelCliente);

//Livro.sync({force:true});

module.exports = modelLivro;