const footerIcons = document.querySelectorAll('.footer-icon');

footerIcons.forEach(icon => {
  icon.style.filter = 'invert(1)';
  icon.addEventListener('mouseover', () => {
  });
});

// get the image elements
const emailIcon = document.querySelector(".footer-icon[src='src/email-logo.svg']");
const linkedinIcon = document.querySelector(".footer-icon[src='src/linkedin-logo.svg']");
const githubIcon = document.querySelector(".footer-icon[src='src/github-logo.svg']");

// add event listeners to open links on click
emailIcon.addEventListener("click", function() {
  window.open("mailto:greghi.fumagalli@gmail.com");
});

linkedinIcon.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/gregorio-fumagalli/");
});

githubIcon.addEventListener("click", function() {
  window.open("https://github.com/Greghi2000");
});

const linkedinIconContact = document.querySelector(".contact-icon[src='src/linkedin-logo.svg']");
const githubIconContact = document.querySelector(".contact-icon[src='src/github-logo.svg']");

linkedinIconContact.addEventListener("click", function() {
  window.open("https://www.linkedin.com/in/gregorio-fumagalli/");
});

githubIconContact.addEventListener("click", function() {
  window.open("https://github.com/Greghi2000");
});
