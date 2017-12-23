var fs = require("fs");

var md = `

ASDF
==================

* asdfasdf sd fsd f sdf sd fasdfsadgdfg 
- dfghdfgdfgk dfghdg u 
`;

fs.writeFile("ejemplo1.md", md.trim(), function(err) {

	console.log("Archivo creado");

});