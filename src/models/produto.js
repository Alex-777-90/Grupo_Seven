const fs = require('fs');
const path = require('path');

const allProdutosPath = path.join(__dirname, '../database/allProdutos.json'); //pega os dados do JSON

const allProducts = {

  findAll(){
    return JSON.parse(fs.readFileSync(allProdutosPath, "utf-8")); // transforma o JSON e uma array
  },
  
  findOne (id) {
    return this.findAll().find(item => item.id == id);
  },


  save (produtos) {
    fs.writeFileSync( allProdutosPath, JSON.stringify(produtos));
  },

  update (receivedId, receivedProduto) {
    const produtos = this.findAll();
    const productBeingUpdated = produtos.find(item => item.id == receivedId);

		productBeingUpdated.description = receivedProduto.description;
		productBeingUpdated.price = receivedProduto.price;
    this.save(produtos);
  },

}
module.exports = allProducts;



  