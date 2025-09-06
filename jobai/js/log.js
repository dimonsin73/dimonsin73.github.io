// Работа меню выбора языка 
const language = document.querySelector('.language')
const languageView = language.querySelector('.language__view')
const languageDropdawn = language.querySelector('.language__dropdawn')
const languageDropdawnOptionArray = language.querySelectorAll('.language__dropdawn-option')
languageView.addEventListener('click', function(){
    languageDropdawn.classList.toggle('language__dropdawn-active')
    for (let i = 0; i < languageDropdawnOptionArray.length; i++) {
        const languageDropdawnOption = languageDropdawnOptionArray[i];
        languageDropdawnOption.addEventListener('click', function(){
            const style = getComputedStyle(languageDropdawnOption)
            const bgImage= style['background-image']
            languageView.style.backgroundImage = bgImage
            languageDropdawn.classList.remove('language__dropdawn-active')
        })
    }
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(language);
        if ( ! withinBoundaries ) {
            languageDropdawn.classList.remove('language__dropdawn-active')
        }
    }) //Закрытие меню выбора языка по щелчку вне меню
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            languageDropdawn.classList.remove('language__dropdawn-active')
        }
    }) //Закрытие меню выбора языка по нажатию на ESC
})
const menuLanguage = document.querySelector('.menu__language')
const menuLanguageView = menuLanguage.querySelector('.language__view')
const menuLanguageDropdawn = menuLanguage.querySelector('.language__dropdawn')
const menuLanguageDropdawnOptionArray = menuLanguage.querySelectorAll('.language__dropdawn-option')
menuLanguageView.addEventListener('click', function(){
    menuLanguageDropdawn.classList.toggle('language__dropdawn-active')
    for (let i = 0; i < menuLanguageDropdawnOptionArray.length; i++) {
        const menuLanguageDropdawnOption = menuLanguageDropdawnOptionArray[i];
        menuLanguageDropdawnOption.addEventListener('click', function(){
            const style = getComputedStyle(menuLanguageDropdawnOption)
            const bgImage= style['background-image']
            menuLanguageView.style.backgroundImage = bgImage
            menuLanguageDropdawn.classList.remove('language__dropdawn-active')
        })
    }
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(menuLanguage);
        if ( ! withinBoundaries ) {
            menuLanguageDropdawn.classList.remove('language__dropdawn-active')
        }
    }) //Закрытие меню выбора языка по щелчку вне меню
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            menuLanguageDropdawn.classList.remove('language__dropdawn-active')
        }
    }) //Закрытие меню выбора языка по нажатию на ESC
})


const arrowMenu = document.querySelector('.arrow-menu')
const aarrowLogiin = document.querySelector('.arrow-login')
window.addEventListener('scroll', function () {
    let windowHeight = window.scrollY
    if (windowHeight > '400') {
        arrowMenu.style.display = 'none'
        aarrowLogiin.style.display = 'block'
    } else {
        arrowMenu.style.display = 'block'
        aarrowLogiin.style.display = 'none'
    }
})

const popupArray = document.querySelectorAll('.popup')
for (let i = 0; i < popupArray.length; i++) {
    const popup = popupArray[i];
    const popupWrapper = popup.querySelector('.popup__wrapper')
    if (window.innerWidth < '767') {
        popup.addEventListener('click', function(){
            popup.classList.add('popup_active')
        })
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(popupWrapper);
            if ( ! withinBoundaries ) {
                popup.classList.remove('popup_active')
            }
        })
    } else {
        popup.addEventListener('mouseenter', function(){
            popup.classList.add('popup_active')
        })
        popup.addEventListener('mouseleave', function(){
            popup.classList.remove('popup_active')
        })
    }
    
}