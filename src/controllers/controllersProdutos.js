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

    return res.render("area_compras" ,{produtoDetalhe} );
  },
// farmacia fim -----------------------------------------------------------------------------------------////////


// variedades inicio -----------------------------------------------------------------------------------////////
  detalhesVariedades:(req,res) =>{
    
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models
    
    let item = req.params.item
    let produtoDetalhe2 = allProducts.find(function(produtoDetalhe2)  {
      
      return produtoDetalhe2.sector == "variedades" && produtoDetalhe2.item == item
    
    })

    return res.render("area_compras2" ,{produtoDetalhe2} );
  },
 //variedades fim -------------------------------------------------------------------------------------////////

  // pet inicio ------------------------------------------------------------------------------------------////////
  detalhesPet:(req,res) =>{
    
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models
    
    let item = req.params.item
    let produtoDetalhe3 = allProducts.find(function(produtoDetalhe3)  {
      
      return produtoDetalhe3.sector == "pet" && produtoDetalhe3.item == item
    
    })

    return res.render("area_compras3" ,{produtoDetalhe3} );
  },
// pet fim -------------------------------------------------------------------------------------------////////

}

module.exports = controleProdutos;