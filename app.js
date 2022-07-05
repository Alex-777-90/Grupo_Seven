//entry point ---------------------------------------------------------------------//
const express = require("express");
const app = express();


app.set("view engine",ejs); // informa ao servidor que será utilizado o ejs.








app.listen(3080,()=>{
console.log("Servidor rodando na porta 3080 ,no endereço http://localhost:3080/ ")
})

module.exports = app
//entry point ---------------------------------------------------------------------//

