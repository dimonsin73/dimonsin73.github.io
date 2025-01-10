// купить\в корзине
const productBtns = document.querySelectorAll('.product__btn');
for (let i = 0; i < productBtns.length; i++) {
    const element = productBtns[i];
    element.addEventListener('click', function(){
        if (window.screen.width < '1023') {
            element.classList.toggle('product__btn-active');
            if (element.classList.contains('product__btn-active')) {
                element.innerHTML = `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 12C6.21984 14.0493 7.8265 16.416 9.1665 19C12.2772 13.1107 16.1665 8.444 20.8332 5" stroke="#03A050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>`;
            } else {
                element.innerHTML = `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.8335 1.03345H4.14073C5.11433 1.03345 5.95388 1.71764 6.15038 2.6712L8.34746 13.3331C8.60945 14.6045 9.72886 15.5168 11.027 15.5168H19.2706C20.5342 15.5168 21.6335 14.6513 21.93 13.423L23.1086 8.5411C23.4202 7.25014 22.442 6.00769 21.114 6.00769H6.80774M10.7871 20.9304C10.7871 21.4799 10.3417 21.9253 9.79229 21.9253C9.24285 21.9253 8.79744 21.4799 8.79744 20.9304C8.79744 20.381 9.24285 19.9356 9.79229 19.9356C10.3417 19.9356 10.7871 20.381 10.7871 20.9304ZM21.7305 20.9304C21.7305 21.4799 21.2851 21.9253 20.7356 21.9253C20.1862 21.9253 19.7408 21.4799 19.7408 20.9304C19.7408 20.381 20.1862 19.9356 20.7356 19.9356C21.2851 19.9356 21.7305 20.381 21.7305 20.9304Z" stroke="#AD2950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>`;
            };
        } else {
            element.classList.toggle('product__btn-active');
            if (element.classList.contains('product__btn-active')) {
                element.innerHTML = 'В корзине';
            } else {
                element.innerHTML = 'Купить';
            };
        }
       
    });
};
// понравившиеся
const productHears = document.querySelectorAll('.product__heart')
for (let i = 0; i < productHears.length; i++) {
    const element = productHears[i];
    element.addEventListener('click', function(){
        element.classList.toggle('product__heart-active');
    });
};
// количество карточек
const products = document.querySelector('.products')
const productArr = products.querySelectorAll('.product')
if (window.screen.width < '544') {
    for (let i = 0; i < productArr.length; i++) {
        const element = productArr[i];
        if (i > '7') {
            element.style.display = 'none';
        };
    };
};
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
// открытие\закрытие каталога
const catalog = document.getElementById('catalog')
const popup = document.querySelector('.popup')
catalog.addEventListener('click', function(){
    popup.classList.toggle('popup-active')
})


// Цветы 
const flowers = ['Альстромерия', 'Амариллис', 'Анемон', 'Гвоздика', 'Гвоздика кустовая', 'Гербера', 'Гербера мини', 'Гиацинт', 'Гипсофила', 'Гортензия', 'Ирис', 'Калла', 'Лаванда', 'Лилия', 'Мимоза', 'Нарцисс', 'Орхидея Ванда', 'Орхидея Фаленопсис', 'Орхидея Цимбидиум', 'Пион', "Пион Сара Бернар", 'Подсолнух', 'Ранункулюс', 'Роза', 'Роза Вувузела', 'Роза Пинк Охара', 'Роза Эквадор', 'Роза кустовая', 'Роза кустовая пионовидная', "Роза пионовидная", 'Ромашка', 'Сирень', 'Тюльпан', 'Тюльпан пионовидный', 'Хлопок', 'Хризантема Антонов', 'Хризантема Момоко', 'Хризантема кустовая', 'Хризантема одноголовая', 'Эустома', 'Эустома махровая']

// построение фильтра по цветам
const filterFlowers = document.getElementById('filter-flowers')
const dropdawnContentFlowers = filterFlowers.querySelector('.dropdawn__content')
for (let i = 0; i < flowers.length; i++) {
    const element = flowers[i];
    createFlowers(element, i)
}
function createFlowers(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContentFlowers.append(dropdawnContentItem)
    const dropdawnContentInput = document.createElement('input')
    dropdawnContentInput.classList.add('dropdawn__content-input')
    dropdawnContentInput.setAttribute('type', 'checkbox')
    dropdawnContentInput.setAttribute('name', 'flower')
    dropdawnContentInput.id = `flower${i}`
    const dropdawnContentLabel = document.createElement('label')
    dropdawnContentLabel.classList.add('dropdawn__content-label')
    dropdawnContentLabel.setAttribute('for', `flower${i}`)
    dropdawnContentItem.append(dropdawnContentInput, dropdawnContentLabel)
    const dropdawnContentCheck = document.createElement('div')
    dropdawnContentCheck.classList.add('dropdawn__content-check')
    const dropdawnContentText = document.createElement('p')
    dropdawnContentText.classList.add('dropdawn__content-text')
    dropdawnContentText.textContent = element
    dropdawnContentLabel.append(dropdawnContentCheck, dropdawnContentText)
}

