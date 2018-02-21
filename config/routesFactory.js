var consign = require('consign'); //import

function inicializarRotas(app){
	consign().include('app/routes').into(app);//reconhece os módulos de rota e joga dentro de app
}

module.exports = function(app){
    inicializarRotas(app);

		return app;
}
