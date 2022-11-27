//IMPORTANDO PACOTE EXPRESS PARA INDEXJS
const { response } = require('express');
const express = require('express');
const { model } = require('../database/database');

//UTILIZANDO MODEL CLIENTE CRIADA
const modelCliente = require('../models/modelCliente');

//USANDO GERENCIADOR DE ROTAS DO PACOTE EXPRESS
const router = express.Router();

/* ROTAS DE CRUD CLIENTE*/

//ROTA DE CREATE
router.post("/CadastrarCliente", (req, res)=>{
    console.log(req.body);

    let{nome_Cliente, email_Cliente, senha_Cliente} = req.body;
    modelCliente.create(
        {nome_Cliente},
        {email_Cliente},
        {senha_Cliente}
        )
    .then(
        ()=>{
                return res.status(200).json({
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
    )
});

//ROTA DE READ SEM CRITÉRIO
router.get("/ListarCliente", (req, res)=>{
    modelCliente.findAll()
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTES LISTADOS COM SUCESSO.",
                data:response
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR OS CLIENTES.",
                errorObject:error
            });
        }
    )
});

//ROTA DE READ POR PK
router.get("/ListaClientePK/:id_Cliente", (req, res)=>{
    let {id_Cliente} = req.params;
    modelCliente.findByPk({id_Cliente})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTES POR PK LISTADO COM SUCESSO.",
                data:response
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR CLIENTES POR PK.",
                errorObject:error
            });
        }
    )
});

//ROTA DE READ POR NOME
router.get("/ListaClienteNOME/:nome_Cliente", (req, res)=>{
    let {nome_Cliente} = req.params;
    modelCliente.findOne({attributes:['id_ Cliente','nome_Cliente'], where:{nome_Cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTES POR NOME LISTADOS COM SUCESSO.",
                data:response
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR CLIENTES POR NOME.",
                errorObject:error
            });
        }
    )
});

//ROTA DE UPDATE
router.put('/AlterarCliente', (req, res)=>{
    const{nome_Cliente, email_Cliente, senha_Cliente} = req.body;
    modelCliente.update(
        {nome_Cliente},
        {email_Cliente},
        {senha_Cliente},
        {where:{id_Cliente}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"DADOS DE CLIENTE ALTERADO COM SUCESSO."
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR DADOS DE CLIENTE.",
                errorObject:error
            });
        }
    )
});

//ROTA DE DELETE
router.delete('/DeletarCliente/:id_Cliente', (req, res)=>{
    console.log(req.params);
    let {id_Cliente} = req.params;
    modelCliente.destroy(
        {where:{id_Cliente}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUIDO COM SUCESSO.",
            });
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CLIENTE.",
                errorObject:error
            });
        }
    )
});

module.exports = router;