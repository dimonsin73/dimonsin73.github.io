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
// Ползунок 
const range = document.querySelector('.search__range-input')
const number = document.querySelector('.search__range-number')
range.addEventListener('input', function(){
    number.textContent = `${range.value}%`
})