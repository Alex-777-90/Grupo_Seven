function validaLoginCliente (req,res,next) {
  if(req.session.userLogged){ // verifica se existe a propriedade userLogged na session
    return res.redirect("/PaginaCliente")
  }
  next()

}

module.exports = validaLoginCliente;