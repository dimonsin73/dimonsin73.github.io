const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDropdown = document.querySelector('.language__dropdown')
const searchBtn = document.querySelector('.search__btn');
const searchForm = document.querySelector('.search__form')
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


searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('search__btn--active');
    const isActive = searchForm.classList.toggle('search__form--active');
    if (isActive) {
        // Ждем начала анимации и ставим фокус
        setTimeout(() => searchInput.focus(), 100);
    } else {
        // Если закрыли и там был текст — сбрасываем поиск
        if (searchInput.value !== '') {
            searchInput.value = '';
            searchQuery = ''; // Твоя переменная фильтрации
            render();
        }
        searchInput.blur();
    }
    searchBtn.setAttribute('aria-label', searchForm ? 'Закрыть поиск' : 'Открыть поиск');
});