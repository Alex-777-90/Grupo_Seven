const  todosUsuarios = require("../models/usuariosModels");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");



const controleUsuarios = {

  formulario:(req,res) =>{
    //res.cookie("teste","olá gente",{maxAge:20000});
    return res.render("formulario");
  },


  armazenar:(req,res) => {

    const {errors} = validationResult(req);
    const {username2,email2,cpf2,telefone2,password2,passwordConfirmation2} = req.body;

    if (errors.length) {
			const formattedErrors = {}
			errors.forEach(error => {
				formattedErrors[error.param] = error.msg;
			});

   // if(!errors.isEmpty()){ // se errors for diferente de vazio 
      //console.log(errors.mapped());
      return res.render("formulario", {errors:formattedErrors ,old:req.body});
      
     }
     
     let emailExiste = todosUsuarios.procuraNoBody("email2",req.body.email2);
     let cpfExiste = todosUsuarios.procuraNoBody("cpf2",req.body.cpf2)

     if (emailExiste) {
      return res.render("formulario", {
        errors:{
           email2:"Este email já está resgistrado no sistema"
        },
        old:req.body
      });

     }

     if (cpfExiste) {
      return res.render("formulario", {
        errors:{
           cpf2:"Este CPF já está resgistrado no sistema"
        },
        old:req.body
      });

     }


     
     let senhaCripto = {
       ...req.body,
       password2: bcrypt.hashSync(req.body.password2,10)
     }

     let adicionaComCripto = todosUsuarios.armazena(senhaCripto);
   
    res.redirect("/login")
  },

  formularioEdit:(req,res) =>{
    let usuarios = todosUsuarios.findAllUsers()
    let {cpf2} = req.params
    let cpfEdit = usuarios.find(usuario => usuario.cpf2 == cpf2)
    return res.render("formularioEdit", {cpfEdit});
  },

  formularioUpdate:(req,res) =>{
    
    let {cpf2} = req.params; // pega o dado da url 

    todosUsuarios.atualiza(cpf2,req.body);

    res.redirect("/");
  
  },
  
  formularioDelete:(req,res) =>{

    let {cpf2} = req.params; // pega o dado da url 
    
    todosUsuarios.delete(cpf2);

    res.redirect("/");
  },


  loginValidation:(req,res) =>{
    let usuarioLogin = todosUsuarios.procuraNoBody("email2",req.body.email2);
   // console.log(req.session);
  
    if(usuarioLogin){
  
      let senhaVerifica = bcrypt.compareSync(req.body.password2,usuarioLogin.password2);

     if(senhaVerifica){
      delete usuarioLogin.password2
      delete usuarioLogin.passwordConfirmation2
      req.session.userLogged = usuarioLogin
     // console.log(req.session);

     if(req.body.lembrar_usuario2){
       res.cookie("emailUsuario",req.body.email2,{maxAge:(1000 * 60) * 20})
     }

       return res.redirect("/usuarios/PaginaCliente");
     }
     return res.render("landingPageLogin",{errors:{ email2:"email ou senha não encontrados "}})
  
    }
  
  },

  PaginaCliente:(req,res) =>{
   
    return res.render("viewCliente",{userLogged:req.session.userLogged });
  
  },

  logout:(req,res) => {
    res.clearCookie("emailUsuario");
    req.session.destroy();
    res.redirect("/");
  }
  
}
module.exports = controleUsuarios;

