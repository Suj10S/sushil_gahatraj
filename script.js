// Dynamic Copyright Year
document.getElementById("year").textContent = new Date().getFullYear();

// Hamburger Navigation Toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close Mobile Nav when clicking an item
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// WhatsApp Form Submission Handler
const contactForm = document.getElementById("whatsapp-contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const formattedText = `Hello Sushil, my name is ${name}.%0A%0A*Subject:* ${subject}%0A*Message:* ${message}`;
  const phoneNumber = "966578873298";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedText}`;

  window.open(whatsappURL, "_blank");
});