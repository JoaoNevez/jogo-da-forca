const palavras = ["typescript", "computador", "forca", "javascript", "navegador"];
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 6;
let letrasUsadas: string[] = [];
let progresso = Array(palavraSecreta.length).fill("_");

const palavraElem = document.getElementById("palavra") as HTMLParagraphElement;
const tentativasElem = document.getElementById("tentativas") as HTMLSpanElement;
const usadasElem = document.getElementById("usadas") as HTMLSpanElement;
const input = document.getElementById("letra") as HTMLInputElement;
const botao = document.getElementById("tentar") as HTMLButtonElement;
const mensagem = document.getElementById("mensagem") as HTMLParagraphElement;

function atualizarTela() {
  palavraElem.textContent = progresso.join(" ");
  tentativasElem.textContent = tentativas.toString();
  usadasElem.textContent = letrasUsadas.join(", ");
}

function verificarFimDeJogo() {
  if (!progresso.includes("_")) {
    mensagem.textContent = "🎉 Você venceu! A palavra era: " + palavraSecreta;
    botao.disabled = true;
    input.disabled = true;
  } else if (tentativas <= 0) {
    mensagem.textContent = "💀 Você perdeu! A palavra era: " + palavraSecreta;
    botao.disabled = true;
    input.disabled = true;
  }
}

botao.addEventListener("click", () => {
  const letra = input.value.toLowerCase();
  input.value = "";

  if (!letra.match(/[a-z]/) || letra.length !== 1) {
    mensagem.textContent = "❌ Digite apenas uma letra válida.";
    return;
  }

  if (letrasUsadas.includes(letra)) {
    mensagem.textContent = "⚠️ Você já usou essa letra.";
    return;
  }

  letrasUsadas.push(letra);

  if (palavraSecreta.includes(letra)) {
    palavraSecreta.split("").forEach((char, i) => {
      if (char === letra) progresso[i] = letra;
    });
    mensagem.textContent = "✅ Boa! A letra está na palavra.";
  } else {
    tentativas--;
    mensagem.textContent = "❌ Errou! Essa letra não existe.";
  }

  atualizarTela();
  verificarFimDeJogo();
});

atualizarTela();
