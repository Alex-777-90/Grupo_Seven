const {body} = require("express-validator");// pega o body para conseguir fazer a validação com express-validator 

const validations = [

  body("username")
  .notEmpty().withMessage("O nome deve ser preenchido").bail()
  .isString().withMessage("Só é permitido letras"),
  
  
  body("email")
  .notEmpty().withMessage("O e-mail deve ser preenchido")
  .isEmail(),
  
  
  body("cpf")
  .notEmpty().withMessage("O CPF deve ser preenchido")
  .isNumeric().withMessage("Só é permitido números")
  .isLength({min:10,max:10}).withMessage("O CPF deve conter 10 números"),
  
  
  body("telefone")
  .notEmpty().withMessage("O telefone deve ser preenchido")
  .isMobilePhone(),
  
  body("password")
  .notEmpty().withMessage("A senha deve ser preenchido")
  .isLength({min:6,max:15}).withMessage("A senha deve conter no minimo 6 caracteres e no máximo 15 caracteres"),
  
  body("passwordConfirmation")
  .notEmpty().withMessage("A senha deve ser confirmada")
  .isLength({min:6,max:15}).withMessage("A senha deve ser confirmada")
  
  ]

  module.exports = validations;