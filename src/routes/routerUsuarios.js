var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const controleUsuariosEmpresas = require("../controllers/controllersUsuariosEmpresas");
const validations = require("../middlewares/validaFormulario");
const validationsEmpresa = require("../middlewares/validaFormularioEmpresa");
var  controleProdutos = require("../controllers/controllersProdutos");
const validaLoginCliente = require("../middlewares/validaLoginCliente");



router.get("/PaginaCliente",controleUsuarios.PaginaCliente);

router.get("/login",validaLoginCliente,controlePaginas.login);
router.post("/login",controleUsuarios.loginValidation);
router.get("/logout",controleUsuarios.logout);


router.get("/formulario",controleUsuarios.formulario);
router.post("/formulario", validations ,controleUsuarios.armazenar);

router.get("/formularioEdit/:cpf2" ,controleUsuarios.formularioEdit);
router.put("/formularioEdit/:cpf2" ,controleUsuarios.formularioUpdate);
router.delete("/formularioEdit/:cpf2" ,controleUsuarios.formularioDelete);