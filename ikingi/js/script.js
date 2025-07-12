const swiper = new Swiper('.swiper-main', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    mousewheel: {
        invert: true,
    },
    breakpoints: {
        375: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 3
        }
    }
});
const swiperProduct = new Swiper('.swiper-product', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
function displayNone() {
    hiroImg.style.display = 'none'
}

const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiperScooterArray = document.querySelectorAll('.swiper-scooter')
const hiro = document.querySelector('.hiro')
const hiroImg = document.querySelector('.hiro__img')
const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const products = document.querySelector('.products')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const modalWrapperArray = modal.querySelectorAll('.modal__wrapper')
let deltaSumm = 0
window.addEventListener('wheel', function(e) {
    const withinBoundariesSW = e.composedPath().includes(swiperWrapper);
    const withinBoundariesM = e.composedPath().includes(modal);
    const withinBoundariesI = e.composedPath().includes(info);
    if ( ! withinBoundariesSW ) {
        if ( ! withinBoundariesM ) {
            if (! withinBoundariesI) {
                const delta = e.deltaY;
                deltaSumm = deltaSumm + delta
                if (deltaSumm < 0) {
                    deltaSumm = 0
                }
                if (deltaSumm > 300) {
                    deltaSumm = 300
                }
                if (deltaSumm >= 0) {
                    hiroImg.style.height = '1400px'
                    hiroImg.style.bottom = '-50%'
                    menu.style.top = '100%'
                    products.style.top = '100%'
                    hiro.style.backgroundSize = '130% 130%'
                }
                if (deltaSumm > 100 && deltaSumm < 200) {
                    hiroImg.style.height = '700px'
                    hiroImg.style.bottom = '0'
                    menu.style.top = '50%'
                    nav.classList.remove('nav-active')
                    hiro.style.backgroundSize = '100% 100%'
                    products.style.top = '100%'
                    hiroImg.style.display = 'block'
                }
                if (deltaSumm > 200) {
                    hiroImg.style.height = '700px'
                    hiroImg.style.bottom = '0'
                    menu.style.top = '0'
                    nav.classList.add('nav-active')
                    hiro.style.backgroundSize = '100%'
                    products.style.top = '0%'
                    setTimeout(displayNone, 400);
                }
            }
        }
    }
});
for (let i = 0; i < swiperScooterArray.length; i++) {
    const swiperScooter = swiperScooterArray[i];
    swiperScooter.addEventListener('click', function(){
        modal.classList.add('modal-active')
        const swiperScooterData = swiperScooter.dataset.scooter
        for (let i = 0; i < modalWrapperArray.length; i++) {
            const modalWrapper = modalWrapperArray[i];
            const modalWrapperData = modalWrapper.dataset.scooter
            if (modalWrapperData === swiperScooterData) {
                modalWrapper.classList.add('modal__wrapper-active')
            }
        }
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                for (let i = 0; i < modalWrapperArray.length; i++) {
                    const modalWrapper = modalWrapperArray[i];
                    modalWrapper.classList.remove('modal__wrapper-active')
                }
                modal.classList.remove('modal-active')
            }
        });
        modalClose.addEventListener('click', function(){
            for (let i = 0; i < modalWrapperArray.length; i++) {
                const modalWrapper = modalWrapperArray[i];
                modalWrapper.classList.remove('modal__wrapper-active')
            }
            modal.classList.remove('modal-active')
        })
    })
}

const navListItemArray = document.querySelectorAll('.nav__list-item')
const info = document.querySelector('.info')
const infoWrapperArray = document.querySelectorAll('.info__wrapper')
const infoClose = document.querySelector('.info__close')
for (let i = 0; i < navListItemArray.length; i++) {
    const navListItem = navListItemArray[i];
    navListItem.addEventListener('click', function(){
        info.classList.add('info-active')
        const dataNav = navListItem.dataset.nav
        for (let i = 0; i < infoWrapperArray.length; i++) {
            const infoWrapper = infoWrapperArray[i];
            if (infoWrapper.dataset.info === dataNav) {
                infoWrapper.classList.add('info__wrapper-active')
            } else {
                infoWrapper.classList.remove('info__wrapper-active')
            }
        }
        infoClose.addEventListener('click', function(){
            info.classList.remove('info-active')
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                info.classList.remove('info-active')
            }
        });
    })
}
let startX, startY;
let sumDelta = 0
window.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});
window.addEventListener('touchmove', function(e) {
    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let deltaX = currentX - startX;
    let deltaY = currentY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            // свайп вправо
        } else {
            // свайп влево
        }
    } else {
        if (deltaY > 0) {
            sumDelta++
        } 
        else {
            sumDelta--
        }
    }
});
window.addEventListener('touchend', function(e) {
    if (sumDelta > 0) {
        sumDelta = 0
    }
    if (sumDelta < -30) {
        sumDelta = -30
    }
    if (deltaSumm <= 0) {
        hiroImg.style.height = '1400px'
        hiroImg.style.bottom = '-50%'
        menu.style.top = '100%'
        products.style.top = '100%'
        hiro.style.backgroundSize = '130% 130%'
    }
    if (deltaSumm < -10 && deltaSumm > -20) {
        hiroImg.style.height = '700px'
        hiroImg.style.bottom = '0'
        menu.style.top = '50%'
        nav.classList.remove('nav-active')
        hiro.style.backgroundSize = '100% 100%'
        products.style.top = '100%'
        hiroImg.style.display = 'block'
    }
    if (deltaSumm < -20) {
        hiroImg.style.height = '700px'
        hiroImg.style.bottom = '0'
        menu.style.top = '0'
        nav.classList.add('nav-active')
        hiro.style.backgroundSize = '100%'
        products.style.top = '0%'
        setTimeout(displayNone, 400);
    }
});

const tabsBtnArray = document.querySelectorAll('.tabs__btn')
for (let i = 0; i < tabsBtnArray.length; i++) {
    const tabsBtn = tabsBtnArray[i];
    tabsBtn.addEventListener('click', function(){
        const tabsBtnArraySmall = tabsBtn.parentElement.querySelectorAll('.tabs__btn')
        const modalContentArray = tabsBtn.parentElement.parentElement.querySelectorAll('.modal__content')
        for (let i = 0; i < tabsBtnArraySmall.length; i++) {
            const element = tabsBtnArraySmall[i];
            element.classList.remove('tabs__btn-active')
        }
        tabsBtn.classList.add('tabs__btn-active')
        const dataTabs = tabsBtn.dataset.tab 
        for (let i = 0; i < modalContentArray.length; i++) {
            const modalContent = modalContentArray[i];
            if (modalContent.dataset.content === dataTabs) {
                modalContent.classList.add('modal__content-active')
            } else {
                modalContent.classList.remove('modal__content-active')
            }
        }
    })
}
