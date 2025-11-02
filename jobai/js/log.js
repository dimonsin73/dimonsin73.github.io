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
const popupIconArray = document.querySelectorAll('.popup__icon')
for (let i = 0; i < popupIconArray.length; i++) {
    const popupIcon = popupIconArray[i];
    const popup = popupIcon.parentElement.parentElement
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

const popupBtnArray = document.querySelectorAll('.popup__btn')
for (let i = 0; i < popupBtnArray.length; i++) {
    const popupBtn = popupBtnArray[i];
    popupBtn.addEventListener('click', function(){
        const popupWrapper = popupBtn.parentElement.parentElement
        const popup = popupWrapper.parentElement
        const dataBtn = popupBtn.dataset.btn
        for (let i = 0; i < hiroBlockArray.length; i++) {
            const hiroBlock = hiroBlockArray[i];
            if (hiroBlock.dataset.block === dataBtn) {
                hiroBlock.style.display = 'flex'
                hiroArrow.classList.add('hiro__arrow-hide')
            } else {
                hiroBlock.style.display = 'none'
            }
        }
        popupWrapper.classList.add('neumorphic-act')
        setTimeout(() => {
            popup.classList.remove('popup_active')
        }, 100);
    })
}


const hiroWrapper = document.querySelector('.hiro__wrapper')
const hiroArrow = document.querySelector('.hiro__arrow')
const hiroBlockExample = document.querySelector('.hiro__block-example')
hiroWrapper.addEventListener('scroll', function() {
    if (hiroBlockFirst.style.display != 'none') {
        hiroArrow.classList.add('hiro__arrow-hide')
        hiroBlockExample.classList.add('hiro__block-example-up')
        if (hiroWrapper.scrollTop === 0) {
            hiroArrow.classList.remove('hiro__arrow-hide')
            hiroBlockExample.classList.remove('hiro__block-example-up')
        } 
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

// Регистрация/Авторизация 
const role = document.querySelector('#role')
const hiroBtnFirst = document.querySelector('.hiro__btn-first')
const hiroBtnSecondPrevArray = document.querySelectorAll('.hiro__btn-second-prev')
const hiroBtnSecondNextArray = document.querySelectorAll('.hiro__btn-second-next')
const hiroBtnThirdPrevArray = document.querySelectorAll('.hiro__btn-third-prev')
const hiroBtnThirdNextArray = document.querySelectorAll('.hiro__btn-third-next')
const hiroBtnFourthPrevArray = document.querySelectorAll('.hiro__btn-fourth-prev')
const hiroBtnFourthNextArray = document.querySelectorAll('.hiro__btn-fourth-next')
const hiroBtnFifthhPrevArray = document.querySelectorAll('.hiro__btn-fifth-prev')
const hiroBtnFifthNextArray = document.querySelectorAll('.hiro__btn-fifth-next')
const hiroBtnRestartArray = document.querySelectorAll('.hiro__btn-restart')
const neumorphicRememberArray = document.querySelectorAll('.neumorphic-remember')
const hiroBtnResetArray = document.querySelectorAll('.hiro__btn-reset')
const hiroBtnNoResetArray = document.querySelectorAll('.hiro__btn-noreset')
const hiroBtnNewpassword = document.querySelector('.hiro__btn-newpassword')
const hiroBtnSecondRegArray = document.querySelectorAll('.hiro__btn-second-reg')
const hiroBtnReg = document.querySelector('.hiro__btn-reg')
const hiroBtnCompanyNext = document.querySelector('.hiro__btn-company-next')
const hiroBtnCompanyPrev = document.querySelector('.hiro__btn-company-prev')
const hiroBtnWarningNextArray = document.querySelectorAll('.hiro__btn-warning-next')
const hiroBtnWarningPrevArray = document.querySelectorAll('.hiro__btn-warning-prev')

const hiroBlockSearch = document.querySelector('.hiro__block-search')
const hiroBlockFirst = document.querySelector('.hiro__block-first')
const hiroBlockSecondArray = document.querySelectorAll('.hiro__block-second')
const hiroBlockThirdArray = document.querySelectorAll('.hiro__block-third')
const hiroBlockFourthArray = document.querySelectorAll('.hiro__block-fourth')
const hiroBlockFifthArray = document.querySelectorAll('.hiro__block-fifth')
const hiroBlockBlockingArray = document.querySelectorAll('.hiro__block-blocking')
const hiroBlockRememberArray = document.querySelectorAll('.hiro__block-remember')
const hiroBlockNewpassword = document.querySelector('.hiro__block-newpassword')
const hiroBlockWarningArray = document.querySelectorAll('.hiro__block-warning')

hiroBtnFirst.addEventListener('click', function(){
    const radioInputArray = hiroBtnFirst.parentElement.querySelectorAll('.radio__input')
    for (let i = 0; i < radioInputArray.length; i++) {
        const radioInput = radioInputArray[i];
        if (radioInput.checked) {
            const dataFirst = radioInput.id
            if (role.checked) {
                if (dataFirst === 'avtorizaciya') {
                    for (let i = 0; i < hiroBlockThirdArray.length; i++) {
                        const hiroBlockThird = hiroBlockThirdArray[i];
                        if (hiroBlockThird.dataset.block === `${dataFirst}-email`) {
                            hiroBlockThird.style.display = 'flex'
                        }
                    }
                }
                if (dataFirst === 'registraciya') {
                    for (let i = 0; i < hiroBlockSecondArray.length; i++) {
                        const hiroBlockSecond = hiroBlockSecondArray[i];
                        if (hiroBlockSecond.dataset.block === `${dataFirst}-company`) {
                            hiroBlockSecond.style.display = 'flex'
                        }
                    }
                }
                
            } else {
                for (let i = 0; i < hiroBlockSecondArray.length; i++) {
                    const hiroBlockSecond = hiroBlockSecondArray[i];
                    if (hiroBlockSecond.dataset.block === dataFirst) {
                        hiroBlockSecond.style.display = 'flex'
                    }
                }
            }
            role.disabled = true
            hiroBlockFirst.style.display = 'none'
            hiroArrow.classList.add('hiro__arrow-hide')
            hiroBlockExample.classList.add('hiro__block-example-hide')
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
        const radioArray = hiroBlockFirst.querySelectorAll('.radio__input')
        for (let i = 0; i < radioArray.length; i++) {
            const radio = radioArray[i];
            radio.checked = false
        }
        role.disabled = false
        hiroArrow.classList.remove('hiro__arrow-hide')
        hiroBlockExample.classList.remove('hiro__block-example-hide')
    })
}
for (let i = 0; i < hiroBtnSecondNextArray.length; i++) {
    const hiroBtnSecondNext = hiroBtnSecondNextArray[i];
    hiroBtnSecondNext.addEventListener('click', function(){
        const radioInputArray = hiroBtnSecondNext.parentElement.parentElement.querySelectorAll('.radio__input')
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
                for (let i = 0; i < hiroBlockSecondArray.length; i++) {
                    const hiroBlockSecond = hiroBlockSecondArray[i];
                    hiroBlockSecond.style.display = 'none'
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
            const input = hiroBlockThird.querySelector('.neumorphic-input')
            input.classList.remove('neumorphic-input-error')
        }
        if (role.checked) {
            hiroBlockFirst.style.display = 'flex'
            const radioArray = hiroBlockFirst.querySelectorAll('.radio__input')
            for (let i = 0; i < radioArray.length; i++) {
                const radio = radioArray[i];
                radio.checked = false
            }
            role.disabled = false
        } else {
            const dataPrev = hiroBtnThirdPrev.dataset.prev
            for (let i = 0; i < hiroBlockSecondArray.length; i++) {
                const hiroBlockSecond = hiroBlockSecondArray[i];
                if (hiroBlockSecond.dataset.block === dataPrev) {
                    hiroBlockSecond.style.display = 'flex'
                }
                const radioArray = hiroBlockSecond.querySelectorAll('.radio__input')
                for (let i = 0; i < radioArray.length; i++) {
                    const radio = radioArray[i];
                    radio.checked = false
                }
            }
        }
    })
}
for (let i = 0; i < hiroBtnThirdNextArray.length; i++) {
    const hiroBtnThirdNext = hiroBtnThirdNextArray[i];
    hiroBtnThirdNext.addEventListener('click', function(){
        const inputThird = hiroBtnThirdNext.parentElement.parentElement.querySelector('.neumorphic-input')
        if (inputThird.value.length != 0) {
            for (let i = 0; i < hiroBlockThirdArray.length; i++) {
                const hiroBlockThird = hiroBlockThirdArray[i];
                hiroBlockThird.style.display = 'none'
            }
            const dataBlock = hiroBtnThirdNext.dataset.block
            const data = hiroBtnThirdNext.dataset.reg
            if (data === 'registraciya') {
                if (inputThird.value === 'd.p.mezentsev@job-ai.ru' || inputThird.value === '+79852208991') {
                    if (inputThird.value === 'd.p.mezentsev@job-ai.ru') {
                        for (let i = 0; i < hiroBlockWarningArray.length; i++) {
                            const hiroBlockWarning = hiroBlockWarningArray[i];
                            if (hiroBlockWarning.dataset.block === 'warning-email') {
                                hiroBlockWarning.style.display = 'flex'
                            }
                        } 
                    }
                    if (inputThird.value === '+79852208991') {
                       for (let i = 0; i < hiroBlockWarningArray.length; i++) {
                            const hiroBlockWarning = hiroBlockWarningArray[i];
                            if (hiroBlockWarning.dataset.block === 'warning-tel') {
                                hiroBlockWarning.style.display = 'flex'
                            }
                        }  
                    }
                    hiroBlockSearch.style.display = 'none'
                } else {
                    for (let i = 0; i < hiroBlockFourthArray.length; i++) {
                        const hiroBlockFourth = hiroBlockFourthArray[i];
                        if (hiroBlockFourth.dataset.block === dataBlock) {
                            hiroBlockFourth.style.display = 'flex'
                            const timer = hiroBlockFourth.querySelector('.timer')
                            const neumorphicCode = hiroBlockFourth.querySelector('.neumorphic-code')
                            const neumorphicNewcode = hiroBlockFourth.querySelector('.neumorphic-newcode')
                            timerFun(timer, neumorphicCode, neumorphicNewcode)
                        } else {
                            hiroBlockFourth.style.display = 'none'
                        }
                    }
                }
            } else {
                for (let i = 0; i < hiroBlockFourthArray.length; i++) {
                    const hiroBlockFourth = hiroBlockFourthArray[i];
                    if (hiroBlockFourth.dataset.block === dataBlock) {
                        hiroBlockFourth.style.display = 'flex'
                        
                    } else {
                        hiroBlockFourth.style.display = 'none'
                    }
                }
            }
            
        } else {
            inputThird.classList.add('neumorphic-input-error')
        }
    })
}
for (let i = 0; i < hiroBtnFourthPrevArray.length; i++) {
    const hiroBtnFourthPrev = hiroBtnFourthPrevArray[i];
    hiroBtnFourthPrev.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockFourthArray.length; i++) {
            const hiroBlockFourth = hiroBlockFourthArray[i];
            hiroBlockFourth.style.display = 'none'
        }
        const dataPrev = hiroBtnFourthPrev.dataset.prev
        for (let i = 0; i < hiroBlockThirdArray.length; i++) {
            const hiroBlockThird = hiroBlockThirdArray[i];
            if (hiroBlockThird.dataset.block === dataPrev) {
                hiroBlockThird.style.display = 'flex'
            }
        }
    })
}
for (let i = 0; i < hiroBtnFourthNextArray.length; i++) {
    const hiroBtnFourthNext = hiroBtnFourthNextArray[i];
    hiroBtnFourthNext.addEventListener('click', function(){
        const radioInputArray = hiroBtnFourthNext.parentElement.parentElement.querySelectorAll('.radio__input')
        for (let i = 0; i < radioInputArray.length; i++) {
            const radioInput = radioInputArray[i];
            if (radioInput.checked) {
                const dataFourth = radioInput.id
                for (let i = 0; i < hiroBlockFifthArray.length; i++) {
                    const hiroBlockFifth = hiroBlockFifthArray[i];
                    if (hiroBlockFifth.dataset.block === dataFourth) {
                        hiroBlockFifth.style.display = 'flex'
                        const timer = hiroBlockFifth.querySelector('.timer')
                        const neumorphicCode = hiroBlockFifth.querySelector('.neumorphic-code')
                        const neumorphicNewcode = hiroBlockFifth.querySelector('.neumorphic-newcode')
                        if (timer != null) {
                           timerFun(timer, neumorphicCode, neumorphicNewcode) 
                        }
                    }
                }
                for (let i = 0; i < hiroBlockFourthArray.length; i++) {
                    const hiroBlockFourth = hiroBlockFourthArray[i];
                    hiroBlockFourth.style.display = 'none'
                }
            }
        }
    })
}
for (let i = 0; i < hiroBtnFifthhPrevArray.length; i++) {
    const hiroBtnFifthhPrev = hiroBtnFifthhPrevArray[i];
    hiroBtnFifthhPrev.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockFifthArray.length; i++) {
            const hiroBlockFifth = hiroBlockFifthArray[i];
            hiroBlockFifth.style.display = 'none'
            const input = hiroBlockFifth.querySelector('.neumorphic-input')
            input.classList.remove('neumorphic-input-error')
        }
        const dataPrev = hiroBtnFifthhPrev.dataset.prev
        for (let i = 0; i < hiroBlockFourthArray.length; i++) {
            const hiroBlockFourth = hiroBlockFourthArray[i];
            if (hiroBlockFourth.dataset.block === dataPrev) {
                hiroBlockFourth.style.display = 'flex'
                
                const radioInputArray = hiroBlockFourth.querySelectorAll('.radio__input')
                for (let i = 0; i < radioInputArray.length; i++) {
                    const radioInput = radioInputArray[i];
                    radioInput.checked = false
                }
            }
        }
    })
}
for (let i = 0; i < hiroBtnFifthNextArray.length; i++) {
    const hiroBtnFifthNext = hiroBtnFifthNextArray[i];
    hiroBtnFifthNext.addEventListener('click', function(){
        const inputFifth = hiroBtnFifthNext.parentElement.parentElement.querySelector('.neumorphic-input')
        if (inputFifth.value.length != 0) {
            switch (inputFifth.value) {
                case 'Fortuna666':
                    inputFifth.classList.add('neumorphic-input-error')
                    const blockFifth = hiroBtnFifthNext.parentElement.parentElement
                    const neuError = blockFifth.querySelector('.neumorphic-error')

                    const neuTimer = blockFifth.querySelector('.neumorphic-timer')
                    if (neuTimer != null) {
                        neuTimer.style.display = 'none'
                        neuError.style.display = 'block'
                        setTimeout(() => {
                            neuError.style.display = 'none'
                            neuTimer.style.display = 'flex'
                        }, 5000)
                    }
                    const neuRemember = hiroBtnFifthNext.parentElement.parentElement.querySelector('.neumorphic-remember')
                    console.log(neuRemember)
                    if (neuRemember != null) {
                        neuRemember.style.display = 'none'
                        neuError.style.display = 'block'
                        setTimeout(() => {
                            neuError.style.display = 'none'
                            neuRemember.style.display = 'flex'
                        }, 5000)
                    }
                    break;
                case 'Fortuna777':
                    const dataBlocking = hiroBtnFifthNext.dataset.blocking
                    hiroBlockSearch.style.display = 'none'
                    for (let i = 0; i < hiroBlockArray.length; i++) {
                        const hiroBlock = hiroBlockArray[i];
                        if (hiroBlock.dataset.block === dataBlocking) {
                            hiroBlock.style.display = 'flex'
                        } else {
                            hiroBlock.style.display = 'none'
                        }
                    }
                    for (let i = 0; i < hiroBlockFifthArray.length; i++) {
                        const hiroBlockFifth = hiroBlockFifthArray[i];
                        hiroBlockFifth.style.display = 'none'
                    }
                    for (let i = 0; i < hiroBlockFourthArray.length; i++) {
                        const hiroBlockFourth = hiroBlockFourthArray[i];
                        hiroBlockFourth.style.display = 'none'
                    }
                    break;
                default:
                    const dataBlock = hiroBtnFifthNext.dataset.block
                    hiroBlockSearch.style.display = 'none'
                    for (let i = 0; i < hiroBlockArray.length; i++) {
                        const hiroBlock = hiroBlockArray[i];
                        if (hiroBlock.dataset.block === dataBlock) {
                            hiroBlock.style.display = 'flex'
                        } else {
                            hiroBlock.style.display = 'none'
                        }
                    }
                    for (let i = 0; i < hiroBlockFifthArray.length; i++) {
                        const hiroBlockFifth = hiroBlockFifthArray[i];
                        hiroBlockFifth.style.display = 'none'
                    }
                    for (let i = 0; i < hiroBlockFourthArray.length; i++) {
                        const hiroBlockFourth = hiroBlockFourthArray[i];
                        hiroBlockFourth.style.display = 'none'
                    }
                    break;
            }
        } else {
            inputFifth.classList.add('neumorphic-input-error')
            const blockFifth = hiroBtnFifthNext.parentElement.parentElement
            const neuError = blockFifth.querySelector('.neumorphic-error')

            const neuTimer = blockFifth.querySelector('.neumorphic-timer')
            if (neuTimer != null) {
                neuTimer.style.display = 'none'
                neuError.style.display = 'block'
                setTimeout(() => {
                    neuError.style.display = 'none'
                    neuTimer.style.display = 'flex'
                }, 5000)
            }
            const neuRemember = hiroBtnFifthNext.parentElement.parentElement.querySelector('.neumorphic-remember')
            if (neuRemember != null) {
                neuRemember.style.display = 'none'
                neuError.style.display = 'block'
                setTimeout(() => {
                    neuError.style.display = 'none'
                    neuRemember.style.display = 'flex'
                }, 5000)
            }
        }
    })
}
for (let i = 0; i < hiroBtnRestartArray.length; i++) {
    const hiroBtnRestart = hiroBtnRestartArray[i];
    hiroBtnRestart.addEventListener('click', function(){
        location.reload()
    })
}
for (let i = 0; i < neumorphicRememberArray.length; i++) {
    const neumorphicRemember = neumorphicRememberArray[i];
    neumorphicRemember.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockFifthArray.length; i++) {
            const hiroBlockFifth = hiroBlockFifthArray[i];
            hiroBlockFifth.style.display = 'none'
        }
        hiroBlockSearch.style.display = 'none'
        const dataRemember = neumorphicRemember.dataset.block
        for (let i = 0; i < hiroBlockRememberArray.length; i++) {
            const hiroBlockRemember = hiroBlockRememberArray[i];
            if (hiroBlockRemember.dataset.block === dataRemember) {
                hiroBlockRemember.style.display = 'flex'
            }
        }
    })
}
for (let i = 0; i < hiroBtnResetArray.length; i++) {
    const hiroBtnReset = hiroBtnResetArray[i];
    hiroBtnReset.addEventListener('click', function(){
        const passwordRecovery = hiroBtnReset.parentElement.parentElement.querySelector('.neumorphic-input')
        if (passwordRecovery.value.length != 0) {
            for (let i = 0; i < hiroBlockRememberArray.length; i++) {
                const hiroBlockRemember = hiroBlockRememberArray[i];
                if (hiroBlockRemember.dataset.block === 'remember-finish') {
                    hiroBlockRemember.style.display = 'flex'
                } else {
                    hiroBlockRemember.style.display = 'none'
                }
            }
        } else {
            passwordRecovery.classList.add('neumorphic-input-error')
        }
    })
}

