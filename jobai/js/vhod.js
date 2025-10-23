// Показать пароль
const neumorphicPasswordArray = document.querySelectorAll('.neumorphic-password')
for (let i = 0; i < neumorphicPasswordArray.length; i++) {
    const neumorphicPassword = neumorphicPasswordArray[i];
    neumorphicPassword.addEventListener('click', function(){
        neumorphicPassword.classList.toggle('neumorphic-password-slash')
        const input = neumorphicPassword.nextSibling
        if (neumorphicPassword.classList.contains('neumorphic-password-slash')) {
            input.setAttribute('type', 'text')
        } else {
            input.setAttribute('type', 'password')
        }
    })
}
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const hiro = document.querySelector('.hiro')
const hiroForm = document.querySelector('.hiro__form')
const login = document.querySelector('#login')
const password = document.querySelector('#password')
const asideLinkExit = document.querySelector('.aside__link-exit')
hiroForm.addEventListener('submit', function(e){
    e.preventDefault() 
    if (login.value.length === 0) {
        login.classList.add('neumorphic-input-error')
    }
    if (password.value.length === 0) {
        password.classList.add('neumorphic-input-error')
    }
    if (login.classList.contains('neumorphic-input-error') || password.classList.contains('neumorphic-input-error')) {
    } else { 
        aside.classList.remove('aside_hide')
        header.classList.remove('header_hide')
        main.classList.remove('main_hide')
        hiro.classList.add('hiro_hide')
    }
})
asideLinkExit.addEventListener('click', function(){
    aside.classList.add('aside_hide')
    header.classList.add('header_hide')
    main.classList.add('main_hide')
    hiro.classList.remove('hiro_hide')
})
login.addEventListener('input', function(){
    login.classList.remove('neumorphic-input-error')
})
password.addEventListener('input', function(){
    password.classList.remove('neumorphic-input-error')
})