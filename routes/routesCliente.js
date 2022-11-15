//IMPORTANDO PACOTE EXPRESS PARA INDEXJS
const express = require('express');

//UTILIZANDO MODEL CLIENTE CRIADA
const modelCliente = require('../model/modelCliente');

//USANDO GERENCIADOR DE ROTAS DO PACOTE EXPRESS
const router = express.Router();

/* ROTAS DE CRUD */

//ROTA DE CADASTRO(CREATE)
router.post("/CadastrarCliente", (req, res)=>{
    console.log(req.body);
    //let{cpf_Cliente} = req.body;
    let{nome_Cliente, cpf_Cliente, email_Cliente, senha_Cliente, dataNasc_Cliente, telefone_Cliente} = req.body;
    modelCliente.create(
        {nome_Cliente},
        {cpf_Cliente},
        {email_Cliente},
        {senha_Cliente},
        {dataNasc_Cliente},
        {telefone_Cliente}
        )
    .then(
        ()=>{
                return res.status(201).json({
                    erroStatus:false,
                    mensagemStatus:"CLIENTE CADASTRADO."
                });
        }
    )
    .catch(
        (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO NO CADASTRO DO CLIENTE.",
                    errorObject:error
                });
        }
    );
});

//ROTA DE LEITURA(READ)


//ROTA DE ALTERAÇÃO(UPDATE)


//ROTA DE EXCLUSÃO(DELETE) 


module.exports = router;