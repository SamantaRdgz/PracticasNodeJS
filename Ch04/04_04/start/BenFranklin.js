var Persona = require("./lib/Persona");
var ben = new Persona("Ben");
var george = new Persona("George");

george.on('habla', function(dijo) {

	console.log(`${this.nombre} : ${dijo}`);

});

ben.on('habla', function(dijo) {

	console.log(`${this.nombre}: ${dijo}`);

});

ben.emit('habla', "Soy Ben");
george.emit('habla', "Soy Goerge");
