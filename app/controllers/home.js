var express = require('express'),
	router = express.Router()

module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Presentations',
	  	presentations: [
	  		{
	  			id:  'build-script',
	  			title: 'Build Script',
	  			author: 'Rain Jiang',
	  			description: 'Build Script in Learn System',
	  			url: '/presentation/build-script'
	  		},
	  		{
	  			id:  'cache-in-learn',
	  			title: 'Cache in Learn',
	  			author: 'Rain Jiang',
	  			description: 'Usage of cache in Learn System',
	  			url: '/presentation/cache-in-learn'
	  		},
	  		{
	  			id:  'hello',
	  			title: 'Hello World',
	  			author: 'Rain Jiang',
	  			description: 'Just a hello world!',
	  			url: '/presentation/hello'
	  		}
	  	]
	});
});
