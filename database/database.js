//IMPORTANDO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//CRIANDO CONEXÃO COM BD
const connection = new Sequelize(
    'bd_medicamentos_api' ,
    'root' ,
    '' ,
    {
        host:'localhost',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;