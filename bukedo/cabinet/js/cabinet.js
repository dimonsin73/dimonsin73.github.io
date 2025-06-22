// Работа бургера
const burgerAside = document.querySelector('.burger-aside')
const aside = document.querySelector('.aside')
burgerAside.addEventListener('click', function(){
    aside.classList.add('aside-active')
    // закрытие
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(aside);
        if ( ! withinBoundaries ) {
            aside.classList.remove('aside-active')
        }
    })
})
const asideListSetting = document.querySelector('.aside__list-setting')
const asideSublist = document.querySelector('.aside__sublist')
asideListSetting.addEventListener('click', function(){
    asideListSetting.classList.toggle('aside__list-setting-active')
    asideSublist.classList.toggle('aside__sublist-active')
})
// Работа тегов
const tagArray = document.querySelectorAll('.tags__btn')
for (let i = 0; i < tagArray.length; i++) {
    const tag = tagArray[i];
    tag.addEventListener('click', function(){
        const tagsView = tag.parentElement.querySelectorAll('.tags__btn')
        for (let i = 0; i < tagsView.length; i++) {
            const element = tagsView[i];
            element.classList.remove('tags__btn-active')
        }
        tag.classList.add('tags__btn-active')
    })
}
// вывод нужного контента
const asideListItemArr = document.querySelectorAll('.aside__list-item')
const mainBlockArr = document.querySelectorAll('.main-block')
const headMenuArr = document.querySelectorAll('.head__menu')
for (let i = 0; i < asideListItemArr.length; i++) {
    const asideListItem = asideListItemArr[i];
    asideListItem.addEventListener('click', function(){
        for (let i = 0; i < asideListItemArr.length; i++) {
            const element = asideListItemArr[i];
            element.classList.remove('aside__list-item-active')
        }
        asideListItem.classList.add('aside__list-item-active')
        const data = asideListItem.dataset.aside
        for (let i = 0; i < mainBlockArr.length; i++) {
            const mainBlock = mainBlockArr[i];
            mainBlock.classList.remove('main-block-active')
            if (mainBlock.dataset.main == data) {
                mainBlock.classList.add('main-block-active')
            }
        }
        for (let i = 0; i < headMenuArr.length; i++) {
            const headMenu = headMenuArr[i];
            headMenu.classList.remove('head__menu-active')
            if (headMenu.dataset.menu == data) {
                headMenu.classList.add('head__menu-active')
            }
        }
        aside.classList.remove('aside-active')
    })
}
// textarea
const shopsNameTextarea = document.querySelector('.shops__name-textarea')
const shopsNameFirst = document.querySelector('.shops__name-first')
shopsNameTextarea.addEventListener('input', function(){
    const count = shopsNameTextarea.value.length
    shopsNameFirst.textContent = count
})
// textarea
const modalAdditionallyTextarea = document.querySelector('.modal__additionally-textarea')
const modalAdditionallyFirst = document.querySelector('.modal__additionally-first')
modalAdditionallyTextarea.addEventListener('input', function(){
    const count = modalAdditionallyTextarea.value.length
    modalAdditionallyFirst.textContent = count
})

