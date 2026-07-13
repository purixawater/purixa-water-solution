// Purixa Water Solution

document.addEventListener("DOMContentLoaded", function () {
    console.log("Purixa Water Solution Loaded");

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Card hover animation
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
});
const images = [
  "slide1.jpg",
  "slide2.jpg",
  "slide3.jpg"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slide").src = images[i];
}, 3000);
