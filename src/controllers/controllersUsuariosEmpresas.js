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

  }
  
}
module.exports = controleUsuariosEmpresas;