// Экспорт массивов
import {citys} from './arrays.js';

const compoundItemVisible = document.querySelector('.compound__item-visible')
const compoundItemPromo = document.querySelector('.compound__item-promo')
compoundItemVisible.addEventListener('click', function(){
    compoundItemPromo.classList.toggle('compound__item-promo-active')
    if (compoundItemPromo.classList.contains('compound__item-promo-active')) {
        compoundItemPromo.style.height = `${compoundItemPromo.scrollHeight}px`
    } else {
        compoundItemPromo.style.height = 0
    }
})
// Кнопка телефонов
const tel = document.querySelector('.tel')
const telChevrone = document.querySelector('.tel__chevron')
const telWrapper = document.querySelector('.tel__wrapper')
telChevrone.addEventListener('click', function(){
    telWrapper.classList.toggle('tel__wrapper-active')
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(tel);
        if ( ! withinBoundaries ) {
            telWrapper.classList.remove('tel__wrapper-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            telWrapper.classList.remove('tel__wrapper-active')
        }
    });
})
// Переключение вкладок Кому доставка
const designItemBtnArr = document.querySelectorAll('.placing__item-btn')
const deliverymethodDelivery = document.querySelector('.deliverymethod__delivery')
const deliverymethodPickup = document.querySelector('.deliverymethod__pickup')
const designRecipient = document.querySelector('.design__recipient')
const designMe = document.querySelector('.design__me')
for (let i = 0; i < designItemBtnArr.length; i++) {
    const element = designItemBtnArr[i];
    element.addEventListener('click', function () {
        for (let i = 0; i < designItemBtnArr.length; i++) {
            const el = designItemBtnArr[i];
            el.classList.remove('placing__item-btn-active')
        }
        element.classList.add('placing__item-btn-active')
        switch (element.dataset.placing) {
            case 'delivery':
                deliverymethodDelivery.classList.add('deliverymethod__delivery-active')
                deliverymethodPickup.classList.remove('deliverymethod__pickup-active')
                break;
            case 'pickup':
                deliverymethodDelivery.classList.remove('deliverymethod__delivery-active')
                deliverymethodPickup.classList.add('deliverymethod__pickup-active')
                break;
            case 'recipient':
                designRecipient.classList.add('design__recipient-active')
                designMe.classList.remove('design__me-active')
                break;
            case 'me':
                designRecipient.classList.remove('design__recipient-active')
                designMe.classList.add('design__me-active')
                break;
            default:
                break;
        }
    })
}
// Количество открыток 
const designQuantityBtnArr = document.querySelectorAll('.design__quantity-btn')
for (let i = 0; i < designQuantityBtnArr.length; i++) {
    const element = designQuantityBtnArr[i];
    element.addEventListener('click', function(){
        const designQuantityText = element.parentElement.querySelector('.design__quantity-text')
        if (element.classList.contains('design__quantity-minus')) {
            if (Number(designQuantityText.textContent) > 0) {
                designQuantityText.textContent = `${Number(designQuantityText.textContent) - 1}`
            }
        }
        if (element.classList.contains('design__quantity-plus')) {
            designQuantityText.textContent = `${Number(designQuantityText.textContent) + 1} `
        }
    })
}

