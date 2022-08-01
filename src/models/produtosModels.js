const fs = require('fs');
const path = require('path');
const caminhoJSON = path.join(__dirname,("../database/allProdutos.json"));

const todosProdutosJSON = {
  encontrarProduto(){
return JSON.parse(fs.readFileSync(caminhoJSON,"utf-8"));
  },
  editarProduto(){
    return JSON.stringify(fs.writeFileSync(caminhoJSON, null, " " ));
  },  






}

module.exports = todosProdutosJSON;