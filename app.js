//entry point ---------------------------------------------------------------------//
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require("express");
const app = express();
const methodOverride = require("method-override");// const pra habilitar os metodos put e delete
const session = require("express-session");


// rotas variaveis  do projeto PI-------------------------------------------------------------------------------------------///
const RotaPaginas = require("./src/routes/routerPaginas");
const RotaProdutos = require("./src/routes/routerProdutos");


// rotas variaveis  do projeto PI-------------------------------------------------------------------------------------------///


// view engine setup
app.set('views', path.join(__dirname, './src/views/body'));
app.set("view engine","ejs"); // informa ao servidor que será utilizado o ejs.


app.use(session({
  secret:"seguranca dos dados  grupo seven",
  resave:true,
  saveUninitialized:true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));// app.use pra habilitar os metodos put e delete

// rotas do projeto PI-------------------------------------------------------------------------------------------///
app.use("/",RotaPaginas);
app.use("/produtos",RotaProdutos);


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
//console.log("Servidor rodando na porta 3090 ,no endereço http://localhost:3090/ ")
//})

module.exports = app
//entry point ---------------------------------------------------------------------//

