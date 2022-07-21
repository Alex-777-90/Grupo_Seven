const fs = require('fs');
const path = require('path');

const  todosProdutos = require("../models/produto");
const {validationResult} = require("express-validator");

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
// farmacia fim -----------------------------------------------------------------------------------------////////

  pet:(req,res) =>{
    let productsPet = allProducts.filter(function(value){

      return value.sector == "pet" && value.item <= 3 
         
    });
  
  
    let productsPet2 = allProducts.filter(function(value){
  
      return value.sector == "pet" && value.item >= 4
  
    });
  
    return res.render("pet",{productsPet , productsPet2, toThousand});
 },

 variedades:(req,res) =>{

   return res.render("variedades");
 },

 home:(req,res) =>{

   return res.render("home");
 },

 formulario:(req,res) =>{
  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  return res.render("formulario");
},

validaFormulario:(req,res)=>{
  const errors = validationResult(req);

  if(!errors.isEmpty()){ // se errors for diferente de vazio 
    //console.log(errors.mapped());
    return res.render("formulario", {errors:errors.mapped() ,old:req.body});
   }

  //console.log(req.body);
}

};

module.exports = controlePaginas;



