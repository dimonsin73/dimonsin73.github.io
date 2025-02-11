const main = document.querySelector('.main')
const hero = document.querySelector('.hero')
const heroBtn = document.querySelector('.hero__btn')
const rocet = document.querySelector('.hero__rocket')
heroBtn.addEventListener('click', function(){
    rocet.classList.add('hero__rocket-active')
    setTimeout(heroClose, 1000);
})
function heroClose() {
    main.style.display = 'grid'
    hero.style.display = 'none'
}
const aside = document.querySelector('.aside')
const asideItemArr = document.querySelectorAll('.aside__item')
for (let i = 0; i < asideItemArr.length; i++) {
    const element = asideItemArr[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < asideItemArr.length; i++) {
            const el = asideItemArr[i];
            el.classList.remove('aside__item-active')
        }
        element.classList.add('aside__item-active')
    })
}
const stendBtnArr = document.querySelectorAll('.stend__item-btn')
for (let i = 0; i < stendBtnArr.length; i++) {
    const element = stendBtnArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('stend__item-btn-active')
        const stendDropdawn = element.parentElement.querySelector('.stend__dropdawn')
        if (element.classList.contains('stend__item-btn-active') ) {
            stendDropdawn.style.height = `${stendDropdawn.scrollHeight}px`
        } else {
            stendDropdawn.style.height = 0
        }
    })
}

const procentRange = document.querySelector('.stend__item-procent')
const cosRange = document.querySelector('.stend__item-cos')
procentRange.addEventListener('input', function(){
    const num = procentRange.parentElement.querySelector('.stend__item-num')
    num.textContent = `${procentRange.value}%`
})
cosRange.addEventListener('input', function(){
    const num = cosRange.parentElement.querySelector('.stend__item-num')
    num.textContent = `${cosRange.value}`
})