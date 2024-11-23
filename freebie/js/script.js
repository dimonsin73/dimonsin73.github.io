const headerArrow = document.querySelector('.header__arrow');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');


const freebieBar = document.querySelector('.freebie__bar');
const freebieBarText = document.querySelectorAll('.freebie__bar-text');
const freebielogo = document.querySelector('.freebie__logo');

headerArrow.addEventListener('click', function () {
    headerArrow.classList.toggle('header__arrow-active'); // Поворот стрелки
    header.classList.toggle('header-active'); // Сдвиг хедера
    logo.classList.toggle('logo-active'); // Скрытие лого
    freebieBar.classList.toggle('freebie__bar-active'); //Изменение ширины бара
});

const freebieBaner = document.querySelector('.freebie__baner');
const freebieBanerWin = document.querySelector('.freebie__baner-win');
freebieBaner.addEventListener('mouseover', function(){
    freebieBanerWin.innerHTML = 'Получай'
})
freebieBaner.addEventListener('mouseleave', function(){
    freebieBanerWin.innerHTML = 'Выигрывай'
})