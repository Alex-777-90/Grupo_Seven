var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const controleUsuariosEmpresas = require("../controllers/controllersUsuariosEmpresas");
const validations = require("../middlewares/validaFormulario");
const validationsEmpresa = require("../middlewares/validaFormularioEmpresa");


router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("",controlePaginas.home);
router.get("/variedades",controlePaginas.variedades);
router.get("/login",controlePaginas.login);


// inicio formulario-----------------------------------------------------------------------------------------/////

router.get("/formulario",controleUsuarios.formulario);
router.post("/formulario" ,validations,controleUsuarios.armazenar);

router.get("/formularioEdit/:cpf" ,controleUsuarios.formularioEdit);
router.put("/formularioEdit/:cpf" ,controleUsuarios.formularioUpdate);
router.delete("/formularioEdit/:cpf" ,controleUsuarios.formularioDelete);
//-------------------------------------------------------------------------------------------------------------/////

router.get("/formularioEmpresas",controleUsuariosEmpresas.formularioEmpresa);
router.post("/formularioEmpresas",validationsEmpresa,controleUsuariosEmpresas.armazenarEmpresa);

router.get("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioEditEmpresas);
router.put("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioUpdateEmpresas);
router.delete("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioDeleteEmpresas);


// fim  formulario------------------------------------------------------------------------------------------/////

module.exports = router;
