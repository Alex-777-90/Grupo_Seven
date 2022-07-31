var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const controleUsuariosEmpresas = require("../controllers/controllersUsuariosEmpresas");
const validations = require("../middlewares/validaFormulario");
const validationsEmpresa = require("../middlewares/validaFormularioEmpresa");
var  controleProdutos = require("../controllers/controllersProdutos");
const validaLoginCliente = require("../middlewares/validaLoginCliente");

router.get("/login",validaLoginCliente,controlePaginas.login);
router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("/variedades",controlePaginas.variedades);
router.get("/",controlePaginas.home);


//router.post("/loginEmpresa",controlePaginas.loginValidation);



// inicio formulario-----------------------------------------------------------------------------------------/////
router.get("/formularioEmpresas",controleUsuariosEmpresas.formularioEmpresa);
router.post("/formularioEmpresas",validationsEmpresa,controleUsuariosEmpresas.armazenarEmpresa);

router.get("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioEditEmpresas);
router.put("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioUpdateEmpresas);
router.delete("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioDeleteEmpresas);

// fim  formulario------------------------------------------------------------------------------------------/////

//formulario de criaçao de produtos
router.get("/criarProduto",controleProdutos.formulario);
// router.post("/criarProduto",controleProdutos);

module.exports = router;

