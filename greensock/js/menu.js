const MENU_OPEN = document.querySelector('.burger');
const MENU_CLOSE = document.querySelector('.close');
const MENU = document.querySelector('.menu');

let tl_menu = gsap.timeline();
let i = 0;
MENU_OPEN.addEventListener('click', function() {
  i++;
  if (i <= 1) {
    tl_menu.to('.menu', {
      display: 'block',
    });
    tl_menu.fromTo('.menu', {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 2,
    }, "-=0.5");
    tl_menu.from('.menu__top', {
      opacity: 0.5,
      y: -100,
    }, "-=2");
    tl_menu.from('.nav__list', {
      opacity: 0,
      y: 100,
    }, "-=1");
    tl_menu.from('.social', {
      opacity: 0,
      y: 100,
    });
    tl_menu.from('.menu__right', {
      opacity: 0,
      y: 100,
    }, "< ");
  } else {
    tl_menu.play();
  }
})
MENU_CLOSE.addEventListener('click', function() {
  tl_menu.reverse();
})
