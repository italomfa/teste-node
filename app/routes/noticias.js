module.exports = function(app){
	app.get('/noticias', function(req, res){
		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'noticias'
		});//são informados em JSON

		connection.query('select * from noticias', function(erro, resultado){//(sql, callback)
				res.render("noticias/noticias", {noticias : resultado});//ejs - engine de views
		});
	});
};
