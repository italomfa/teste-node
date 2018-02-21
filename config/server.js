//mesmo que import do java...vale ressaltar que a lib deve ter sido instalada previamente pelo NPM
var express = require('express');//poderia ter sido "require('express')()""
var routesFactory = require('./routesFactory');//poderia ter sido "require('routesFactory')()""

module.exports = function(){
  /** Configurações do servidor*/
  var app = express();
  app.set('view engine', 'ejs');//seta o view engine para EJS
  app.set('views','./app/views')//seta onde estão as views.. obs: deve-se mapear a partir do local onde houve o require do server

  routesFactory(app);//instala as rotas

  return app;
};
