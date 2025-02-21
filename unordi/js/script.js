const body = document.body
let themeSite = ''
if (themeSite == 'light') {
    body.classList.add('light-theme')
    body.classList.remove('dark-theme')
} 
if (themeSite == 'dark') {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme') 
}
console.log(themeSite)
const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger')
burger.addEventListener('click', function(){
    menu.classList.toggle('menu-active')
    burger.classList.toggle('header__burger-active')
})


const switchBtn = document.querySelector('.header__switch')
const switchInput = document.querySelector('.header__input')
switchBtn.addEventListener('click', function(){
    if (switchInput.checked) {
        switchInput.checked = false;
    } else {
        switchInput.checked = true;
    }
    theme()
})
switchInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        if (switchInput.checked) {
            switchInput.checked = false;
        } else {
            switchInput.checked = true;
        }
        theme()
    }
})
function theme() {
    if (switchInput.checked) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        themeSite = 'dark'
    } else {
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
        themeSite = 'light'
    }
}
