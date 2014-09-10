var express = require('express'),
  exphbs = require('express-handlebars'),
  path = require('path'),
  routes = require('./routes');

var app = express(),
  hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main'
  });

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

app.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
