🔤 Jogo da Forca (Hangman)

Um jogo simples da forca feito em TypeScript, HTML e CSS.
O jogador precisa adivinhar a palavra secreta antes que as tentativas acabem.

📂 Estrutura do Projeto
forca-web/
 ├── index.html   # Página principal
 ├── style.css    # Estilos
 ├── index.ts     # Lógica em TypeScript
 └── index.js     # Arquivo compilado (gerado pelo TypeScript)

🚀 Como Rodar

Clone ou extraia o projeto
Baixe e extraia o ZIP em uma pasta.

Compile o TypeScript
No terminal, dentro da pasta do projeto, rode:

tsc index.ts


Isso vai gerar o arquivo index.js.

Abra no navegador
Clique duas vezes em index.html ou abra com um servidor local.

🎮 Como Jogar

Digite uma letra no campo de entrada.

Clique em Tentar.

Se a letra existir, ela aparece na palavra.

Caso contrário, você perde uma tentativa.

O jogo termina quando:

✅ Você adivinha todas as letras.

💀 Suas tentativas acabam.
