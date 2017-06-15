// Setup Express

var express = require(‘express’);
var app = express();

// Setup Handlebars

var exphbs  = require('express-handlebars');
 var hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');