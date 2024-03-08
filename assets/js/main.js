//Burger Menu

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const dropdown = document.querySelector(".dropdown-content");

  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
  dropdown.classList.toggle("active");

  // Close dropdown if screen is larger than 900px and burger is clicked
  if (window.innerWidth > 900 && !burger.classList.contains("active")) {
    dropdown.classList.remove("active");
    burger.classList.remove("active");
  }
}

window.onresize = function () {
  const screenWidth = window.innerWidth;
  const burger = document.querySelector(".burger");
  const dropdown = document.querySelector(".dropdown-content");

  // Close dropdown and reset burger state if screen is larger than 900px
  if (screenWidth > 900) {
    dropdown.classList.remove("active");
    burger.classList.remove("active");
  }
};

// Get current year for the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

var typingEffect = new Typed(".typedText", {
  strings: ["I'm #yourDev{...}"],
  loop: true,
  typeSpeed: 150,
  backSpeed: 80,
  backDelay: 2000,
});

// ADD SHADOW TO NAV BAR AFTER SCROLL
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.9)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  }
}

var links = document.querySelectorAll(".dropdown-content a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMenu();
  });
});
