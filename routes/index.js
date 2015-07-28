var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'Cache in Learn', 
  	author: 'Rain Jiang',
  	description: 'Usage of cache in Learn System'
  });
});

module.exports = router;
