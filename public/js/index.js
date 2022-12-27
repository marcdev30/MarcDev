const navLinks = $(".nav-item").toArray();

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		$("#navbarNav").collapse("hide");
	});
});

const tataOptions = {
	position: "br",
	duration: 8000,
	closeBtn: false,
	animate: "slide",
};

if (window.location.search === "?status=success") {
	tata.success(
		"Message successfully sent!",
		"I will reply you within 2 days.",
		tataOptions
	);
} else if (window.location.search === "?status=error") {
	tata.error(
		"There was an error!",
		"I am working hard on solving it. Try again later!",
		tataOptions
	);
}
