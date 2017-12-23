var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Persona = function(nombre) {
	this.nombre = nombre;
};

util.inherits(Persona, EventEmitter);

var ben = new Persona("Ben Franklin");

ben.on('habla', function(dijo) {

	console.log(`${this.nombre}: ${dijo}`);

});


ben.emit('habla', "Puedes tardar, pero el tiempo no");