// Селект 
const selectArray = document.querySelectorAll(".select")
for (let i = 0; i < selectArray.length; i++) {
    const select = selectArray[i];
    select.addEventListener('click', function(){
        const options = select.parentElement.querySelector('.options')
        options.classList.toggle('options-active')
        const optionArray = select.parentElement.querySelectorAll('.option')
        for (let i = 0; i < optionArray.length; i++) {
            const option = optionArray[i];
            option.addEventListener('click', function(){
                select.value = option.textContent
            })
        }
    })
    
}
// Кнопка нет в наличии
const productsViewArray = document.querySelectorAll(".products__view")
for (let i = 0; i < productsViewArray.length; i++) {
    const productsView = productsViewArray[i];
    productsView.addEventListener('click', function(){
        const productsImage = productsView.parentElement.parentElement
        productsImage.classList.toggle('products__item-noview')
    })
}
// Кнопка переключения
const productsSort = document.querySelector('.products__sort')
productsSort.addEventListener('click', function(){
    const productsSortData = productsSort.dataset.sort
    const productsWrapperArray = document.querySelectorAll('.products__wrapper')
    for (let i = 0; i < productsWrapperArray.length; i++) {
        const productsWrapper = productsWrapperArray[i];
        if (productsWrapper.dataset.sort === productsSortData) {
            productsWrapper.classList.remove('products__wrapper-active')
        } else {
            productsWrapper.classList.add('products__wrapper-active')
        }
    }
    
    switch (productsSortData) {
        case 'grid':
            productsSort.dataset.sort = 'table'
            break;
        case 'table':
            productsSort.dataset.sort = 'grid'
            break;
        default:
            break;
    }

    const productsSortSvgArray = document.querySelectorAll('.products__sort-svg')
    for (let i = 0; i < productsSortSvgArray.length; i++) {
        const productsSortSvg = productsSortSvgArray[i];
        if (productsSortSvg.dataset.sort === productsSortData) {
            productsSortSvg.classList.remove('products__sort-svg-active')
        } else {
            productsSortSvg.classList.add('products__sort-svg-active')
        }
    }
})

const shopsInfoBtnArr = document.querySelectorAll('.shops__info-btn')
for (let i = 0; i < shopsInfoBtnArr.length; i++) {
    const shopsInfoBtn = shopsInfoBtnArr[i];
    const shopsInfoText = shopsInfoBtn.querySelector('.shops__info-text')
    shopsInfoBtn.addEventListener('mouseenter', function(){
        shopsInfoText.classList.add('shops__info-text-active')
    })
    shopsInfoBtn.addEventListener('mouseleave', function(){
        shopsInfoText.classList.remove('shops__info-text-active')
    })
}
const switchInputArr = document.querySelectorAll('.switch__input')
for (let i = 0; i < switchInputArr.length; i++) {
    const switchInput = switchInputArr[i];
    switchInput.addEventListener('click', function(){
        const shopsServiceInput = switchInput.parentElement.parentElement.parentElement.querySelector('.input_service')
        const shopsGridTimes = switchInput.parentElement.parentElement.parentElement.querySelector('.shops__grid-times')
        const shopsGridNotimes = switchInput.parentElement.parentElement.parentElement.querySelector('.shops__grid-notimes')
        if (shopsServiceInput != null) {
            if (switchInput.checked) {
                shopsServiceInput.classList.add('input_service-active')
            } else {
                shopsServiceInput.classList.remove('input_service-active')
            }
        }
        if (shopsGridTimes != null) {
            if (switchInput.checked) {
                shopsGridTimes.classList.add('shops__grid-times-active')
                shopsGridNotimes.classList.remove('shops__grid-notimes-active')
            } else {
                shopsGridTimes.classList.remove('shops__grid-times-active')
                shopsGridNotimes.classList.add('shops__grid-notimes-active')
            } 
        }
        
    })
}
const headShopItemArr = document.querySelectorAll('.head__shop-item')
const shopsWrapperArr = document.querySelectorAll('.shops__wrapper')
for (let i = 0; i < headShopItemArr.length; i++) {
    const headShopItem = headShopItemArr[i];
    headShopItem.addEventListener('click', function(){
        for (let i = 0; i < headShopItemArr.length; i++) {
            const element = headShopItemArr[i];
            element.classList.remove('head__shop-item-active')
        }
        headShopItem.classList.add('head__shop-item-active')
        const menuItem = headShopItem.dataset.menuitem
        for (let i = 0; i < shopsWrapperArr.length; i++) {
            const shopsWrapper = shopsWrapperArr[i];
            shopsWrapper.classList.remove('shops__wrapper-active')
            if (shopsWrapper.dataset.shops == menuItem) {
                shopsWrapper.classList.add('shops__wrapper-active')
            }
        }
    })
}

