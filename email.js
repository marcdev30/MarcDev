require("dotenv").config();
const nodeMail = require("nodemailer");
exports.mainMail = async function (name, email, message) {
	const transporter = nodeMail.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOption = {
		from: email,
		to: process.env.EMAIL_RECEIVER,
		subject: "[MarcDevEmails] New Email from " + name + " <" + email + ">",
		html: message.replace(/(?:\r\n|\r|\n)/g, "<br>"),
	};

	try {
		await transporter.sendMail(mailOption);
		console.log("Message Sent Successfully!");
		return Promise.resolve("Message Sent Successfully!");
	} catch (error) {
		console.error(error);
		return Promise.reject(error);
	}
};
