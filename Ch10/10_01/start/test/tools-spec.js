var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {

	it("imiprimira el primer apellido", function() {

		var results = tools.printName({ first: "Sam", last: "Rdgz"});
		expect(results).to.equal("Rdgz, Sam");

	});

});