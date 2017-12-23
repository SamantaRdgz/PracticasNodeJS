var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Persona = function(nombre) {
	this.nombre = nombre;
};

util.inherits(Persona, EventEmitter);

module.exports = Persona;