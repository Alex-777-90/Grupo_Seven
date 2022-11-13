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

  procuraCPF(receivedCNPJ){
   
    let procuraUsuario = allUsers.findAllUsers();
    let procuraCNPJ = procuraUsuario.find(item => item.CNPJ == receivedCNPJ); // pega o CNPJ e compara com o passado no parametro
    return procuraCNPJ

  },

  procuraNoBody (campo,valor){
    let procuraUsuario = allUsers.findAllUsers();
    let procuraCampo = procuraUsuario.find(item => item[campo] == valor); // compara o que recebi no campo com o que esta na array
    return procuraCampo

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
     let CNPJEdit = this.findAllUsers(); // pega a array toda
     let CNPJEditBeingUpdated = CNPJEdit.find(item => item.CNPJ == receivedCNPJ); // pega o cpf e compara com o passado no parametro
    
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////
    CNPJEditBeingUpdated.username = receivedCNPJEdit.username;
    CNPJEditBeingUpdated.email    = receivedCNPJEdit.email;
    CNPJEditBeingUpdated.CNPJ      = receivedCNPJEdit.CNPJ;
    CNPJEditBeingUpdated.telefone = receivedCNPJEdit.telefone
    CNPJEditBeingUpdated.password = receivedCNPJEdit.password
    CNPJEditBeingUpdated.passwordConfirmation = receivedCNPJEdit.passwordConfirmation
   
    // pego os dados que estão no body , com os novos dados digitados pelo usuario ------////


    fs.writeFileSync(usuariosPath, JSON.stringify(CNPJEdit, null, ' ')); // salva os dados na array 
   
  },

  delete(receivedCNPJ){
    let CNPJEdit = this.findAllUsers(); // pega a array toda
    let reduceUsers = CNPJEdit.filter(item => item.CNPJ != receivedCNPJ);

    fs.writeFileSync(usuariosPath, JSON.stringify(reduceUsers, null, ' ')); // salva os dados na array 
  }
 
 
}
module.exports = allUsers;