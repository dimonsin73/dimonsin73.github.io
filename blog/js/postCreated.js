const screenWidth = window.screen.width;    
let countSlides;
if (screenWidth >= '1440') {
    countSlides = '4';
}
if (screenWidth < '1440') {
    countSlides = '3';
}
if (screenWidth < '1024') {
    countSlides = '2';
}
if (screenWidth < '768') {
    countSlides = '1';
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: countSlides,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

