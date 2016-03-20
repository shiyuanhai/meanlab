/*
	connect
	middleware
*/
var connect = require('connect');
var app = connect();

var logger = function(req, res, next){
	console.log(req.method, req.url);
	next();
};

var helloWorld = function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
};

var goodbye = function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.end("Bye!");
};

app.use(logger);
app.use('/hello' ,helloWorld);
app.use('/bye', goodbye);

app.listen(3000);

console.log("Server listen at localhost:3000.");