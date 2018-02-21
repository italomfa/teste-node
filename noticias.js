var http = require('http');//acrescentar algo ao script..funciona como um import de lib

var server = http.createServer(function(req, res){
	var categoria = req.url; //url atual

	categoria = (categoria.startsWith("/") ? categoria.substring(1) : categoria).trim();

	if (categoria == 'tecnologia'){
		res.end("<html><body>Portal de Notícias para Tecnologia</body></html>");
	} else if (categoria == 'moda'){
		res.end("<html><body>Portal de Notícias para Moda</body></html>");
	} else if (categoria == 'beleza'){
		res.end("<html><body>Portal de Notícias para Beleza</body></html>");
	} else{
		res.end("<html><body>Portal de Notícias 123</body></html>");
	}
});

server.listen(3000);

//NPM (gerenciador de dependências - igual ao maven) -> npm init
//EXPRESS (framework para web) -> npm install express -save
//EJS  (módulo para escrita de html + js: engine de views dinâmicas) -> npm install ejs --save
//NODEMON (facilitar de deploy...utilitário para gerar restart automaticamente).
//obs: o --save faz com que os arquivos fiquem salvos no diretório do projeto.
//obs: ejs + express
//obs: nodemon - utilitário
