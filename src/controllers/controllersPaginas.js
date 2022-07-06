
const controlePaginas = {
 
  farmacia:(req,res) =>{
    return res.render("farmacia");
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
 }


};

module.exports = controlePaginas;
