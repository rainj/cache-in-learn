var express = require('express'),
	router = express.Router()

module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	var id = 'cache-in-learn';
	res.render('index', {
		title: 'Presentations',
	  	presentations: [
	  		{
	  			id:  id,
	  			title: 'Cache in Learn',
	  			author: 'Rain Jiang',
	  			description: 'Usage of cache in Learn System',
	  			url: '/presentation/' + id
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
