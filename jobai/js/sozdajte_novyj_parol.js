
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

password.addEventListener('input', function(){
    passwordLabel.classList.remove('label_error')
})
// Проверка надёжности пароля
password.addEventListener('input', function(){
    const labelLine = password.nextSibling
    const labelLineItemArr = labelLine.children
    attributLineAddColor(labelLineItemArr)
})
// Ф-ия очистки цветов
function attributLineRemoveColor(element) {
    element.classList.remove('label__line-orange')
    element.classList.remove('label__line-success')
    element.classList.remove('label__line-error')
}
// Ф-ция окрашивания 
function attributLineAddColor(labelLineItemArr) {
    if (password.value.length <= 16) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-success')
        }
    }
    if (password.value.length < 12) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 3; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-success')
        }
    }
    if (password.value.length < 8) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-orange')
        }
    }
    if (password.value.length < 4) {
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
// Проверка совпадения паролей 
password.addEventListener('input', function(){
    passwordComparison()
})
passwordSecond.addEventListener('input', function(){
    passwordComparison()
})

// Ф-ция проверки совпадения паролей
function passwordComparison() {
    const labelLine = passwordSecond.nextSibling
    const labelLineItemArr = labelLine.children
    const labelError = labelLine.nextSibling
    if (passwordSecond.value != password.value) {
        passwordLabel.classList.add('label_error')
        passwordSecondLabel.classList.add('label_error')
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label_error')
        }
        labelError.style.opacity = '1'
    } else {
        passwordLabel.classList.remove('label_error')
        passwordSecondLabel.classList.remove('label_error')
        attributLineAddColor(labelLineItemArr)
    }
    if (passwordSecond.value.length == 0) {
        passwordLabel.classList.remove('label_error')
        passwordSecondLabel.classList.remove('label_error')
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        labelError.style.opacity = '0'
    }
}