const express = require('express');
const nunjucks = require('nunjucks');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const route = require('./routes');

const app = express();

var env = nunjucks.configure('views', {noCache: true, express:app});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(express.static('./public'));
app.use(express.static('./node_modules/jquery/dist'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));


app.listen(3000, function(){
  console.log('listening at port 3000!');
})

app.use('/', route);


app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  console.error(err);
  res.json(err);
});

