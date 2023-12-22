var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('restricted', { title: 'Chat', user: req.session.user});
});

module.exports = router;
