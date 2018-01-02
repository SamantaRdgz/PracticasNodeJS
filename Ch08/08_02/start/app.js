var express = require("express");

var app = express();

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
app.listen(3000);

console.log("corriendo express en el puerto 3000");
module.exports = app;