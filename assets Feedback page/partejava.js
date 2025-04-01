const stars = document.querySelectorAll(".star");

// Funzione per evidenziare le stelle in base al valore selezionato (1-10)
function highlightStars(value) {
  stars.forEach((star) => {
    const starValue = parseInt(star.getAttribute("data-value"), 10);
    if (starValue <= value) {
      star.classList.add("hover");
    } else {
      star.classList.remove("hover");
    }
  });
}

// Aggiugnere gli eventi listener per l'hover su ogni stella
stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    const value = parseInt(star.getAttribute("data-value"), 10);
    highlightStars(value);
  });

  // Quando il mouse esce dall'area, rimuoviamo l'effetto hover
  star.addEventListener("mouseout", () => {
    stars.forEach((s) => s.classList.remove("hover"));
  });
});
