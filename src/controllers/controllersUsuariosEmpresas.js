const  todosUsuarios = require("../models/usuariosModelsEmpresas");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");


const controleUsuariosEmpresas = {

  formularioEmpresa:(req,res) =>{

    return res.render("formularioEmpresas");
  },

  armazenarEmpresa:(req,res) => {

    const {errors} = validationResult(req);
    const {username,email,CNPJ,telefone,password,passwordConfirmation} = req.body;
 
    if (errors.length) {
			const formattedErrors = {}
			errors.forEach(error => {
				formattedErrors[error.param] = error.msg;
			});

   // if(!errors.isEmpty()){ // se errors for diferente de vazio 
      //console.log(errors.mapped());
      return res.render("formularioEmpresas", {errors:formattedErrors ,old:req.body});
     }

     let emailExiste = todosUsuarios.procuraNoBody("email",req.body.email);
     let CNPJExiste = todosUsuarios.procuraNoBody("CNPJ",req.body.CNPJ)

     if (emailExiste) {
      return res.render("formularioEmpresas", {
        errors:{
           email:"Este email já está resgistrado no sistema"
        },
        old:req.body
      });

     }
     

     if (CNPJExiste) {
      return res.render("formularioEmpresas", {
        errors:{
          CNPJ:"Este CNPJ já está resgistrado no sistema"
        },
        old:req.body
      });

     }
      
     let senhaCripto = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password,10)
    }

    let adicionaComCripto = todosUsuarios.armazena(senhaCripto);
  
   res.redirect("/login")
 },
     

  formularioEditEmpresas:(req,res) =>{
    let usuarios = todosUsuarios.findAllUsers()
    let {CNPJ} = req.params
    let CNPJEdit = usuarios.find(usuario => usuario.CNPJ == CNPJ)
    return res.render("formularioEmpresasEdit", {CNPJEdit});

  },

  formularioUpdateEmpresas:(req,res) =>{
    let {CNPJ} = req.params; // pega o dado da url 

    todosUsuarios.atualiza(CNPJ,req.body);

    res.redirect("/");
  

  },
  
  formularioDeleteEmpresas:(req,res) =>{
    let {CNPJ} = req.params; // pega o dado da url 
    
    todosUsuarios.delete(CNPJ);

    res.redirect("/");

  },
  
  loginValidationEmpresas:(req,res) =>{
    let usuarioLogin = todosUsuarios.procuraNoBody("email",req.body.email);
   // console.log(req.session);
  
    if(usuarioLogin){
  
      let senhaVerifica = bcrypt.compareSync(req.body.password,usuarioLogin.password);

     if(senhaVerifica){
      delete usuarioLogin.password
      delete usuarioLogin.passwordConfirmation
      req.session.userLogged2 = usuarioLogin
     // console.log(req.session);

     if(req.body.lembrar_usuario2){
       res.cookie("emailEmpresa",req.body.email,{maxAge:(1000 * 60) * 20})
     }

       return res.redirect("/empresas/PaginaEmpresa");
     }
     return res.render("landingPageLogin",{errors:{ email:"email ou senha não encontrados "}})
  
    }
  
  },

  PaginaEmpresas:(req,res) =>{
   
    return res.render("viewEmpresas",{userLogged2:req.session.userLogged2 });
  
  },

  logoutEmpresas:(req,res) => {
    res.clearCookie("emailEmpresa");
    req.session.destroy();
    res.redirect("/");
  }


  
}
module.exports = controleUsuariosEmpresas;