const  todosProdutos = require("../models/produto");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controlePaginas = {
 
 // farmacia inicio -------------------------------------------------------------------------------------////////
 farmacia:(req,res) =>{

  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  let productsFarmacia = allProducts.filter(function(value){

    return value.sector == "farmacia" && value.item <= 3
       
  });


  let productsFarmacia2 = allProducts.filter(function(value){

    return value.sector == "farmacia" && value.item >= 4

  });


  return res.render("farmacia",{productsFarmacia , productsFarmacia2, toThousand});
},
// farmacia fim ----------------------------------------------------------------------------------------////////


// pet inicio -------------------------------------------------------------------------------------////////
  pet:(req,res) =>{
   
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

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
 variedades:(req,res) =>{

  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  let productsVariedades = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item <= 3
  })

  let productsVariedades2 = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item >= 4
  })

   return res.render("variedades", {productsVariedades, productsVariedades2, toThousand});
 },
  // variedades fim -----------------------------------------------------------------------------------------////////


 home:(req,res) =>{

   return res.render("home");
 },

 login:(req,res) => {

  return res.render("landingPageLogin");
 }


};

module.exports = controlePaginas;