for (let i = 0; i < hiroBtnNoResetArray.length; i++) {
    const hiroBtnNoReset = hiroBtnNoResetArray[i];
    hiroBtnNoReset.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockRememberArray.length; i++) {
            const hiroBlockRemember = hiroBlockRememberArray[i];
            hiroBlockRemember.style.display = 'none'
        }
        hiroBlockSearch.style.display = 'flex'
        const dataNoreset = hiroBtnNoReset.dataset.prev
        for (let i = 0; i < hiroBlockFifthArray.length; i++) {
            const hiroBlockFifth = hiroBlockFifthArray[i];
            if (hiroBlockFifth.dataset.block === dataNoreset) {
                hiroBlockFifth.style.display = 'flex'
            } else {
                hiroBlockFifth.style.display = 'none'
            }
        }
    })
}
for (let i = 0; i < hiroBtnSecondRegArray.length; i++) {
    const hiroBtnSecondReg = hiroBtnSecondRegArray[i];
    hiroBtnSecondReg.addEventListener('click', function(){
        const dataNext = hiroBtnSecondReg.dataset.next
        for (let i = 0; i < hiroBlockSecondArray.length; i++) {
            const hiroBlockSecond = hiroBlockSecondArray[i];
            if (hiroBlockSecond.dataset.block === dataNext) {
                hiroBlockSecond.style.display = 'flex'
            } 
            else (
                hiroBlockSecond.style.display = 'none'
            )
        }
    })
}
hiroBtnCompanyNext.addEventListener('click', function(){
    const dataBlock = hiroBtnCompanyNext.dataset.block
    for (let i = 0; i < hiroBlockSecondArray.length; i++) {
        const hiroBlockSecond = hiroBlockSecondArray[i];
        hiroBlockSecond.style.display = 'none'
    }
    for (let i = 0; i < hiroBlockThirdArray.length; i++) {
        const hiroBlockThird = hiroBlockThirdArray[i];
        if (hiroBlockThird.dataset.block === dataBlock) {
            hiroBlockThird.style.display = 'flex'
        }else {
            hiroBlockThird.style.display = 'none'
        }
    }
})
hiroBtnCompanyPrev.addEventListener('click', function(){
    const dataBlock = hiroBtnCompanyPrev.dataset.block
    for (let i = 0; i < hiroBlockSecondArray.length; i++) {
        const hiroBlockSecond = hiroBlockSecondArray[i];
        if (hiroBlockSecond.dataset.block === dataBlock) {
            hiroBlockSecond.style.display = 'flex'
        } else {
            hiroBlockSecond.style.display = 'none'
        }
    }
})
hiroBtnReg.addEventListener('click', function(){
    const dataPrev = hiroBtnReg.dataset.prev
    for (let i = 0; i < hiroBlockSecondArray.length; i++) {
        const hiroBlockSecond = hiroBlockSecondArray[i];
        if (hiroBlockSecond.dataset.block === dataPrev) {
            hiroBlockSecond.style.display = 'flex'
        } 
        else (
            hiroBlockSecond.style.display = 'none'
        )
    }
})
hiroBtnNewpassword.addEventListener('click', function(){
    for (let i = 0; i < hiroBlockRememberArray.length; i++) {
        const hiroBlockRemember = hiroBlockRememberArray[i];
        hiroBlockRemember.style.display = 'none'
    }
    hiroBlockNewpassword.style.display = 'flex'
})
for (let i = 0; i < hiroBtnWarningNextArray.length; i++) {
    const hiroBtnWarningNext = hiroBtnWarningNextArray[i];
    hiroBtnWarningNext.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockWarningArray.length; i++) {
            const hiroBlockWarning = hiroBlockWarningArray[i];
            hiroBlockWarning.style.display = 'none'
        }
        for (let i = 0; i < hiroBlockSecondArray.length; i++) {
            const hiroBlockSecond = hiroBlockSecondArray[i];
            if (hiroBlockSecond.dataset.block === 'avtorizaciya') {
                hiroBlockSecond.style.display = 'flex'
            }
        }
        hiroBlockSearch.style.display = 'flex'
    })
}
for (let i = 0; i < hiroBtnWarningPrevArray.length; i++) {
    const hiroBtnWarningPrev = hiroBtnWarningPrevArray[i];
    hiroBtnWarningPrev.addEventListener('click', function(){
        const data = hiroBtnWarningPrev.dataset.prev
        for (let i = 0; i < hiroBlockThirdArray.length; i++) {
            const hiroBlockThird = hiroBlockThirdArray[i];
            if (hiroBlockThird.dataset.block === data) {
                hiroBlockThird.style.display = 'flex'
            }
        }
        for (let i = 0; i < hiroBlockWarningArray.length; i++) {
            const hiroBlockWarning = hiroBlockWarningArray[i];
            hiroBlockWarning.style.display = 'none'
        }
        hiroBlockSearch.style.display = 'flex'
    })
}


