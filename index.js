const navLinks = $(".nav-item").toArray();
const menuToggle = $("#navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
