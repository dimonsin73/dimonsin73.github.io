// Экспорт массивов
import {flowers, colors, sizes, citys} from '../js/arrays.js';
// Дата и время работы
const headerBottom = document.querySelector('.header__bottom')
working(headerBottom)
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
// купить\в корзине
const productBtns = document.querySelectorAll('.btn-by');
for (let i = 0; i < productBtns.length; i++) {
    const element = productBtns[i];
    element.addEventListener('click', function(){
        if (window.innerWidth < '1023') {
            element.classList.toggle('btn-by-active');
            if (element.classList.contains('btn-by-active')) {
                element.innerHTML = `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 12C6.21984 14.0493 7.8265 16.416 9.1665 19C12.2772 13.1107 16.1665 8.444 20.8332 5" stroke="#03A050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>`;
            } else {
                element.innerHTML = `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.8335 1.03345H4.14073C5.11433 1.03345 5.95388 1.71764 6.15038 2.6712L8.34746 13.3331C8.60945 14.6045 9.72886 15.5168 11.027 15.5168H19.2706C20.5342 15.5168 21.6335 14.6513 21.93 13.423L23.1086 8.5411C23.4202 7.25014 22.442 6.00769 21.114 6.00769H6.80774M10.7871 20.9304C10.7871 21.4799 10.3417 21.9253 9.79229 21.9253C9.24285 21.9253 8.79744 21.4799 8.79744 20.9304C8.79744 20.381 9.24285 19.9356 9.79229 19.9356C10.3417 19.9356 10.7871 20.381 10.7871 20.9304ZM21.7305 20.9304C21.7305 21.4799 21.2851 21.9253 20.7356 21.9253C20.1862 21.9253 19.7408 21.4799 19.7408 20.9304C19.7408 20.381 20.1862 19.9356 20.7356 19.9356C21.2851 19.9356 21.7305 20.381 21.7305 20.9304Z" stroke="#AD2950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>`;
            };
        } else {
            element.classList.toggle('btn-by-active');
            if (element.classList.contains('btn-by-active')) {
                element.innerHTML = 'В корзине';
            } else {
                element.innerHTML = 'Купить';
            };
        }
       
    });
};
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
// понравившиеся
const productHears = document.querySelectorAll('.btn-heart')
for (let i = 0; i < productHears.length; i++) {
    const element = productHears[i];
    element.addEventListener('click', function(){
        element.classList.toggle('btn-heart-active');
    });
};
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
const dataForm = document.querySelector('.data__form')
// активация кнопки Сохранить
const dataBtn = document.querySelector('.data__btn-btn')
dataForm.addEventListener('input', function(){
    dataBtn.removeAttribute('disabled')
})
// Верификация
const ialArr = document.querySelectorAll('.ial')
const dataName = document.getElementById('data-name')
const dataEmail = document.getElementById('data-email')
const passwordFirst = document.getElementById('password-first')
const passwordSecond = document.getElementById('password-second')
dataForm.addEventListener('submit', function(event){
    event.preventDefault()
    if (dataName.value.length <= 3) {
        dataName.parentElement.classList.add('data__head-item-error')
    }
    if (dataEmail.value.includes('@')) {
        console.log(dataEmail.value.includes('@'))
    } else {
        dataEmail.parentElement.classList.add('data__head-item-error')
    }
    if (passwordFirst.value.length <= 5) {
        passwordFirst.parentElement.classList.add('data__password-item-error')
    }
    if (passwordFirst.value != passwordSecond.value) {
        passwordSecond.parentElement.classList.add('data__password-item-error')
    }
})
for (let i = 0; i < ialArr.length; i++) {
    const ial = ialArr[i];
    ial.addEventListener('input', function(){
        const label = ial.querySelector('.ial__label')
        const input = ial.querySelector('.ial__input')
        if (input.value.length > 0) {
            label.classList.add('ial__label-up')
        } else {
            label.classList.remove('ial__label-up')
        }
    })
}
// показать пароль
const dataPasswordShowArr = document.querySelectorAll('.ial__show')
for (let i = 0; i < dataPasswordShowArr.length; i++) {
    const element = dataPasswordShowArr[i];
    element.addEventListener('click', function(){
        const dataPasswordInput = element.parentElement.querySelector('.ial__input')
        dataPasswordInput.classList.toggle('ial__input-show')
        if (dataPasswordInput.classList.contains('ial__input-show')) {
            dataPasswordInput.setAttribute('type', 'text')
        } else {
            dataPasswordInput.setAttribute('type', 'password')
        }
    })
}