const neumorphicInputArray = document.querySelectorAll('.neumorphic-input')
for (let i = 0; i < neumorphicInputArray.length; i++) {
    const neumorphicInput = neumorphicInputArray[i];
    neumorphicInput.addEventListener('input', function(){
        neumorphicInput.classList.remove('neumorphic-input-error')
    })
}
function timerFun(timer, neumorphicCode, neumorphicNewcode) {
    const minutes = timer.querySelector('.timer__minutes')
    const seconds = timer.querySelector('.timer__seconds')
    let minutesValue =  Number(minutes.textContent)
    let secondsValue = Number(seconds.textContent)
    setInterval(function() {
        if (secondsValue > 0) {
            secondsValue--
        } else {
            if (minutesValue - 1 >= 0) {
                minutesValue--
                secondsValue = 60 - 1
            } else {
                clearInterval
            }
        }
        if (secondsValue < 10) {
            seconds.textContent = `0${secondsValue}`
        } else {
            seconds.textContent = secondsValue
        }
        if (minutesValue < 10) {
            minutes.textContent = `0${minutesValue}`
        } else {
            minutes.textContent = minutesValue
        }
    }, 1000)
    setTimeout(function(){
        timer.style.display = 'none'
        neumorphicNewcode.style.display = 'flex'
        neumorphicCode.style.display = 'none'
    }, 60000)
}


