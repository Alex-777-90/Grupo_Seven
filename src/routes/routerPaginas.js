var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const validations = require("../middlewares/validaFormulario");



router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("",controlePaginas.home);
router.get("/variedades",controlePaginas.variedades);


// inicio formulario-----------------------------------------------------------------------------------------/////
router.get("/formulario",controleUsuarios.formulario);
router.post("/formulario" ,validations,controleUsuarios.armazenar);
// fim  formulario------------------------------------------------------------------------------------------/////

module.exports = router;
