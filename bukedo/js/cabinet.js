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
const ordersTags = document.querySelectorAll('.orders__tag')
for (let i = 0; i < ordersTags.length; i++) {
    const ordersTag = ordersTags[i];
    ordersTag.addEventListener('click', function(){
        for (let i = 0; i < ordersTags.length; i++) {
            const element = ordersTags[i];
            element.classList.remove('orders__tag-active')
        }
        ordersTag.classList.add('orders__tag-active')
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
const shopsNameTextarea = document.querySelector('.shops__name-textarea')
const shopsNameFirst = document.querySelector('.shops__name-first')
shopsNameTextarea.addEventListener('input', function(){
    const count = shopsNameTextarea.value.length
    shopsNameFirst.textContent = count
})

// Селект 
const shopsPaymentSelect = document.querySelector('.shops__payment-select')
const shopsPaymentOptions = document.querySelector('.shops__payment-options')
shopsPaymentSelect.addEventListener('click', function(){
    shopsPaymentOptions.classList.toggle('shops__payment-options-active')
})
const shopsPaymentOptionArr = document.querySelectorAll('.shops__payment-option')
for (let i = 0; i < shopsPaymentOptionArr.length; i++) {
    const shopsPaymentOption = shopsPaymentOptionArr[i];
    shopsPaymentOption.addEventListener('click', function(){
        shopsPaymentSelect.value = shopsPaymentOption.textContent
    })
}
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
        const shopsServiceInput = switchInput.parentElement.parentElement.parentElement.querySelector('.shops__service-input')
        const shopsGridTimes = switchInput.parentElement.parentElement.parentElement.querySelector('.shops__grid-times')
        const shopsGridNotimes = switchInput.parentElement.parentElement.parentElement.querySelector('.shops__grid-notimes')
        if (shopsServiceInput != null) {
            if (switchInput.checked) {
                shopsServiceInput.classList.add('shops__service-input-active')
            } else {
                shopsServiceInput.classList.remove('shops__service-input-active')
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