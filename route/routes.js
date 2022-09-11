//IMPORTANDO PACOTE EXPRESS
const express = require('express');

//USANDO GERENCIADOR DE ROTAS DO PACOTE EXPRESS
const router = express.Router();

//TESTE EXEMPLO DE ROTAS CRUID
//ROTA DE CADASTRO(CREATE)
router.post('/cadastrar', (req, res)=>{
    res.send('ROTA DE CADASTRO!');
});
//ROTA DE LEITURA(READ)
router.get('/listar', (req, res)=>{
    res.send('ROTA DE LISTAGEM!');
});
//ROTA DE ALTERAÇÃO(UPDATE)
router.put('/alterar', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO!');
});
//ROTA DE EXCLUSÃO(DELETE) 
router.delete('/excluir', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO!');
});
module.exports = router;