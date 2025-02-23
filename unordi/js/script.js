const menu = document.querySelector('.menu')
const burger = document.querySelector('.header__burger')
burger.addEventListener('click', function(){
    menu.classList.toggle('menu-active')
    burger.classList.toggle('header__burger-active')
})
const switchInput = document.querySelector('.header__input')
if (themeSite == 'light') {
    switchInput.checked = false
} 
if (themeSite == 'dark') {
    switchInput.checked = true 
}
const switchBtn = document.querySelector('.header__switch')
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
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme')
        body.classList.remove('dark-theme')
        localStorage.setItem('theme', 'light');
    }
}
const ropeSkewArr = document.querySelectorAll('.rope-skew')
for (let i = 0; i < ropeSkewArr.length; i++) {
    const element = ropeSkewArr[i];
    element.addEventListener('mouseenter', function(){
        element.classList.add('rope-skew-active')
        setTimeout(() => {
            element.classList.remove('rope-skew-active')
          }, "3000");
    })
}


const vies = document.querySelectorAll('.vie')
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('vie-active')
            observer.unobserve(entry.target)
        }
    })
}
const options = {
    rootMargin: '0px',
    threshold: 0.4,
}
const observer = new IntersectionObserver(callback, options)
vies.forEach((vie) => observer.observe(vie))

const vieups = document.querySelectorAll('.vie-up')
vieups.forEach((vie) => observer.observe(vie))

const vieuplittles = document.querySelectorAll('.vie-uplittle')
vieuplittles.forEach((vie) => observer.observe(vie))

const vielefts = document.querySelectorAll('.vie-left')
vielefts.forEach((vie) => observer.observe(vie))

const ropeVertItemArr = document.querySelectorAll('.rope-vert__item')
for (let i = 0; i < ropeVertItemArr.length; i++) {
    const element = ropeVertItemArr[i];
    element.addEventListener('mouseenter', function(){
        element.classList.add('blic-active')
        setTimeout(() => {
            element.classList.remove('blic-active')
          }, "500");
    })
}