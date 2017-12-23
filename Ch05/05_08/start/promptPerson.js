var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("Cual es el nombre? ", function(answer) {

	realPerson.name = answer;

	//
	//	TODO: Use a Writable Stream
	//
	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n========\n\n`);

	rl.setPrompt(`Que diria ${realPerson.name}? `);

	rl.prompt();
	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

		//
		//TODO: Write to the stream
		//
		fs.appendFileSync(realPerson.name + ".md", `* ${saying.trim()} \n`);


		if (saying.toLowerCase().trim() === 'salir') {
			rl.close();
		} else {
			rl.setPrompt(`que mas diria ${realPerson.name}? ('salir' para terminar) `);
		    rl.prompt();
		}

	});

});

rl.on('close', function() {

	console.log("%s dijo %j", realPerson.name, realPerson.sayings);
	process.exit();

});
