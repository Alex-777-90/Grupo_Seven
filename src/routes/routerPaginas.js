var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");


router.get("/farmacia",controlePaginas.farmacia);



module.exports = router;