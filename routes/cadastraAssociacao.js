var express = require('express');
var router = express.Router();

/* renderiza pagina de associacao. */
router.get('/', function(req, res, next) {
  res.render('paginas/cadastraAssociacao');
});

module.exports = router;
