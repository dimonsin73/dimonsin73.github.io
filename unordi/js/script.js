const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger')
burger.addEventListener('click', function(){
    menu.classList.toggle('menu-active')
    burger.classList.toggle('header__burger-active')
})

const body = document.body
const switchBtn = document.querySelector('.header__switch')
const switchInput = document.querySelector('.header__input')
switchBtn.addEventListener('click', function(){
    if (switchInput.checked) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
    } else {
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
    }
})