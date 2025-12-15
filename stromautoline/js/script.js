document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.certificates__slider').forEach((el) => {
        ItcSlider.getOrCreateInstance(el);
        const itcSliderImgArray = document.querySelectorAll('.itc-slider-modal')
        const modal = document.querySelector('.modal')
        const modalClose = document.querySelector('.modal__close')
        for (let i = 0; i < itcSliderImgArray.length; i++) {
            const itcSliderImg = itcSliderImgArray[i];
            itcSliderImg.addEventListener('click', function(){
                let src = itcSliderImg.src
                const modaWrapper = document.createElement('img')
                modaWrapper.classList.add('modal__wrapper')
                modaWrapper.setAttribute('src', src)
                modaWrapper.setAttribute('alt', 'Сертификат')
                modal.append(modaWrapper)
                modal.classList.add('modal_active')
            })
        }
        modal.addEventListener('click', function(e){
            const modaWrapper = modal.querySelector('.modal__wrapper')
            const withinBoundaries = e.composedPath().includes(modaWrapper);
            const withinBoundariesClose = e.composedPath().includes(modalClose);
            if ( ! withinBoundaries ) {
                if (! withinBoundariesClose) {
                    modal.classList.remove('modal_active')
                    modaWrapper.remove()
                }
            }
        })
        modalClose.addEventListener('click', function(){
            const modaWrapper = modal.querySelector('.modal__wrapper')
            modal.classList.remove('modal_active')
            modaWrapper.remove()
        })
    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.products__slider').forEach((el) => {
        ItcSlider.getOrCreateInstance(el);
    });
});

const headerBurger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const headerRight = document.querySelector('.header__right')
headerBurger.addEventListener('click', function(){
    nav.classList.add('nav_active')
    headerRight.classList.add('header__right_active')
})
document.addEventListener('click', function(e){
    const withinBoundariesNav = e.composedPath().includes(nav);
    const withinBoundariesRight = e.composedPath().includes(headerRight);
    const withinBoundariesBurger = e.composedPath().includes(headerBurger);
    if ( ! withinBoundariesBurger ) {
        if (! withinBoundariesNav) {
            if (! withinBoundariesRight) {
                nav.classList.remove('nav_active')
                headerRight.classList.remove('header__right_active')
            }
            
        }
    }
})