const screenWidth = window.screen.width;
const NAVBTN = document.getElementById('news__nav-btn');
const NEWSNAV = document.getElementById('news__nav');
const SCROLLBTN = document.getElementById('news__sctoll-btn');
const SCROLL = document.getElementById('scroll');
const btn = document.querySelector('.expanded-btn');

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

  const imgArr = document.getElementsByTagName('img')
  const body = document.body
  for (let i = 0; i < imgArr.length; i++) {
    const element = imgArr[i];
    element.addEventListener('click', function(){
      const imgPath = element.src
      const modalImg = document.createElement('div')
      modalImg.classList.add('modal-img')
      const modalImgWrapper = document.createElement('div')
      modalImgWrapper.classList.add('modal-img__wrapper')
      const modalImgImg = document.createElement('img')
      modalImgImg.classList.add('modal-img__img')
      modalImgImg.setAttribute('src', `${imgPath}`)
      modalImgImg.setAttribute('alt', 'увеличенная картинка')
      modalImgWrapper.append(modalImgImg)
      modalImg.append(modalImgWrapper)
      body.append(modalImg)
      document.addEventListener( 'mousedown', (e) => {
        const withinBoundaries = e.composedPath().includes(modalImgWrapper)
        if ( ! withinBoundaries ) {
          modalImg.remove()
        }
      })
      document.addEventListener('keydown', function(e) {
          if( e.keyCode == 27 ){ 
            modalImg.remove()
          }
      });
    })
    
  }