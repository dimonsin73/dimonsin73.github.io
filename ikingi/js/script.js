const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
    },
    mousewheel: {
        invert: true,
    },
});
const swiperWrapper = document.querySelector('.swiper-wrapper')
const swiperScooterArray = document.querySelectorAll('.swiper-scooter')
const hiro = document.querySelector('.hiro')
const hiroImg = document.querySelector('.hiro__img')
const menu = document.querySelector('.menu')
const products = document.querySelector('.products')
const modal = document.querySelector('.modal')
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
            console.log(deltaSumm)
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
    })
}