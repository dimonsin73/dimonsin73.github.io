const ret = JSON.parse(localStorage.getItem('userMNJ'));
const headerAccountCompany = document.querySelector('.header__account-company')
const headerAccountName = document.querySelector('.header__account-name')
headerAccountCompany.textContent = `${ret.company}`
headerAccountName.textContent = `${ret.surname} ${ret.name.charAt(0)}.`
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

// Открытие / закрытие описания вакансии
const expandBtnArr = document.querySelectorAll('.card__btn-expand')
for (let i = 0; i < expandBtnArr.length; i++) {
    const element = expandBtnArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('btn-black-active')
        const card = element.parentElement.parentElement
        const expand = card.querySelector('.card__expand')
        const btnPrint = card.querySelector('.card__print')
        const btnDawnload = card.querySelector('.card__dawnloader')
        expand.classList.toggle('card__expand-active')
        if (expand.classList.contains('card__expand-active')) {
            expand.style.height = `${expand.scrollHeight}px`
            btnPrint.style.display = 'flex'
            btnDawnload.style.display = 'flex'
        } else {
            expand.style.height = '0'
            btnPrint.style.display = 'none'
            btnDawnload.style.display = 'none'
        }
        const expandUp = card.querySelector('.card__expand-up')
        expandUp.addEventListener('click', function(){
            expand.style.height = '0'
            btnPrint.style.display = 'none'
            btnDawnload.style.display = 'none'
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

const cardFooterDotsArr = document.querySelectorAll('.card__footer-dots')
for (let i = 0; i < cardFooterDotsArr.length; i++) {
    const element = cardFooterDotsArr[i];
    element.addEventListener('click', function(){
        const cardFooterIcons = element.parentElement.querySelector('.card__footer-icons')
        cardFooterIcons.style.display = 'flex'
        element.style.display = 'none'
    })
}
const cardContentArr = document.querySelectorAll('.card__content')
for (let i = 0; i < cardContentArr.length; i++) {
    const element = cardContentArr[i];
    const sliderBtnNext = element.querySelector('.itc-slider-btn-next')
    const sliderItems = element.querySelector('.itc-slider-items')
    if (sliderItems.scrollWidth < element.scrollWidth) {
        sliderBtnNext.classList.add('itc-slider-btn-hide')
    }
}

// Кнопки Архив/Актив
const active = document.getElementById('active')
const archive = document.getElementById('archive')
/*
const cardActiveArr = document.querySelectorAll('.active')
const cardArchiveArr = document.querySelectorAll('.archive')
*/
archive.addEventListener('click', function(){
    active.classList.remove('btn-black-active')
    archive.classList.add('btn-black-active')
    /*
    for (let i = 0; i < cardActiveArr.length; i++) {
        const element = cardActiveArr[i];
        element.style.display = 'none'
    }
    for (let i = 0; i < cardArchiveArr.length; i++) {
        const element = cardArchiveArr[i];
        element.style.display = 'block'
    }
        */
})

active.addEventListener('click', function(){
    archive.classList.remove('btn-black-active')
    active.classList.add('btn-black-active')
    /*
    for (let i = 0; i < cardActiveArr.length; i++) {
        const element = cardActiveArr[i];
        element.style.display = 'block'
    }
    for (let i = 0; i < cardArchiveArr.length; i++) {
        const element = cardArchiveArr[i];
        element.style.display = 'none'
    }
    */
})

// Нажатие кнопок слева
const mainLeftItemArr = document.querySelectorAll('.main__left-item')
function mainLeftItemClick() {
    for (let i = 0; i < mainLeftItemArr.length; i++) {
        const element = mainLeftItemArr[i];
        element.addEventListener('click', function(){
            for (let i = 0; i < mainLeftItemArr.length; i++) {
                const el = mainLeftItemArr[i];
                el.classList.remove('main__left-item-active')
            }
            element.classList.add('main__left-item-active')
        })
    }
}
mainLeftItemClick()
// Ножитие на кнопку пригласить
const responseArr = document.querySelectorAll('.card__btn-response')
for (let i = 0; i < responseArr.length; i++) {
    const element = responseArr[i];
    element.addEventListener('click', function(){
        const cardFooter = element.parentElement.parentElement
        cardFooter.classList.add('card__footer-active')
    })
}
// Нажатие на кнопку дропауна 
const mainLeftSelect = document.querySelector('.main__left-select')
const mainLeftList = document.querySelector('.main__left-list')
mainLeftSelect.addEventListener('click', function(){
    mainLeftList.classList.toggle('main__left-dropdawn')
    for (let i = 0; i < mainLeftItemArr.length; i++) {
        const element = mainLeftItemArr[i];
        element.addEventListener('click', function(){
            const mainLeftText = element.querySelector('.main__left-text').textContent
            const mainLeftNum = element.querySelector('.main__left-num').textContent
            const mainLeftSelectText = document.querySelector('.main__left-select-text')
            const mainLeftSelectNum = document.querySelector('.main__left-select-num')
            mainLeftSelectText.textContent = mainLeftText
            mainLeftSelectNum.textContent = mainLeftNum
            mainLeftList.classList.remove('main__left-dropdawn')
        })
    }
    document.addEventListener( 'click', (e) => {
        const withinBoundariesList = e.composedPath().includes(mainLeftList);
        const withinBoundariesSelect = e.composedPath().includes(mainLeftSelect);
        if ( ! withinBoundariesList ) {
            if (! withinBoundariesSelect) {
                mainLeftList.classList.remove('main__left-dropdawn')
            }
        }
    })
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            mainLeftList.classList.remove('main__left-dropdawn')
        }
    })
})
