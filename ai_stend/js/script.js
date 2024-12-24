const heroBtn = document.querySelector('.hero__btn')
const rocet = document.querySelector('.hero__rocket')
heroBtn.addEventListener('click', function(){
    rocet.classList.add('hero__rocket-active')
    setTimeout(link, 1000);
})

function link() {
    location.href = 'ai_stend.html'
}