var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");

router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("",controlePaginas.home);
router.get("/variedades",controlePaginas.variedades);
router.get("/formulario",controlePaginas.formulario);
router.post("/formulario",controlePaginas.dadosForm);


module.exports = router;
