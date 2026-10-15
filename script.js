
/* MOBILE NAVIGATION */
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

/* CLOSE MENU AFTER CLICKING A LINK */
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

/* AUTOMATIC COPYRIGHT YEAR */
document.getElementById("year").textContent =
  new Date().getFullYear();

/* DEMO CONTACT FORM */
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("form-status").textContent =
    "Thank you for your message! This is a demo form.";

  contactForm.reset();
});
