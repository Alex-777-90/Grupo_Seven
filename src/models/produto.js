const fs = require('fs');
const path = require('path');

const allProdutosPath = path.join(__dirname, '../database/allProdutos.json'); //pega os dados do JSON

const allProducts = {

  findAll(){
    return JSON.parse(fs.readFileSync(allProdutosPath, "utf-8")); // transforma o JSON e uma array
  }
}
module.exports = allProducts;