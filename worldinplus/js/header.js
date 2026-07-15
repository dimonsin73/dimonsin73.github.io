const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDropdown = document.querySelector('.language__dropdown')
const searchBtn = document.querySelector('.search__btn')
const searchForm = document.querySelector('.search__form')
const searchInput = document.querySelector('.search__input')
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

// Универсальная функция закрытия языка
const closeLanguageDropdown = () => {
    languageDropdown.classList.remove('language__dropdown--active');
    languageView.setAttribute('aria-expanded', 'false');
};
// Выбор языка
if (languageView && languageDropdown) {
    languageView.addEventListener('click', (e) => {
        e.stopPropagation()
        const isOpen = languageDropdown.classList.toggle('language__dropdown--active');
        languageView.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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
}

// Поиск
if (searchBtn && searchForm) {
    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('search__btn--active');
        const isActive = searchForm.classList.toggle('search__form--active');
        if (isActive) {
            searchForm.addEventListener('transitionend', () => {
            if (searchForm.classList.contains('search__form--active')) {
                searchInput?.focus();
            }
            }, { once: true }); // once выполнит код только один раз за анимацию
        } else {
            // Если закрыли и там был текст — сбрасываем поиск
            if (searchInput) searchInput.value = '';
            searchInput?.blur();
        }
        searchBtn.setAttribute('aria-label', isActive ? 'Закрыть поиск' : 'Открыть поиск');
    });
    searchForm.addEventListener('submit', (e) => {
        const value = searchInput.value.trim();

        searchBtn.classList.remove('search__btn--active');
        searchForm.classList.remove('search__form--active');
        searchInput?.blur();
        // Если мы НЕ на главной странице
        const isMainPage = window.location.pathname.endsWith('index.html') || 
                        window.location.pathname.endsWith('/') ;
        if (!isMainPage) {
            // Запрещаем отправку пустого поля
            if (!value) {
                e.preventDefault(); 
                return;
            }
            // Если не на главной — ничего не делаем, форма сама уйдет на главную
            // Убедитесь, что в HTML у <form action="/worldinplus/ru/index.html">
            return; 
        }

        // Если мы НА главной, работаем без перезагрузки
        e.preventDefault();
        searchQuery = value;
        articlesCount = 6;
        history.replaceState(null, '', window.location.origin + window.location.pathname);
        if (typeof render === 'function') {
            render();
            if (value !== '') {
                document.querySelector('#content')?.scrollIntoView({ behavior: 'smooth' });
            }
        }
        menuClose()
    });
}

// Бургер-меню
if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active')
        const isMenuOpen = menu.classList.toggle('menu--active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''; // Блокируем скролл
    })
}
function menuClose() {
    burger.classList.remove('burger--active')
    menu.classList.remove('menu--active');
    document.body.style.overflow = '';
}