// Author: Ivan Bardon
// Septiembre 2016


//Require de los modulos
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');




//Configuración
app.set('view engine','pug');
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Rutas

app.get('/', function(req,res){
	res.render('index');
});


//Puerto para servir
http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
