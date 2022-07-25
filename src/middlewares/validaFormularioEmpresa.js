const {body} = require("express-validator");// pega o body para conseguir fazer a validação com express-validator 

const validationsEmpresa = [

  body("username")
  .notEmpty().withMessage("O nome deve ser preenchido")
  .isString().withMessage("Só é permitido letras"),
  
  
  body("email")
  .notEmpty().withMessage("O e-mail deve ser preenchido")
  .isEmail().withMessage("O e-mail deve ser preenchido"),
  
  

  body("CNPJ")
  .notEmpty().withMessage("O CNPJ deve ser preenchido")
  .isNumeric().withMessage("Só é permitido números")
  .isLength({min:14,max:14}).withMessage("O CNPJ deve conter 14 números"),
  
  
  body("telefone")
  .notEmpty().withMessage("O telefone deve ser preenchido")
  .isMobilePhone().withMessage("O telefone deve ser preenchido"),
  
  body("password")
  .notEmpty().withMessage("A senha deve ser preenchido")
  .isLength({min:6,max:15}).withMessage("Senha entre 6 caracteres e  15 caracteres"),
  
  body("passwordConfirmation")
  .notEmpty().withMessage("A senha deve ser confirmada")
  .isLength({min:6,max:15}).withMessage("A senha deve ser confirmada")
  
  ]

  module.exports = validationsEmpresa;