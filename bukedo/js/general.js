// Экспорт массивов
import {citys} from './arrays.js';

// футер раскрытие меню
const buyer = document.getElementById('buyer');
const list = document.querySelector('.footer__list')
buyer.addEventListener('click', function(){
    list.classList.toggle('footer__list-active')
    if (list.classList.contains('footer__list-active')) {
        list.style.height = `${list.scrollHeight}px`;
    } else {
        list.style.height = `0px`;
    }
})
// Кнопка Информация
const headerInfo = document.getElementById('header-info')
const headerDropdawn = document.querySelector('.header__dropdawn')
headerInfo.addEventListener('click', function(){
    headerDropdawn.classList.toggle('header__dropdawn-active')
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(headerInfo);
        if ( ! withinBoundaries ) {
            headerDropdawn.classList.remove('header__dropdawn-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            headerDropdawn.classList.remove('header__dropdawn-active')
        }
    });
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
// Дата и время работы
const headerLeftItem = document.querySelector('.header__left-item')
const headerBootomSmall=document.querySelector('.header__bottom-small')
working(headerLeftItem)
working(headerBootomSmall)
function working(param) {
    const headerWorking = param.querySelector('.header__working')
    const headerChoice = param.querySelector('.header__choice')
    const headerChoiceSelect = param.querySelector('.header__choice-select')
    const headerChoiceOptions = param.querySelector('.header__choice-options')
    const headerChoiceTimeSelect = param.querySelector('.header__choice-time-select')
    const headerChoiceTimeOptions = param.querySelector('.header__choice-time-options')
    const headerWorkingText = param.querySelector('.header__working-text')
    // открытие и закрытие меню
    headerWorking.addEventListener('click', function(){
        headerWorking.classList.toggle('header__working-active')
        headerChoice.classList.toggle('header__choice-active')
        document.addEventListener( 'mousedown', (e) => {
            const withinBoundaries = e.composedPath().includes(param);
            if ( ! withinBoundaries ) {
                headerWorking.classList.remove('header__working-active')
                headerChoice.classList.remove('header__choice-active')
                headerChoiceSelect.classList.remove('header__choice-select-active')
                headerChoiceOptions.classList.remove('header__choice-options-active')
                headerChoiceTimeSelect.classList.remove('header__choice-time-select-active')
                headerChoiceTimeOptions.classList.remove('header__choice-time-options-active')
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                headerWorking.classList.remove('header__working-active')
                headerChoice.classList.remove('header__choice-active')
                headerChoiceSelect.classList.remove('header__choice-select-active')
                headerChoiceOptions.classList.remove('header__choice-options-active')
                headerChoiceTimeSelect.classList.remove('header__choice-time-select-active')
                headerChoiceTimeOptions.classList.remove('header__choice-time-options-active')
            }
        });
    })
    // открытие и закрытие подменю
    headerChoiceSelect.addEventListener('click', function(){
        headerChoiceTimeSelect.classList.remove('header__choice-time-select-active')
        headerChoiceTimeOptions.classList.remove('header__choice-time-options-active')
        headerChoiceSelect.classList.toggle('header__choice-select-active')
        headerChoiceOptions.classList.toggle('header__choice-options-active')
    })
    headerChoiceTimeSelect.addEventListener('click', function(){
        headerChoiceSelect.classList.remove('header__choice-select-active')
        headerChoiceOptions.classList.remove('header__choice-options-active')
        headerChoiceTimeSelect.classList.toggle('header__choice-time-select-active')
        headerChoiceTimeOptions.classList.toggle('header__choice-time-options-active')
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
    headerWorkingText.textContent = `${today.getDate()} ${getMonth(today)}, с 11:00 до 21:00`
    // построение контекта табов 
    const headerChoiceTabArr = param.querySelectorAll('.header__choice-tab')
    const headerChoiceOptionArr = param.querySelectorAll('.header__choice-option')
    for (let i = 0; i < headerChoiceTabArr.length; i++) {
        const element = headerChoiceTabArr[i];
        const daysNumber = element.querySelector('.header__choice-number')
        const daysDays = element.querySelector('.header__choice-days')
        const today = new Date()
        today.setDate(today.getDate() + i)
        daysNumber.textContent = today.getDate()
        if (i > 1) {
            daysDays.textContent = getWeekDay(today)
        }
        element.addEventListener('click', function(){
            for (let i = 0; i < headerChoiceTabArr.length; i++) {
                const el = headerChoiceTabArr[i];
                el.classList.remove('header__choice-tab-active')
            }
            element.classList.add('header__choice-tab-active')
            for (let i = 0; i < headerChoiceOptionArr.length; i++) {
                const element = headerChoiceOptionArr[i];
                element.classList.remove('header__choice-option-active')
            }
            headerChoiceOptionArr[i].classList.add('header__choice-option-active')
            headerChoiceSelect.textContent = headerChoiceOptionArr[i].textContent
        })
    }
    // построение контента селектов
    for (let i = 0; i < headerChoiceOptionArr.length; i++) {
        const element = headerChoiceOptionArr[i];
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
            for (let i = 0; i < headerChoiceOptionArr.length; i++) {
                const el = headerChoiceOptionArr[i];
                el.classList.remove('header__choice-option-active')
            }
            element.classList.add('header__choice-option-active')
            headerChoiceSelect.textContent = element.textContent
            for (let i = 0; i < headerChoiceTabArr.length; i++) {
                const element = headerChoiceTabArr[i];
                element.classList.remove('header__choice-tab-active')
            }
            if (i < 4) {
                headerChoiceTabArr[i].classList.add('header__choice-tab-active')
            } 
            headerChoiceSelect.classList.remove('header__choice-select-active')
            headerChoiceOptions.classList.remove('header__choice-options-active')
        })
    }
    // Выбор времени
    const headerChoiceTimeOptionArr = param.querySelectorAll('.header__choice-time-option')
    const headerChoiceTimeSelectText = param.querySelector('.header__choice-time-select-text')
    for (let i = 0; i < headerChoiceTimeOptionArr.length; i++) {
        const element = headerChoiceTimeOptionArr[i];
        element.addEventListener('click', function () {
            headerChoiceTimeSelectText.textContent = element.textContent
            headerChoiceTimeSelect.classList.remove('header__choice-time-select-active')
            headerChoiceTimeOptions.classList.remove('header__choice-time-options-active')
        })
    }
    // Кнопка применить
    const headerChoiceBtn = param.querySelector('.header__choice-btn')
    headerChoiceBtn.addEventListener('click', function(){
        headerWorkingText.textContent = `${headerChoiceSelect.textContent}, ${headerChoiceTimeSelectText.textContent}`
        headerWorking.classList.remove('header__working-active')
        headerChoice.classList.remove('header__choice-active')
        headerChoiceSelect.classList.remove('header__choice-select-active')
        headerChoiceOptions.classList.remove('header__choice-options-active')
        headerChoiceTimeSelect.classList.remove('header__choice-time-select-active')
        headerChoiceTimeOptions.classList.remove('header__choice-time-options-active')
    })
}
// Выбор города
const headerCityText = document.querySelector('.header__city-text')
const modalCity = document.querySelector('.modal-city')
const modalCityWrapper = modalCity.querySelector('.modal-city__wrapper')
const modalCityClose = modalCity.querySelector('.modal-city__close')
headerCityText.addEventListener('click', function(){
    modalCity.classList.add('modal-city-active')
    const modalCityItemArr = modalCity.querySelectorAll('.modal-city__item')
    for (let i = 0; i < modalCityItemArr.length; i++) {
        const element = modalCityItemArr[i];
        element.addEventListener('click', function(){
            headerCityText.textContent = element.textContent
            modalCity.classList.remove('modal-city-active')
        })
    }
    modalCityClose.addEventListener('click', function(){
        modalCity.classList.remove('modal-city-active')
    })
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(modalCityWrapper);
        if ( ! withinBoundaries ) {
            modalCity.classList.remove('modal-city-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            modalCity.classList.remove('modal-city-active')
        }
    });
})
const modalCityList = modalCity.querySelector('.modal-city__list')
function createCitys(citys) {
    for (let i = 0; i < citys.length; i++) {
        const element = citys[i];
        const modalCityItem = document.createElement('li')
        modalCityItem.classList.add('modal-city__item')
        if (element == 'Москва' || element == 'Санкт-Петербург') {
            modalCityItem.classList.add('modal-city__item-black')
        }
        modalCityItem.textContent = element
        modalCityList.append(modalCityItem)
    } 
}
createCitys(citys)
const modalCityInput = modalCity.querySelector('.modal-city__input')
modalCityInput.addEventListener('input', function () {
    modalCityList.innerHTML = ''
    for (let i = 0; i < citys.length; i++) {
        const element = citys[i];
        const citysInput = []
        if (element.toLowerCase().includes(modalCityInput.value.toLowerCase())) {
            citysInput.push(element)
        }
        createCitys(citysInput)
    }
})
// Открытие подскаки при вводе
const searchClue = document.querySelector('.search__clue')
const searchInput = document.querySelector('.search__input')
searchInput.addEventListener('input', function () {
    searchClue.classList.add('search__clue-active')
})
searchInput.addEventListener('blur', function () {
    searchClue.classList.remove('search__clue-active')
})