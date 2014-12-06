var express = require('express');
    app = express();

app.use(express.static('dist'))

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(8080);