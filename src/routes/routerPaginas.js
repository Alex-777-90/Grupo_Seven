var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
const validations = require("../middlewares/validaFormulario");


router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("/variedades",controlePaginas.variedades);
router.get("",controlePaginas.home);


// inicio formulario-----------------------------------------------------------------------------------------/////
router.get("/formulario",controlePaginas.formulario);
router.post("/formulario", validations ,controlePaginas.validaFormulario);
// fim  formulario------------------------------------------------------------------------------------------/////

module.exports = router;
