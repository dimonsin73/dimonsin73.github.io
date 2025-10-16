// Работа подсказок 
const clueArray = document.querySelectorAll('.clue')
for (let i = 0; i < clueArray.length; i++) {
    const clue = clueArray[i];
    const clueWrapper = clue.querySelector('.clue__wrapper')
    clue.addEventListener('mouseover', function(){
        clueWrapper.classList.add('clue__wrapper-active')
    })
    clue.addEventListener('mouseout', function(){
        clueWrapper.classList.remove('clue__wrapper-active')
    })
}
// Открытие/Закрытие селектов
const selectInputArray = document.querySelectorAll('.select__input')
for (let i = 0; i < selectInputArray.length; i++) {
    const selectInput = selectInputArray[i];
    const selectTitle = selectInput.parentElement.querySelector('.select__title')
    selectFun(selectInput, selectTitle)
}
function selectUp(selectInput, selectTitle) {
    if (selectInput.value != '') {
        selectTitle.classList.add('select__title-active')
    }
}
// Функция открытие/Закрытие селектов
function selectFun(selectInput, selectTitle) {
    selectInput.addEventListener('click', function(){
        const select = selectInput.parentElement
        const options = selectInput.parentElement.querySelector('.options')
        const optionArray = options.querySelectorAll('.option')
        select.classList.toggle('select-active')
        if (select.classList.contains('select-active')) {
            options.classList.add('options_active')
        } else {
            options.classList.remove('options_active')
        }
        for (let i = 0; i < optionArray.length; i++) {
            const option = optionArray[i];
            option.addEventListener('click', function(){
                selectInput.value = option.textContent
                if (select.classList.contains('select_up')) {
                    selectUp(selectInput, selectTitle)
                }
            options.classList.remove('options_active')
                select.classList.remove('select-active')
            })
        }
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(select);
            if ( ! withinBoundaries ) {
                select.classList.remove('select-active')
                options.classList.remove('options_active')
            }
        }) //Закрытие селекта по щелчку вне меню
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                select.classList.remove('select-active')
                options.classList.remove('options_active')
            }
        }) //Закрытие селекта по нажатию на ESC
    })
}
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

// Расчёт дней и стоимости
const priceDay = 1666
const documRangeArray = document.querySelectorAll('.docum__range')
const documAccessInput = document.querySelector('.docum__access-input')
const tariffsSale = document.getElementById('tariffs-sale')
const tariffsPrice = document.getElementById('tariffs-price')
const tariffsVat = document.getElementById('tariffs-vat')
const tariffsDayPrice = document.getElementById('tariffs-day-price')
const tariffsTotalPrice = document.getElementById('tariffs-total-price')
const tariffsTotalVat = document.getElementById('tariffs-total-vat')
const additionalRecruiters = document.getElementById('additional-recruiters')
const percentageOfCost = document.getElementById('percentage-of-cost')
const paymentTotalPrice = document.getElementById('payment-total-price')
const paymentTotalVat = document.getElementById('payment-total-vat')

for (let i = 0; i < documRangeArray.length; i++) {
    const documRange = documRangeArray[i];
    const documRangeInput = documRange.querySelector('.range__input')
    const documRangeMeaning = documRange.querySelector('.range__meaning')
    let documRangeMeaningPosition = documRangeInput.value * 100 / documRangeInput.max
    documRangeMeaning.style.left = `${documRangeMeaningPosition}%`
    documRangeInput.addEventListener('input', function(){
        documRangeMeaning.textContent = documRangeInput.value
        let documRangeMeaningPosition = documRangeInput.value * 100 / documRangeInput.max
        documRangeMeaning.style.left = `${documRangeMeaningPosition}%`
        documAccessInputNum ()
    })   
}
const additionalRecruitersOptionArray = additionalRecruiters.parentElement.querySelectorAll('.option')
let risePrice = 1
let sale = 1
for (let i = 0; i < additionalRecruitersOptionArray.length; i++) {
    const additionalRecruitersOption = additionalRecruitersOptionArray[i];
    additionalRecruitersOption.addEventListener('click', function(){
        switch (additionalRecruitersOption.dataset.recruiters) {
            case "1":
                percentageOfCost.value = '0%'
                risePrice = 1
                break;
            case "2":
                percentageOfCost.value = '+ 5%'
                risePrice = 1.05
                break;
            case "3":
                percentageOfCost.value = '+ 10%'
                risePrice = 1.1
                break;
            case "4":
                percentageOfCost.value = '+ 15%'
                risePrice = 1.15
                break;
            default:
                break;
        }
        totalPrice(documAccessInput.value)
    })
}


