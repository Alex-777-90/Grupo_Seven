const  todosProdutos = require("../models/produto");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controleProdutos = {

  // farmacia inicio -------------------------------------------------------------------------------------////////
  detalhesFarmacia:(req,res) =>{
    
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models
    
    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.sector == "farmacia" && produtoDetalhe.item == item
    
    })

    return res.render("area_compras_farmacia" ,{produtoDetalhe} );
  },
// farmacia fim -----------------------------------------------------------------------------------------////////


// variedades inicio -----------------------------------------------------------------------------------////////
  detalhesVariedades:(req,res) =>{
    
    const allProducts = todosProdutos.findAll()

    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe){

      return produtoDetalhe.sector == "variedades" && produtoDetalhe.item == item

    })

    return res.render("area_compras_variedades");
  },
 //variedades fim -------------------------------------------------------------------------------------////////

  // pet inicio ------------------------------------------------------------------------------------------////////
  detalhesPet:(req,res) =>{
    
    const allProducts = todosProdutos.findAll()
    let item = req.params.item;

    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.sector == "pet" && produtoDetalhe.item == item
    
    })

    return res.render("area_compras_pet" ,{produtoDetalhe} );
  },
// pet fim -------------------------------------------------------------------------------------------////////

formulario:(req,res) =>{
  
  return res.render("produtoCriar");
},
}

module.exports = controleProdutos;
