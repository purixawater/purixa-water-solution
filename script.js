// Purixa Water Solution

document.addEventListener("DOMContentLoaded", function () {

  // Smooth button click animation
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
      this.style.transform = "scale(0.95)";

      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Card animation on hover
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card){
    card.addEventListener("mouseenter", function(){
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function(){
      this.style.transform = "translateY(0)";
    });
  });

});
