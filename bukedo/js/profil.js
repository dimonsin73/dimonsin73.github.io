const compoundItemVisibleArr = document.querySelectorAll('.compound__item-visible')
for (let i = 0; i < compoundItemVisibleArr.length; i++) {
    const element = compoundItemVisibleArr[i];
    element.addEventListener('click', function(){
        const compoundItemPromo = element.parentElement.querySelector('.compound__item-promo')
        compoundItemPromo.classList.toggle('compound__item-promo-active')
        if (compoundItemPromo.classList.contains('compound__item-promo-active')) {
            compoundItemPromo.style.height = `${compoundItemPromo.scrollHeight}px`
        } else {
            compoundItemPromo.style.height = 0
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

// Удаление ошибок
const dataInputArr = document.querySelectorAll('.ial__input')
for (let i = 0; i < dataInputArr.length; i++) {
    const element = dataInputArr[i];
    element.addEventListener('input', function(){
        element.parentElement.classList.remove('data__head-item-error')
    })
}
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
const compoundArr = document.querySelectorAll('.compound')
for (let i = 0; i < navigationListItemArr.length; i++) {
    const element = navigationListItemArr[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < compoundArr.length; i++) {
            const element = compoundArr[i];
            element.style.display = 'none'
        }
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
        for (let i = 0; i < compoundArr.length; i++) {
            const element = compoundArr[i];
            element.style.display = 'flex'
        }
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
        for (let i = 0; i < compoundArr.length; i++) {
            const element = compoundArr[i];
            element.style.display = 'flex'
        }
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
        for (let i = 0; i < compoundArr.length; i++) {
            const element = compoundArr[i];
            element.style.display = 'flex'
        }
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
