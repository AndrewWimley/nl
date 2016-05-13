module.exports = function (e) {
	e.get("/", function (req, res) {
		res.render("home.html")
	})

	e.get("/galleryFull", function (req, res) {
		res.render("galleryFull.html")
	})
	e.get("/galleryPersonal", function (req, res) {
		res.render("galleryPersonal.html")
	})
	e.	get("/galleryComission", function (req, res) {
		res.render("galleryComission.html")
	})

	e.get("/contact", function (req, res) {
		res.render("contact.html")
	})

	e.get("/statement", function (req, res) {
		res.render("statement.html")
	})
}