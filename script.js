function openCard(card) {
  if (card.classList.contains("open")) return;

  document.querySelectorAll(".envelope").forEach(el => {
    el.classList.remove("open");
  });

  card.classList.add("open");

  const sound = document.getElementById("sound");
  sound.currentTime = 0;
  sound.play();
}
