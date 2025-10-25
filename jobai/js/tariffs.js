const headerBurger = document.querySelector('.header__burger')
const aside = document.querySelector('.aside')
headerBurger.addEventListener('click', function(){
    aside.classList.add('aside_active')
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(aside);
        if ( ! withinBoundaries ) {
            const withinBoundariesBurger = e.composedPath().includes(headerBurger);
            if (! withinBoundariesBurger) {
                aside.classList.remove('aside_active')
            }
        }
    }) //Скрытие Aside по щелчку вне 
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            aside.classList.remove('aside_active')
        }
    }) //Скрытие Aside по нажатию на ESC
})
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
// Поднятия заголовка для импута 
const labelInputArray = document.querySelectorAll('.label__input')
for (let i = 0; i < labelInputArray.length; i++) {
    const labelInput = labelInputArray[i];
    labelInput.addEventListener('focus', function(){
        const label = labelInput.parentElement
        label.classList.add('label-active')
    })
    labelInput.addEventListener('focusout', function(){
        if (labelInput.value === '') {
            const label = labelInput.parentElement
            label.classList.remove('label-active')
        }
    })
}
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
const paymentForPeriod = document.getElementById('payment-for-period')
const paymentTotalPrice = document.getElementById('payment-total-price')
const paymentTotalVat = document.getElementById('payment-total-vat')
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
        paymentForPeriod.value = 360
        totalPrice(tariffsAccessInput.value)
    } else {
        rangeDays.disabled = false
        rangeDays.classList.remove('range__input-disabled')
        tariffsAccessInput.value = Number(rangeDaysValue) + Number(rangeMonthsValue)*30
        paymentForPeriod.value = tariffsAccessInput.value
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
    paymentTotalPrice.value = tariffsPrice.value
    
    tariffsVat.value = ( (tariffsPrice.value * 22/100) / (1 + 22/100) ).toFixed(2)
    tariffsTotalVat.value = ( (tariffsTotalPrice.value * 22/100) / (1 + 22/100) ).toFixed(2)
    paymentTotalVat.value = tariffsTotalVat.value
}


const withVat = document.getElementById('with-vat')
withVat.addEventListener('change', function(){
    const label = paymentTotalVat.parentElement
    if (withVat.checked) {
        label.style.display = 'flex'
    } else {
        label.style.display = 'none'
    }
    
})
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
const enterMail = document.getElementById('enter-mail')
const enterMailLabel = document.querySelector('.enter-mail')
const sendEmail = document.getElementById('send-email')
const invoiceSend = document.querySelector('.invoice-send')
const personalAccount = document.getElementById('personal-account')
enterMail.addEventListener('input', function(){
    if (enterMail.value.length > 0) {
        sendEmail.style.display = 'block'
    } else {
        sendEmail.style.display = 'none'
    }
})
sendEmail.addEventListener('click', function(){
    enterMailLabel.style.display = 'none'
    invoiceSend.style.display = 'flex'
    personalAccount.style.display = 'flex'
})

const title = document.querySelector('.title')
const tariffsFormArray = document.querySelectorAll('.tariffs__form')
const tariffsFormStart = document.querySelector('.tariffs__form-start')
tariffsFormStart.addEventListener('submit', function(e){
    e.preventDefault()
    for (let i = 0; i < tariffsFormArray.length; i++) {
        const tariffsForm = tariffsFormArray[i];
        if (tariffsForm.dataset.tariffs === '2') {
            tariffsForm.style.display = 'flex'
            title.textContent = 'Выбор способа оплаты'
            tariffsBannerRabotodatel.classList.remove('tariffs__banner-min')
            for (let i = 0; i < tariffsFormArray.length; i++) {
                const tariffsForm = tariffsFormArray[i];
                tariffsForm.scrollTo(0, 0)
            }
        } else {
            tariffsForm.style.display = 'none'
        }
    }
})
const tariffsBack = document.getElementById('tariffs-back')
tariffsBack.addEventListener('click', function(){
    for (let i = 0; i < tariffsFormArray.length; i++) {
        const tariffsForm = tariffsFormArray[i];
        if (tariffsForm.dataset.tariffs === '1') {
            tariffsForm.style.display = 'flex'
            title.textContent = 'Тарифы'
            tariffsBannerRabotodatel.classList.remove('tariffs__banner-min')
            for (let i = 0; i < tariffsFormArray.length; i++) {
                const tariffsForm = tariffsFormArray[i];
                tariffsForm.scrollTo(0, 0)
            }
        } else {
            tariffsForm.style.display = 'none'
        }
    }
})

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
