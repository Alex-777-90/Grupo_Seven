var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const validations = require("../middlewares/validaFormulario");


router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("/variedades",controlePaginas.variedades);
router.get("",controlePaginas.home);
router.get("/login",controlePaginas.login);


// inicio formulario-----------------------------------------------------------------------------------------/////
router.get("/formularioEmpresas",controleUsuarios.formularioEmpresa);
router.post("/formularioEmpresas",validations,controleUsuarios.armazenarEmpresa);

router.get("/formulario",controleUsuarios.formulario);
router.post("/formulario", validations ,controleUsuarios.armazenar);
// fim  formulario------------------------------------------------------------------------------------------/////

module.exports = router;
