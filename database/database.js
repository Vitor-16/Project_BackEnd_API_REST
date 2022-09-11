//IMPORTANDO PACOTE SEQUELIZE
const Sequelize = require('sequelize');

//CRIANDO CONEXÃO COM BD
const connection = new Sequelize(
    /*'DEVE TER O NOME DO BD' ,
    'DEVE TER USUÁRIO DO BD' ,
    'DEVE TER SENHA DO BD' ,*/
    {
        //DEVE CONTER LOCAL ONDE BD ESTÁ
        //DEVE CONTER O TIPO DO BD
        //DEVE CONTER FUSO HORÁRIO LOCAL
    }
);
module.exports = connection;