// меню выбора города
const deliverymethodItemCity = document.querySelector('.deliverymethod__item-city')
const deliverymethodItemOptions = document.querySelector('.deliverymethod__item-options')
const deliverymethodItemAddress = document.querySelector('.deliverymethod__item-address')
deliverymethodItemCity.addEventListener('click', function(){
    deliverymethodItemOptions.classList.add('deliverymethod__item-options-active')
    deliverymethodItemOptions.textContent = ''
    for (let i = 0; i < citys.length; i++) {
        const element = citys[i];
        const deliverymethodItemOption = document.createElement('p')
        deliverymethodItemOption.classList.add('deliverymethod__item-option')
        deliverymethodItemOption.textContent = element
        deliverymethodItemOptions.append(deliverymethodItemOption)
    }
    deliverymethodItemCity.addEventListener('input', function(){
        deliverymethodItemOptions.textContent = ''
        for (let i = 0; i < citys.length; i++) {
            const el = citys[i];
            if (el.toLowerCase().includes(deliverymethodItemCity.value.toLowerCase())) {
                const deliverymethodItemOption = document.createElement('p')
                deliverymethodItemOption.classList.add('deliverymethod__item-option')
                deliverymethodItemOption.textContent = el
                deliverymethodItemOptions.append(deliverymethodItemOption)
            }
        }
    })
    const deliverymethodItemOptionArr = deliverymethodItemOptions.querySelectorAll('.deliverymethod__item-option')
    for (let i = 0; i < deliverymethodItemOptionArr.length; i++) {
        const element = deliverymethodItemOptionArr[i];
        element.addEventListener('click', function(){
            deliverymethodItemCity.value = element.textContent
            deliverymethodItemOptions.classList.remove('deliverymethod__item-options-active')
        })
    }
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(deliverymethodItemAddress);
        if ( ! withinBoundaries ) {
            deliverymethodItemOptions.classList.remove('deliverymethod__item-options-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            deliverymethodItemOptions.classList.remove('deliverymethod__item-options-active')
        }
    });
})
// Маска для телефона
$(function(){
    $("#phone-input").mask("+7 (999) 999-9999");
});

// Продолжить
const placingBtnNext = document.querySelector('.placing__btn-next')
const deliverymethod = document.querySelector('.deliverymethod')
const design = document.querySelector('.design')
const phoneInput = document.getElementById('phone-input')
const phoneOutput = document.getElementById('phone-output')
placingBtnNext.addEventListener('click', function(){
    deliverymethod.classList.remove('deliverymethod-active')
    design.classList.add('design-active')
    phoneOutput.value = phoneInput.value
})
const headerBottomLinkArr = document.querySelectorAll('.header__bottom-link')
for (let i = 0; i < headerBottomLinkArr.length; i++) {
    const element = headerBottomLinkArr[i];
    element.addEventListener('click', function(event){
        event.preventDefault()
        if (deliverymethod.classList.contains('deliverymethod-active')) {
            window.history.back()
        } else {
            deliverymethod.classList.add('deliverymethod-active')
            design.classList.remove('design-active')
        }
        

    })
}

