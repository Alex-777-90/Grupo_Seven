var express = require('express');
var router = express.Router();
var controleProdutos = require("../controllers/controllersProdutos");


// inicio detalhes do produto por id ------------------------------------------------------------///////
router.get("/area_compras/:item",controleProdutos.detalhesFarmacia); // criação da página de detalhes 
router.get("/area_compras2/:item",controleProdutos.detalhesVariedades);
router.get("/area_compras3/:item",controleProdutos.detalhesPet);

// inicio detalhes do produto por id ------------------------------------------------------------///////

module.exports = router;