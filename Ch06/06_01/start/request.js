var https = require("http");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function(res) {

	var responseBody = "";
	console.log("Inicia respuesta");
	console.log(`Status del server: ${res.statusCode} `);
	console.log("Headers: %j", res.headers);

	res.setEncoding("UTF-8");
	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});


	res.on("end", function() {
		fs.writeFile("george-washington.html", responseBody, function(err) {
			if (err) {

				throw err;
				
			}
			console.log("Archivo descargado");
		});
	});

});

req.on("error", function(err) {
	console.log(`Problema con la llamada: ${err.message}`);
});

req.end();

