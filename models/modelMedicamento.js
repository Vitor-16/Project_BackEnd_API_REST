/*Importação do módulo do Sequelize*/
const Sequelize = require('sequelize');

/*Importação da conexão com o banco de dados*/
const connection = require('../database/database');

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const modelCliente = require('./modelCliente');

const modelMedicamento = connection.define(
    'tbl_medicamento',
    {
        id_medicamento:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
modelCliente.hasMany(modelMedicamento);

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
modelMedicamento.belongsTo(modelCliente);

//modelLivro.sync({force:true});

module.exports = modelMedicamento;