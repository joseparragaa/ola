document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    
    // Toggle open state on click
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    // Generate falling floating hearts (particles)
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize size, position, and duration
        const size = Math.random() * 20 + 10; // 10px to 30px
        const left = Math.random() * 100; // 0% to 100%
        const duration = Math.random() * 4 + 6; // 6s to 10s
        const delay = Math.random() * 5; // 0s to 5s
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
});
