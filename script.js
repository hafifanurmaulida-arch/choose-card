function openCard(card) {
  document.querySelectorAll(".envelope").forEach(el => {
    el.classList.remove("open");
  });

  card.classList.add("open");
}
