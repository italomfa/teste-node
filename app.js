/**Este arquivo, é basicamente como o ContextListener */
var app = require('./config/server');
var rotaNoticias = require('./app/routes/noticias');
var rotaHome = require('./app/routes/home');
var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
var rota404 = require('./app/routes/404');

inicializarRotas(app);

function inicializarRotas(app){	
	rotaNoticias(app);
	rotaHome(app);
	rotaFormularioInclusaoNoticia(app);
	rota404(app);
}

app.listen(3000, function(){
	console.log('Servidor ON');
});
