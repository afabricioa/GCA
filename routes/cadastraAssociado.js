var express = require('express');
var router = express.Router();

/* renderiza pagina de cadastro */
router.get('/', function(req, res, next) {
  res.render('paginas/cadastraAssociado');
});

module.exports = router;
