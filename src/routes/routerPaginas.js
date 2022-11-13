var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const controleUsuariosEmpresas = require("../controllers/controllersUsuariosEmpresas");
const validations = require("../middlewares/validaFormulario");
const validationsEmpresa = require("../middlewares/validaFormularioEmpresa");
var  controleProdutos = require("../controllers/controllersProdutos");
const validaLoginCliente = require("../middlewares/validaLoginCliente");
const validaLoginEmpresa = require("../middlewares/validaLoginEmpresa");

router.get("/login",validaLoginCliente,validaLoginEmpresa,controlePaginas.login);
router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("/variedades",controlePaginas.variedades);
router.get("/",controlePaginas.home);


module.exports = router;
