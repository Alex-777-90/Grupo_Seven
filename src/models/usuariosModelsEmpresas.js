const fs = require('fs');
const path = require('path');

const usuariosPath = path.join(__dirname, '../database/usuariosEmpresas.json'); //pega os dados do JSON usuarios

const allUsers = {
  
  findAllUsers(){
    return JSON.parse(fs.readFileSync(usuariosPath, "utf-8")); // transforma o JSON e uma array e só lê eles

  },

  datesUsers(){
    return JSON.parse(fs.appendFileSync(usuariosPath, "utf-8")); // transforma o JSON e uma array e cria um novo dado na array usuarios
  },

  armazena(dates){
    
  let usuarios = allUsers.findAllUsers()
   const users  = {
    ...dates,
    id: usuarios.length + 1
   }

   usuarios.push(users)
   fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, ' '));
   return usuarios;

  },

  atualiza(receivedCNPJ,receivedCNPJEdit) {
    
  },

  delete(receivedCNPJ){

   
  }
 
 
}
module.exports = allUsers;