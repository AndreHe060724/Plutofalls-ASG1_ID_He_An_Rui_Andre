/* 
  Adds simple hover animation to the navbar links.
  This improves interactivity without changing your HTML.
*/
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#c5a572"; // Highlight color on hover
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "#2a2a2a"; // Return to default
  });
});


/*
  Store Location Cards — simple expand/collapse on click.
  Makes the page feel more interactive without overcomplicating anything.
*/
const cards = document.querySelectorAll(".location-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");  // Adds or removes the "open" class
  });
});