// Дата и время работы
const deliverymethodDatetime1 = document.querySelector('.deliverymethod__datetime1')
const deliverymethodDatetime2 = document.querySelector('.deliverymethod__datetime2')
working(deliverymethodDatetime1)
working(deliverymethodDatetime2)
function working(param) {
    const deliverymethodItemDatetime = param.querySelector('.deliverymethod__item-datetime')
    const deliverymethodItemInput = deliverymethodItemDatetime.querySelector('.input')
    const choice = param.querySelector('.choice')
    const choiceSelect = param.querySelector('.choice__select')
    const choiceSelectP = choiceSelect.querySelector('.choice__select-p')
    const choiceOptions = param.querySelector('.choice__options')
    const choiceTimeSelect = param.querySelector('.choice__time-select')
    const choiceTimeOptions = param.querySelector('.choice__time-options')
    // открытие и закрытие меню
    deliverymethodItemDatetime.addEventListener('click', function(){
        choice.classList.toggle('choice-active')
        document.addEventListener('mousedown', (e) => {
            const withinBoundaries = e.composedPath().includes(param);
            if ( ! withinBoundaries ) {
                choice.classList.remove('choice-active')
                choiceSelect.classList.remove('choice__select-active')
                choiceOptions.classList.remove('choice__options-active')
                choiceTimeSelect.classList.remove('choice__time-select-active')
                choiceTimeOptions.classList.remove('choice__time-options-active')
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                workingText.classList.remove('working-active')
                choice.classList.remove('choice-active')
                choiceSelect.classList.remove('choice__select-active')
                choiceOptions.classList.remove('choice__options-active')
                choiceTimeSelect.classList.remove('choice__time-select-active')
                choiceTimeOptions.classList.remove('choice__time-options-active')
            }
        });
    })
    // открытие и закрытие подменю
    choiceSelect.addEventListener('click', function(){
        choiceTimeSelect.classList.remove('choice__time-select-active')
        choiceTimeOptions.classList.remove('choice__time-options-active')
        choiceSelect.classList.toggle('choice__select-active')
        choiceOptions.classList.toggle('choice__options-active')
    })
    choiceTimeSelect.addEventListener('click', function(){
        choiceSelect.classList.remove('choice__select-active')
        choiceOptions.classList.remove('choice__options-active')
        choiceTimeSelect.classList.toggle('choice__time-select-active')
        choiceTimeOptions.classList.toggle('choice__time-options-active')
    })
    // функции дней и месяцев 
    function getWeekDay(date) {
        let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        return days[date.getDay()];
    }
    function getMonth(month) {
        let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return months[month.getMonth()];
    }
    // Меняем текст в хедере
    const today = new Date()
    deliverymethodItemInput.value = `${today.getDate()} ${getMonth(today)}, с 11:00 до 21:00`
    // построение контекта табов 
    const choiceTabArr = param.querySelectorAll('.choice__tab')
    const choiceOptionArr = param.querySelectorAll('.choice__option')
    for (let i = 0; i < choiceTabArr.length; i++) {
        const element = choiceTabArr[i];
        const daysNumber = element.querySelector('.choice__number')
        const daysDays = element.querySelector('.choice__days')
        const today = new Date()
        today.setDate(today.getDate() + i)
        daysNumber.textContent = today.getDate()
        if (i > 1) {
            daysDays.textContent = getWeekDay(today)
        }
        element.addEventListener('click', function(){
            for (let i = 0; i < choiceTabArr.length; i++) {
                const el = choiceTabArr[i];
                el.classList.remove('choice__tab-active')
            }
            element.classList.add('choice__tab-active')
            for (let i = 0; i < choiceOptionArr.length; i++) {
                const element = choiceOptionArr[i];
                element.classList.remove('choice__option-active')
            }
            choiceOptionArr[i].classList.add('choice__option-active')
            choiceSelectP.textContent = choiceOptionArr[i].textContent
        })
    }
    // построение контента селектов
    for (let i = 0; i < choiceOptionArr.length; i++) {
        const element = choiceOptionArr[i];
        const today = new Date()
        today.setDate(today.getDate() + i)
        switch (i) {
            case 0:
                element.textContent =  `Сегодня ${today.getDate()} ${getMonth(today)}`
                break;
            case 1:
                element.textContent =  `Завтра ${today.getDate()} ${getMonth(today)}`
                break;
            default:
                element.textContent = `${today.getDate()} ${getMonth(today)}`
                break;
        }
        element.addEventListener('click', function(){
            for (let i = 0; i < choiceOptionArr.length; i++) {
                const el = choiceOptionArr[i];
                el.classList.remove('choice__option-active')
            }
            element.classList.add('choice__option-active')
            choiceSelectP.textContent = element.textContent
            for (let i = 0; i < choiceTabArr.length; i++) {
                const element = choiceTabArr[i];
                element.classList.remove('choice__tab-active')
            }
            if (i < 4) {
                choiceTabArr[i].classList.add('choice__tab-active')
            } 
            choiceSelect.classList.remove('choice__select-active')
            choiceOptions.classList.remove('choice__options-active')
        })
    }
    // Выбор времени
    const choiceTimeOptionArr = param.querySelectorAll('.choice__time-option')
    const choiceTimeText = param.querySelector('.choice__time-text')
    for (let i = 0; i < choiceTimeOptionArr.length; i++) {
        const element = choiceTimeOptionArr[i];
        element.addEventListener('click', function () {
            choiceTimeText.textContent = element.textContent
            choiceTimeSelect.classList.remove('choice__time-select-active')
            choiceTimeOptions.classList.remove('choice__time-options-active')
        })
    }
    // Кнопка применить
    const choiceBtn = param.querySelector('.choice__btn')
    choiceBtn.addEventListener('click', function(){
        deliverymethodItemInput.value = `${choiceSelect.textContent}, ${choiceTimeText.textContent}`
        choice.classList.remove('choice-active')
        choiceSelect.classList.remove('choice__select-active')
        choiceOptions.classList.remove('choice__options-active')
        choiceTimeSelect.classList.remove('choice__time-select-active')
        choiceTimeOptions.classList.remove('choice__time-options-active')
    })
}