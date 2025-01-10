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

const flowers = ['Альстромерия', 'Амариллис', 'Анемон', 'Гвоздика', 'Гвоздика кустовая', 'Гербера', 'Гербера мини', 'Гиацинт', 'Гипсофила', 'Гортензия', 'Ирис', 'Калла', 'Лаванда', 'Лилия', 'Мимоза', 'Нарцисс', 'Орхидея Ванда', 'Орхидея Фаленопсис', 'Орхидея Цимбидиум', 'Пион', "Пион Сара Бернар", 'Подсолнух', 'Ранункулюс', 'Роза', 'Роза Вувузела', 'Роза Пинк Охара', 'Роза Эквадор', 'Роза кустовая', 'Роза кустовая пионовидная', "Роза пионовидная", 'Ромашка', 'Сирень', 'Тюльпан', 'Тюльпан пионовидный', 'Хлопок', 'Хризантема Антонов', 'Хризантема Момоко', 'Хризантема кустовая', 'Хризантема одноголовая', 'Эустома', 'Эустома махровая']

const filterFlowers = document.getElementById('filter-flowers')
const dropdawnContent = filterFlowers.querySelector('.dropdawn__content')

for (let i = 0; i < flowers.length; i++) {
    const element = flowers[i];
    createFlowers(element, i)
}
function createFlowers(element, i) {
    const dropdawnContentItem = document.createElement('div')
    dropdawnContentItem.classList.add('dropdawn__content-item')
    dropdawnContent.append(dropdawnContentItem)
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
const productsFilterBtn = filterFlowers.querySelector('.products__filter')
productsFilterBtn.addEventListener('click', function(){
    const dropdawn = filterFlowers.querySelector('.dropdawn')
    dropdawn.classList.toggle('dropdawn-active')
    const dropdawnDelete = dropdawn.querySelector('.dropdawn__header-btn')
    const dropdawnContentInput = dropdawn.querySelector('.dropdawn__header-input')
    dropdawnDelete.addEventListener('click', function(){
        dropdawnContentInput.value = ''
        dropdawnContent.innerHTML = ''
        for (let i = 0; i < flowers.length; i++) {
            const element = flowers[i];
            createFlowers(element)
        }
    })
    dropdawnContentInput.addEventListener('input', function(){
        dropdawnContent.innerHTML = ''
        for (let i = 0; i < flowers.length; i++) {
            const element = flowers[i];
            if (element.toLowerCase().includes(dropdawnContentInput.value.toLowerCase())) {
                createFlowers(element)
            }
        }
    })
    // показать выбранные чекбоксы
    const showBtn = filterFlowers.querySelector('.catalog')
    showBtn.addEventListener('click', function(){
        const dropdawnContentInputArr = filterFlowers.querySelectorAll('.dropdawn__content-input:checked') 
        console.log(dropdawnContentInputArr)
    })
})