const ret = JSON.parse(localStorage.getItem('userMNJ'));
const headerUserAccount = document.querySelector('.header__user-account')
headerUserAccount.textContent = `${ret.surname} ${ret.name.charAt(0)}.`

// Открытие закрытие модального окна
const modal = document.querySelector('.modal')
const modalWrapper = document.querySelector('.modal__wrapper')
const cardCorrespondenceArr = document.querySelectorAll('.card__correspondence')
for (let i = 0; i < cardCorrespondenceArr.length; i++) {
    const element = cardCorrespondenceArr[i];
    element.addEventListener('click', function(){
        const procent = element.querySelector('.card__correspondence-number').textContent
        const procentModal = document.querySelector('.modal__head-number')
        procentModal.textContent = procent
        modal.style.display = 'flex'
    })
    const btnClose = modal.querySelector('.modal__head-close')
    btnClose.addEventListener('click', function(){
        modal.style.display = 'none'
    })
    modal.addEventListener('click', function(e){
        const withinBoundaries = e.composedPath().includes(modalWrapper);
        if ( ! withinBoundaries ) {
            modal.style.display = 'none'
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            modal.style.display = 'none'
        }
    })
}


// Открытие / закрытие описания вакансии
const expandBtnArr = document.querySelectorAll('.card__btn-expand')
for (let i = 0; i < expandBtnArr.length; i++) {
    const element = expandBtnArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('btn-black-active')
        const card = element.parentElement.parentElement
        const expand = card.querySelector('.card__expand')
        expand.classList.toggle('card__expand-active')
        if (expand.classList.contains('card__expand-active')) {
            expand.style.height = `${expand.scrollHeight}px`
        } else {
            expand.style.height = 0
        }
        const expandUp = card.querySelector('.card__expand-up')
        expandUp.addEventListener('click', function(){
            expand.style.height = 0
            expand.classList.remove('card__expand-active')
            element.classList.remove('btn-black-active')
        })
    })
}
// Кнопка Лайк 
const btnHeartArr = document.querySelectorAll('.card__btnheart')
for (let i = 0; i < btnHeartArr.length; i++) {
    const element = btnHeartArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('card__btnheart-active')    
    })
}
// Кнопка слайдера
const cardContentArr = document.querySelectorAll('.card__content')
for (let i = 0; i < cardContentArr.length; i++) {
    const element = cardContentArr[i];
    const sliderItems = element.querySelector('.itc-slider-items')
    const sliderBtnNext = element.querySelector('.itc-slider-btn-next')
    if (sliderItems.scrollWidth < element.scrollWidth) {
        sliderBtnNext.classList.add('itc-slider-btn-hide')
    }
}

// Ножитие на кнопку откликнуться
const responseArr = document.querySelectorAll('.card__btn-response')
for (let i = 0; i < responseArr.length; i++) {
    const element = responseArr[i];
    element.addEventListener('click', function(){
        const cardFooter = element.parentElement.parentElement
        cardFooter.classList.add('card__footer-active')
    })
}

// Кнопки Архив/Актив
const active = document.getElementById('active')
const archive = document.getElementById('archive')
const cardActiveArr = document.querySelectorAll('.active')
const cardArchiveArr = document.querySelectorAll('.archive')
archive.addEventListener('click', function(){
    active.classList.remove('btn-black-active')
    archive.classList.add('btn-black-active')
    for (let i = 0; i < cardActiveArr.length; i++) {
        const element = cardActiveArr[i];
        element.style.display = 'none'
    }
    for (let i = 0; i < cardArchiveArr.length; i++) {
        const element = cardArchiveArr[i];
        element.style.display = 'block'
    }
})

active.addEventListener('click', function(){
    archive.classList.remove('btn-black-active')
    active.classList.add('btn-black-active')
    for (let i = 0; i < cardActiveArr.length; i++) {
        const element = cardActiveArr[i];
        element.style.display = 'block'
    }
    for (let i = 0; i < cardArchiveArr.length; i++) {
        const element = cardArchiveArr[i];
        element.style.display = 'none'
    }
})

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
const burger = document.querySelector('.burger')
burger.addEventListener('click', function(){
    aside.classList.add('aside-active')
    console.log('1')
})
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ 
		aside.classList.remove('aside-active')
	}
});
document.addEventListener( 'click', (e) => {
	const withinBoundariesAside = e.composedPath().includes(aside);
    const withinBoundariesBurger = e.composedPath().includes(burger);
	if ( !withinBoundariesAside) {
        if (!withinBoundariesBurger) {
            aside.classList.remove('aside-active')
        }
    }
})