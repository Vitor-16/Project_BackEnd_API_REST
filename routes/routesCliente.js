//IMPORTANDO PACOTE EXPRESS PARA INDEXJS
const express = require('express');
//UTILIZANDO MODEL CLIENTE CRIADA
const modelCliente = require('../model/modelCliente');
//USANDO GERENCIADOR DE ROTAS DO PACOTE EXPRESS
const router = express.Router();

//TESTE EXEMPLO DE ROTAS CRUID
//ROTA DE CADASTRO(CREATE)
router.post('/cadastrarCliente', (req, res)=>{
    res.send('ROTA DE CADASTRO DO CLIENTE!');
});
//ROTA DE LEITURA(READ)
router.get('/listarCliente', (req, res)=>{
    res.send('ROTA DE LISTAGEM DO CLIENTE!');
});
//ROTA DE ALTERAÇÃO(UPDATE)
router.put('/alterarCliente', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DO CLIENTE!');
});
//ROTA DE EXCLUSÃO(DELETE) 
router.delete('/excluirCliente', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DO CLIENTE!');
});

module.exports = router;