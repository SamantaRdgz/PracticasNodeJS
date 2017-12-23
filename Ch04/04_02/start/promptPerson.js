var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
	nombre: '',
	palabras: []
};


rl.question("Cual es el nombre de la persona? ", function(answer) {

	persona.nombre = answer;

	rl.setPrompt(`Que diria ${persona.nombre}? `);

	rl.prompt();

	rl.on('line', function(dijo) {

		persona.palabras.push(dijo.trim());

		if (dijo.toLowerCase().trim() === 'salir') {
			rl.close();
		} else {
			rl.setPrompt(`Que mas diria ${persona.nombre}? ('salir' para terminar) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s una persona real dijo %j", persona.nombre, persona.palabras);
	process.exit();
	
});



