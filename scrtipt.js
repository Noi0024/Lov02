document.addEventListener("DOMContentLoaded", function () {

    const openBtn = document.getElementById('openBtn');
    const envelope = document.getElementById('envelope');
    const content = document.getElementById('content');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const final = document.getElementById('final');
    const confettiContainer = document.querySelector('.confetti');

    // Открытие конверта
    openBtn.addEventListener('click', function () {
        envelope.style.display = 'none';
        content.style.display = 'flex';
    });

    // Функция для перемещения кнопки "Нет"
    function moveNo() {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;
        
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }

    // Кнопка "Нет" убегает от мыши и касания
    noBtn.addEventListener('mouseenter', moveNo);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNo();
    });

    // Клик на "Да"
    yesBtn.addEventListener('click', function () {
        content.style.display = 'none';
        final.style.display = 'flex';
        createConfetti();
    });

    // Функция для создания конфетти
    function createConfetti() {
        const colors = ['#ff4d6d', '#ff1744', '#f50057', '#ff6b9d', '#ffb6c1'];
        
        for (let i = 0; i < 50; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiPiece.style.left = Math.random() * 100 + '%';
            confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.animationDelay = Math.random() * 0.5 + 's';
            confettiPiece.style.width = Math.random() * 10 + 5 + 'px';
            confettiPiece.style.height = confettiPiece.style.width;
            
            confettiContainer.appendChild(confettiPiece);
        }
    }

});