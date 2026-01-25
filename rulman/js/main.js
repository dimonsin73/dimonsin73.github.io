document.addEventListener('DOMContentLoaded', () => {
    ItcSlider.getOrCreateInstance('.hero__slider', {
        autoplay: true, 
        interval: 5000 
    });
    ItcSlider.getOrCreateInstance('.services__slider');
    ItcSlider.getOrCreateInstance('.catalog__slider');
    ItcSlider.getOrCreateInstance('.materials__slider');
    ItcSlider.getOrCreateInstance('.portfolio__slider');
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