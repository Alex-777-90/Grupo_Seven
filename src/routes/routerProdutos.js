var express = require('express');
const controlePaginas = require('../controllers/controllersPaginas');
var router = express.Router();
var controleProdutos = require("../controllers/controllersProdutos");


// inicio detalhes do produto por id ------------------------------------------------------------///////
router.get("/area_compras_farmacia/:item",controleProdutos.detalhesFarmacia); // criação da página de detalhes 
router.get("/area_compras_variedades/:item",controleProdutos.detalhesVariedades);
router.get("/area_compras_pet/:item",controleProdutos.detalhesPet);

// inicio detalhes do produto por id ------------------------------------------------------------///////

//formulario de criaçao de produtos
router.get("/criarProduto",controleProdutos.inserirProduto);
///////////   URL            CONTROLLER       FUNCAO CALLBACK(VIEW)
//edição de produtos
router.get("/editProdutos",controleProdutos.editProdutos);                        
router.post("/criarProduto",controleProdutos.adicionarProduto);
router.put("/criarProduto",controleProdutos.atualizarProduto);
router.delete("/criarProduto",controleProdutos.deletarProduto);


module.exports = router;