const shopsGridPlus = document.querySelector('.shops__grid-plus')
const shopsGridD = document.querySelector('.shops__grid-D')
shopsGridPlus.addEventListener('click', function(){
    const shopsGridDates =  document.createElement('div') 
    shopsGridDates.classList.add('shops__grid-dates')
    const shopsGridDate =  document.createElement('input') 
    shopsGridDate.classList.add('shops__grid-date')
    shopsGridDate.setAttribute('type', 'date')
    const shopsGridDelete =  document.createElement('button') 
    shopsGridDelete.classList.add('shops__grid-delete')
    shopsGridDelete.setAttribute('type', 'button')
    shopsGridD.append(shopsGridDates)
    shopsGridDates.append(shopsGridDate, shopsGridDelete)

    shopsGridDelete.addEventListener('click', function(){
        shopsGridDates.remove()
    })
})

const helpItemHeadArray = document.querySelectorAll('.help__item-head')
for (let i = 0; i < helpItemHeadArray.length; i++) {
    const helpItemHead = helpItemHeadArray[i];
    helpItemHead.addEventListener('click', function (){
        const helpItem = helpItemHead.parentElement
        helpItem.classList.toggle('help__item-active')        
        const helpItemContent = helpItem.querySelector('.help__item-content')
        console.log(helpItemContent.scrollHeight)
        if (helpItem.classList.contains('help__item-active')) {
            helpItemContent.style.height = `${helpItemContent.scrollHeight}px`
        } else {
            helpItemContent.style.height = '0px'
        }
    })
}

// Карта 
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("shops__map", {
            // Координаты центра карты.
            center: [55.876611, 37.528009],
            // Уровень масштабирования.
            zoom: 9
        });
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [44, 50],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-22, -50]
        })
        var myCircle15 = new ymaps.Circle([
            // Координаты центра круга.
            [55.876611, 37.528009],
            // Радиус круга в метрах.
            15000
        ], {
        }, {
            // Задаем опции круга.
            // Выключаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            fillColor: "#552BC91A",
            // Цвет обводки.
            strokeColor: "#552BC9",
            // Ширина обводки в пикселях.
            strokeWidth: 1
        });
        var myCircle20 = new ymaps.Circle([
            // Координаты центра круга.
            [55.876611, 37.528009],
            // Радиус круга в метрах.
            20000
        ], {
        }, {
            // Задаем опции круга.
            // Выключаем возможность перетаскивания круга.
            draggable: false,
            // Цвет заливки.
            fillColor: "#03A0501A",
            // Цвет обводки.
            strokeColor: "#03A050",
            // Ширина обводки в пикселях.
            strokeWidth: 1
        });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myCircle15)
            .add(myCircle20)
    }

// Уведомления 
const headBell = document.querySelector('.head__bell')
const notifications = document.querySelector('.notifications')
headBell.addEventListener('click', function(){
    notifications.classList.add('notifications-active')
    // закрытие
    document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(notifications);
        if ( ! withinBoundaries ) {
            notifications.classList.remove('notifications-active')
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            notifications.classList.remove('notifications-active')
        }
    });
})

// Добавление товара 
const productsAdd = document.getElementById('products-add')
const modalArray= document.querySelectorAll('.modal')
productsAdd.addEventListener('click', function(){
    for (let i = 0; i < modalArray.length; i++) {
        const modal = modalArray[i];
        if (modal.dataset.modal === 'basic') {
            console.log(modal.dataset.modal)
            modal.classList.add('modal-active')
        }
        const modalClose = modal.querySelector('.modal__close')
        modalClose.addEventListener('click', function(){
            modal.classList.remove('modal-active')
        })
    }
})
const modalAdditionallyHeadArray = document.querySelectorAll('.modal__additionally-head')
for (let i = 0; i < modalAdditionallyHeadArray.length; i++) {
    const modalAdditionallyHead = modalAdditionallyHeadArray[i];
    modalAdditionallyHead.addEventListener('click', function () {
        const modalAdditionallyContent = modalAdditionallyHead.parentElement.querySelector('.modal__additionally-content')
        modalAdditionallyContent.classList.toggle('modal__additionally-content-active')
    })
}