// показать пароль
const dataPasswordShowArr = document.querySelectorAll('.data__password-show')
for (let i = 0; i < dataPasswordShowArr.length; i++) {
    const element = dataPasswordShowArr[i];
    element.addEventListener('click', function(){
        const dataPasswordInput = element.parentElement.querySelector('.data__password-input')
        dataPasswordInput.classList.toggle('data__password-input-show')
        if (dataPasswordInput.classList.contains('data__password-input-show')) {
            dataPasswordInput.setAttribute('type', 'text')
        } else {
            dataPasswordInput.setAttribute('type', 'password')
        }
    })
}
const dataForm = document.querySelector('.data__form')
// активация кнопки Сохранить
const dataBtn = document.querySelector('.data__btn-btn')
dataForm.addEventListener('input', function(){
    dataBtn.removeAttribute('disabled')
})
// Верификация
const passwordFirst = document.getElementById('password-first')
const passwordSecond = document.getElementById('password-second')
dataForm.addEventListener('submit', function(event){
    event.preventDefault()
    if (passwordFirst.value.length <= 5) {
        passwordFirst.parentElement.classList.add('data__password-item-error')
    }
    if (passwordFirst.value != passwordSecond.value) {
        passwordSecond.parentElement.classList.add('data__password-item-error')
    }
})
// Удаление ошибок
const dataPasswordInputArr = document.querySelectorAll('.data__password-input')
for (let i = 0; i < dataPasswordInputArr.length; i++) {
    const element = dataPasswordInputArr[i];
    element.addEventListener('input', function(){
        element.parentElement.classList.remove('data__password-item-error')
    })
}
// отображение заказов 
const myordersSelected = document.querySelector('.myorders__selected')
const myordersOptions = document.querySelector('.myorders__options')
const myordersActive = document.querySelector('.myorders__active')
const myordersCompleted = document.querySelector('.myorders__completed')
myordersSelected.addEventListener('click', function(){
    myordersOptions.classList.toggle('myorders__options-active')
    const myordersSelectedText = myordersSelected.querySelector('.myorders__selected-text ')
    const myordersOptionArr = myordersSelected.querySelectorAll('.myorders__option')
    for (let i = 0; i < myordersOptionArr.length; i++) {
        const element = myordersOptionArr[i];
        element.addEventListener('click', function(){
            myordersSelectedText.textContent = element.textContent
            switch (element.dataset.myorders) {
                case 'all':
                    myordersActive.style.display = 'flex'
                    myordersCompleted.style.display = 'flex'
                    break;
                case 'active':
                    myordersActive.style.display = 'flex'
                    myordersCompleted.style.display = 'none'
                    break;
                case 'completed':
                    myordersActive.style.display = 'none'
                    myordersCompleted.style.display = 'flex'
                    break;
                default:
                    break;
            }
        })
    }
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(myordersSelected);
        if ( ! withinBoundaries ) {
            myordersOptions.classList.remove('myorders__options-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            myordersOptions.classList.remove('myorders__options-active')
        }
    });
})
// выезд меню на маленьком экране 
const iconsBurger = document.querySelector('.icons__burger')
const navigation = document.querySelector('.navigation')
iconsBurger.addEventListener('click', function(){
    navigation.classList.toggle('navigation-active')
})
// Переходы по меню 
const navigationListItemArr = document.querySelectorAll('.navigation__list-item')
const accountArr = document.querySelector('.account').children
const data = document.querySelector('.data')
const myorders = document.querySelector('.myorders')
const compound = document.querySelector('.compound')
for (let i = 0; i < navigationListItemArr.length; i++) {
    const element = navigationListItemArr[i];
    element.addEventListener('click', function(){
        compound.style.display = 'none'
        for (let i = 0; i < navigationListItemArr.length; i++) {
            const el = navigationListItemArr[i];
            el.classList.remove('navigation__list-item-active')
        }
        element.classList.add('navigation__list-item-active')
        switch (element.dataset.account) {
            case 'data':
                for (let i = 0; i < accountArr.length; i++) {
                    const element = accountArr[i];
                    element.style.display = 'none'
                }
                data.style.display = 'flex'
                break;
            case 'myorders':
                for (let i = 0; i < accountArr.length; i++) {
                    const element = accountArr[i];
                    element.style.display = 'none'
                }
                myorders.style.display = 'flex'
                break;
            case 'exit':
                window.location.href = 'index.html'
                break;
            default:
                for (let i = 0; i < accountArr.length; i++) {
                    const element = accountArr[i];
                    element.style.display = 'none'
                }
                break;
        }
        navigation.classList.remove('navigation-active')
    })
}