// открытие фильтра по цветам
const productsFilterBtnFlower = filterFlowers.querySelector('.products__filter')
productsFilterBtnFlower.addEventListener('click', function(){
    const dropdawn = filterFlowers.querySelector('.dropdawn')
    dropdawn.classList.toggle('dropdawn-active')
    filterFlowers.classList.toggle('products__container-active')
    const dropdawnDelete = dropdawn.querySelector('.dropdawn__header-btn')
    const dropdawnContentInput = dropdawn.querySelector('.dropdawn__header-input')
    // удалить тектс в input
    dropdawnDelete.addEventListener('click', function(){
        dropdawnContentInput.value = ''
        dropdawnContentFlowers.innerHTML = ''
        for (let i = 0; i < flowers.length; i++) {
            const element = flowers[i];
            createFlowers(element)
        }
    })
    // фильтр по введённому 
    dropdawnContentInput.addEventListener('input', function(){
        dropdawnContentFlowers.innerHTML = ''
        for (let i = 0; i < flowers.length; i++) {
            const element = flowers[i];
            if (element.toLowerCase().includes(dropdawnContentInput.value.toLowerCase())) {
                createFlowers(element)
            }
        }
    })
    // кнопка сбросить
    const resetBtn = filterFlowers.querySelector('.products__btn')
    resetBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterFlowers.querySelectorAll('.dropdawn__content-input:checked')
        for (let i = 0; i < dropdawnContentInputArr.length; i++) {
            const element = dropdawnContentInputArr[i];
            element.checked = false
        }
        productsFilterNumber.textContent = ''
        productsFilterNumber.classList.remove('products__filter-number-active')
    })
    // кнопка показать
    const showBtn = filterFlowers.querySelector('.catalog')
    showBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterFlowers.querySelectorAll('.dropdawn__content-input:checked') 
        console.log(dropdawnContentInputArr)
    })
    // количество выбранных фильтров
    const dropdawnContentItemArr = filterFlowers.querySelectorAll('.dropdawn__content-item')
    const productsFilterNumber = filterFlowers.querySelector('.products__filter-number')
    for (let i = 0; i < dropdawnContentItemArr.length; i++) {
        const element = dropdawnContentItemArr[i];
        element.addEventListener('click', function () {
            const dropdawnContentInputArr = filterFlowers.querySelectorAll('.dropdawn__content-input:checked') 
            productsFilterNumber.textContent = dropdawnContentInputArr.length
            if (dropdawnContentInputArr.length > 0) {
                productsFilterNumber.classList.add('products__filter-number-active')
            } else {
                productsFilterNumber.classList.remove('products__filter-number-active')
            }
        })
    }
    // закрытие
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(filterFlowers);
        if ( ! withinBoundaries ) {
            dropdawn.classList.remove('dropdawn-active')
            filterFlowers.classList.remove('products__container-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            dropdawn.classList.remove('dropdawn-active')
            filterFlowers.classList.remove('products__container-active')
        }
    });
})

// Цвета
const colors = ['Белый', 'Оранжевый', 'Розовый', 'Зеленый', 'Красный', 'Желтый', 'Синий', 'Голубой', 'Фиолетовый', 'Чёрный', 'Салатовый', 'Фуксия', 'Бордовый']

