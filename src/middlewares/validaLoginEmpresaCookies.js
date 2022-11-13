const  todosUsuarios = require("../models/usuariosModelsEmpresas");

function validaLoginEmpresaCookies (req,res,next) {

  let emailCookie2 = req.cookies.emailEmpresa;
  let emailCookiePesquisa2 = todosUsuarios.procuraNoBody("email",emailCookie2);

  if(emailCookiePesquisa2) {
    req.session.userLogged2 = emailCookiePesquisa2;
  }
  next();
}

module.exports = validaLoginEmpresaCookies ;