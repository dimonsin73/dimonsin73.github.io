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

const hiroWrapper = document.querySelector('.hiro__wrapper')
const hiroArrow = document.querySelector('.hiro__arrow')
const hiroBlockExample = document.querySelector('.hiro__block-example')
hiroWrapper.addEventListener('scroll', function() {
    hiroArrow.classList.add('hiro__arrow-hide')
    hiroBlockExample.classList.add('hiro__block-example-up')
    if (hiroWrapper.scrollTop === 0) {
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
const navLinkArray = document.querySelectorAll('.nav__link')
for (let i = 0; i < navLinkArray.length; i++) {
    const navLink = navLinkArray[i];
    navLink.addEventListener('click', function(){
        const dataDocum = navLink.dataset.docum
        documFun(dataDocum)
    })
}
const navOther = document.querySelector('.nav__other')
const hiroBlockArray = document.querySelectorAll('.hiro__block')
navOther.addEventListener('click', function(){
    const dataDocum = navOther.dataset.docum
    hiroArrow.classList.add('hiro__arrow-hide')
    for (let i = 0; i < hiroBlockArray.length; i++) {
        const hiroBlock = hiroBlockArray[i];
        if (hiroBlock.dataset.block === dataDocum) {
            hiroBlock.style.display = 'flex'
        } else (
            hiroBlock.style.display = 'none'
        )
    }
})
const navOtherBtn = document.querySelector('.hiro__other-btn')
navOtherBtn.addEventListener('click', function(){
    hiroArrow.classList.remove('hiro__arrow-hide')
    for (let i = 0; i < hiroBlockArray.length; i++) {
        const hiroBlock = hiroBlockArray[i];
        if (hiroBlock.dataset.block === 'first' || hiroBlock.dataset.block === 'search' || hiroBlock.dataset.block === 'example') {
            hiroBlock.style.display = 'flex'
        } else (
            hiroBlock.style.display = 'none'
        )
    }
})

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
        documChat.classList.remove('docum__chat-active')
        documChatbtn.style.display = 'block'
        for (let i = 0; i < documContentHideArray.length; i++) {
            const documContentHide = documContentHideArray[i];
            documContentHide.style.display = 'flex'
        }
    })
}

const documBackArray = document.querySelectorAll('.docum__back')
for (let i = 0; i < documBackArray.length; i++) {
    const documBack = documBackArray[i];
    documBack.addEventListener("click", function(){
        if (window.innerWidth < '1023') {
            for (let i = 0; i < documWrapperArray.length; i++) {
                const documWrapper = documWrapperArray[i];
                if (documWrapper.dataset.docum === 'other') {
                    documWrapper.classList.add('docum__wrapper-active')
                } else {
                    documWrapper.classList.remove('docum__wrapper-active')
                }
            }
        } else {
            for (let i = 0; i < documWrapperArray.length; i++) {
                const documWrapper = documWrapperArray[i];
                documWrapper.classList.remove('docum__wrapper-active')
            }
            docum.classList.remove('docum_active')
            hiro.classList.remove('hiro_hide')
        }
        
    })
}
// Чат в Связаться с нами
const documChatbtn = document.querySelector('.docum__chatbtn')
const documChat = document.querySelector('.docum__chat')
const documChatClose = document.querySelector('.docum__chat-close')
const documContentHideArray = document.querySelectorAll('.docum__content-hide')
documChatbtn.addEventListener('click', function(){
    documChat.classList.add('docum__chat-active')
    documChatbtn.style.display = 'none'
    for (let i = 0; i < documContentHideArray.length; i++) {
        const documContentHide = documContentHideArray[i];
        documContentHide.style.display = 'none'
    }
})
documChatClose.addEventListener('click', function(){
    documChat.classList.remove('docum__chat-active')
    documChatbtn.style.display = 'block'
    for (let i = 0; i < documContentHideArray.length; i++) {
        const documContentHide = documContentHideArray[i];
        documContentHide.style.display = 'flex'
    }
})

