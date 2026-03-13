window.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Добавляем класс, который триггерит анимации в CSS
        heroSection.classList.add('is-loaded');
    }
});