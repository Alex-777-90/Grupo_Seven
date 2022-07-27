const  todosUsuarios = require("../models/usuariosModels");
const {validationResult} = require("express-validator");


const controleUsuarios = {

  formulario:(req,res) =>{

    return res.render("formulario");
  },

  armazenar:(req,res) => {

    const {errors} = validationResult(req);

    if (errors.length) {
			const formattedErrors = {}
			errors.forEach(error => {
				formattedErrors[error.param] = error.msg;
			});

   // if(!errors.isEmpty()){ // se errors for diferente de vazio 
      //console.log(errors.mapped());
      return res.render("formulario", {errors:formattedErrors ,old:req.body});
     }
    
    const {username,email,cpf,telefone,password,passwordConfirmation} = req.body;

     todosUsuarios.armazena({username,email,cpf,telefone,password,passwordConfirmation})
   
    res.redirect("/")
  },


  formularioEdit:(req,res) =>{
    let usuarios = todosUsuarios.findAllUsers()
    let {cpf} = req.params
    let cpfEdit = usuarios.find(usuario => usuario.cpf == cpf)
    return res.render("formularioEdit", {cpfEdit});
  },

  formularioUpdate:(req,res) =>{
    
    let {cpf} = req.params; // pega o dado da url 

    todosUsuarios.atualiza(cpf,req.body);

    res.redirect("/");
  
  },
  
  formularioDelete:(req,res) =>{

    let {cpf} = req.params; // pega o dado da url 
    
    todosUsuarios.delete(cpf);

    res.redirect("/");
  }
  
}
module.exports = controleUsuarios;