const myordersActiveBtnArr = myordersActive.querySelectorAll('.myorders__item-details')
const orderArr = document.querySelectorAll('.order')
for (let i = 0; i < myordersActiveBtnArr.length; i++) {
    myordersActiveBtnArr[0].addEventListener('click', function(){
        for (let i = 0; i < navigationListItemArr.length; i++) {
            const el = navigationListItemArr[i];
            el.classList.remove('navigation__list-item-active')
        }
        for (let i = 0; i < orderArr.length; i++) {
            const element = orderArr[i];
            if (element.classList.contains('order-collected')) {
                element.style.display = 'flex'
            }
        }
        myorders.style.display = 'none'
        compound.style.display = 'flex'
    })
    myordersActiveBtnArr[1].addEventListener('click', function(){
        for (let i = 0; i < navigationListItemArr.length; i++) {
            const el = navigationListItemArr[i];
            el.classList.remove('navigation__list-item-active')
        }
        for (let i = 0; i < orderArr.length; i++) {
            const element = orderArr[i];
            if (element.classList.contains('order-payment')) {
                element.style.display = 'flex'
            }
        }
        myorders.style.display = 'none'
        compound.style.display = 'flex'
    })
}

const myordersCompletedBtnArr = myordersCompleted.querySelectorAll('.myorders__item-details')
for (let i = 0; i < myordersCompletedBtnArr.length; i++) {
    const element = myordersCompletedBtnArr[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < navigationListItemArr.length; i++) {
            const el = navigationListItemArr[i];
            el.classList.remove('navigation__list-item-active')
        }
        for (let i = 0; i < orderArr.length; i++) {
            const element = orderArr[i];
            if (element.classList.contains('order-done')) {
                element.style.display = 'flex'
            }
        }
        myorders.style.display = 'none'
        compound.style.display = 'flex'
    })
}
// Открытие редактирования 
const orderFooterEditArr = document.querySelectorAll('.order__footer-edit')
const edit = document.querySelector('.edit')
const editWrapper = document.querySelector('.edit__wrapper')
const editClose = document.querySelector('.edit__close')
const editBottomClose = document.querySelector('.edit__bottom-close')
for (let i = 0; i < orderFooterEditArr.length; i++) {
    const element = orderFooterEditArr[i];
    element.addEventListener('click', function(){
        edit.classList.add('edit-active')
    })
    editClose.addEventListener('click', function(){
        edit.classList.remove('edit-active')
    })
    editBottomClose.addEventListener('click', function(){
        edit.classList.remove('edit-active')
    })
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(editWrapper);
        if ( ! withinBoundaries ) {
            edit.classList.remove('edit-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            edit.classList.remove('edit-active')
        }
    });
}




