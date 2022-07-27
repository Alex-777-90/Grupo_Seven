const fs = require('fs');
const path = require('path');

const usuariosPath = path.join(__dirname, '../database/usuarios.json'); //pega os dados do JSON usuarios

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

  atualiza(receivedcpf,receivedcpfEdit) {
     let cpfEdit = this.findAllUsers(); // pega a array toda
     let cpfEditBeingUpdated = cpfEdit.find(item => item.cpf == receivedcpf); // pega o cpf e compara com o passado no parametro
    
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////
    cpfEditBeingUpdated.username = receivedcpfEdit.username;
    cpfEditBeingUpdated.email    = receivedcpfEdit.email;
    cpfEditBeingUpdated.cpf      = receivedcpfEdit.cpf;
    cpfEditBeingUpdated.telefone = receivedcpfEdit.telefone
    cpfEditBeingUpdated.password = receivedcpfEdit.password
    cpfEditBeingUpdated.passwordConfirmation = receivedcpfEdit.passwordConfirmation
   
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////


    fs.writeFileSync(usuariosPath, JSON.stringify(cpfEdit, null, ' ')); // salva os dados na array 
   
  },

  delete(receivedcpf){
    let cpfEdit = this.findAllUsers(); // pega a array toda
    let reduceUsers = cpfEdit.filter(item => item.cpf != receivedcpf);

    fs.writeFileSync(usuariosPath, JSON.stringify(reduceUsers, null, ' ')); // salva os dados na array 
  }
 
 
}
module.exports = allUsers;