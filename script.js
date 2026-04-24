function showMessage() {
  const message = document.getElementById("message");
  message.textContent = "Thanks for visiting my portfolio 🚀 You can contact me through GitHub!";
}

const cards = document.querySelectorAll(".card, .project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", () => {
    card.style.transform = "scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});