const btnPayArr = document.querySelectorAll('.btn-pay')
const paymentcard = document.querySelector('.paymentcard')
const paymentcardWrapper = document.querySelector('.paymentcard__wrapper')
const paymentcardClose = document.querySelector('.paymentcard__close')
for (let i = 0; i < btnPayArr.length; i++) {
    const element = btnPayArr[i];
    element.addEventListener('click', function(){
        paymentcard.classList.add('paymentcard-active')
        // Скрытие раскрытие способов оплаты
        const paymentcardItemMore = document.querySelector('.paymentcard__item-more')
        const paymentcardMethodsContent = document.querySelector('.paymentcard__methods-content')
        paymentcardItemMore.addEventListener('click', function(){
            paymentcardMethodsContent.classList.toggle('paymentcard__methods-content-active')
            if (paymentcardMethodsContent.classList.contains('paymentcard__methods-content-active')) {
                paymentcardItemMore.textContent = 'Скрыть другие способы оплаты'
            } else {
                paymentcardItemMore.textContent = 'Другие способы оплаты'
            }
        })
        // Выбор способа оплаты 
        const paymentcardItemArr = document.querySelectorAll('.paymentcard__item')
        for (let i = 0; i < paymentcardItemArr.length; i++) {
            const element = paymentcardItemArr[i];
            element.addEventListener('click', function(){
                for (let i = 0; i < paymentcardItemArr.length; i++) {
                    const el = paymentcardItemArr[i];
                    el.classList.remove('paymentcard__item-active')
                }
                element.classList.add('paymentcard__item-active')
            })
        }
        // Выбор плательщика 
        const paymentcardTabArr = document.querySelectorAll('.paymentcard__tab')
        const paymentcardIndividual = document.querySelector('.paymentcard__individual')
        const paymentcardLegalentity = document.querySelector('.paymentcard__legalentity')
        for (let i = 0; i < paymentcardTabArr.length; i++) {
            const element = paymentcardTabArr[i];
            element.addEventListener('click', function(){
                for (let i = 0; i < paymentcardTabArr.length; i++) {
                    const el = paymentcardTabArr[i];
                    el.classList.remove('paymentcard__tab-active')
                }
                element.classList.add('paymentcard__tab-active')
                switch (element.dataset.tab) {
                    case 'individual':
                        paymentcardIndividual.classList.add('paymentcard__individual-active')
                        paymentcardLegalentity.classList.remove('paymentcard__legalentity-active')
                        break;
                    case 'legalentity':
                        paymentcardIndividual.classList.remove('paymentcard__individual-active')
                        paymentcardLegalentity.classList.add('paymentcard__legalentity-active')
                        break;
                    default:
                        break;
                }
            })
        }
        paymentcardClose.addEventListener('click', function(){
            paymentcard.classList.remove('paymentcard-active')
        })
        document.addEventListener( 'mousedown', (e) => {
            const withinBoundaries = e.composedPath().includes(paymentcardWrapper);
            if ( ! withinBoundaries ) {
                paymentcard.classList.remove('paymentcard-active')
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                paymentcard.classList.remove('paymentcard-active')
            }
        });
    })
}
// кнопка назад 
const backBtn = document.querySelector('.header__top-back-btn')
backBtn.addEventListener('click', function(){
    window.history.back()
})


