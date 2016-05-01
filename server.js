var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('dist'));

// default
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});