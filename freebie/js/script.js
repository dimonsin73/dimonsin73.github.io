const headerArrow = document.querySelector('.header__arrow');
const freebieWrapper = document.querySelector('.freebie__wrapper');
const freebieBarText = document.querySelectorAll('.freebie__bar-text');
const logoHidden = document.querySelector('.logo__hidden');
const headerItem = document.querySelector('.header__item');
const logo = document.querySelector('.logo');
headerArrow.addEventListener('click', function () {
    headerArrow.classList.toggle('header__arrow-active');
    freebieWrapper.classList.toggle('freebie__wrapper-active');
    for (let i = 0; i < freebieBarText.length; i++) {
        const element = freebieBarText[i];
        element.classList.toggle('text-active');
    };
    logoHidden.classList.toggle('logo__hidden-active');
    headerItem.classList.toggle('item-active');
    logo.classList.toggle('logo-active');
});

const freebieBaner = document.querySelector('.freebie__baner');
const freebieBanerWin = document.querySelector('.freebie__baner-win');
freebieBaner.addEventListener('mouseover', function(){
    freebieBanerWin.innerHTML = 'Получай'
})
freebieBaner.addEventListener('mouseleave', function(){
    freebieBanerWin.innerHTML = 'Выигрывай'
})