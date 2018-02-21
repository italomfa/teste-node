var connectionFactory = require('../../config/connectionFactory');

module.exports = function(app){
	app.get('/noticias', function(req, res){
		var connection = connectionFactory();

		connection.query('select * from noticias', function(erro, resultado){//(sql, callback)
				res.render("noticias/noticias", {noticias : resultado});//ejs - engine de views
		});
	});
};