const documAboutLanguage = document.querySelector(' .docum__about-language')
const documAboutDropdown  = document.querySelector('.docum__about-dropdown')
const documAboutOptionArray = document.querySelectorAll('.docum__about-option')
documAboutLanguage.addEventListener('click', function(){
    documAboutDropdown.classList.toggle('docum__about-dropdown-active')
})
for (let i = 0; i < documAboutOptionArray.length; i++) {
    const documAboutOption = documAboutOptionArray[i];
        documAboutOption.addEventListener('click', function(){
        const style = getComputedStyle(documAboutOption)
        const bgImage = style['background-image']
        documAboutLanguage.style.backgroundImage = bgImage
    })
}

// Расчёт дней и стоимости
const priceDay = 1666
const tariffsRangeArray = document.querySelectorAll('.tariffs__range')
const tariffsAccessInput = document.querySelector('.tariffs__access-input')
const tariffsSale = document.getElementById('tariffs-sale')
const tariffsPrice = document.getElementById('tariffs-price')
const tariffsVat = document.getElementById('tariffs-vat')
const tariffsDayPrice = document.getElementById('tariffs-day-price')
const tariffsTotalPrice = document.getElementById('tariffs-total-price')
const tariffsTotalVat = document.getElementById('tariffs-total-vat')
const additionalRecruiters = document.getElementById('additional-recruiters')
const percentageOfCost = document.getElementById('percentage-of-cost')
const tariffsBannerRabotodatel = document.querySelector('.tariffs__banner_rabotodatel')
for (let i = 0; i < tariffsRangeArray.length; i++) {
    const tariffsRange = tariffsRangeArray[i];
    const tariffsRangeInput = tariffsRange.querySelector('.range__input')
    const tariffsRangeMeaning = tariffsRange.querySelector('.range__meaning')
    let tariffsRangeMeaningPosition = tariffsRangeInput.value * 100 / tariffsRangeInput.max
    tariffsRangeMeaning.style.left = `${tariffsRangeMeaningPosition}%`
    tariffsRangeInput.addEventListener('input', function(){
        tariffsRangeMeaning.textContent = tariffsRangeInput.value
        let tariffsRangeMeaningPosition = tariffsRangeInput.value * 100 / tariffsRangeInput.max
        tariffsRangeMeaning.style.left = `${tariffsRangeMeaningPosition}%`
        tariffsAccessInputNum ()
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
        totalPrice(tariffsAccessInput.value)
    })
}


function tariffsAccessInputNum (){
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
        tariffsAccessInput.value = 360
        totalPrice(tariffsAccessInput.value)
    } else {
        rangeDays.disabled = false
        rangeDays.classList.remove('range__input-disabled')
        tariffsAccessInput.value = Number(rangeDaysValue) + Number(rangeMonthsValue)*30
        totalPrice(tariffsAccessInput.value)
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
    
    tariffsVat.value = ( (tariffsPrice.value * 22/100) / (1 + 22/100) ).toFixed(2)
    tariffsTotalVat.value = ( (tariffsTotalPrice.value * 22/100) / (1 + 22/100) ).toFixed(2)
}
const tariffsRadioInputArray = document.querySelectorAll('.tariffs__radio-input')
const invoice = document.getElementById('invoice')
const payBtn = document.getElementById('pay-btn')
const tariffsGrid7 = document.querySelector('.tariffs__grid7')
for (let i = 0; i < tariffsRadioInputArray.length; i++) {
    const tariffsRadioInput = tariffsRadioInputArray[i];
    tariffsRadioInput.addEventListener('change', function(){
        if (invoice.checked) {
            tariffsGrid7.style.opacity = '1'
            payBtn.style.display = 'none'
            invoiceSend.style.display = 'none'
            enterMailLabel.style.display = 'flex'
        } else {
            tariffsGrid7.style.opacity = '0'
            payBtn.style.display = 'flex'
            personalAccount.style.display = 'none'
        }
    })
}

const tariffsFormArray = document.querySelectorAll('.tariffs__form')
for (let i = 0; i < tariffsFormArray.length; i++) {
    const tariffsForm = tariffsFormArray[i];
    tariffsForm.addEventListener('scroll', function(){
        if (tariffsForm.scrollTop > 0) {
            tariffsBannerRabotodatel.classList.add('tariffs__banner-min')
            tariffsForm.classList.add('tariffs__form-max')
        } else {
            tariffsBannerRabotodatel.classList.remove('tariffs__banner-min')
            tariffsForm.classList.remove('tariffs__form-max')
        }
    })
}