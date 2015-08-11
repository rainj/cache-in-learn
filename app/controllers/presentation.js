var express = require('express'),
  router = express.Router()

module.exports = function (app) {
  app.use('/presentation', router);
};

router.get('/:name', function (req, res, next) {
	var folderName = req.params.name;
	var styles = [];
  	var javacripts = [
  		'/js/' + folderName + '/index.js'
  	];
	var map = {
		'cache-in-learn': {
			title: 'Cache in Learn', 
	  		author: 'Rain Jiang',
	  		description: 'Usage of cache in Learn System',
	  		styleFiles: [].concat(styles, '/css/' + folderName + '/presentation-style.css', '/components/bootstrap/dist/css/bootstrap.min.css'),
	  		jsFiles: [].concat(javacripts, '/components/bootstrap/dist/js/bootstrap.min.js')
		},
		hello: {
			title: 'Hello', 
	  		author: 'Rain Jiang',
	  		description: 'Just a Hello World',
	  		styleFiles: styles,
	  		jsFiles: javacripts
		},
		'build-script': {
			title: 'Build Script', 
	  		author: 'Rain Jiang',
	  		description: 'Build script in Learn System',
	  		styleFiles: [].concat(styles, '/css/' + folderName + '/presentation-style.css'),
	  		jsFiles: javacripts
		}
	}

    res.render('presentations/' + folderName + '/index', map[folderName]);
});
