const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDroprown = document.querySelector('.language__dropdown')
languageView.addEventListener('click', function () {
    languageDroprown.classList.toggle('language__dropdown_active')
})
document.addEventListener('click', function(e){
    const withinBoundaries = e.composedPath().includes(language);
    if ( ! withinBoundaries ) {
        languageDroprown.classList.remove('language__dropdown_active')
    }
})