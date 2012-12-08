var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

// Configuration
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals({layout:false, pretty:true});

app.get('/', function (req, res) {
    res.render('index');
});

var port = process.env.PORT || 8000;
server.listen(port);