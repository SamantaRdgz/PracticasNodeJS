var http = require("http");

module.exports = {

	printName(person) {
		return `${person.last}, ${person.first}`;
	},


	loadWiki(person, callback) {

		var url = `http://en.wikipedia.org/wiki/${person.first}_${person.last}`;

		http.get(url, function(res) {

			var body = "";
			res.setEncoding("UTF-8");
			res.on("data", function(chunk) {

				body += chunk;
			});

			res.on("end", function() {
				callback(body);
			});
		});
	}
};