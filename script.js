let currentSlide = 0;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (n >= slides.length) {
        currentSlide = 0;
    }
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(n) {
    showSlide(currentSlide = n - 1);
}

// Auto-play do carrossel
setInterval(() => {
    changeSlide(1);
}, 5000);

// Gerar corações flutuantes aleatórios
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    
    const randomX = Math.random() * window.innerWidth;
    const randomDelay = Math.random() * 2;
    const randomDuration = 5 + Math.random() * 4;
    
    heart.style.left = randomX + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.animationDelay = randomDelay + 's';
    heart.style.animationDuration = randomDuration + 's';
    
    document.querySelector('.hearts').appendChild(heart);
    
    setTimeout(() => heart.remove(), (randomDuration + randomDelay) * 1000);
}

// Criar corações continuamente
setInterval(createFloatingHeart, 800);

// Efeito de clique - criar coração ao clicar
document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' && !e.target.classList.contains('carousel-btn') && !e.target.classList.contains('dot')) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💕';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '2rem';
        heart.style.animationDuration = '3s';
        
        document.querySelector('.hearts').appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
});

// Iniciar o carrossel
showSlide(currentSlide);

// Contador regressivo para 30 de julho
function updateCountdown() {
    const now = new Date();
    let targetYear = now.getFullYear();
    let targetDate = new Date(targetYear, 6, 30, 0, 0, 0); // 30 de julho
    
    // Se o dia 30 de julho já passou este ano, calcula para o próximo ano
    if (now > targetDate) {
        targetYear++;
        targetDate = new Date(targetYear, 6, 30, 0, 0, 0);
    }
    
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
