// 🕒 Date de début de l'événement
// Tu peux adapter cette ligne :
const startRNT = new Date("2026-05-01T09:00:00").getTime();

// ⏱️ Countdown
let timer = setInterval(function () {
  const now = new Date().getTime();
  let diff = startRNT - now;

  // Si la date est passée, on bloque à 0 et on arrête le timer
  if (diff <= 0) {
    diff = 0;
    clearInterval(timer);
  }

  // Calculs
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Affichage
  document.getElementById("timer").innerHTML =
    '<div class="days">' +
      '<div class="numbers">' + days + '</div>jours' +
    '</div>' +
    '<div class="hours">' +
      '<div class="numbers">' + hours + '</div>heures' +
    '</div>' +
    '<div class="minutes">' +
      '<div class="numbers">' + minutes + '</div>minutes' +
    '</div>' +
    '<div class="seconds">' +
      '<div class="numbers">' + seconds + '</div>secondes' +
    '</div>';
}, 1000);
