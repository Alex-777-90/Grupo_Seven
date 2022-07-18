const fs = require('fs');
const path = require('path');


const allProdutosPath = path.join(__dirname, '../database/allProdutos.json'); //pega os dados do JSON
const allProducts = JSON.parse(fs.readFileSync(allProdutosPath, 'utf-8')); // transforma o JSON e uma array 

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controlePaginas = {
 
 // farmacia inicio -------------------------------------------------------------------------------------////////
 farmacia:(req,res) =>{

  let productsFarmacia = allProducts.filter(function(value){

    return value.sector == "farmacia" && value.item <= 3
       
  });


  let productsFarmacia2 = allProducts.filter(function(value){

    return value.sector == "farmacia" && value.item >= 4

  });


  return res.render("farmacia",{productsFarmacia , productsFarmacia2, toThousand});
},
// farmacia fim ----------------------------------------------------------------------------------------////////

  pet:(req,res) =>{
    return res.render("pet");
 },

// variedades inicio -----------------------------------------------------------------------------------////////

 variedades:(req,res) =>{

  let productsVariedades = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item <= 3
  })

  let productsVariedades2 = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item >= 4
  })

   return res.render("variedades", {productsVariedades, productsVariedades2, toThousand});
 },

// variedades fim --------------------------------------------------------------------------------------////////

 home:(req,res) =>{

   return res.render("home");
 },

 formulario:(req,res) =>{

   return res.render("formulario");
 }

};

module.exports = controlePaginas;

