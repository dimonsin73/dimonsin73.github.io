const screenWidth = window.screen.width;
const NAVBTN = document.getElementById('news__nav-btn');
const NEWSNAV = document.getElementById('news__nav');
const SCROLLBTN = document.getElementById('news__sctoll-btn');
const SCROLL = document.getElementById('scroll');
const btn = document.querySelector('.expanded-btn');

// Ф-ия разворачивания и сворачивания меню
NAVBTN.addEventListener('click', function(){
    let classes = NEWSNAV.classList.value;
    if ( classes.includes('expanded') ) {
        NEWSNAV.classList.remove('expanded');
        if (screenWidth < '1023') {
            NEWSNAV.style.height = '150px';
        } else {
            NEWSNAV.style.height = '400px';
        }
        btn.innerHTML = 'Открыть полностью';
    } else {
        NEWSNAV.classList.add('expanded');
        NEWSNAV.style.height = 'calc(100% - 40px)';
        btn.innerHTML = 'Свернуть оглавление';
    };
});

// Ф-ия разворачивания и сворачивания большого текста
SCROLLBTN.addEventListener('click', function(){
    let classes = SCROLL.classList.value;
    if ( classes.includes('expanded') ) {
        SCROLL.classList.remove('expanded');
        SCROLL.style.height = '350px';
        btn.innerHTML = 'Открыть полностью';
    } else {
        SCROLL.classList.add('expanded');
        SCROLL.style.height = `${SCROLL.scrollHeight}px`;
        btn.innerHTML = 'Свернуть оглавление';
    };
});

// Ф-ия открытия и закрытия меню
const menu = document.querySelector('.menu');
const navigationMenu = document.querySelector('.navigation__menu');
const menuClose = document.querySelector('.menu__close');
navigationMenu.addEventListener('click', function(){
    menu.style.zIndex = '200';
    menu.style.opacity = '1';
})
menuClose.addEventListener('click', function(){
    menu.style.zIndex = '-10';
    menu.style.opacity = '0';
});

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

const swiper = new Swiper('#swiper-news', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
  const swiperFooter = new Swiper('#swiper-footer', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
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