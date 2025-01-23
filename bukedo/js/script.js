// Экспорт массивов
import {flowers, colors, sizes} from '../js/arrays.js';
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
// в карточке
const cardBtnsBasket = document.querySelector('.card__btns-basket');
cardBtnsBasket.addEventListener('click', function(){
    cardBtnsBasket.classList.toggle('card__btns-basket-active');
    if (cardBtnsBasket.classList.contains('card__btns-basket-active')) {
        cardBtnsBasket.innerHTML = 'В корзине';
    } else {
        cardBtnsBasket.innerHTML = 'В корзину';
    }
});
// понравившиеся
const productHears = document.querySelectorAll('.product__heart')
for (let i = 0; i < productHears.length; i++) {
    const element = productHears[i];
    element.addEventListener('click', function(){
        element.classList.toggle('product__heart-active');
    });
};
const cardBtnHear = document.querySelector('.card__btns-heart')
cardBtnHear.addEventListener('click', function(){
    cardBtnHear.classList.toggle('card__btns-heart-active');
});
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
// Цветы 
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
    document.addEventListener( 'mousedown', (e) => {
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
            createColors(element, i)
        }
    })
    // фильтр по введённому 
    dropdawnContentInput.addEventListener('input', function(){
        dropdawnContentColors.innerHTML = ''
        for (let i = 0; i < colors.length; i++) {
            const element = colors[i];
            if (element.toLowerCase().includes(dropdawnContentInput.value.toLowerCase())) {
                createColors(element, i)
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
    document.addEventListener( 'mousedown', (e) => {
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

// Размеры
// построение фильтра по размерам
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

// открытие фильтра по размерам
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
            createSizes(element, i)
        }
    })
    // фильтр по введённому 
    dropdawnContentInput.addEventListener('input', function(){
        dropdawnContentSizes.innerHTML = ''
        for (let i = 0; i < sizes.length; i++) {
            const element = sizes[i];
            if (element.toLowerCase().includes(dropdawnContentInput.value.toLowerCase())) {
                createSizes(element, i)
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
            const dropdawnContentInputArr = filterSizes.querySelectorAll('.dropdawn__content-input:checked') 
            productsFilterNumber.textContent = dropdawnContentInputArr.length
            if (dropdawnContentInputArr.length > 0) {
                productsFilterNumber.classList.add('products__filter-number-active')
            } else {
                productsFilterNumber.classList.remove('products__filter-number-active')
            }
        })
    }
    // закрытие
    document.addEventListener( 'mousedown', (e) => {
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

// открытие фильтра по цене
const filterPrices = document.getElementById('filter-prices')
const productsFilterBtnPrices = filterPrices.querySelector('.products__filter')
productsFilterBtnPrices.addEventListener('click', function(){
    const dropdawn = filterPrices.querySelector('.dropdawn')
    dropdawn.classList.toggle('dropdawn-active')
    filterPrices.classList.toggle('products__container-active')
    // кнопка сбросить
    const resetBtn = filterPrices.querySelector('.products__btn')
    resetBtn.addEventListener('click', function(){
        const pil = document.querySelector('.polzunok-input-5-left')
        const pir = document.querySelector('.polzunok-input-5-right')
        pil.value = `0 ₽`
        pir.value = `100 000 ₽`
    })
    // кнопка показать
    const showBtn = filterPrices.querySelector('.catalog')
    showBtn.addEventListener('click', function(){
        const dropdawnPriceInputArr = filterPrices.querySelectorAll('.dropdawn__price-input') 
        for (let i = 0; i < dropdawnPriceInputArr.length; i++) {
            const element = dropdawnPriceInputArr[i];
            console.log(element.value)
        }
    })
    // закрытие
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(filterPrices);
        if ( ! withinBoundaries ) {
            dropdawn.classList.remove('dropdawn-active')
            filterPrices.classList.remove('products__container-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            dropdawn.classList.remove('dropdawn-active')
            filterPrices.classList.remove('products__container-active')
        }
    });
})
// Фильтр по цене отдельный
$(".polzunok-5").slider({
    min: 0,
    max: 100000,
    values: [0, 100000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
// кнопка сбросить
$('#price-reset').click(function() {
    $(".polzunok-5").slider({
        values: [0, 100000]
    });
});
$(".polzunok-container-5 input").change(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
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
    $(".polzunok-input-5-left").val(`${input_left.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`); 
    $(".polzunok-input-5-right").val(`${input_right.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`); 
    if (input_left != where_left) {
        $(".polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-5").slider("values", 1, input_right);
    }
});
const pil = document.querySelector('.polzunok-input-5-left')
const pir = document.querySelector('.polzunok-input-5-right')
const p = document.querySelector('.polzunok-5')
pil.value = `${pil.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
pir.value = `${pir.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
p.addEventListener('mouseup', function(){
    pil.value = `${pil.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
    pir.value = `${pir.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
})

// кнопка сбросить фильтры 
const productsFilterReset = document.querySelector('.products__filter-reset')
const productsFilterNumberArr = document.querySelectorAll('.products__filter-number')
productsFilterReset.addEventListener('click', function(){
    const dropdawnInputArr = document.querySelectorAll('.dropdawn__content-input:checked')
    for (let i = 0; i < dropdawnInputArr.length; i++) {
        const element = dropdawnInputArr[i];
        element.checked = false
    }
    for (let i = 0; i < productsFilterNumberArr.length; i++) {
        const element = productsFilterNumberArr[i];
        element.textContent = ''
        element.classList.remove('products__filter-number-active')
    }
    const pil = document.querySelector('.polzunok-input-5-left')
    const pir = document.querySelector('.polzunok-input-5-right')
    pil.value = `0 ₽`
    pir.value = `100 000 ₽`
    
    $(".polzunok-5").slider({
        values: [0, 100000]
    });
})


// открытие фильтра сортировки
const filterSorter = document.getElementById('filter-sorter')
const productsFilterBtnSorter = filterSorter.querySelector('.products__filter')
productsFilterBtnSorter.addEventListener('click', function(){
    const dropdawn = filterSorter.querySelector('.dropdawn')
    dropdawn.classList.toggle('dropdawn-active')
    filterSorter.classList.toggle('products__container-active')
    const dropdawnSorter = dropdawn.querySelectorAll('.dropdawn__sorter')
    const productsFilterText = filterSorter.querySelector('.products__filter-text')
    for (let i = 0; i < dropdawnSorter.length; i++) {
        const element = dropdawnSorter[i];
        element.addEventListener('click', function(){
            productsFilterText.textContent = element.textContent
            dropdawn.classList.remove('dropdawn-active')
            filterSorter.classList.remove('products__container-active')
        })
    }
    // закрытие
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(filterSorter);
        if ( ! withinBoundaries ) {
            dropdawn.classList.remove('dropdawn-active')
            filterSorter.classList.remove('products__container-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            dropdawn.classList.remove('dropdawn-active')
            filterSorter.classList.remove('products__container-active')
        }
    });
})


// открытие фильтров
const filterFilters = document.getElementById('filter-filters')
const productsFilterBtnFilters= filterFilters.querySelector('.products__filter')
const dropdawn = filterFilters.querySelector('.dropdawn')
//const dropdawnWrapper = filterFilters.querySelector('.dropdawn__wrapper')
productsFilterBtnFilters.addEventListener('click', function(){
    dropdawn.classList.toggle('dropdawn-active')
    /*
    dropdawn.style.height = `${dropdawnWrapper.clientHeight}px`
    */
    // закрытие
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(filterFilters);
        if ( ! withinBoundaries ) {
            dropdawn.classList.remove('dropdawn-active')
            filterFilters.classList.remove('products__container-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            dropdawn.classList.remove('dropdawn-active')
            filterFilters.classList.remove('products__container-active')
        }
    });
    // кнопка сбросить
    const resetBtn = filterFilters.querySelector('.products__btn')
    resetBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterFilters.querySelectorAll('.dropdawn__content-input:checked')
        const dropdawnTitleNumberArr = filterFilters.querySelectorAll('.dropdawn__title-number')
        for (let i = 0; i < dropdawnContentInputArr.length; i++) {
            const element = dropdawnContentInputArr[i];
            element.checked = false
        }
        for (let i = 0; i < dropdawnTitleNumberArr.length; i++) {
            const element = dropdawnTitleNumberArr[i];
            element.textContent = ''
            element.classList.remove('products__filter-number-active')
        }
        const pil = document.querySelector('.polzunok-input-4-left')
        const pir = document.querySelector('.polzunok-input-4-right')
        pil.value = `0 ₽`
        pir.value = `100 000 ₽`
    })
})

// Фильтр по цене в составе фильтров
$(".polzunok-4").slider({
    min: 0,
    max: 100000,
    values: [0, 100000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-4-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-4-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-4-left").val($(".polzunok-4").slider("values", 0));
$(".polzunok-input-4-right").val($(".polzunok-4").slider("values", 1));
// кнопка сбросить
$('.filters-reset').click(function() {
    $(".polzunok-4").slider({
        values: [0, 100000]
    });
});
$(".polzunok-container-4 input").change(function() {
    var input_left = $(".polzunok-input-4-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-4").slider("option", "min"),
    where_right = $(".polzunok-4").slider("values", 1),
    input_right = $(".polzunok-input-4-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-4").slider("option", "max"),
    where_left = $(".polzunok-4").slider("values", 0); 
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
    $(".polzunok-input-4-left").val(`${input_left.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`); 
    $(".polzunok-input-4-right").val(`${input_right.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`); 
    if (input_left != where_left) {
        $(".polzunok-4").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-4").slider("values", 1, input_right);
    }
});
const pil4 = document.querySelector('.polzunok-input-4-left')
const pir4 = document.querySelector('.polzunok-input-4-right')
const p4 = document.querySelector('.polzunok-4')
pil4.value = `${pil4.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
pir4.value = `${pir4.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
p4.addEventListener('mouseup', function(){
    pil4.value = `${pil4.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
    pir4.value = `${pir4.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
})

// переход по вкладкам фильтра
const dropdawnItemArr = document.querySelectorAll('.dropdawn__item')
const dropdawnFoundArr = document.querySelectorAll('.dropdawn__found')
const dropdawnHeadArr = document.querySelectorAll('.dropdawn__head')
for (let i = 0; i < dropdawnFoundArr.length; i++) {
    const element = dropdawnFoundArr[i];
    if (element.classList.contains('dropdawn__found-active')) {
        element.style.height = `${element.scrollHeight}px`
    }
}
for (let i = 0; i < dropdawnItemArr.length; i++) {
    const element = dropdawnItemArr[i];
    const dropdawnHead = element.querySelector('.dropdawn__head')
    dropdawnHead.addEventListener('click', function(){
        const dropdawnFound = element.querySelector('.dropdawn__found')
        if (dropdawnFound.classList.contains('dropdawn__found-active')) {
            dropdawnHead.classList.remove('dropdawn__head-active')
            dropdawnFound.classList.remove('dropdawn__found-active')
            dropdawnFound.style.height = '0'
        } else {
            for (let i = 0; i < dropdawnFoundArr.length; i++) {
                const element = dropdawnFoundArr[i];
                element.classList.remove('dropdawn__found-active')
                element.style.height = '0'
            }
            for (let i = 0; i < dropdawnHeadArr.length; i++) {
                const element = dropdawnHeadArr[i];
                element.classList.remove('dropdawn__head-active')
            }
            dropdawnHead.classList.add('dropdawn__head-active')
            dropdawnFound.classList.add('dropdawn__found-active')
            dropdawnFound.style.height = `${dropdawnFound.scrollHeight}px`
        }
        /*
        function delay() {
            dropdawn.style.height = `${dropdawnWrapper.clientHeight}px`
        }
        setTimeout(delay, 300);
        */
    })
}
// Построение цветов
const dropdawnItemFlowers = document.querySelector('.dropdawn__item-flowers')
const dropdawnContentItemFlowers = dropdawnItemFlowers.querySelector('.dropdawn__content')
for (let i = 0; i < flowers.length; i++) {
    const element = flowers[i];
    createItemFlowers(element, i)
}
function createItemFlowers(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContentItemFlowers.append(dropdawnContentItem)
    const dropdawnContentInput = document.createElement('input')
    dropdawnContentInput.classList.add('dropdawn__content-input')
    dropdawnContentInput.setAttribute('type', 'checkbox')
    dropdawnContentInput.setAttribute('name', 'flower')
    dropdawnContentInput.id = `itemflower${i}`
    const dropdawnContentLabel = document.createElement('label')
    dropdawnContentLabel.classList.add('dropdawn__content-label')
    dropdawnContentLabel.setAttribute('for', `itemflower${i}`)
    dropdawnContentItem.append(dropdawnContentInput, dropdawnContentLabel)
    const dropdawnContentCheck = document.createElement('div')
    dropdawnContentCheck.classList.add('dropdawn__content-check')
    const dropdawnContentText = document.createElement('p')
    dropdawnContentText.classList.add('dropdawn__content-text')
    dropdawnContentText.textContent = element
    dropdawnContentLabel.append(dropdawnContentCheck, dropdawnContentText)
}
const dropdawnHeaderInputFlowers = dropdawnItemFlowers.querySelector('.dropdawn__header-input')
const dropdawnHeaderBtnFlowers = dropdawnItemFlowers.querySelector('.dropdawn__header-btn')
const dropdawncontentFlowers = dropdawnItemFlowers.querySelector('.dropdawn__content')
// удалить тектс в input
dropdawnHeaderBtnFlowers.addEventListener('click', function(){
    dropdawnHeaderInputFlowers.value = ''
    dropdawncontentFlowers.innerHTML = ''
    for (let i = 0; i < flowers.length; i++) {
        const element = flowers[i];
        createItemFlowers(element, i)
    }
})
// фильтр по введённому 
dropdawnHeaderInputFlowers.addEventListener('input', function(){
    dropdawncontentFlowers.innerHTML = ''
    for (let i = 0; i < flowers.length; i++) {
        const element = flowers[i];
        if (element.toLowerCase().includes(dropdawnHeaderInputFlowers.value.toLowerCase())) {
            createItemFlowers(element, i)
        }
    }
})
// количество выбранных фильтров
const dropdawnItemFlowersArr = dropdawnItemFlowers.querySelectorAll('.dropdawn__content-item')
const dropdawnFlowersNumber = dropdawnItemFlowers.querySelector('.dropdawn__title-number')
for (let i = 0; i < dropdawnItemFlowersArr.length; i++) {
    const element = dropdawnItemFlowersArr[i];
    element.addEventListener('click', function () {
        const dropdawnItemCheckedArr = dropdawnItemFlowers.querySelectorAll('.dropdawn__content-input:checked') 
        dropdawnFlowersNumber.textContent = dropdawnItemCheckedArr.length
        if (dropdawnItemCheckedArr.length > 0) {
            dropdawnFlowersNumber.classList.add('products__filter-number-active')
        } else {
            dropdawnFlowersNumber.classList.remove('products__filter-number-active')
        }
    })
}


// Построение цветов 
const dropdawnItemColors = document.querySelector('.dropdawn__item-colors')
const dropdawnContentItemColors = dropdawnItemColors.querySelector('.dropdawn__content')
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    createItemColors(element, i)
}
function createItemColors(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContentItemColors.append(dropdawnContentItem)
    const dropdawnContentInput = document.createElement('input')
    dropdawnContentInput.classList.add('dropdawn__content-input')
    dropdawnContentInput.setAttribute('type', 'checkbox')
    dropdawnContentInput.setAttribute('name', 'color')
    dropdawnContentInput.id = `itemcolor${i}`
    const dropdawnContentLabel = document.createElement('label')
    dropdawnContentLabel.classList.add('dropdawn__content-label')
    dropdawnContentLabel.setAttribute('for', `itemcolor${i}`)
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
const dropdawnHeaderInputColors = dropdawnItemColors.querySelector('.dropdawn__header-input')
const dropdawnHeaderBtnColors = dropdawnItemColors.querySelector('.dropdawn__header-btn')
const dropdawncontentColors = dropdawnItemColors.querySelector('.dropdawn__content')
// удалить тектс в input
dropdawnHeaderBtnColors.addEventListener('click', function(){
    dropdawnHeaderInputColors.value = ''
    dropdawncontentColors.innerHTML = ''
    for (let i = 0; i < colors.length; i++) {
        const element = colors[i];
        createItemColors(element, i)
    }
})
// фильтр по введённому 
dropdawnHeaderInputColors.addEventListener('input', function(){
    dropdawncontentColors.innerHTML = ''
    for (let i = 0; i < colors.length; i++) {
        const element = colors[i];
        if (element.toLowerCase().includes(dropdawnHeaderInputColors.value.toLowerCase())) {
            createItemColors(element, i)
        }
    }
})
// количество выбранных фильтров
const dropdawnItemColorsArr = dropdawnItemColors.querySelectorAll('.dropdawn__content-item')
const dropdawnColorsNumber = dropdawnItemColors.querySelector('.dropdawn__title-number')
for (let i = 0; i < dropdawnItemColorsArr.length; i++) {
    const element = dropdawnItemColorsArr[i];
    element.addEventListener('click', function () {
        const dropdawnItemCheckedArr = dropdawnItemColors.querySelectorAll('.dropdawn__content-input:checked') 
        dropdawnColorsNumber.textContent = dropdawnItemCheckedArr.length
        if (dropdawnItemCheckedArr.length > 0) {
            dropdawnColorsNumber.classList.add('products__filter-number-active')
        } else {
            dropdawnColorsNumber.classList.remove('products__filter-number-active')
        }
    })
}

// построение размеров
const dropdawnItemSizes = document.querySelector('.dropdawn__item-sizes')
const dropdawnContentItemSizes = dropdawnItemSizes.querySelector('.dropdawn__content')
for (let i = 0; i < sizes.length; i++) {
    const element = sizes[i];
    createItemSizes(element, i)
}
function createItemSizes(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContentItemSizes.append(dropdawnContentItem)
    const dropdawnContentInput = document.createElement('input')
    dropdawnContentInput.classList.add('dropdawn__content-input')
    dropdawnContentInput.setAttribute('type', 'checkbox')
    dropdawnContentInput.setAttribute('name', 'size')
    dropdawnContentInput.id = `itemsize${i}`
    const dropdawnContentLabel = document.createElement('label')
    dropdawnContentLabel.classList.add('dropdawn__content-label')
    dropdawnContentLabel.setAttribute('for', `itemsize${i}`)
    dropdawnContentItem.append(dropdawnContentInput, dropdawnContentLabel)
    const dropdawnContentCheck = document.createElement('div')
    dropdawnContentCheck.classList.add('dropdawn__content-check')
    const dropdawnContentText = document.createElement('p')
    dropdawnContentText.classList.add('dropdawn__content-text')
    dropdawnContentText.textContent = element
    dropdawnContentLabel.append(dropdawnContentCheck, dropdawnContentText)
}
const dropdawnHeaderInputSizes = dropdawnItemSizes.querySelector('.dropdawn__header-input')
const dropdawnHeaderBtnSizes = dropdawnItemSizes.querySelector('.dropdawn__header-btn')
const dropdawncontentSizes = dropdawnItemSizes.querySelector('.dropdawn__content')
// удалить тектс в input
dropdawnHeaderBtnSizes.addEventListener('click', function(){
    dropdawnHeaderInputSizes.value = ''
    dropdawncontentSizes.innerHTML = ''
    for (let i = 0; i < sizes.length; i++) {
        const element = sizes[i];
        createItemSizes(element, i)
    }
})
// фильтр по введённому 
dropdawnHeaderInputSizes.addEventListener('input', function(){
    dropdawncontentSizes.innerHTML = ''
    for (let i = 0; i < sizes.length; i++) {
        const element = sizes[i];
        if (element.toLowerCase().includes(dropdawnHeaderInputSizes.value.toLowerCase())) {
            createItemSizes(element, i)
        }
    }
})
// количество выбранных фильтров
const dropdawnItemSizesArr = dropdawnItemSizes.querySelectorAll('.dropdawn__content-item')
const dropdawnSizesNumber = dropdawnItemSizes.querySelector('.dropdawn__title-number')
for (let i = 0; i < dropdawnItemSizesArr.length; i++) {
    const element = dropdawnItemSizesArr[i];
    element.addEventListener('click', function () {
        const dropdawnItemCheckedArr = dropdawnItemSizes.querySelectorAll('.dropdawn__content-input:checked') 
        dropdawnSizesNumber.textContent = dropdawnItemCheckedArr.length
        if (dropdawnItemCheckedArr.length > 0) {
            dropdawnSizesNumber.classList.add('products__filter-number-active')
        } else {
            dropdawnSizesNumber.classList.remove('products__filter-number-active')
        }
    })
}




// Работа Card
const productLinkArr = document.querySelectorAll('.product__link')
const card = document.querySelector('.card')
for (let i = 0; i < productLinkArr.length; i++) {
    const element = productLinkArr[i];
    element.addEventListener('click', function(event){
        event.preventDefault()
        const product = element.parentElement
        // получение информации
        const imgPath = product.querySelector('.product__img-source').srcset
        const titleText = product.querySelector('.product__title').textContent
        const priceText = product.querySelector('.product__sale').innerHTML
        // вставка информации
        const cardImg = card.querySelector('.card__media-big')
        cardImg.setAttribute('src', `${imgPath}`)
        const cardTitle = card.querySelector('.card__title')
        cardTitle.textContent = titleText
        const cardPrice = card.querySelector('.card__price-text')
        cardPrice.innerHTML = priceText
        const cardImgSmall = card.querySelectorAll('.card__media-small')
        for (let i = 0; i < cardImgSmall.length; i++) {
            cardImgSmall[0].setAttribute('src', `${imgPath}`)
        }
        //открытие карточки
        card.classList.add('card-active')
        // кнопки + -
        const cardMinus = card.querySelector('.card-minus')
        const cardPlus = card.querySelector('.card-plus')
        const cardChoiceText = card.querySelector('.card__choice-text')
        const cardChoiceSubtext = card.querySelector('.card__choice-subtext')
        let number = Number(cardChoiceText.textContent.split('%')[0])
        cardMinus.addEventListener('click', function(){
            if (number > -100) {
                number = number - 10
                createProcent(number)
            }
            subProcent(number)
        })
        cardPlus.addEventListener('click', function(){
            if (number < 100) {
                number = number + 10
                createProcent(number)
            }
            subProcent(number)
        })
        function createProcent(number) {
            if (number > 0) {
                cardChoiceText.textContent = `+${number}% цветов`
            } else {
                cardChoiceText.textContent = `${number}% цветов`
            }
        }
        function subProcent(number) {
            if (number < 0 ) {
                cardChoiceSubtext.textContent = 'Поменьше и подешевле'
            }
            if (number < -30 ) {
                cardChoiceSubtext.textContent = 'Ещё меньше и дешевле'
            }
            if (number > 0 ) {
                cardChoiceSubtext.textContent = 'Побольше и подороже'
            }
            if (number > 30 ) {
                cardChoiceSubtext.textContent = 'Ещё больше и дороже'
            }
            if (number == 0 ) {
                cardChoiceSubtext.textContent = 'Стандартный размер, стандартная цена'
            }
        }
        function resetNumber() {
            cardChoiceText.textContent = 0
            cardChoiceSubtext.textContent = 'Стандартный размер, стандартная цена'
        }
        // кнопка Ещё
        const cardReviewTextArr = document.querySelectorAll('.card__review-text')
        for (let i = 0; i < cardReviewTextArr.length; i++) {
            const element = cardReviewTextArr[i];
            const cardReviewMore = element.querySelector('.card__review-more')
            if (element.scrollHeight > element.clientHeight) {
                cardReviewMore.style.display = 'block'
            }
        }
        // закрытие карточки
        const cardClose = card.querySelector('.card__close')
        const cardWrapper = card.querySelector('.card__wrapper')
        cardClose.addEventListener('click', function(){
            card.classList.remove('card-active')
            resetNumber()
        })
        document.addEventListener( 'mousedown', (e) => {
            const withinBoundaries = e.composedPath().includes(cardWrapper)
            if ( ! withinBoundaries ) {
                card.classList.remove('card-active')
                resetNumber()
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                card.classList.remove('card-active')
                resetNumber()
            }
        });
    })
}


// Переход к оформлению 
const basketBtn  = document.querySelector('.basket__btn')
basketBtn.addEventListener('click', function(){
    window.location.href = 'placing.html';
})