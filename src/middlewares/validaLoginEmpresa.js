function validaLoginEmpresa (req,res,next) {
  if(req.session.userLogged2){ // verifica se existe a propriedade userLogged2 na session
    return res.redirect("/empresas/PaginaEmpresa")
  }
  next()

}

module.exports = validaLoginEmpresa;