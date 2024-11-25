// Ф-ия разварачивания скрытого текста в меню
const menuInfo = document.querySelectorAll('.menu__info');
for (let i = 0; i < menuInfo.length; i++) {
    const element = menuInfo[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < menuInfo.length; i++) {
            const element = menuInfo[i];
            element.classList.remove('menu__info-active');
        };
        element.classList.add('menu__info-active');
    });
};

// Ф-ия переключения кнопок в меню
const menuLinks = document.querySelectorAll('.menu__header-link');
for (let i = 0; i < menuLinks.length; i++) {
    const element = menuLinks[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < menuLinks.length; i++) {
            const element = menuLinks[i];
            element.classList.remove('menu__link-active');
        };
        element.classList.add('menu__link-active');
    });
};
const swiperMenu = new Swiper('#swiper-menu', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });