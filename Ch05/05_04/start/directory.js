var fs = require("fs");

if (fs.existsSync("lib")) {
	
	console.log("Ese dir ya estaba creado aqui");
	
} else {

	fs.mkdir("lib", function(err) {

		if (err) {
			console.log(err);
		} else {
			console.log("Dir creado");
		}

	});

}

