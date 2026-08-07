const titleElement = document.querySelector('h1');
const magicButton = document.getElementById('magicButton');
const themeToggle = document.getElementById('themeToggle');
const messageBox = document.getElementById('messageBox');
const cards = document.querySelectorAll('.card');

const phrases = [
  'Você acabou de ativar um efeito muito massa! 🚀',
  'Código com estilo e interatividade faz a diferença.',
  'Experimente movimentar o mouse sobre os cards. 😎',
  'Dark mode ativado com charme e suave transição.',
  'Este botão dispara uma mensagem legal em JavaScript.'
];

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function typedTitle() {
  const text = titleElement.dataset.text;
  titleElement.textContent = '';
  let index = 0;

  const interval = setInterval(() => {
    titleElement.textContent += text[index];
    index += 1;

    if (index >= text.length) {
      clearInterval(interval);
      titleElement.classList.add('typed-finished');
    }
  }, 60);
}

function showMessage() {
  const message = randomFrom(phrases);
  messageBox.textContent = message;
  messageBox.classList.remove('hidden');
  messageBox.classList.add('visible');

  if (messageBox.dataset.visible !== 'true') {
    messageBox.dataset.visible = 'true';
  }

  createSparkles();
}

function createSparkles() {
  const sparkleCount = 14;
  for (let i = 0; i < sparkleCount; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${20 + Math.random() * 60}%`;
    sparkle.style.top = `${20 + Math.random() * 40}%`;
    sparkle.style.animationDuration = `${0.75 + Math.random() * 0.5}s`;
    sparkle.style.opacity = String(0.7 + Math.random() * 0.3);
    document.body.appendChild(sparkle);

    sparkle.addEventListener('animationend', () => sparkle.remove());
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? 'Modo claro' : 'Modo escuro';
}

function attachCardTilt(card) {
  card.addEventListener('pointermove', event => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    card.style.transform = `perspective(550px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('pointerleave', () => {
    card.style.transform = 'perspective(550px) rotateX(0deg) rotateY(0deg)';
  });
}

magicButton.addEventListener('click', showMessage);
themeToggle.addEventListener('click', toggleTheme);

cards.forEach(attachCardTilt);
window.addEventListener('load', typedTitle);
