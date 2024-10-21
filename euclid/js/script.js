/*tabs*/
let howItem = document.querySelectorAll('.how__list__item-btn');
let howInner = document.querySelectorAll('.how__inner');

howItem.forEach(function(element) {
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    howItem.forEach(function(btn) {
      btn.classList.remove('how__list__item-active')
    });
    e.currentTarget.classList.add('how__list__item-active');

    howInner.forEach(function(element) {
      element.classList.remove('how__inner-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__inner-active');
  });
});

/*burger*/
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

burger.addEventListener('click', function(){
  burger.classList.toggle('burger-active');
  nav.classList.toggle('nav-active');
});

nav.addEventListener('click', function(){
  burger.classList.remove('burger-active');
  nav.classList.remove('nav-active');
});

/*accordion*/
$(".accordion").accordion({
  heightStyle: "content",
  active: 5
});

/*search*/
let search__btn = document.querySelector('.search__btn');
let search = document.querySelector('.search');
let search__clear = document.querySelector('.search__clear');


search__btn.addEventListener('click', function(){
  search.style.visibility = "visible";
  search.style.top = "16px";

});
search__clear.addEventListener('click', function(){
  search.style.top = "-200px";
  search.style.visibility = "hidden";
});