// построение фильтра по цветам
const filterColors = document.getElementById('filter-colors')
const dropdawnContentColors = filterColors.querySelector('.dropdawn__content')
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    createColors(element, i)
}
function createColors(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContentColors.append(dropdawnContentItem)
    const dropdawnContentInput = document.createElement('input')
    dropdawnContentInput.classList.add('dropdawn__content-input')
    dropdawnContentInput.setAttribute('type', 'checkbox')
    dropdawnContentInput.setAttribute('name', 'color')
    dropdawnContentInput.id = `color${i}`
    const dropdawnContentLabel = document.createElement('label')
    dropdawnContentLabel.classList.add('dropdawn__content-label')
    dropdawnContentLabel.setAttribute('for', `color${i}`)
    dropdawnContentItem.append(dropdawnContentInput, dropdawnContentLabel)
    const dropdawnContentCheck = document.createElement('div')
    dropdawnContentCheck.classList.add('dropdawn__content-circle')
    switch (element) {
        case 'Белый':
            dropdawnContentCheck.style.backgroundColor = 'white'
            break;
        case 'Оранжевый':
            dropdawnContentCheck.style.backgroundColor = 'orange'
            break;
        case 'Розовый':
            dropdawnContentCheck.style.backgroundColor = 'pink'
            break;
        case 'Зеленый':
            dropdawnContentCheck.style.backgroundColor = 'green'
            break;
        case 'Красный':
            dropdawnContentCheck.style.backgroundColor = 'red'
            break;
        case 'Желтый':
            dropdawnContentCheck.style.backgroundColor = 'yellow'
            break;
        case 'Синий':
            dropdawnContentCheck.style.backgroundColor = 'blue'
            break;
        case 'Голубой':
            dropdawnContentCheck.style.backgroundColor = 'deepskyblue'
            break;
        case 'Фиолетовый':
            dropdawnContentCheck.style.backgroundColor = 'purple'
            break;
        case 'Чёрный':
            dropdawnContentCheck.style.backgroundColor = 'black'
            break;
        case 'Салатовый':
            dropdawnContentCheck.style.backgroundColor = 'chartreuse'
            break;
        case 'Фуксия':
            dropdawnContentCheck.style.backgroundColor = 'fuchsia'
            break;
        case 'Бордовый':
            dropdawnContentCheck.style.backgroundColor = '#AD2950'
            break;
        default:
            dropdawnContentCheck.style.backgroundColor = ''
            break;
    }
    const dropdawnContentText = document.createElement('p')
    dropdawnContentText.classList.add('dropdawn__content-text')
    dropdawnContentText.textContent = element
    dropdawnContentLabel.append(dropdawnContentCheck, dropdawnContentText)
}

// открытие фильтра по цветам
const productsFilterBtnColor = filterColors.querySelector('.products__filter')
productsFilterBtnColor.addEventListener('click', function(){
    const dropdawn = filterColors.querySelector('.dropdawn')
    dropdawn.classList.toggle('dropdawn-active')
    filterColors.classList.toggle('products__container-active')
    const dropdawnDelete = dropdawn.querySelector('.dropdawn__header-btn')
    const dropdawnContentInput = dropdawn.querySelector('.dropdawn__header-input')
    // удалить тектс в input
    dropdawnDelete.addEventListener('click', function(){
        dropdawnContentInput.value = ''
        dropdawnContentColors.innerHTML = ''
        for (let i = 0; i < colors.length; i++) {
            const element = colors[i];
            createColors(element)
        }
    })
    // фильтр по введённому 
    dropdawnContentInput.addEventListener('input', function(){
        dropdawnContentColors.innerHTML = ''
        for (let i = 0; i < colors.length; i++) {
            const element = colors[i];
            if (element.toLowerCase().includes(dropdawnContentInput.value.toLowerCase())) {
                createColors(element)
            }
        }
    })
    // кнопка сбросить
    const resetBtn = filterColors.querySelector('.products__btn')
    resetBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterColors.querySelectorAll('.dropdawn__content-input:checked')
        for (let i = 0; i < dropdawnContentInputArr.length; i++) {
            const element = dropdawnContentInputArr[i];
            element.checked = false
        }
        productsFilterNumber.textContent = ''
        productsFilterNumber.classList.remove('products__filter-number-active')
    })
    // кнопка показать
    const showBtn = filterColors.querySelector('.catalog')
    showBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterColors.querySelectorAll('.dropdawn__content-input:checked') 
        console.log(dropdawnContentInputArr)
    })
    // количество выбранных фильтров
    const dropdawnContentItemArr = filterColors.querySelectorAll('.dropdawn__content-item')
    const productsFilterNumber = filterColors.querySelector('.products__filter-number')
    for (let i = 0; i < dropdawnContentItemArr.length; i++) {
        const element = dropdawnContentItemArr[i];
        element.addEventListener('click', function () {
            const dropdawnContentInputArr = filterColors.querySelectorAll('.dropdawn__content-input:checked') 
            productsFilterNumber.textContent = dropdawnContentInputArr.length
            if (dropdawnContentInputArr.length > 0) {
                productsFilterNumber.classList.add('products__filter-number-active')
            } else {
                productsFilterNumber.classList.remove('products__filter-number-active')
            }
        })
    }
    // закрытие
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(filterColors);
        if ( ! withinBoundaries ) {
            dropdawn.classList.remove('dropdawn-active')
            filterColors.classList.remove('products__container-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            dropdawn.classList.remove('dropdawn-active')
            filterColors.classList.remove('products__container-active')
        }
    });
})

