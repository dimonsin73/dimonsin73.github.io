const form = document.querySelector('.form')
// Поля ввода
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordSecond = document.getElementById('password-second')
form.addEventListener('submit', function(event){
    event.preventDefault()
    let validation = 0
    // Регулярные выражения
    const nameRegularExpression = /^[A-ZА-Я][a-zа-яё]*$/
    const emailRegularExpression = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w)$/
    const passwordRegularExpression = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{4,}/g
    // Валидация Имя
    if (nameRegularExpression.test(name.value)) {
        name.classList.remove('attribut__input-error')
        validation++
    } else {
        name.classList.add('attribut__input-error')
    }
    // Валидация Фамилия
    if (nameRegularExpression.test(surname.value)) {
        surname.classList.remove('attribut__input-error')
        validation++
    } else {
        surname.classList.add('attribut__input-error')
    }
    // Валидация Email
    if (emailRegularExpression.test(email.value)) {
        email.classList.remove('attribut__input-error')
        validation++
    } else {
        email.classList.add('attribut__input-error')
    }
    // Валидация Пароль
    if (passwordRegularExpression.test(password.value)) {
        password.classList.remove('attribut__input-error')
        validation++
    } else {
        password.classList.add('attribut__input-error')
    }
    // Проверка совпадения паролей 
    if (passwordSecond.value == password.value) {
        validation++
    }

    if (validation == '5') {
        alert("Данный введены правильно");
    }
})
// Убрать состояние Error
name.addEventListener('input', function(){
    name.classList.remove('attribut__input-error')
})
surname.addEventListener('input', function(){
    surname.classList.remove('attribut__input-error')
})
email.addEventListener('input', function(){
    email.classList.remove('attribut__input-error')
})
password.addEventListener('input', function(){
    password.classList.remove('attribut__input-error')
})
// Проверка надёжности пароля
password.addEventListener('input', function(){
    const attributLine = password.parentElement.nextSibling
    const attributLineItemArr = attributLine.children
    attributLineAddColor(attributLineItemArr)
})
// Ф-ия учистки цветов
function attributLineRemoveColor(element) {
    element.classList.remove('attribut__line4-orange')
    element.classList.remove('attribut__line4-success')
    element.classList.remove('attribut__line4-error')
}
// Ф-ция окрашивания 
function attributLineAddColor(attributLineItemArr) {
    if (password.value.length <= 16) {
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            element.classList.add('attribut__line4-success')
        }
    }
    if (password.value.length < 12) {
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 3; i++) {
            const element = attributLineItemArr[i];
            element.classList.add('attribut__line4-success')
        }
    }
    if (password.value.length < 8) {
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = attributLineItemArr[i];
            element.classList.add('attribut__line4-orange')
        }
    }
    if (password.value.length < 4) {
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 1; i++) {
            const element = attributLineItemArr[i];
            element.classList.add('attribut__line4-error')
        }
    }
    if (password.value.length === 0) {
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
    }
}
// Проверка совпадения паролей 
passwordSecond.addEventListener('input', function(){
    const attributLine = passwordSecond.parentElement.nextSibling
    const attributLineItemArr = attributLine.children
    const attributError = attributLine.nextSibling
    if (passwordSecond.value != password.value) {
        passwordSecond.classList.add('attribut__input-error')
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = attributLineItemArr[i];
            element.classList.add('attribut__line4-error')
        }
        attributError.style.opacity = '1'
    } else {
        passwordSecond.classList.remove('attribut__input-error')
        attributLineAddColor(attributLineItemArr)
        attributError.style.opacity = '0'
    }
    if (passwordSecond.value.length == 0) {
        passwordSecond.classList.remove('attribut__input-error')
        for (let i = 0; i < attributLineItemArr.length; i++) {
            const element = attributLineItemArr[i];
            attributLineRemoveColor(element)
        }
        attributError.style.opacity = '0'
    }
})
