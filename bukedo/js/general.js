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
const telChevrone = document.querySelector('.tel__content')
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
const headerBootomSmall = document.querySelector('.header__bottom-small')
working(headerLeftItem)
working(headerBootomSmall)
function working(param) {
    const working = param.querySelector('.working')
    const workingTimeText = param.querySelector('.working__time-text')
    const choice = param.querySelector('.choice')
    const choiceSelect = param.querySelector('.choice__select')
    const choiceSelectP = choiceSelect.querySelector('.choice__select-p')
    const choiceOptions = param.querySelector('.choice__options')
    const choiceTimeSelect = param.querySelector('.choice__time-select')
    const choiceTimeOptions = param.querySelector('.choice__time-options')
    // открытие и закрытие меню
    working.addEventListener('click', function(){
        working.classList.toggle('working-active')
        choice.classList.toggle('choice-active')
        document.addEventListener('mousedown', (e) => {
            const withinBoundaries = e.composedPath().includes(param);
            if ( ! withinBoundaries ) {
                working.classList.remove('working-active')
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
    workingTimeText.textContent = `${today.getDate()} ${getMonth(today)}, с 11:00 до 21:00`
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
        workingTimeText.textContent = `${choiceSelect.textContent}, ${choiceTimeText.textContent}`
        working.classList.remove('working-active')
        choice.classList.remove('choice-active')
        choiceSelect.classList.remove('choice__select-active')
        choiceOptions.classList.remove('choice__options-active')
        choiceTimeSelect.classList.remove('choice__time-select-active')
        choiceTimeOptions.classList.remove('choice__time-options-active')
    })
}

// Выбор города
const cityArr = document.querySelectorAll('.city')
const cityTextArr = document.querySelectorAll('.city__text')
const modalCity = document.querySelector('.modal-city')
const modalCityWrapper = modalCity.querySelector('.modal-city__wrapper')
const modalCityClose = modalCity.querySelector('.modal-city__close')
const modalCityList = modalCity.querySelector('.modal-city__list')
const modalCityInput = document.getElementById('search-city')
for (let i = 0; i < cityArr.length; i++) {
    const city = cityArr[i];
    city.addEventListener('click', function(){
        modalCity.classList.add('modal-city-active')
        modalCityClose.addEventListener('click', function(){
            modalCity.classList.remove('modal-city-active')
            modalCityInput.value = ''
            modalCityList.innerHTML = ''
            createCitys(citys)
        })
        document.addEventListener( 'mousedown', (e) => {
            const withinBoundaries = e.composedPath().includes(modalCityWrapper);
            if ( ! withinBoundaries ) {
                modalCity.classList.remove('modal-city-active')
                modalCityInput.value = ''
                modalCityList.innerHTML = ''
                createCitys(citys)
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                modalCity.classList.remove('modal-city-active')
                modalCityInput.value = ''
                modalCityList.innerHTML = ''
                createCitys(citys)
            }
        });
    })
}
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
    const modalCityItemArr = modalCity.querySelectorAll('.modal-city__item')
        for (let i = 0; i < modalCityItemArr.length; i++) {
            const element = modalCityItemArr[i];
            element.addEventListener('click', function(){
                for (let i = 0; i < cityTextArr.length; i++) {
                    const cityText = cityTextArr[i];
                    cityText.textContent = element.textContent
                }
                modalCity.classList.remove('modal-city-active')
            })
        }
}
createCitys(citys)
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
const popupClose = document.querySelector('.popup__close')
const popupFilters = popup.querySelector('.filters')
const popupListItemArr = popupFilters.querySelectorAll('.popup__list-item')
const contantItemArr = popup.querySelector('.contant').children
catalog.addEventListener('click', function(){
    popupOpen()
})
function popupOpen() {
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
    popupClose.addEventListener('click', function(){
        popup.classList.remove('popup-active')
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            popup.classList.remove('popup-active')
        }
    });
}
// Работа подменю  
for (let i = 0; i < popupListItemArr.length; i++) {
    const element = popupListItemArr[i];
    element.addEventListener('mouseenter', function () {
        const screenWidth = window.innerWidth
        for (let i = 0; i < popupListItemArr.length; i++) {
            const element = popupListItemArr[i];
            element.classList.remove('popup__list-item-active')
        }
        if (screenWidth > 767) {
            element.classList.add('popup__list-item-active')
        }
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
                const itemLink = document.createElement('a')
                itemLi.classList.add('contant__list-item')
                itemLink.classList.add('contant__list-link')
                itemLink.setAttribute('href', '')
                itemLink.textContent = el
                itemLi.append(itemLink)
                element.append(itemLi)
            }
            break;
        case 'sizes':
            for (let i = 0; i < sizes.length; i++) {
                const el = sizes[i];
                const itemLi = document.createElement('li')
                const itemLink = document.createElement('a')
                itemLi.classList.add('contant__list-item')
                itemLink.classList.add('contant__list-link')
                itemLink.setAttribute('href', '')
                itemLink.textContent = el
                itemLi.append(itemLink)
                element.append(itemLi)
            }
            break;
        case 'colors':
            for (let i = 0; i < colors.length; i++) {
                const el = colors[i];
                const itemLi = document.createElement('li')
                const itemLink = document.createElement('a')
                itemLi.classList.add('contant__list-item')
                itemLink.classList.add('contant__list-link')
                itemLink.setAttribute('href', '')
                itemLink.textContent = el
                itemLi.append(itemLink)
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
function basketOpen() {
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
}
btnCorf.addEventListener('click', function(){
    basketOpen()
})
// Переход к оформлению 
const basketBtn  = document.querySelector('.basket__btn')
basketBtn.addEventListener('click', function(){
    window.location.href = 'placing.html';
})

// Переход в Профиль
const iconsLogin = document.querySelector('.icons__login ')
iconsLogin.addEventListener('click', function(){
    window.location.href = 'profil.html'
})

// Работа нижнего меню 
const menuMain = document.getElementById('menu-main')
const menuCatalog = document.getElementById('menu-catalog')
const menuBasket = document.getElementById('menu-basket')
const menuHeart = document.getElementById('menu-heart')
const menuProfil = document.getElementById('menu-profil')
menuMain.addEventListener('click', function(){
    window.location.href = 'index.html'
})
menuCatalog.addEventListener('click', function(){
    popupOpen()
})
menuBasket.addEventListener('click', function(){
    basketOpen()
})
menuHeart.addEventListener('click', function(){
    basketOpen()
})
menuProfil.addEventListener('click', function(){
    window.location.href = 'profil.html'
})