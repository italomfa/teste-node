module.exports = function(app){
	app.get('/404', function(req, res){
		res.render("erros/404");
	});
}