const neumorphicPasswordArray = document.querySelectorAll('.neumorphic-password')
for (let i = 0; i < neumorphicPasswordArray.length; i++) {
    const neumorphicPassword = neumorphicPasswordArray[i];
    neumorphicPassword.addEventListener('click', function(){
        neumorphicPassword.classList.toggle('neumorphic-password-slash')
        const input = neumorphicPassword.nextSibling
        if (neumorphicPassword.classList.contains('neumorphic-password-slash')) {
            input.setAttribute('type', 'text')
        } else {
            input.setAttribute('type', 'password')
        }
    })
}
// Поля ввода
const password = document.getElementById('password')
const passwordSecond = document.getElementById('password-repeat')
const hiroPassword = password.parentElement
const hiroPasswordRepeat = passwordSecond.parentElement
const hiroPasswordTextError = document.querySelector('.hiro__password-text-error')
const hiroPasswordSave = document.querySelector('.hiro__password-save')
const hiroPasswordReset = document.querySelector('.hiro__password-reset')
// Проверка надёжности пароля
password.addEventListener('input', function(){
    const hiroLine = password.nextSibling
    const hiroLineItemArr = hiroLine.children
    attributLineAddColor(password, hiroLineItemArr)
    passwordComparison()
})
passwordSecond.addEventListener('input', function(){
    const hiroLine = passwordSecond.nextSibling
    const hiroLineItemArr = hiroLine.children
    attributLineAddColor(passwordSecond, hiroLineItemArr)
    passwordComparison()
})
// Ф-ия очистки цветов
function attributLineRemoveColor(element) {
    element.classList.remove('hiro__line-orange')
    element.classList.remove('hiro__line-success')
    element.classList.remove('hiro__line-error')
}
// Ф-ция окрашивания 
function attributLineAddColor(password, hiroLineItemArr) {
    if (password.value.length < 16) {
        for (let i = 0; i < hiroLineItemArr.length; i++) {
            const element = hiroLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < hiroLineItemArr.length; i++) {
            const element = hiroLineItemArr[i];
            element.classList.add('hiro__line-success')
        }
    }
    if (password.value.length < 14) {
        for (let i = 0; i < hiroLineItemArr.length; i++) {
            const element = hiroLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 3; i++) {
            const element = hiroLineItemArr[i];
            element.classList.add('hiro__line-success')
        }
    }
    if (password.value.length < 12) {
        for (let i = 0; i < hiroLineItemArr.length; i++) {
            const element = hiroLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = hiroLineItemArr[i];
            element.classList.add('hiro__line-orange')
        }
    }
    if (password.value.length < 8) {
        for (let i = 0; i < hiroLineItemArr.length; i++) {
            const element = hiroLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 1; i++) {
            const element = hiroLineItemArr[i];
            element.classList.add('hiro__line-error')
        }
    }
    if (password.value.length === 0) {
        for (let i = 0; i < hiroLineItemArr.length; i++) {
            const element = hiroLineItemArr[i];
            attributLineRemoveColor(element)
        }
    }
}
// Ф-ция проверки совпадения паролей
function passwordComparison() {
    if (passwordSecond.value.length === 0) {
        hiroPasswordRepeat.classList.remove('hiro__password-error')
    } else {
        if (passwordSecond.value != password.value) {
            hiroPasswordRepeat.classList.add('hiro__password-error')
            const hiroLine = passwordSecond.nextSibling
            const hiroLineItemArr = hiroLine.children
            for (let i = 0; i < hiroLineItemArr.length; i++) {
                const element = hiroLineItemArr[i];
                attributLineRemoveColor(element)
            }
            for (let i = 0; i < 2; i++) {
                const element = hiroLineItemArr[i];
                element.classList.add('hiro__line-error')
            }
            hiroPasswordTextError.textContent = 'Пароли не совпадают'
            hiroPasswordTextError.classList.remove('hiro__password-text-noerror')
            hiroPasswordReset.style.display = 'flex'
            hiroPasswordSave.style.display = 'none'
        } else {
            hiroPasswordRepeat.classList.remove('hiro__password-error')
            hiroPasswordTextError.textContent = 'Пароли совпадают'
            hiroPasswordTextError.classList.add('hiro__password-text-noerror')
            hiroPasswordReset.style.display = 'none'
            if (password.value.length > 7) {
                hiroPasswordSave.style.display = 'flex'
            } else {
                hiroPasswordSave.style.display = 'none'
            }
        }
    }
}
// Функция очистки полей 
hiroPasswordReset.addEventListener('click', function(){
    password.value = ''
    passwordSecond.value = ''
    const hiroLine = password.nextSibling
    const hiroLineItemArr = hiroLine.children
    for (let i = 0; i < hiroLineItemArr.length; i++) {
        const element = hiroLineItemArr[i];
        attributLineRemoveColor(element)
    }
    const hiroLine2 = passwordSecond.nextSibling
    const hiroLineItemArr2 = hiroLine2.children
    for (let i = 0; i < hiroLineItemArr2.length; i++) {
        const element = hiroLineItemArr2[i];
        attributLineRemoveColor(element)
    }
    hiroPasswordRepeat.classList.remove('hiro__password-error')
})

