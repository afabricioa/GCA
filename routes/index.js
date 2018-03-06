var express = require('express');
var router = express.Router();

/* renderiza index page. */
router.get('/', function(req, res, next) {
  res.render('paginas/index');
});

module.exports = router;
