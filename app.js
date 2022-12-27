const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const email = require("./email.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("home");
});

app.post("/contact", async function (req, res, next) {
	const iEmail = req.body.email;
	const iName = req.body.name;
	const iMessage = req.body.message;
	try {
		emailStatus = await email.mainMail(iName, iEmail, iMessage);
		res.status(200).redirect("/?status=success");
	} catch (error) {
		res.status(500).redirect("/?status=error");
	}
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