const hiroTextareaArray = document.querySelectorAll('.hiro__textarea')
for (let i = 0; i < hiroTextareaArray.length; i++) {
    const hiroTextarea = hiroTextareaArray[i];  
    hiroTextarea.addEventListener('input', function(){
        const hiroTextareaValue = hiroTextarea.parentElement.querySelector('.hiro__textarea-value')
        const hiroTextareaValueLength = hiroTextarea.value.length
        hiroTextareaValue.textContent = `${hiroTextareaValueLength} символов`
    })
}
// Каледнарь 
let datepicker = new Datepicker('#job-start', {
    weekStart: 1
});
let datepicker1 = new Datepicker('#job-finish', {
    weekStart: 1
});
let datepicker2 = new Datepicker('#interview-start', {
    weekStart: 1
});
let datepicker3 = new Datepicker('#interview-finish', {
    weekStart: 1
});




const hiroBlockCloseArray = document.querySelectorAll('.hiro__block-close')
const popupWrapperArray = document.querySelectorAll('.popup__wrapper')
for (let i = 0; i < hiroBlockCloseArray.length; i++) {
    const hiroBlockClose = hiroBlockCloseArray[i];
    hiroBlockClose.addEventListener('click', function(){
        for (let i = 0; i < hiroBlockArray.length; i++) {
            const hiroBlock = hiroBlockArray[i];
            if (hiroBlock.dataset.block === 'search' || hiroBlock.dataset.block === 'first'|| hiroBlock.dataset.block === 'example') {
                hiroBlock.style.display = 'flex'
                hiroArrow.classList.remove('hiro__arrow-hide')
            } else {
                hiroBlock.style.display = 'none'
            }
        }
        for (let i = 0; i < popupWrapperArray.length; i++) {
            const popupWrapper = popupWrapperArray[i];
            popupWrapper.classList.remove('neumorphic-act')   
        }
    })
}
const neumorphicButtonNextArray = document.querySelectorAll('.neumorphic-button-next')

