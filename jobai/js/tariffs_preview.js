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
// Работа TABS 
const tabArray = document.querySelectorAll('.tab')
const sectionTabArray = document.querySelectorAll('.section__tab')
const sectionNavArray = document.querySelectorAll('.section__nav')
for (let i = 0; i < tabArray.length; i++) {
    const tab = tabArray[i];
    tab.addEventListener('click', function(){
        const dataTab = tab.dataset.tab
        openSectionTab(dataTab)
    })
}
for (let i = 0; i < sectionNavArray.length; i++) {
    const sectionNav = sectionNavArray[i];
    sectionNav.addEventListener('click', function(){
        const dataTab = sectionNav.dataset.nav
        openSectionTab(dataTab)
    })
}
function openSectionTab(dataTab) {
    for (let i = 0; i < sectionTabArray.length; i++) {
        const sectionTab = sectionTabArray[i];
        if (sectionTab.dataset.tab === dataTab) {
            sectionTab.classList.add('section__tab-active')
        } else {
            sectionTab.classList.remove('section__tab-active')
        }
    }
    for (let i = 0; i < tabArray.length; i++) {
        const tab = tabArray[i];
        if (tab.dataset.tab === dataTab) {
            tab.classList.add('tab_active')
        } else {
            tab.classList.remove('tab_active')
        }
    }
}
// Расчёт дней и стоимости
const priceDay = 1666
const sectionRangeArray = document.querySelectorAll('.section__range')
const sectionAccessInput = document.querySelector('.section__access-input')
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

for (let i = 0; i < sectionRangeArray.length; i++) {
    const sectionRange = sectionRangeArray[i];
    const sectionRangeInput = sectionRange.querySelector('.range__input')
    const sectionRangeMeaning = sectionRange.querySelector('.range__meaning')
    let sectionRangeMeaningPosition = sectionRangeInput.value * 100 / sectionRangeInput.max
    sectionRangeMeaning.style.left = `${sectionRangeMeaningPosition}%`
    sectionRangeInput.addEventListener('input', function(){
        sectionRangeMeaning.textContent = sectionRangeInput.value
        let sectionRangeMeaningPosition = sectionRangeInput.value * 100 / sectionRangeInput.max
        sectionRangeMeaning.style.left = `${sectionRangeMeaningPosition}%`
        sectionAccessInputNum ()
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
        totalPrice(sectionAccessInput.value)
    })
}

function sectionAccessInputNum (){
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
        sectionAccessInput.value = 360
        totalPrice(sectionAccessInput.value)
    } else {
        rangeDays.disabled = false
        rangeDays.classList.remove('range__input-disabled')
        sectionAccessInput.value = Number(rangeDaysValue) + Number(rangeMonthsValue)*30
        totalPrice(sectionAccessInput.value)
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
for (let i = 0; i < tariffsCurrencyTotalArray.length; i++) {
    const tariffsCurrencyTotal = tariffsCurrencyTotalArray[i];
    tariffsCurrencyTotal.addEventListener('click', function(){
        for (let i = 0; i < labelCurrencyTotalArray.length; i++) {
            const labelCurrencyTotal = labelCurrencyTotalArray[i];
            labelCurrencyTotal.textContent = tariffsCurrencyTotal.textContent
        }
    })
}