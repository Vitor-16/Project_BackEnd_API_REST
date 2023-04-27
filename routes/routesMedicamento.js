const express = require('express');
const modelMedicamento = require('../models/modelMedicamento');

const router = express.Router();

router.post('/cadastrarMedicamento', (req, res)=>{

    const { titulo, preco, detalhes, imagen_peq, imagen_grd, tblClienteIdCliente } = req.body;

    modelMedicamento.create(
        {
            titulo,
            preco,
            imagen_peq,
            imagen_grd,
            detalhes,
            imagen_peq,
            imagen_grd,
            tblClienteIdCliente

        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:'Medicamento inserido com sucesso.'
            });      
        }
    ).catch((erro)=>{
        return res.status(400).json({
            erroStatus: true,
            erroMensagem: erro
        });
    });

});

router.get('/listarMedicamento', (req, res)=>{

    modelMedicamento.findAll()
        .then((medicamentos)=>{
            return res.status(200).json(medicamentos)
        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
});

router.get('/listarMedicamentoID/:id_medicamento', (req, res)=>{

    const {id_medicamento} = req.params

    modelMedicamento.findByPk(id_medicamento)
        .then((medicamento)=>{
            return res.status(200).json(medicamento)
        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });
});

router.delete('/excluirMedicamento/:id_medicamento', (req, res)=>{

    const {id_medicamento} = req.params;

    modelMedicamento.findByPk(id_medicamento)

        .then((medicamentos)=>{

            medicamentos.destroy({
                where:{id_medicamento}
            }).then(
                ()=>{

                    return res.status(200).json({
                        erroStatus:false,
                        mensagemStatus:'Medicamento excluído com sucesso.'
                    });

                }).catch((erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMensagem: erro
                    });
                });

        });

});

router.put('/editarMedicamento/:id_medicamento', (req, res)=>{
    const { id_medicamento } = req.params;

    const { titulo, preco, detalhes, imagen_peq, imagen_grd, tblClienteIdCliente  } = req.body;

    /** UPDATE SEM IMAGEM **/
    modelMedicamento.update(
        {titulo,
        preco,
        detalhes,
        imagen_peq, 
        imagen_grd,
        tblClienteIdCliente},
        {where: {id_medicamento}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:'Medicamento alterado com sucesso.'
            });
        }).catch((erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMensagem: erro
            });
        });

});

module.exports = router;