//entry point ---------------------------------------------------------------------//
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const express = require("express");
const app = express();


// rotas variaveis  do projeto PI-------------------------------------------------------------------------------------------///
const RotaPaginas = require("./src/routes/routerPaginas");


// rotas variaveis  do projeto PI-------------------------------------------------------------------------------------------///


// view engine setup
app.set('views', path.join(__dirname, './src/views/body'));
app.set("view engine","ejs"); // informa ao servidor que será utilizado o ejs.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// rotas do projeto PI-------------------------------------------------------------------------------------------///
app.use("/home",RotaPaginas);



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