const  todosUsuarios = require("../models/usuariosModels");
const {validationResult} = require("express-validator");
const allUsers = require("../models/usuariosModels")


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

  atualiza:(req,res) =>{

    
  }


}
module.exports = controleUsuarios;

