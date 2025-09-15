// Função para criar corações azuis no fundo
function createHearts() {
  const heartsContainer = document.getElementById("hearts");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heartsContainer.appendChild(heart);
  }
}

// Função que exibe a mensagem de casamento ou o emoji triste
function handleResponse() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const likesMe = document.getElementById("likesMe").value.toLowerCase();
  
  const message = document.getElementById("message");
  const emoji = document.getElementById("emoji");

  if (likesMe === "sim") {
    message.innerHTML = `Você acabou de assinar o nosso convite de casamento, o noivo será eu e a noiva você!`;
    emoji.innerHTML = "💍💖";
  } else if (likesMe === "não") {
    message.innerHTML = "";
    emoji.innerHTML = "😢";
  } else {
    message.innerHTML = "Por favor, responda 'sim' ou 'não'.";
    emoji.innerHTML = "";
  }
}

// Animação dos corações ao carregar
window.onload = function () {
  createHearts();
  
  // Adicionar evento de envio
  document.getElementById("submitBtn").addEventListener("click", handleResponse);
};
