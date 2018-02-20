module.exports = function(app){
	app.get('/', function(req, res){//o segundo parâmetro é um callback
		res.render("home/index");
	});
}
