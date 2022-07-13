const fs = require('fs');
const path = require('path');

//const farmacia inicio -------------------------------------------------------------------------------------////////
const productsFarmaciaPath = path.join(__dirname, '../database/farmaciaDataBase.json');
const productsFarmacia = JSON.parse(fs.readFileSync(productsFarmaciaPath, 'utf-8'));

const productsFarmaciaPath2 = path.join(__dirname, '../database/farmaciaDataBase2.json');
const productsFarmacia2 = JSON.parse(fs.readFileSync(productsFarmaciaPath2, 'utf-8'));

//const farmacia fim -------------------------------------------------------------------------------------////////


//const pet inicio -------------------------------------------------------------------------------------////////
const productsPetPath = path.join(__dirname, '../database/petDataBase.json');
const productsPet = JSON.parse(fs.readFileSync(productsPetPath, 'utf-8'));

const productsPetPath2 = path.join(__dirname, '../database/petDataBase2.json');
const productsPet2 = JSON.parse(fs.readFileSync(productsPetPath2, 'utf-8'));

//const pet fim -------------------------------------------------------------------------------------////////


//const variedades inicio -------------------------------------------------------------------------------------////////
const productsVariedadesPath = path.join(__dirname, '../database/variedadesDataBase.json');
const productsVariedades = JSON.parse(fs.readFileSync(productsVariedadesPath, 'utf-8'));

const productsVariedadesPath2 = path.join(__dirname, '../database/variedadesDataBase2.json');
const productsVariedades2 = JSON.parse(fs.readFileSync(productsVariedadesPath2, 'utf-8'));

//const variedades fim -------------------------------------------------------------------------------------////////

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


const controlePaginas = {
 
  farmacia:(req,res) =>{
    return res.render("farmacia",{productsFarmacia , productsFarmacia2, toThousand});
  },

  pet:(req,res) =>{
     return res.render("pet",{ productsPet,productsPet2,toThousand });
  },

  variedades:(req,res) =>{
    return res.render("variedades", {productsVariedades, productsVariedades2 ,toThousand });
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
