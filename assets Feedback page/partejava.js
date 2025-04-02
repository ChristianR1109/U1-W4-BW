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

// Aggiungere l'evento click per selezionare il valore
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = parseInt(star.getAttribute("data-value"), 10);

    // Rimuovi la classe "selected" da tutte le stelle
    stars.forEach((s) => s.classList.remove("selected"));

    // Aggiungi la classe "selected" alle stelle fino al valore selezionato
    stars.forEach((s) => {
      const starValue = parseInt(s.getAttribute("data-value"), 10);
      if (starValue <= value) {
        s.classList.add("selected");
      }
    });

    console.log(`Selected value: ${value}`);
  });
});
