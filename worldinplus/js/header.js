const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDropdown = document.querySelector('.language__dropdown')
const closeLanguageDropdown = () => {
    languageDropdown.classList.remove('language__dropdown--active');
    languageView.setAttribute('aria-expanded', 'false');
};
languageView.addEventListener('click', (e) => {
    e.stopPropagation()
    languageView.setAttribute('aria-expanded', 'true');
    languageDropdown.classList.add('language__dropdown--active')
})
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language')) {
        closeLanguageDropdown()
    }
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLanguageDropdown()
        languageView.focus();
    }
})