for (let i = 0; i < neumorphicButtonNextArray.length; i++) {
    const neumorphicButtonNext = neumorphicButtonNextArray[i];
    neumorphicButtonNext.addEventListener('click', function(){
        const hiroGridArray = neumorphicButtonNext.parentElement.parentElement.parentElement.querySelectorAll('.hiro__grid')
        const neumorphicInputArray = neumorphicButtonNext.parentElement.parentElement.querySelectorAll('.neumorphic-input')
        const dataGridbtn = neumorphicButtonNext.dataset.gridbtn
        let errorNum = 0
        if (neumorphicInputArray != null) {
            for (let i = 0; i < neumorphicInputArray.length; i++) {
                const neumorphicInput = neumorphicInputArray[i];
                if (neumorphicInput.dataset.valid === 'true') {
                    if (neumorphicInput.value.length === 0) {
                        neumorphicInput.classList.add('neumorphic-input-error')
                        errorNum++
                    }
                }
            }
        }
        if (neumorphicButtonNext.dataset.datepicker === 'true') {
            const hiroGrid = neumorphicButtonNext.parentElement.parentElement
            const neumorphicErrorArray = hiroGrid.querySelectorAll('.neumorphic-error')
            
            for (let i = 0; i < neumorphicInputArray.length; i++) {
                const neumorphicInput = neumorphicInputArray[i];
                if (neumorphicInput.value.length === 0) {
                    const dataDatepicker = neumorphicInput.dataset.datepicker
                    for (let i = 0; i < neumorphicErrorArray.length; i++) {
                        const neumorphicError = neumorphicErrorArray[i];
                        if (neumorphicError.dataset.datepicker === dataDatepicker) {
                            neumorphicError.style.display = 'block'
                        }
                    }
                } else {
                    neumorphicInput.classList.remove('neumorphic-input-error')
                    for (let i = 0; i < neumorphicErrorArray.length; i++) {
                        const neumorphicError = neumorphicErrorArray[i];
                        neumorphicError.style.display = 'none'
                    }
                }
            }
        }
        const neumorphicCheck = neumorphicButtonNext.parentElement.parentElement.querySelector('.check__input')
        if (neumorphicCheck != null) {
            if (neumorphicCheck.checked) {
            } else {
                errorNum++
            }
        }
        const neumorphicTextarea = neumorphicButtonNext.parentElement.parentElement.querySelector('.neumorphic-textarea')
        if (neumorphicTextarea != null) {
            if (neumorphicTextarea.value.trim().length === 0) {
                neumorphicTextarea.classList.add('neumorphic-textarea-error')
                errorNum++
            }
        }

        if (errorNum === 0) {
            for (let i = 0; i < hiroGridArray.length; i++) {
                const hiroGrid = hiroGridArray[i];
                if (hiroGrid.dataset.grid === dataGridbtn) {
                    hiroGrid.classList.add('hiro__grid-active')
                } else {
                    hiroGrid.classList.remove('hiro__grid-active')
                }
            }
        }
    })
}
const neumorphicButtonPrevArray = document.querySelectorAll('.neumorphic-button-prev')
for (let i = 0; i < neumorphicButtonPrevArray.length; i++) {
    const neumorphicButtonPrev = neumorphicButtonPrevArray[i];
    neumorphicButtonPrev.addEventListener('click', function(){
        const hiroGridArray = neumorphicButtonPrev.parentElement.parentElement.parentElement.querySelectorAll('.hiro__grid')
        const dataGridbtn = neumorphicButtonPrev.dataset.gridbtn
        for (let i = 0; i < hiroGridArray.length; i++) {
            const hiroGrid = hiroGridArray[i];
            if (hiroGrid.dataset.grid === dataGridbtn) {
                hiroGrid.classList.add('hiro__grid-active')
            } else {
                hiroGrid.classList.remove('hiro__grid-active')
            }
        }
    })
}

const neumorphicTextareaArray = document.querySelectorAll('.neumorphic-textarea')
for (let i = 0; i < neumorphicTextareaArray.length; i++) {
    const neumorphicTextarea = neumorphicTextareaArray[i];
    neumorphicTextarea.addEventListener('input', function(){
        neumorphicTextarea.classList.remove('neumorphic-textarea-error')
    })
}

