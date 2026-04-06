window.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('.main');
    if (mainSection) {
        // Добавляем класс, который триггерит анимации в CSS
        mainSection.classList.add('is-loaded');
    }
});