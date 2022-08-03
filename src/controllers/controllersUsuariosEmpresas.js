const  todosUsuarios = require("../models/usuariosModelsEmpresas");
const {validationResult} = require("express-validator");


const controleUsuariosEmpresas = {

  formularioEmpresa:(req,res) =>{

    return res.render("formularioEmpresas");
  },

  armazenarEmpresa:(req,res) => {

    const {errors} = validationResult(req);
 
    if (errors.length) {
			const formattedErrors = {}
			errors.forEach(error => {
				formattedErrors[error.param] = error.msg;
			});

   // if(!errors.isEmpty()){ // se errors for diferente de vazio 
      //console.log(errors.mapped());
      return res.render("formularioEmpresas", {errors:formattedErrors ,old:req.body});
     }
    
    const {username,email,CNPJ,telefone,password,passwordConfirmation} = req.body;

    todosUsuarios.armazena({username,email,CNPJ,telefone,password,passwordConfirmation})
   
    res.redirect("/")
  },
 
  formularioEditEmpresas:(req,res) =>{
   
  },

  formularioUpdateEmpresas:(req,res) =>{
    
  

  },
  
  formularioDeleteEmpresas:(req,res) =>{
   

  }
  
}
module.exports = controleUsuariosEmpresas;