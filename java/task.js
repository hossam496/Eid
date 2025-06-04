document.addEventListener('DOMContentLoaded', function() {
    // إنشاء القلوب الطائرة
    const heartsContainer = document.querySelector('.hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-20px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // إنشاء الألعاب النارية عند النقر
    const button = document.querySelector('.glow-button');
    const confettiContainer = document.querySelector('.confetti');
    
    button.addEventListener('click', function() {
        createConfetti();
    });
    
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['🎉', '✨', '🎊', '💖', '🌸'][Math.floor(Math.random() * 5)];
            confetti.style.position = 'absolute';
            confetti.style.left = '50%';
            confetti.style.top = '60%';
            confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
            confetti.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
            confetti.style.animation = `confetti-fall ${Math.random() * 1 + 0.5}s linear forwards`;
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    }
    
    // إضافة أنماط الحركة
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh);
            }
        }
        
        @keyframes confetti-fall {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() * 100 - 50}vw, 100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // إنشاء القلوب بشكل دوري
    setInterval(createHeart, 300);
});