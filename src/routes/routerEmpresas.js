var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const controleUsuariosEmpresas = require("../controllers/controllersUsuariosEmpresas");
const validations = require("../middlewares/validaFormulario");
const validationsEmpresa = require("../middlewares/validaFormularioEmpresa");
var  controleProdutos = require("../controllers/controllersProdutos");
const validaLoginCliente = require("../middlewares/validaLoginCliente");


router.get("/PaginaEmpresa",controleUsuariosEmpresas.PaginaEmpresas);
router.post("/loginEmpresa",controleUsuariosEmpresas.loginValidationEmpresas);
router.get("/logoutEmpresa",controleUsuariosEmpresas.logoutEmpresas);



// inicio formulario-----------------------------------------------------------------------------------------/////
router.get("/formularioEmpresas",controleUsuariosEmpresas.formularioEmpresa);
router.post("/formularioEmpresas",validationsEmpresa,controleUsuariosEmpresas.armazenarEmpresa);

router.get("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioEditEmpresas);
router.put("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioUpdateEmpresas);
router.delete("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioDeleteEmpresas);

// fim  formulario------------------------------------------------------------------------------------------/////



module.exports = router;