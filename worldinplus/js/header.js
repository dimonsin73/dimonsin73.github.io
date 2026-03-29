const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDropdown = document.querySelector('.language__dropdown')
const searchBtn = document.querySelector('.search__btn')
const searchForm = document.querySelector('.search__form')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
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
languageDropdown.addEventListener('click', (e) => {
    if (e.target.closest('.language__option')) {
        closeLanguageDropdown();
    }
});
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
    const isSearchOpen = searchForm.classList.contains('search__form--active');
    searchBtn.setAttribute('aria-label', isSearchOpen ? 'Закрыть поиск' : 'Открыть поиск');

});

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active')
    const isMenuOpen = menu.classList.toggle('menu--active');
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''; // Блокируем скролл
})