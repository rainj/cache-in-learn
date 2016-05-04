var express = require('express'),
	router = express.Router()

module.exports = function (app) {
	app.use('/', router);
};

router.get('/presentations', function (req, res, next) {
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
	  		},
	  		{
	  			id: 'sprint16-demo',
	  			title: 'Team Kunlun Demo',
	  			author: 'Rain Jiang',
	  			description: 'Achivement of Sprint 15 and Sprint 16',
	  			url: '/presentation/sprint16-demo'
	  		}, 
	  		{
	  			id: 'sprint17-demo',
	  			title: 'Team Kunlun Demo',
	  			author: 'Rain Jiang',
	  			description: 'Achivement of Sprint 18',
	  			url: '/presentation/sprint18-demo'
	  		}, 
	  		{
	  			id: 'Hackthon',
	  			title: 'VDE Tool',
	  			author: 'Rain Jiang',
	  			description: 'Virtual Development Environment Tool',
	  			url: '/presentation/hackthon'
	  		}
	  	]
	});
});
