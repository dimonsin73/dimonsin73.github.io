const modalBtnArr = document.querySelectorAll('.modal-btn')
const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.modal__form')
const modalClose = document.querySelector('.modal__close')
const modalRate = document.querySelector('.modal__rate')
const modalPrice = document.querySelector('.modal__price')
for (let i = 0; i < modalBtnArr.length; i++) {
    const modalBtn = modalBtnArr[i];
    modalBtn.addEventListener('click', function(){
        modal.classList.add('modal-active')
        switch (modalBtn.dataset.rate) {
            case 'min':
                modalRate.textContent = 'Тариф Минимум'
                modalPrice.textContent = '49 900 руб'
                break;
            case 'standart':
                modalRate.textContent = 'Тариф Стандарт'
                modalPrice.textContent = '59 900 руб'
                break;
            case 'vip':
                modalRate.textContent = 'Тариф VIP'
                modalPrice.textContent = '79 900 руб'
                break;
            default:
                break;
        }
    })
}
modalClose.addEventListener('click', function(){
    modal.classList.remove('modal-active')
})
document.addEventListener( 'mousedown', (e) => {
    const withinBoundaries = e.composedPath().includes(modalForm);
    if ( ! withinBoundaries ) {
        modal.classList.remove('modal-active')
    }
})
document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){ 
        modal.classList.remove('modal-active')
    }
});