var exp = require("express"),
	bodyParser = require("body-parser"),
	engines = require("consolidate"),
	e = exp()

e.use(bodyParser.json())
e.use(exp.static("./public"))

e.engine("html", require("ejs").renderFile)

e.set('views', __dirname + '/views');

require("./launch.js")(e)

e.listen("443", function () {
	console.log("Shits here yo: " + 3000)
})