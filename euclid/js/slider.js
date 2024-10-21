
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  hashNavigation: true,


  hashNavigation: {
    replaceState: true,
  },

  autoplay: {
   delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});