// Цвета
const sizes = ['Параметр размера', 'Параметр размера', 'Параметр размера', 'Параметр размера', 'Параметр размера', 'Параметр размера', 'Параметр размера']

// построение фильтра по цветам
const filterSizes = document.getElementById('filter-sizes')
const dropdawnContentSizes = filterSizes.querySelector('.dropdawn__content')
for (let i = 0; i < sizes.length; i++) {
    const element = sizes[i];
    createSizes(element, i)
}
function createSizes(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContentSizes.append(dropdawnContentItem)
    const dropdawnContentInput = document.createElement('input')
    dropdawnContentInput.classList.add('dropdawn__content-input')
    dropdawnContentInput.setAttribute('type', 'checkbox')
    dropdawnContentInput.setAttribute('name', 'size')
    dropdawnContentInput.id = `size${i}`
    const dropdawnContentLabel = document.createElement('label')
    dropdawnContentLabel.classList.add('dropdawn__content-label')
    dropdawnContentLabel.setAttribute('for', `size${i}`)
    dropdawnContentItem.append(dropdawnContentInput, dropdawnContentLabel)
    const dropdawnContentCheck = document.createElement('div')
    dropdawnContentCheck.classList.add('dropdawn__content-check')
    const dropdawnContentText = document.createElement('p')
    dropdawnContentText.classList.add('dropdawn__content-text')
    dropdawnContentText.textContent = element
    dropdawnContentLabel.append(dropdawnContentCheck, dropdawnContentText)
}

// открытие фильтра по цветам
const productsFilterBtnSizes = filterSizes.querySelector('.products__filter')
productsFilterBtnSizes.addEventListener('click', function(){
    const dropdawn = filterSizes.querySelector('.dropdawn')
    dropdawn.classList.toggle('dropdawn-active')
    filterSizes.classList.toggle('products__container-active')
    const dropdawnDelete = dropdawn.querySelector('.dropdawn__header-btn')
    const dropdawnContentInput = dropdawn.querySelector('.dropdawn__header-input')
    // удалить тектс в input
    dropdawnDelete.addEventListener('click', function(){
        dropdawnContentInput.value = ''
        dropdawnContentSizes.innerHTML = ''
        for (let i = 0; i < sizes.length; i++) {
            const element = sizes[i];
            createSizes(element)
        }
    })
    // фильтр по введённому 
    dropdawnContentInput.addEventListener('input', function(){
        dropdawnContentSizes.innerHTML = ''
        for (let i = 0; i < sizes.length; i++) {
            const element = sizes[i];
            if (element.toLowerCase().includes(dropdawnContentInput.value.toLowerCase())) {
                createSizes(element)
            }
        }
    })
    // кнопка сбросить
    const resetBtn = filterSizes.querySelector('.products__btn')
    resetBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterSizes.querySelectorAll('.dropdawn__content-input:checked')
        for (let i = 0; i < dropdawnContentInputArr.length; i++) {
            const element = dropdawnContentInputArr[i];
            element.checked = false
        }
        productsFilterNumber.textContent = ''
        productsFilterNumber.classList.remove('products__filter-number-active')
    })
    // кнопка показать
    const showBtn = filterSizes.querySelector('.catalog')
    showBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterSizes.querySelectorAll('.dropdawn__content-input:checked') 
        console.log(dropdawnContentInputArr)
    })
    // количество выбранных фильтров
    const dropdawnContentItemArr = filterSizes.querySelectorAll('.dropdawn__content-item')
    const productsFilterNumber = filterSizes.querySelector('.products__filter-number')
    for (let i = 0; i < dropdawnContentItemArr.length; i++) {
        const element = dropdawnContentItemArr[i];
        element.addEventListener('click', function () {
            const dropdawnContentInputArr = filterColors.querySelectorAll('.dropdawn__content-input:checked') 
            productsFilterNumber.textContent = dropdawnContentInputArr.length
            if (dropdawnContentInputArr.length > 0) {
                productsFilterNumber.classList.add('products__filter-number-active')
            } else {
                productsFilterNumber.classList.remove('products__filter-number-active')
            }
        })
    }
    // закрытие
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(filterSizes);
        if ( ! withinBoundaries ) {
            dropdawn.classList.remove('dropdawn-active')
            filterSizes.classList.remove('products__container-active')
            
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            dropdawn.classList.remove('dropdawn-active')
            filterSizes.classList.remove('products__container-active')
        }
    });
})