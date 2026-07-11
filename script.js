// Purixa Water Solution

console.log("Purixa Water Solution Website Loaded");

// Button animation
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});