function documAccessInputNum (){
    const rangeDays =  document.getElementById('range-days')
    const rangeDaysValue = rangeDays.value
    const rangeDaysMeaning = rangeDays.parentElement.querySelector('.range__meaning')
    const rangeMonthsValue = document.getElementById('range-months').value
    if (Number(rangeMonthsValue) === 12) {
        rangeDays.value = 0
        rangeDaysMeaning.textContent = 0
        rangeDaysMeaning.style.left = 0
        rangeDays.disabled = true
        rangeDays.classList.add('range__input-disabled')
        documAccessInput.value = 360
        totalPrice(documAccessInput.value)
    } else {
        rangeDays.disabled = false
        rangeDays.classList.remove('range__input-disabled')
        documAccessInput.value = Number(rangeDaysValue) + Number(rangeMonthsValue)*30
        totalPrice(documAccessInput.value)
    }
}
function totalPrice(days){
    if (days < 31) {
        tariffsSale.value = 'Без скидок'
        sale = 1
    }
    if (days > 30) {
        tariffsSale.value = 'Скидка 5%'
        sale = 0.95
    }
    if (days > 90) {
        tariffsSale.value = 'Скидка 10%'
        sale = 0.9
    }
    if (days > 180) {
        tariffsSale.value = 'Скидка 20%'
        sale = 0.8
    }
    
    tariffsDayPrice.value = (priceDay * sale * risePrice).toFixed(2)
    tariffsPrice.value = (days * priceDay * sale * risePrice).toFixed(2)
    tariffsTotalPrice.value = tariffsPrice.value
    
    tariffsVat.value = ( (tariffsPrice.value * 20/100) / (1 + 20/100) ).toFixed(2)
    tariffsTotalVat.value = ( (tariffsTotalPrice.value * 20/100) / (1 + 20/100) ).toFixed(2)
}

const tariffsCurrency = document.getElementById('tariffs-currency')
const tariffsCurrencyOptionArray = tariffsCurrency.parentElement.querySelectorAll('.option')
const labelCurrencyArray = tariffsCurrency.parentElement.parentElement.querySelectorAll('.label__currency')
for (let i = 0; i < tariffsCurrencyOptionArray.length; i++) {
    const tariffsCurrencyOption = tariffsCurrencyOptionArray[i];
    tariffsCurrencyOption.addEventListener('click', function(){
        for (let i = 0; i < labelCurrencyArray.length; i++) {
            const labelCurrency = labelCurrencyArray[i];
            labelCurrency.textContent = tariffsCurrencyOption.textContent
        }
    })
}
const tariffsCurrencyTotal = document.getElementById('tariffs-currency-total')
const tariffsCurrencyTotalArray = tariffsCurrencyTotal.parentElement.querySelectorAll('.option')
const labelCurrencyTotalArray = tariffsCurrencyTotal.parentElement.parentElement.querySelectorAll('.label__currency')
const tariffsDayPriceCurrency = tariffsDayPrice.parentElement.querySelector('.label__currency')
for (let i = 0; i < tariffsCurrencyTotalArray.length; i++) {
    const tariffsCurrencyTotal = tariffsCurrencyTotalArray[i];
    tariffsCurrencyTotal.addEventListener('click', function(){
        for (let i = 0; i < labelCurrencyTotalArray.length; i++) {
            const labelCurrencyTotal = labelCurrencyTotalArray[i];
            labelCurrencyTotal.textContent = tariffsCurrencyTotal.textContent
            tariffsDayPriceCurrency.textContent = tariffsCurrencyTotal.textContent
        }
    })
}