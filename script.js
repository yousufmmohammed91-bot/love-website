const intro = document.getElementById("intro");
const site = document.getElementById("site");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  intro.classList.add("hide");
  site.classList.remove("hidden");
  window.scrollTo(0, 0);
  makeItRain(12);
});

function openSurprise() {
  document.getElementById("surprise").scrollIntoView({behavior:"smooth"});
  setTimeout(() => makeItRain(20), 600);
}

function makeItRain(count = 45) {
  const symbols = ["❤️","💕","💗","✨","🌸"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heart.style.animationDelay = (Math.random() * .8) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
}
