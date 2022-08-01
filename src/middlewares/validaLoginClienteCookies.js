const  todosUsuarios = require("../models/usuariosModels");

function validaLoginClienteCookies (req,res,next) {

  let emailCookie = req.cookies.emailUsuario;
  let emailCookiePesquisa = todosUsuarios.procuraNoBody("email2",emailCookie);

  if(emailCookiePesquisa) {
    req.session.userLogged = emailCookiePesquisa;
  }
  next();
}

module.exports = validaLoginClienteCookies ;