// Экспорт массивов
import {flowers, colors, sizes, citys} from '../js/arrays.js';
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
working(headerLeftItem)
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
// открытие\закрытие каталога
const catalog = document.getElementById('catalog')
const popup = document.querySelector('.popup')
const popupFilters = popup.querySelector('.filters')
const popupListItemArr = popupFilters.querySelectorAll('.popup__list-item')
const contantItemArr = popup.querySelector('.contant').children
catalog.addEventListener('click', function(){
    popup.classList.toggle('popup-active')
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(popup);
        const withinBoundariesCatalog = e.composedPath().includes(catalog);
        if ( ! withinBoundaries ) {
            if (! withinBoundariesCatalog) {
                popup.classList.remove('popup-active')
            }
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            popup.classList.remove('popup-active')
        }
    });
})
// Работа подменю  
for (let i = 0; i < popupListItemArr.length; i++) {
    const element = popupListItemArr[i];
    element.addEventListener('mouseenter', function () {
        for (let i = 0; i < popupListItemArr.length; i++) {
            const element = popupListItemArr[i];
            element.classList.remove('popup__list-item-active')
        }
        element.classList.add('popup__list-item-active')
        for (let i = 0; i < contantItemArr.length; i++) {
            const el = contantItemArr[i];
            if (element.dataset.choice === el.dataset.contant) {
                el.style.display = 'grid'
            } else {
                el.style.display = 'none'
            }
        }
        
    })
}
// построение подменю
for (let i = 0; i < contantItemArr.length; i++) {
    const element = contantItemArr[i];
    switch (element.dataset.contant) {
        case 'flowers':
            for (let i = 0; i < flowers.length; i++) {
                const el = flowers[i];
                const itemLi = document.createElement('li')
                itemLi.classList.add('contant__list-item')
                itemLi.textContent = el
                element.append(itemLi)
            }
            break;
        case 'sizes':
            for (let i = 0; i < sizes.length; i++) {
                const el = sizes[i];
                const itemLi = document.createElement('li')
                itemLi.classList.add('contant__list-item')
                itemLi.textContent = el
                element.append(itemLi)
            }
            break;
        case 'colors':
            for (let i = 0; i < colors.length; i++) {
                const el = colors[i];
                const itemLi = document.createElement('li')
                itemLi.classList.add('contant__list-item')
                itemLi.textContent = el
                element.append(itemLi)
            }
            break;
        default:
            break;
    }
}
// Фильтр по цене отдельный
$(".polzunok-3").slider({
    min: 0,
    max: 100000,
    values: [0, 100000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-3-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-3-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-3-left").val($(".polzunok-3").slider("values", 0));
$(".polzunok-input-3-right").val($(".polzunok-3").slider("values", 1));
$(".polzunok-container-3 input").change(function() {
    var input_left = $(".polzunok-input-3-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-3").slider("option", "min"),
    where_right = $(".polzunok-3").slider("values", 1),
    input_right = $(".polzunok-input-3-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-3").slider("option", "max"),
    where_left = $(".polzunok-3").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
        input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
        input_right = 0;    
    }    
    $(".polzunok-input-3-left").val(`${input_left.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`); 
    $(".polzunok-input-3-right").val(`${input_right.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`); 
    if (input_left != where_left) {
        $(".polzunok-3").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-3").slider("values", 1, input_right);
    }
});
const pil3 = document.querySelector('.polzunok-input-3-left')
const pir3 = document.querySelector('.polzunok-input-3-right')
const p3 = document.querySelector('.polzunok-3')
pil3.value = `${pil3.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
pir3.value = `${pir3.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
p3.addEventListener('mouseup', function(){
    pil3.value = `${pil3.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
    pir3.value = `${pir3.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
})


// Работа корзины
const btnCorf = document.querySelector('.icons__corf')
const basket = document.querySelector('.basket')
btnCorf.addEventListener('click', function(){
    basket.classList.add('basket-active')
    const basketClose = basket.querySelector('.basket__close')
    const basketWrapper = basket.querySelector('.basket__wrapper')
    basketClose.addEventListener('click', function(){
        basket.classList.remove('basket-active')
    })
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(basketWrapper)
        if ( ! withinBoundaries ) {
            basket.classList.remove('basket-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            basket.classList.remove('basket-active')
        }
    });
    // Подсчёт стоимости 
    function priceBasket() {
        const basketContentItemArr = basket.querySelectorAll('.basket__content-item')
        const basketContentSum = basket.querySelector('.basket__content-sum')
        const basketContentDelivery = basket.querySelector('.basket__content-delivery')
        const totalPrice = basket.querySelector('.basket__content-meaning-bold')
        let sumPrice = 0
        for (let i = 0; i < basketContentItemArr.length; i++) {
            const element = basketContentItemArr[i];
            const price = Number(element.querySelector('.basket__content-price').textContent.slice(0, -1).replaceAll(' ', ''))
            sumPrice = sumPrice + price
        }
        const delivery = Number(basketContentDelivery.textContent.slice(0, -1).replaceAll(' ', ''))
        basketContentSum.textContent = `${sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
        totalPrice.textContent = `${(sumPrice+delivery).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
    }
    priceBasket()
    // Кнопки навигации
    const basketBtnNavArr = document.querySelectorAll('.basket__btn-nav')
    for (let i = 0; i < basketBtnNavArr.length; i++) {
        const element = basketBtnNavArr[i];
        element.addEventListener('click', function(){
            for (let i = 0; i < basketBtnNavArr.length; i++) {
                const el = basketBtnNavArr[i];
                el.classList.remove('basket__btn-nav-active')
            }
            element.classList.add('basket__btn-nav-active')
        })
    }
    // Удаление продукта 
    const basketContentDeleteArr = basket.querySelectorAll('.basket__content-delete')
    for (let i = 0; i < basketContentDeleteArr.length; i++) {
        const element = basketContentDeleteArr[i];
        element.addEventListener('click', function(){
            const product = element.parentElement.parentElement.parentElement
            product.remove()
            priceBasket()
        })
    }

    const basketContentBtnArr = document.querySelectorAll('.basket__content-btn')
    for (let i = 0; i < basketContentBtnArr.length; i++) {
        const element = basketContentBtnArr[i];
        element.addEventListener('click', function(){
            const basketContentChoice = element.parentElement
            const basketContentNumber = basketContentChoice.querySelector('.basket__content-number')
            const basketContentprice = basketContentChoice.parentElement.querySelector('.basket__content-price')
            const price = Number(basketContentprice.textContent.slice(0, -1).replaceAll(' ', ''))
            let basketQuantity = Number(basketContentNumber.textContent)
            const pricePerUnit = price / basketQuantity
            if (element.classList.contains('basket__content-minus')) {
                basketContentNumber.textContent = basketQuantity - 1
            }
            if (element.classList.contains('basket__content-plus')) {
                basketContentNumber.textContent = basketQuantity + 1
            }
            basketContentprice.textContent = `${(pricePerUnit * basketContentNumber.textContent).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
            priceBasket()
        })
    }
})
// Переход к оформлению 
const basketBtn  = document.querySelector('.basket__btn')
basketBtn.addEventListener('click', function(){
    window.location.href = 'placing.html';
})