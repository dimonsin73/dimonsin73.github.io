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
const neumorphicButtonArray = document.querySelectorAll('.neumorphic-button')
for (let i = 0; i < neumorphicButtonArray.length; i++) {
    const neumorphicButton = neumorphicButtonArray[i];
    neumorphicButton.addEventListener('click', function(){
        neumorphicButton.classList.toggle('neumorphic-button-active')
    })    
}
const arrowMenu = document.querySelector('.arrow-menu')
const arrowHiro = document.querySelector('.arrow-hiro')
const menu = document.getElementById('menu')
const hiro = document.getElementById('hiro')
window.addEventListener('wheel', function (e) {
    const delta = e.deltaY;
    if (delta > 0) {
        menu.classList.add('menu_up')
        hiro.classList.add('hiro_up')
        arrowMenu.style.display = 'none'
        arrowHiro.style.display = 'block'
    } else {
        menu.classList.remove('menu_up')
        hiro.classList.remove('hiro_up')
        arrowMenu.style.display = 'block'
        arrowHiro.style.display = 'none'
    }
})
let startX, startY;
window.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
})
window.addEventListener('touchmove', function(e) {
    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let deltaX = currentX - startX;
    let deltaY = currentY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            // свайп вправо
        } else {
            // свайп влево
        }
    } else {
        if (deltaY < 0) {
            menu.classList.add('menu_up')
            hiro.classList.add('hiro_up')
            arrowMenu.style.display = 'none'
            arrowHiro.style.display = 'block'
        } else {
            menu.classList.remove('menu_up')
            hiro.classList.remove('hiro_up')
            arrowMenu.style.display = 'block'
            arrowHiro.style.display = 'none'
        }
    }
})
arrowMenu.addEventListener("click", function(){
    menu.classList.add('menu_up')
    hiro.classList.add('hiro_up')
})
arrowHiro.addEventListener("click", function(){
    menu.classList.remove('menu_up')
    hiro.classList.remove('hiro_up')
})