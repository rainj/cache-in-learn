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
	if(folderName != 'hello') {
		styles.push('/css/' + folderName + '/presentation-style.css');
		
	}

    res.render('presentations/' + folderName + '/index', {
     	title: 'Cache in Learn', 
  		author: 'Rain Jiang',
  		description: 'Usage of cache in Learn System',
  		styleFiles: styles,
  		jsFiles: javacripts
    });
});
