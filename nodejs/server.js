const port = 3001;
var express = require('express');
var morgan = require('morgan')
var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
});

