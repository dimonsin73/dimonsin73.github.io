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

// вывод нужного контента
const asideListItemArr = document.querySelectorAll('.aside__list-item')
const mainBlockArr = document.querySelectorAll('.main-block')
const headMenuArr = document.querySelectorAll('.head__menu')
const settingContentArray = document.querySelectorAll('.setting__content')
const settingAsideItemArray = document.querySelectorAll('.setting__aside-item')
for (let i = 0; i < asideListItemArr.length; i++) {
    const asideListItem = asideListItemArr[i];
    asideListItem.addEventListener('click', function(){
        if (asideListItem.dataset.aside != undefined) {
            for (let i = 0; i < asideListItemArr.length; i++) {
                const element = asideListItemArr[i];
                element.classList.remove('aside__list-item-active')
            }
            asideListItem.classList.add('aside__list-item-active')
            const data = asideListItem.dataset.aside
            const dataSetting = asideListItem.dataset.setting
            for (let i = 0; i < mainBlockArr.length; i++) {
                const mainBlock = mainBlockArr[i];
                mainBlock.classList.remove('main-block-active')
                if (mainBlock.dataset.main == data) {
                    mainBlock.classList.add('main-block-active')
                }
                if (dataSetting != undefined) {
                    for (let i = 0; i < settingContentArray.length; i++) {
                        const settingContent = settingContentArray[i];
                        settingContent.classList.remove('setting__content-active')
                        if (settingContent.dataset.setting == dataSetting) {
                            settingContent.classList.add('setting__content-active')
                        }
                    }
                    for (let i = 0; i < settingAsideItemArray.length; i++) {
                        const settingAsideItem = settingAsideItemArray[i];
                        settingAsideItem.classList.remove('setting__aside-item-active')
                        if (settingAsideItem.dataset.setting == dataSetting) {
                            settingAsideItem.classList.add('setting__aside-item-active')
                        }
                    }
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
        }
    })
}
// Работа настроек в Асайде
const asideListSetting = document.querySelector('.aside__list-setting')
const asideSublist = document.querySelector('.aside__sublist')
asideListSetting.addEventListener('click', function(){
    asideSublist.classList.toggle('aside__sublist-active')
})
// Переключние настроек 
for (let i = 0; i < settingAsideItemArray.length; i++) {
    const settingAsideItem = settingAsideItemArray[i];
    settingAsideItem.addEventListener('click', function(){
        const dataSetting = settingAsideItem.dataset.setting
        for (let i = 0; i < settingContentArray.length; i++) {
            const settingContent = settingContentArray[i];
            settingContent.classList.remove('setting__content-active')
            if (settingContent.dataset.setting == dataSetting) {
                settingContent.classList.add('setting__content-active')
            }
        }
        for (let i = 0; i < settingAsideItemArray.length; i++) {
            const settingAsideItem = settingAsideItemArray[i];
            settingAsideItem.classList.remove('setting__aside-item-active')
            if (settingAsideItem.dataset.setting == dataSetting) {
                settingAsideItem.classList.add('setting__aside-item-active')
            }
        }
        for (let i = 0; i < asideListItemArr.length; i++) {
            const asideListItem = asideListItemArr[i];
            asideListItem.classList.remove('aside__list-item-active')
            if (asideListItem.dataset.setting == dataSetting) {
                asideListItem.classList.add('aside__list-item-active')
            }
        }
    }) 
}
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
// textarea
const modalTextareaTextarea = document.querySelector('.modal__textarea-textarea')
const modalTextareaFirst = document.querySelector('.modal__textarea-first')
modalTextareaTextarea.addEventListener('input', function(){
    const count = modalTextareaTextarea.value.length
    modalTextareaFirst.textContent = count
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
const priceWrapperArr = document.querySelectorAll('.price__wrapper')
for (let i = 0; i < headShopItemArr.length; i++) {
    const headShopItem = headShopItemArr[i];
    headShopItem.addEventListener('click', function(){
        const headShopArray = headShopItem.parentElement.querySelectorAll('.head__shop-item')
        for (let i = 0; i < headShopArray.length; i++) {
            const headShop = headShopArray[i];
            headShop.classList.remove('head__shop-item-active')
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
        for (let i = 0; i < priceWrapperArr.length; i++) {
            const priceWrapper = priceWrapperArr[i];
            priceWrapper.classList.remove('price__wrapper-active')
            if (priceWrapper.dataset.shops == menuItem) {
                priceWrapper.classList.add('price__wrapper-active')
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
const modalItemBtnArray = document.querySelectorAll('.modal__item-btn')
const modalCompoundArray = document.querySelectorAll('.modal__compound')
const modalBack = document.querySelector('.modal__back')
productsAdd.addEventListener('click', function(){
    for (let i = 0; i < modalArray.length; i++) {
        const modal = modalArray[i];
        if (modal.dataset.modal === 'basic') {
            modal.classList.add('modal-active')
        }
        const modalClose = modal.querySelector('.modal__close')
        modalClose.addEventListener('click', function(){
            modal.classList.remove('modal-active')
        })
    }
})
for (let i = 0; i < modalItemBtnArray.length; i++) {
    const modalItemBtn = modalItemBtnArray[i];
    modalItemBtn.addEventListener('click', function(){
        const dataAdd = modalItemBtn.dataset.add
        for (let i = 0; i < modalArray.length; i++) {
            const modal = modalArray[i];
            modal.classList.remove('modal-active')
            if (modal.dataset.modal === 'add') {
                modal.classList.add('modal-active')
            }
            
        }
        for (let i = 0; i < modalCompoundArray.length; i++) {
            const modalCompound = modalCompoundArray[i];
            if (modalCompound.dataset.modal === dataAdd) {
                modalCompound.classList.add('modal__compound-active')
            } else {
                modalCompound.classList.remove('modal__compound-active')
            }
        }
    })
}
modalBack.addEventListener('click', function(){
    for (let i = 0; i < modalArray.length; i++) {
        const modal = modalArray[i];
        if (modal.dataset.modal === 'basic') {
            modal.classList.add('modal-active')
        } else {
            modal.classList.remove('modal-active')
        }
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
const ordersTableItemArray = document.querySelectorAll('.orders__table-item')
const modalNextArray = document.querySelectorAll('.modal__next')
const modalBackArray = document.querySelectorAll('.modal__top-back')
const modalRefusal = document.getElementById('modal__refusal')
for (let i = 0; i < ordersTableItemArray.length; i++) {
    const ordersTableItem = ordersTableItemArray[i];
    ordersTableItem.addEventListener("click", function(){
        for (let i = 0; i < modalArray.length; i++) {
            const modal = modalArray[i];
            if (modal.dataset.modal === 'order') {
                modal.classList.add('modal-active')
                const modalWorkArray = modal.querySelectorAll('.modal-work')
                const modalWorkBtn = document.getElementById('modal__work')
                let modalNumber = 0
                modalWorkFun (modalWorkArray, modalNumber)
                modalWorkBtn.addEventListener('click', function(){
                    modalNumber = 1
                    modalWorkFun (modalWorkArray, modalNumber)
                })
                for (let i = 0; i < modalNextArray.length; i++) {
                    const modalNext = modalNextArray[i];
                    modalNext.addEventListener('click', function(){
                        modalNumber++
                        modalWorkFun (modalWorkArray, modalNumber)
                    })
                }
                for (let i = 0; i < modalBackArray.length; i++) {
                    const modalBack = modalBackArray[i];
                    modalBack.addEventListener('click', function(){
                        modalNumber--
                        modalWorkFun (modalWorkArray, modalNumber)
                    })
                }
            }
            const modalClose = modal.querySelector('.modal__close')
            modalClose.addEventListener('click', function(){
                modal.classList.remove('modal-active')
            })
            modalRefusal.addEventListener('click', function(){
                modal.classList.remove('modal-active')
            })
        }
    })
}
function modalWorkFun (modalWorkArray, modalNumber){
    for (let i = 0; i < modalWorkArray.length; i++) {
        const modalWork = modalWorkArray[i];
        if (modalWork.dataset.work == modalNumber) {
            modalWork.classList.add('modal-work-active')
        } else {
            modalWork.classList.remove('modal-work-active')
        }
    }
}
// Настройки фактический адрес 
const checkaddress = document.getElementById('checkaddress')
const settingAddress = document.getElementById('setting__address')
const settingAddressActual = document.getElementById('setting__address-actual')
checkaddress.addEventListener('change', function(){
    if (checkaddress.checked) {
        settingAddressActual.disabled = true
        settingAddressActual.value = settingAddress.value
    } else {
        settingAddressActual.disabled = false
        settingAddressActual.value = ''
    }
})
const checkcopy = document.getElementById('checkcopy')
const modalQuantity = document.querySelector('.modal__quantity')
checkcopy.addEventListener('change', function(){
    if (checkcopy.checked) {
        modalQuantity.classList.add('modal__quantity-active')
    } else {
        modalQuantity.classList.remove('modal__quantity-active')
    }
})
// Добавление в прайс лист
const priceHeadBtnArray = document.querySelectorAll('.price__head-btn')
const modalCancellationArray = document.querySelectorAll('.modal__cancellation')
const modalNext = document.querySelector('.modal__next')
const modalPriceArray = document.querySelectorAll('.modal__price')
for (let i = 0; i < priceHeadBtnArray.length; i++) {
    const priceHeadBtn = priceHeadBtnArray[i];
    priceHeadBtn.addEventListener('click', function(){
        for (let i = 0; i < modalArray.length; i++) {
            const modal = modalArray[i];
            if (modal.dataset.modal === 'price-add') {
                modal.classList.add('modal-active')
            }
            const modalCloseArray = modal.querySelectorAll('.modal__close')
            for (let i = 0; i < modalCloseArray.length; i++) {
                const modalClose = modalCloseArray[i];
                modalClose.addEventListener('click', function(){
                    modal.classList.remove('modal-active')
                    for (let i = 0; i < modalPriceArray.length; i++) {
                        const modalPrice = modalPriceArray[i];
                        if (modalPrice.dataset.price === 'first') {
                            modalPrice.classList.add('modal__price-active')
                        }
                        if (modalPrice.dataset.price === 'second') {
                            modalPrice.classList.remove('modal__price-active')
                        }
                    }
                })
            }
            // Навигация в моальном окне
            for (let i = 0; i < modalCancellationArray.length; i++) {
                const modalCancellation = modalCancellationArray[i];
                modalCancellation.addEventListener('click', function(){
                    modal.classList.remove('modal-active')
                })
            }
            modalNext.addEventListener('click', function(){
                for (let i = 0; i < modalPriceArray.length; i++) {
                    const modalPrice = modalPriceArray[i];
                    if (modalPrice.dataset.price === 'first') {
                        modalPrice.classList.remove('modal__price-active')
                    }
                    if (modalPrice.dataset.price === 'second') {
                        modalPrice.classList.add('modal__price-active')
                    }
                }
            })
        }
    })
}
// Цвета
const colorItemArray = document.querySelectorAll('.color__item')
for (let i = 0; i < colorItemArray.length; i++) {
    const colorItem = colorItemArray[i];
    colorItem.addEventListener('click', function(){
        colorItem.classList.toggle('color__item-active')
    })
}

const modalAreaHeadArray = document.querySelectorAll('.modal__area-head')
for (let i = 0; i < modalAreaHeadArray.length; i++) {
    const modalAreaHead = modalAreaHeadArray[i];
    modalAreaHead.addEventListener('click', function(){
        const modalArea = modalAreaHead.parentElement
        modalArea.classList.toggle('modal__area-active')
    })
}


