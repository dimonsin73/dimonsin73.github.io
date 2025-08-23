// Работа ASIDE
const asideBtnArray = document.querySelectorAll('.aside__btn')
for (let i = 0; i < asideBtnArray.length; i++) {
    const asideBtn = asideBtnArray[i];
    asideBtn.addEventListener('click', function(){
        for (let i = 0; i < asideBtnArray.length; i++) {
            const element = asideBtnArray[i];
            element.classList.remove('aside__btn-active')
        }
        asideBtn.classList.add('aside__btn-active')
    })
}
const headerBurger = document.querySelector('.header__burger')
const aside = document.querySelector('.aside')
headerBurger.addEventListener('click', function(){
    aside.classList.add('aside_active')
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(aside);
        if ( ! withinBoundaries ) {
            const withinBoundariesBurger = e.composedPath().includes(headerBurger);
            if (! withinBoundariesBurger) {
                aside.classList.remove('aside_active')
            }
        }
    }) //Скрытие Aside по щелчку вне 
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            aside.classList.remove('aside_active')
        }
    }) //Скрытие Aside по нажатию на ESC
})
// Поднятия заголовка для импута 
const labelInputArray = document.querySelectorAll('.label__input')
for (let i = 0; i < labelInputArray.length; i++) {
    const labelInput = labelInputArray[i];
    labelInput.addEventListener('focus', function(){
        const label = labelInput.parentElement
        label.classList.add('label-active')
    })
    labelInput.addEventListener('focusout', function(){
        if (labelInput.value === '') {
            const label = labelInput.parentElement
            label.classList.remove('label-active')
        }
    })
}
const form = document.querySelector('.registraciya__form')
// Поля ввода
const password = document.getElementById('password')
const passwordSecond = document.getElementById('password-repeat')
const passwordLabel = password.parentElement
const passwordSecondLabel = passwordSecond.parentElement


// Проверка надёжности пароля
password.addEventListener('input', function(){
    const labelLine = password.nextSibling
    const labelLineItemArr = labelLine.children
    attributLineAddColor(password, labelLineItemArr)
    passwordComparison()
})
passwordSecond.addEventListener('input', function(){
    const labelLine = passwordSecond.nextSibling
    const labelLineItemArr = labelLine.children
    attributLineAddColor(passwordSecond, labelLineItemArr)
    passwordComparison()
})
// Ф-ия очистки цветов
function attributLineRemoveColor(element) {
    element.classList.remove('label__line-orange')
    element.classList.remove('label__line-success')
    element.classList.remove('label__line-error')
}
// Ф-ция окрашивания 
function attributLineAddColor(password, labelLineItemArr) {
    if (password.value.length < 16) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-success')
        }
    }
    if (password.value.length < 14) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 3; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-success')
        }
    }
    if (password.value.length < 12) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-orange')
        }
    }
    if (password.value.length < 8) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 1; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-error')
        }
    }
    if (password.value.length === 0) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
    }
}
// Ф-ция проверки совпадения паролей
function passwordComparison() {
    
    if (passwordSecond.value.length === 0) {
        passwordSecondLabel.classList.remove('label_error')
    } else {
        if (passwordSecond.value != password.value) {
            passwordSecondLabel.classList.add('label_error')
            const labelLine = passwordSecond.nextSibling
            const labelLineItemArr = labelLine.children
            for (let i = 0; i < labelLineItemArr.length; i++) {
                const element = labelLineItemArr[i];
                attributLineRemoveColor(element)
            }
            for (let i = 0; i < 2; i++) {
                const element = labelLineItemArr[i];
                element.classList.add('label__line-error')
            }
        } else {
            passwordSecondLabel.classList.remove('label_error')
        }
    }
}
// Открытие/скрытие пароля
const labelEyeArray = document.querySelectorAll('.label__eye')
for (let i = 0; i < labelEyeArray.length; i++) {
    const labelEye = labelEyeArray[i];
    labelEye.addEventListener('click', function(){
        labelEye.classList.toggle('label__eye-active')
        const password = labelEye.parentElement.querySelector('.input')
        if (labelEye.classList.contains('label__eye-active')) {
            password.setAttribute('type', 'text')
        } else {
            password.setAttribute('type', 'password')
        }
    })
}