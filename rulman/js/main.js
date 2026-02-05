// ===== LAZY LOAD =====
const lazyLoadInstance = new LazyLoad({});
// ===== SLIDERS =====
document.addEventListener('DOMContentLoaded', () => {
    ItcSlider.getOrCreateInstance('.hero__slider', {
        autoplay: true, 
        interval: 5000 
    });
    ItcSlider.getOrCreateInstance('.cooperation__slider');
    ItcSlider.getOrCreateInstance('.services__slider');
    ItcSlider.getOrCreateInstance('.catalog__slider');
    ItcSlider.getOrCreateInstance('.materials__slider');
    ItcSlider.getOrCreateInstance('.portfolio__slider');
    ItcSlider.getOrCreateInstance('.benefits__slider');
    ItcSlider.getOrCreateInstance('.reviews__slider');
});
const headerBottom = document.querySelector('.header__bottom')
const headerMenu = document.querySelector('.header__menu')
document.addEventListener('scroll', ()=>{
    let top = window.scrollY
    if (top > 173) {
        headerBottom.classList.add('header__bottom-padding')
        headerMenu.classList.add('header__menu-sticky')
    } else {
        headerBottom.classList.remove('header__bottom-padding')
        headerMenu.classList.remove('header__menu-sticky')
    }
});

// ===== ACCORDION =====
const faqHeadArray = document.querySelectorAll('.faq__head')
for (let i = 0; i < faqHeadArray.length; i++) {
    const faqHead = faqHeadArray[i];
    faqHead.addEventListener('click', function(){
        const faqItem = faqHead.parentElement
        faqItem.classList.toggle('faq__item-active')
        const faqInner = faqItem.querySelector('.faq__inner')
        if (faqItem.classList.contains('faq__item-active')) {
            faqInner.style.height = faqInner.scrollHeight + 'px'
        } else {
            faqInner.style.height = 0
        }
        
    })
}
const headerBurger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
headerBurger.addEventListener('click', function(){
    menu.classList.add('menu_active')
})
document.addEventListener('click', function(e){
    const withinBoundaries = e.composedPath().includes(menu);
    const withinBoundariesBurger = e.composedPath().includes(headerBurger);
    if ( ! withinBoundaries ) {
        if ( ! withinBoundariesBurger ) {
            menu.classList.remove('menu_active')
        }
    }
})

const footerNavTitleArray = document.querySelectorAll('.footer__nav-title')
for (let i = 0; i < footerNavTitleArray.length; i++) {
    const footerNavTitle = footerNavTitleArray[i];
    footerNavTitle.addEventListener('click', function(){
        const footerNav = footerNavTitle.parentElement
        footerNav.classList.toggle('footer__nav_active')
    })
}

