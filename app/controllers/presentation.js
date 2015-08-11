var express = require('express'),
  router = express.Router()

module.exports = function (app) {
  app.use('/presentation', router);
};

router.get('/:name', function (req, res, next) {
	var folderName = req.params.name;
	var styles = [ '/components/bootstrap/dist/css/bootstrap.min.css' ];
  	var javacripts = [
  		'/components/bootstrap/dist/js/bootstrap.min.js',
  		'/js/' + folderName + '/index.js'
  	];
	var map = {
		'cache-in-learn': {
			title: 'Cache in Learn', 
	  		author: 'Rain Jiang',
	  		description: 'Usage of cache in Learn System',
	  		styleFiles: [].concat(styles, '/css/' + folderName + '/presentation-style.css'),
	  		jsFiles: javacripts
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
	  		styleFiles: styles,
	  		jsFiles: javacripts
		}
	}

    res.render('presentations/' + folderName + '/index', map[folderName]);
});
