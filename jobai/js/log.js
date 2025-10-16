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
// Работа меню выбора языка 
const menuLanguageArray = document.querySelectorAll('.menu__language')
for (let i = 0; i < menuLanguageArray.length; i++) {
    const menuLanguage = menuLanguageArray[i];
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
}

const popupArray = document.querySelectorAll('.popup')
for (let i = 0; i < popupArray.length; i++) {
    const popup = popupArray[i];
    const popupWrapper = popup.querySelector('.popup__wrapper')
    if (window.innerWidth < '1023') {
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
/* Переход к карточкам
const cardsBtnArray = document.querySelectorAll('.cards-btn')
const section = document.querySelector('.section')
const cardsWrapperArray = document.querySelectorAll('.cards__wrapper')
const cardsclose = document.querySelector('.cards__btn')
for (let i = 0; i < cardsBtnArray.length; i++) {
    const cardsBtn = cardsBtnArray[i];
    cardsBtn.addEventListener('click', function(){
        const switchInput = cardsBtn.parentElement.querySelector('.switch__input')
        menu.classList.add('menu_hide')
        hiro.classList.add('hiro_hide')
        section.classList.add('section_active')
        if (switchInput.checked) {
            for (let i = 0; i < cardsWrapperArray.length; i++) {
                const cardsWrapper = cardsWrapperArray[i];
                if (cardsWrapper.dataset.cards === 'najti-sotrudnika') {
                    cardsWrapper.classList.add('cards__wrapper-active')
                } else {
                    cardsWrapper.classList.remove('cards__wrapper-active')
                }
            }
        } else {
            for (let i = 0; i < cardsWrapperArray.length; i++) {
                const cardsWrapper = cardsWrapperArray[i];
                if (cardsWrapper.dataset.cards === 'najti-rabotu') {
                    cardsWrapper.classList.add('cards__wrapper-active')
                } else {
                    cardsWrapper.classList.remove('cards__wrapper-active')
                }
            }
        }
    })
}
cardsclose.addEventListener('click', function(){
    section.classList.remove('section_active')
    for (let i = 0; i < cardsWrapperArray.length; i++) {
        const cardsWrapper = cardsWrapperArray[i];
        cardsWrapper.classList.remove('cards__wrapper-active')
    }
    menu.classList.remove('menu_hide')
    hiro.classList.remove('hiro_hide')
})
const sectionToleftBtnArray = document.querySelectorAll('.section_toleft-btn')
for (let i = 0; i < sectionToleftBtnArray.length; i++) {
    const sectionToleftBtn = sectionToleftBtnArray[i];
    sectionToleftBtn.addEventListener('click', function(){
        window.scrollTo(0, 0)
    })
}
    */

/* Путь к Авторизации/Регистрации

const hiroBtnFirst = document.querySelector('.hiro__btn-first')
const hiroBtnSecondPrevArray = document.querySelectorAll('.hiro__btn-second-prev')
const hiroBtnSecondNextArray = document.querySelectorAll('.hiro__btn-second-next')
const hiroBtnThirdPrevArray = document.querySelectorAll('.hiro__btn-third-prev')
const hiroBlockFirst = document.querySelector('.hiro__block-first')
const hiroBlockSecondArray = document.querySelectorAll('.hiro__block-second')
const hiroBlockThirdArray = document.querySelectorAll('.hiro__block-third')
hiroBtnFirst.addEventListener('click', function(){
    const radioInputArray = hiroBtnFirst.parentElement.querySelectorAll('.radio__input')
    hiroBlockFirst.style.display = 'none'
    for (let i = 0; i < radioInputArray.length; i++) {
        const radioInput = radioInputArray[i];
        if (radioInput.checked) {
            const dataFirst = radioInput.id
            for (let i = 0; i < hiroBlockSecondArray.length; i++) {
                const hiroBlockSecond = hiroBlockSecondArray[i];
                if (hiroBlockSecond.dataset.block === dataFirst) {
                    hiroBlockSecond.style.display = 'flex'
                }
            }
        }
    }
    
})
for (let i = 0; i < hiroBtnSecondPrevArray.length; i++) {
    const hiroBtnSecondPrev = hiroBtnSecondPrevArray[i];
    hiroBtnSecondPrev.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockSecondArray.length; i++) {
            const hiroBlockSecond = hiroBlockSecondArray[i];
            hiroBlockSecond.style.display = 'none'
        }
        hiroBlockFirst.style.display = 'flex'
    })
}
for (let i = 0; i < hiroBtnSecondNextArray.length; i++) {
    const hiroBtnSecondNext = hiroBtnSecondNextArray[i];
    hiroBtnSecondNext.addEventListener('click', function(){
        const radioInputArray = hiroBtnSecondNext.parentElement.parentElement.querySelectorAll('.radio__input')
        for (let i = 0; i < hiroBlockSecondArray.length; i++) {
            const hiroBlockSecond = hiroBlockSecondArray[i];
            hiroBlockSecond.style.display = 'none'
        }
        for (let i = 0; i < radioInputArray.length; i++) {
            const radioInput = radioInputArray[i];
            if (radioInput.checked) {
                const dataSecond = radioInput.id
                for (let i = 0; i < hiroBlockThirdArray.length; i++) {
                    const hiroBlockThird = hiroBlockThirdArray[i];
                    if (hiroBlockThird.dataset.block === dataSecond) {
                        hiroBlockThird.style.display = 'flex'
                    }
                }
            }
        }
    })
}

for (let i = 0; i < hiroBtnThirdPrevArray.length; i++) {
    const hiroBtnThirdPrev = hiroBtnThirdPrevArray[i];
    hiroBtnThirdPrev.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockThirdArray.length; i++) {
            const hiroBlockThird = hiroBlockThirdArray[i];
            hiroBlockThird.style.display = 'none'
        }
        const dataPrev = hiroBtnThirdPrev.dataset.prev
        for (let i = 0; i < hiroBlockSecondArray.length; i++) {
            const hiroBlockSecond = hiroBlockSecondArray[i];
            if (hiroBlockSecond.dataset.block === dataPrev) {
                hiroBlockSecond.style.display = 'flex'
            }
            
        }
    })
}
    */
// Временное нажатие кнопок
const hiroBtnFirst = document.querySelector('.hiro__btn-first')
const cardsBtnArray = document.querySelectorAll('.cards-btn')
hiroBtnFirst.addEventListener('click', function(){
    hiroBtnFirst.classList.toggle('neumorphic-button-active')
})
for (let i = 0; i < cardsBtnArray.length; i++) {
    const cardsBtn = cardsBtnArray[i];
    cardsBtn.addEventListener('click', function(){
        cardsBtn.classList.toggle('neumorphic-button-active')
    })
}

const hiroWraзper = document.querySelector('.hiro__wrapper')
const hiroArrow = document.querySelector('.hiro__arrow')
const hiroBlockExample = document.querySelector('.hiro__block-example')
hiroWraзper.addEventListener('scroll', function() {
    hiroArrow.classList.add('hiro__arrow-hide')
    hiroBlockExample.classList.add('hiro__block-example-up')
    if (hiroWraзper.scrollTop === 0) {
        hiroArrow.classList.remove('hiro__arrow-hide')
        hiroBlockExample.classList.remove('hiro__block-example-up')
    }
})

const menuLinkArray = document.querySelectorAll('.menu__link')
for (let i = 0; i < menuLinkArray.length; i++) {
    const menuLink = menuLinkArray[i];
    menuLink.addEventListener('click', function(){
        const dataDocum = menuLink.dataset.docum
        documFun(dataDocum)
    })
}
const docum = document.querySelector('.docum')
const documWrapperArray = document.querySelectorAll('.docum__wrapper')
function documFun(dataDocum) {
    menu.classList.add('menu_hide')
    hiro.classList.add('hiro_hide')
    docum.classList.add('docum_active')
    for (let i = 0; i < documWrapperArray.length; i++) {
        const documWrapper = documWrapperArray[i];
        if (documWrapper.dataset.docum === dataDocum) {
            documWrapper.classList.add('docum__wrapper-active')
        } else {
            documWrapper.classList.remove('docum__wrapper-active')
        }
    }
}
const menu = document.querySelector('#menu')
const documBtnArray = document.querySelectorAll('.docum__btn')
for (let i = 0; i < documBtnArray.length; i++) {
    const documBtn = documBtnArray[i];
    documBtn.addEventListener("click", function(){
        menu.classList.remove('menu_hide')
        hiro.classList.remove('hiro_hide')
        docum.classList.remove('docum_active')
        for (let i = 0; i < documWrapperArray.length; i++) {
            const documWrapper = documWrapperArray[i];
            documWrapper.classList.remove('docum__wrapper-active')
        }
        window.scrollBy({
            top: 10000,
            behavior: "auto",
        });
    })
}

const documBackArray = document.querySelectorAll('.docum__back')
for (let i = 0; i < documBackArray.length; i++) {
    const documBack = documBackArray[i];
    documBack.addEventListener("click", function(){
        for (let i = 0; i < documWrapperArray.length; i++) {
            const documWrapper = documWrapperArray[i];
            if (documWrapper.dataset.docum === 'other') {
                documWrapper.classList.add('docum__wrapper-active')
            } else {
                documWrapper.classList.remove('docum__wrapper-active')
            }
        }
    })
}
// Чат в Связаться с нами
const documChatbtn = document.querySelector('.docum__chatbtn')
const documChat = document.querySelector('.docum__chat')
const documChatClose = document.querySelector('.docum__chat-close')
documChatbtn.addEventListener('click', function(){
    documChat.classList.add('docum__chat-active')
    documChatbtn.style.display = 'none'
})
documChatClose.addEventListener('click', function(){
    documChat.classList.remove('docum__chat-active')
    documChatbtn.style.display = 'block'
})