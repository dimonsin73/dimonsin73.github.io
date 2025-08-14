// Работа меню выбора языка 
const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDropdawn = document.querySelector('.language__dropdawn')
const languageDropdawnOptionArray = document.querySelectorAll('.language__dropdawn-option')
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
// Работа меню навигации
const hiroArrow = document.querySelector('.hiro__arrow')
hiroArrow.addEventListener('click', function(){
    const hiroNav = hiroArrow.parentElement
        hiroNav.classList.toggle('hiro__nav-active')
})
const arrow = document.querySelector('.arrow')
const menu = document.querySelector('.menu')
arrow.addEventListener('click', function(){
    arrow.classList.toggle('arrow-active')
    menu.classList.toggle('menu-active')
})
const livebtnArray = document.querySelectorAll('.livebtn')
for (let i = 0; i < livebtnArray.length; i++) {
    const livebtn = livebtnArray[i];
    if (window.screen.width > '954') {
        livebtn.addEventListener('click', function(){
            console.log('1')
            livebtn.classList.add('livebtn_active')
        })
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(livebtn);
            if ( ! withinBoundaries ) {
                livebtn.classList.remove('livebtn_active')
            }
        })
        
        livebtn.addEventListener('mouseleave', function(){
            livebtn.classList.remove('livebtn_active')
        })
    } else {
        livebtn.addEventListener('mouseenter', function(){
            livebtn.classList.add('livebtn_active')
        })
        livebtn.addEventListener('mouseleave', function(){
            livebtn.classList.remove('livebtn_active')
        })
    }
    
}