const hiroLabelBtnArray = document.querySelectorAll('.hiro__label-btn')
for (let i = 0; i < hiroLabelBtnArray.length; i++) {
    const hiroLabelBtn = hiroLabelBtnArray[i];
    hiroLabelBtn.addEventListener('click', function(){
        const hirolabelContent = hiroLabelBtn.parentElement
        const itemArray = hirolabelContent.querySelectorAll('.hiro__label-item')
        if (itemArray.length < 5) {
            const hiroLabelItem = document.createElement('div')
            hiroLabelItem.classList.add('hiro__label-item')

            const hiroLabelDoc = document.createElement('button')
            hiroLabelDoc.classList.add('hiro__label-doc')
            hiroLabelDoc.setAttribute('type', 'button')
            hiroLabelDoc.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 4.7999C4.80005 3.47442 5.87457 2.3999 7.20005 2.3999H12.703C13.3395 2.3999 13.95 2.65276 14.4 3.10285L18.4971 7.1999C18.9472 7.64999 19.2 8.26044 19.2 8.89696V19.1999C19.2 20.5254 18.1255 21.5999 16.8 21.5999H7.20005C5.87456 21.5999 4.80005 20.5254 4.80005 19.1999V4.7999ZM7.20005 11.9999C7.20005 11.3372 7.73731 10.7999 8.40005 10.7999H15.6C16.2628 10.7999 16.8 11.3372 16.8 11.9999C16.8 12.6626 16.2628 13.1999 15.6 13.1999H8.40005C7.73731 13.1999 7.20005 12.6626 7.20005 11.9999ZM8.40005 15.5999C7.73731 15.5999 7.20005 16.1372 7.20005 16.7999C7.20005 17.4626 7.73731 17.9999 8.40005 17.9999H15.6C16.2628 17.9999 16.8 17.4626 16.8 16.7999C16.8 16.1372 16.2628 15.5999 15.6 15.5999H8.40005Z" fill="#6A6A73"/></svg> Презентация компании'

            const hiroLabelDelete = document.createElement('button')
            hiroLabelDelete.classList.add('hiro__label-delete')
            hiroLabelDelete.setAttribute('type', 'button')
            hiroLabelDelete.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#6A6A73"/></svg>`

            hiroLabelItem.append(hiroLabelDoc, hiroLabelDelete)
            hirolabelContent.append(hiroLabelItem)

            hiroLabelDelete.addEventListener('click', function(){
                const item = hiroLabelDelete.parentElement
                item.remove()
                hiroLabelBtn.classList.remove('hiro__label-btn-hide')
            })
            if (itemArray.length === 4) {
                hiroLabelBtn.classList.add('hiro__label-btn-hide')
            }
        } else {
        } 
    })
}
const hiroLabelBtnrezume = document.querySelector('.hiro__label-btnrezume')
hiroLabelBtnrezume.addEventListener('click', function(){
        const hirolabelContent = hiroLabelBtnrezume.parentElement
        const itemArray = hirolabelContent.querySelectorAll('.hiro__label-item')
        if (itemArray.length < 1) {
            const hiroLabelItem = document.createElement('div')
            hiroLabelItem.classList.add('hiro__label-item')

            const hiroLabelDoc = document.createElement('button')
            hiroLabelDoc.classList.add('hiro__label-doc')
            hiroLabelDoc.setAttribute('type', 'button')
            hiroLabelDoc.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 4.7999C4.80005 3.47442 5.87457 2.3999 7.20005 2.3999H12.703C13.3395 2.3999 13.95 2.65276 14.4 3.10285L18.4971 7.1999C18.9472 7.64999 19.2 8.26044 19.2 8.89696V19.1999C19.2 20.5254 18.1255 21.5999 16.8 21.5999H7.20005C5.87456 21.5999 4.80005 20.5254 4.80005 19.1999V4.7999ZM7.20005 11.9999C7.20005 11.3372 7.73731 10.7999 8.40005 10.7999H15.6C16.2628 10.7999 16.8 11.3372 16.8 11.9999C16.8 12.6626 16.2628 13.1999 15.6 13.1999H8.40005C7.73731 13.1999 7.20005 12.6626 7.20005 11.9999ZM8.40005 15.5999C7.73731 15.5999 7.20005 16.1372 7.20005 16.7999C7.20005 17.4626 7.73731 17.9999 8.40005 17.9999H15.6C16.2628 17.9999 16.8 17.4626 16.8 16.7999C16.8 16.1372 16.2628 15.5999 15.6 15.5999H8.40005Z" fill="#6A6A73"/></svg> Презентация компании'

            const hiroLabelDelete = document.createElement('button')
            hiroLabelDelete.classList.add('hiro__label-delete')
            hiroLabelDelete.setAttribute('type', 'button')
            hiroLabelDelete.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#6A6A73"/></svg>`

            hiroLabelItem.append(hiroLabelDoc, hiroLabelDelete)
            hirolabelContent.append(hiroLabelItem)

            hiroLabelDelete.addEventListener('click', function(){
                const item = hiroLabelDelete.parentElement
                item.remove()
                hiroLabelBtn.classList.remove('hiro__label-btnrezume-hide')
            })
            console.log(itemArray.length)
            if (itemArray.length === 0) {
                hiroLabelBtn.classList.add('hiro__label-btnrezume-hide')
            }
        } else {
        } 
    })

const hiroStatus = document.querySelector('.hiro__status')
const hiroStatusInput = hiroStatus.querySelector('.neumorphic-input')
const hiroStatusOptionArray = hiroStatus.querySelectorAll('.option')
const hiroStatusStatus = hiroStatus.querySelector('.hiro__status-status')
for (let i = 0; i < hiroStatusOptionArray.length; i++) {
    const hiroStatusOption = hiroStatusOptionArray[i];
    hiroStatusOption.addEventListener('click', function(){
        hiroStatusInput.classList.remove('neumorphic-input-error')
        if (hiroStatusOption.textContent === 'Сейчас не работаю') {
        } else {
            hiroStatusStatus.classList.remove('hiro__status-status-hide')
        }
    })
}

