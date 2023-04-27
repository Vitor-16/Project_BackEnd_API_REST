//IMPORTANDO PACOTE EXPRESS
const express = require('express');

//IMPORTANDO ARQUIVO DE ROTAS CLIENTE
const routesCliente = require('./routes/routesCliente');
const routesMedicamento = require('./routes/routesMedicamento');

//CRIANDO EXECUTÁVEL DO EXPRESS ATRAVÉS DE APP
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//UTILIZANDO ROUTES.JS CRIADO
app.use('/', routesCliente);
app.use('/', routesMedicamento);

/*TESTE DE ROTA RAIZ 
app.get('/', function (req, res) {
    res.send('RESPOSTA DA ROTA RAIZ DA APLICAÇÃO');
});*/

//CRIANDO WEB SERVER E DEFINIDO PORTA LÓGICA(OBRIGATÓRIA) E CALLBACK(OPCIONAL)
app.listen(7777, () => {
    console.log('RODANDO O SERVIDOR VIA - http://localhost:7777');
});