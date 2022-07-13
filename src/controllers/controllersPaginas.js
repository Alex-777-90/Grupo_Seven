const fs = require('fs');
const path = require('path');

//const farmacia inicio -------------------------------------------------------------------------------------////////
const productsFarmaciaPath = path.join(__dirname, '../database/farmaciaDataBase.json');
const productsFarmacia = JSON.parse(fs.readFileSync(productsFarmaciaPath, 'utf-8'));

const productsFarmaciaPath2 = path.join(__dirname, '../database/farmaciaDataBase2.json');
const productsFarmacia2 = JSON.parse(fs.readFileSync(productsFarmaciaPath2, 'utf-8'));

//const farmacia fim -------------------------------------------------------------------------------------////////

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


const controlePaginas = {
 
  farmacia:(req,res) =>{
    return res.render("farmacia",{productsFarmacia , productsFarmacia2, toThousand});
  },

  pet:(req,res) =>{
     return res.render("pet");
  },

  variedades:(req,res) =>{
    return res.render("variedades");
  },

  home:(req,res) =>{
    return res.render("home");
  },

  formulario:(req,res) =>{
    return res.render("formulario");
  },

  dadosForm:(req,res)=>{
    console.log(req.body);
  }

};

module.exports = controlePaginas;