const cardsBtnArray = document.querySelectorAll('.cards-btn')
const cardsWrapperArray = document.querySelectorAll('.cards__wrapper')
const cardsclose = document.querySelector('.cards__btn')
for (let i = 0; i < cardsBtnArray.length; i++) {
    const cardsBtn = cardsBtnArray[i];
    cardsBtn.addEventListener('click', function(){
        const switchInput = cardsBtn.parentElement.querySelector('.switch__input')
        menu.classList.add('menu_hide')
        hiro.classList.add('hiro_hide')
        example.classList.add('example_active')
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
    example.classList.remove('example_active')
    for (let i = 0; i < cardsWrapperArray.length; i++) {
        const cardsWrapper = cardsWrapperArray[i];
        cardsWrapper.classList.remove('cards__wrapper-active')
    }
    menu.classList.remove('menu_hide')
    hiro.classList.remove('hiro_hide')
    window.scrollBy({
        top: 10000,
        behavior: "auto",
    });
})

const example = document.querySelector('.example')
const sectionToleftBtnArray = document.querySelectorAll('.section_toleft-btn')
for (let i = 0; i < sectionToleftBtnArray.length; i++) {
    const sectionToleftBtn = sectionToleftBtnArray[i];
    sectionToleftBtn.addEventListener('click', function(){
        example.scrollTo(0, 0)
    })  
}


const portfolioFitsAiArray = document.querySelectorAll('.portfolio__fits-ai')
for (let i = 0; i < portfolioFitsAiArray.length; i++) {
    const portfolioFitsAi = portfolioFitsAiArray[i];
    portfolioFitsAi.addEventListener('click', function(){
        const loader = portfolioFitsAi.parentElement.querySelector('.portfolio__loader')
        const portfolioSuccess = portfolioFitsAi.parentElement.querySelector('.portfolio__fits-success')
        portfolioFitsAi.classList.add('portfolio__fits-disabled')
        loader.classList.add('portfolio__loader-loading')

        function success() {
            portfolioFitsAi.style.display = 'none'
            loader.classList.remove('portfolio__loader-loading')
            loader.classList.add('portfolio__loader-success')
            portfolioSuccess.style.display = 'flex'
        }
        setTimeout(success, 5000)
    })
}

// Скрытие кнопок слайдера
const itcSliderArray = document.querySelectorAll('.itc-slider')
for (let i = 0; i < itcSliderArray.length; i++) {
    const itcSlider = itcSliderArray[i];
    const itcSliderItemArray = itcSlider.querySelectorAll('.itc-slider-item')
    const itcSliderItemActiveArray = itcSlider.querySelectorAll('.itc-slider-item-active')
    const itcSliderBtnArray = itcSlider.querySelectorAll('.itc-slider-btn')
    if (itcSliderItemArray.length === itcSliderItemActiveArray.length) {
        for (let i = 0; i < itcSliderBtnArray.length; i++) {
            const itcSliderBtn = itcSliderBtnArray[i];
            itcSliderBtn.classList.add('itc-slider-btn-hide')
        }
    }
}

const modalItemImgArray = document.querySelectorAll('.modal__item-img')
const modalSlider = document.querySelector('.modal-slider')
const modalSliderClose = document.querySelector('.modal-slider__close')
for (let i = 0; i < modalItemImgArray.length; i++) {
    const modalItemImg = modalItemImgArray[i];
    modalItemImg.addEventListener('click', function(){
        modalSlider.classList.add('modal-slider-active')
        let sliderElem = document.querySelector('#modal-slider');
        let slider = ItcSlider.getOrCreateInstance(sliderElem);
        slider.slideTo(i)
        console.log(i)
        modalSliderClose.addEventListener('click', function(){
            modalSlider.classList.remove('modal-slider-active')
            slider.dispose()
        })
    })
}
const btnModalopenArray = document.querySelectorAll('.btn-modalopen')
const modal = document.querySelector('.modal')
for (let i = 0; i < btnModalopenArray.length; i++) {
    const btnModalOpen = btnModalopenArray[i];
    btnModalOpen.addEventListener('click', function(){
        const dataModalopen = btnModalOpen.dataset.modalopen
        modal.classList.add('modal_active')
        const modalWrapperArray = modal.querySelectorAll('.modal__wrapper')
        const name = btnModalOpen.parentElement.parentElement.querySelector('.portfolio__title').textContent
        for (let i = 0; i < modalWrapperArray.length; i++) {
            const modalWrapper = modalWrapperArray[i];
            if (modalWrapper.dataset.modal === dataModalopen) {
                modalWrapper.classList.add('modal__wrapper-active')
                const modalClose = modalWrapper.querySelector('.modal__close')
                switch (modalWrapper.dataset.modal) {
                    case 'avatar':
                    const modalName = modalWrapper.querySelector('.modal__name')
                    modalName.textContent = name
                        const img = btnModalOpen.querySelector('.portfolio__avatar-img')
                        if (img != null) {
                            const imgSrc = img.getAttribute('src')
                            const modalAvatar = modal.querySelector('.modal__avatar')
                            const modalAvatarImg = document.createElement('img')
                            modalAvatarImg.classList.add('modal__avatar-img')
                            modalAvatarImg.setAttribute('src', imgSrc)
                            modalAvatar.append(modalAvatarImg)
                        }
                        const imglogo = btnModalOpen.querySelector('.portfolio__avatar-logo')
                        if (imglogo != null) {
                            const imgSrc = imglogo.getAttribute('src')
                            const modalAvatar = modal.querySelector('.modal__avatar')
                            const modalAvatarImg = document.createElement('img')
                            modalAvatarImg.classList.add('modal__avatar-logo')
                            modalAvatarImg.setAttribute('src', imgSrc)
                            modalAvatar.append(modalAvatarImg)
                        }
                        break;
                    default:
                        break;
                }
                modalClose.addEventListener('click', function(){
                    modal.classList.remove('modal_active')
                    const modalAvatarImg = modal.querySelector('.modal__avatar-img')
                    if (modalAvatarImg != null) {
                        modalAvatarImg.remove()
                    }
                    
                })
            } else {
                modalWrapper.classList.remove('modal__wrapper-active')
            }
        }
    })
}
// Работа ползунка
const rangeInputArray = document.querySelectorAll('.range__input')
for (let i = 0; i < rangeInputArray.length; i++) {
    const rangeInput = rangeInputArray[i];
    const rangeNumber = rangeInput.parentElement.querySelector('.range__number')
    rangeInput.addEventListener('input', function(){
        rangeNumber.textContent = `${rangeInput.value}%`
    })
}
// Disabled ползунка
const section = document.querySelector('.section_collapse')
const switchInputArray = section.querySelectorAll('.switch__input')
for (let i = 0; i < switchInputArray.length; i++) {
    const switchInput = switchInputArray[i];
    switchInput.addEventListener('change', function(){
        const rangeInput = switchInput.parentElement.parentElement.querySelector('.range__input')
        const rangeConclusion = switchInput.parentElement.parentElement.querySelector('.range__conclusion')
        if (switchInput.checked) {
            rangeInput.disabled = false
            rangeInput.classList.remove('range__input-disabled')
            rangeConclusion.classList.remove('range__conclusion-disabled')
        } else {
            rangeInput.disabled = true
            rangeInput.classList.add('range__input-disabled')
            rangeConclusion.classList.add('range__conclusion-disabled')
        }
    })
}