const heroBtn = document.querySelector('.hero__btn')
const rocet = document.querySelector('.hero__rocet')
heroBtn.addEventListener('click', function(){
    rocet.classList.add('hero__rocet-active')
})