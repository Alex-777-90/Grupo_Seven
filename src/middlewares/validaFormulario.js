const {body} = require("express-validator");// pega o body para conseguir fazer a validação com express-validator 

const validations = [

  body("username2")
  .notEmpty().withMessage("O nome deve ser preenchido")
  .isString().withMessage("Só é permitido letras"),
  
  
  body("email2")
  .notEmpty().withMessage("O e-mail deve ser preenchido")
  .isEmail().withMessage("O e-mail deve ser preenchido"),
  
  
  body("cpf2")
  .notEmpty().withMessage("O CPF deve ser preenchido")
  .isNumeric().withMessage("Só é permitido números")
  .isLength({min:11,max:11}).withMessage("O CPF deve conter 11 números"),

  
  body("telefone2")
  .notEmpty().withMessage("O telefone deve ser preenchido")
  .isMobilePhone().withMessage("O telefone deve ser preenchido"),
  
  body("password2")
  .notEmpty().withMessage("A senha deve ser preenchido")
  .isLength({min:6,max:15}).withMessage("Senha entre 6 caracteres e  15 caracteres"),
  
  body("passwordConfirmation2")
  .notEmpty().withMessage("A senha deve ser confirmada")
  .isLength({min:6,max:15}).withMessage("A senha deve ser confirmada")
  
  ]

  module.exports = validations;