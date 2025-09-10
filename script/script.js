const mesajlar = [
  "Seni gördüğümde kalbim daha hızlı atıyor ❤️",
  "Aşk, iki kalbin aynı ritimde atmasıdır 💕",
  "Sen benim en güzel tesadüfümsün 🌹",
  "Dünyam seninle daha parlak ✨",
  "Aşk varsa, umut da vardır 💖"
];

document.getElementById("mesajBtn").addEventListener("click", () => {
  const rastgele = mesajlar[Math.floor(Math.random() * mesajlar.length)];
  document.getElementById("mesaj").textContent = rastgele;
});

// Kalpler animasyonu
function kalpUret() {
  const kalp = document.createElement("div");
  kalp.classList.add("kalp");
  kalp.textContent = "❤️";
  kalp.style.left = Math.random() * 100 + "vw";
  kalp.style.fontSize = Math.random() * 20 + 15 + "px";
  document.querySelector(".kalpler").appendChild(kalp);

  setTimeout(() => {
    kalp.remove();
  }, 5000);
}

setInterval(kalpUret, 500);
