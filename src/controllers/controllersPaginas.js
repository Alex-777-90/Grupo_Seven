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
// farmacia fim ----------------------------------------------------------------------------------------////////


<<<<<<< HEAD
// variedades inicio -----------------------------------------------------------------------------------////////

=======
// pet inicio -------------------------------------------------------------------------------------////////
  pet:(req,res) =>{
    let productsPet = allProducts.filter(function(value){

      return value.sector == "pet" && value.item <= 3 
         
    });
  
  
    let productsPet2 = allProducts.filter(function(value){
  
      return value.sector == "pet" && value.item >= 4
  
    });
  
    return res.render("pet",{productsPet , productsPet2, toThousand});
 },
 // pet fim -----------------------------------------------------------------------------------------////////


  // variedades inicio -----------------------------------------------------------------------------------------////////
>>>>>>> b25c213fcf4e99b704bf24a1f8230c43fbff885a
 variedades:(req,res) =>{

  let productsVariedades = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item <= 3
  })

  let productsVariedades2 = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item >= 4
  })

   return res.render("variedades", {productsVariedades, productsVariedades2, toThousand});
 },
  // variedades fim -----------------------------------------------------------------------------------------////////


// variedades fim --------------------------------------------------------------------------------------////////

 home:(req,res) =>{

   return res.render("home");
 },



// formulario inicio -----------------------------------------------------------------------------------------////////
 formulario:(req,res) =>{
  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  return res.render("formulario");
},

validaFormulario:(req,res)=>{

  const {errors} = validationResult(req);

    if (errors.length) {
			const formattedErrors = {}
			errors.forEach(error => {
				formattedErrors[error.param] = error.msg;
			});

   // if(!errors.isEmpty()){ // se errors for diferente de vazio 
      //console.log(errors.mapped());
      return res.render("formulario", {errors:formattedErrors ,old:req.body});
     }

  //console.log(req.body);
}
// formulario fim -----------------------------------------------------------------------------------------////////

};

module.exports = controlePaginas;



