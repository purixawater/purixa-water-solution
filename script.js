/* ==========================
   Purixa Water Solution V4
========================== */

// Auto Image Slider
const slides = [
  "slide1.png",
  "slide2.png",
  "slide3.png"
];

let currentSlide = 0;
const slider = document.getElementById("slide");

if (slider) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    slider.style.opacity = 0;

    setTimeout(() => {
      slider.src = slides[currentSlide];
      slider.style.opacity = 1;
    }, 300);

  }, 4000);
}

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Header Shadow on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";
  } else {
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";
  }
});
