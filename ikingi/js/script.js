const swiper = new Swiper('.swiper', {
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
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiperScooterArray = document.querySelectorAll('.swiper-scooter')
const hiro = document.querySelector('.hiro')
const hiroImg = document.querySelector('.hiro__img')
const menu = document.querySelector('.menu')
const products = document.querySelector('.products')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const modalWrapperArray = modal.querySelectorAll('.modal__wrapper')
let deltaSumm = 0
window.addEventListener('wheel', function(e) {
    const withinBoundariesSW = e.composedPath().includes(swiperWrapper);
    const withinBoundariesM = e.composedPath().includes(modal);
    if ( ! withinBoundariesSW ) {
        if ( ! withinBoundariesM ) {
            const delta = e.deltaY;
            deltaSumm = deltaSumm + delta
            if (deltaSumm < 0) {
                deltaSumm = 0
            }
            if (deltaSumm > 400) {
                deltaSumm = 400
            }
            if (deltaSumm > 0) {
                hiro.style.backgroundSize = 'auto 125%'
                hiroImg.style.height = '75%'
                menu.style.top = '100%'
                products.style.top = '100%'
            }
            if (deltaSumm > 100) {
                hiro.style.backgroundSize = 'auto 100%'
                hiroImg.style.height = '100%'
                menu.style.top = '50%'
                hiro.style.top = '0%'
                products.style.top = '100%'
            }
            if (deltaSumm > 200) {
                    menu.style.top = '0'
                    hiro.style.top = '-100%'
                    products.style.top = '0%'
            }
            if (deltaSumm > 300) {
                    menu.style.top = '0'
                    hiro.style.top = '-100%'
                    products.style.top = '0%'
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
    if (sumDelta < -60) {
        sumDelta = -60
    }
    if (sumDelta < 0) {
        hiro.style.backgroundSize = 'auto 125%'
        hiroImg.style.height = '75%'
        menu.style.top = '100%'
        products.style.top = '100%'
    }
    if (sumDelta < -15) {
        hiro.style.backgroundSize = 'auto 100%'
        hiroImg.style.height = '100%'
        menu.style.top = '50%'
        hiro.style.top = '0%'
        products.style.top = '100%'
    }
    if (sumDelta < -30) {
            menu.style.top = '0'
            hiro.style.top = '-100%'
            products.style.top = '0%'
    }
    if (sumDelta < -45) {
            menu.style.top = '0'
            hiro.style.top = '-100%'
            products.style.top = '0%'
    }
});