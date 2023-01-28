const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const email = require("./email.js");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4747;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "client", "frontend-files"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "client", "frontend-files")));

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

app.listen(PORT, () => {
	console.log(
		app.get("env").toUpperCase() + " Server started on port " + PORT
	);
});
