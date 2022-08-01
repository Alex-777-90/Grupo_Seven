//entry point ---------------------------------------------------------------------//
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require("express");
const app = express();
const methodOverride = require("method-override");// const pra habilitar os metodos put e delete
const session = require("express-session");
//const validaLoginClienteCookies = require("./src/middlewares/validaLoginClienteCookies");


// rotas variaveis  do projeto PI-------------------------------------------------------------------------------------------///
const RotaPaginas = require("./src/routes/routerPaginas");
const RotaProdutos = require("./src/routes/routerProdutos");
const RotaUsuarios = require("./src/routes/routerUsuarios");

// rotas variaveis  do projeto PI-------------------------------------------------------------------------------------------///

// view engine setup
app.set('views', path.join(__dirname, './src/views/body'));
app.set("view engine","ejs"); // informa ao servidor que será utilizado o ejs.

app.use(session({
  secret:"seguranca dos dados  grupo seven",
  resave:false,
  saveUninitialized:false
}))

app.use(logger('dev'));
app.use(express.json());// ajuda a processar o dados vindo de form pelo method post e tranformar o arguivo em json 
app.use(express.urlencoded({ extended: false })); // ajuda a processar o dados vindo de form pelo method post
app.use(cookieParser());
//app.use(validaLoginClienteCookies);
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));// app.use pra habilitar os metodos put e delete


// rotas do projeto PI-------------------------------------------------------------------------------------------///
app.use("/",RotaPaginas);
app.use("/produtos",RotaProdutos);
app.use("/usuarios",RotaUsuarios);


// rotas do projeto PI-------------------------------------------------------------------------------------------///


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//app.listen(3080,()=>{
//console.log("Servidor rodando na porta 3080 ,no endereço http://localhost:3080/ ")
//})

module.exports = app
//entry point ---------------------------------------------------------------------//


