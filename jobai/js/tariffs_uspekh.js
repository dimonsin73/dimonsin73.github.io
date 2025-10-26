// Работа подсказок 
const clueArray = document.querySelectorAll('.clue')
for (let i = 0; i < clueArray.length; i++) {
    const clue = clueArray[i];
    const clueWrapper = clue.querySelector('.clue__wrapper')
    clue.addEventListener('mouseover', function(){
        clueWrapper.classList.add('clue__wrapper-active')
    })
    clue.addEventListener('mouseout', function(){
        clueWrapper.classList.remove('clue__wrapper-active')
    })
}


const tariffsFormArray = document.querySelectorAll('.tariffs__form')
const tariffsBannerRabotodatel = document.querySelector('.tariffs__banner_rabotodatel')

for (let i = 0; i < tariffsFormArray.length; i++) {
    const tariffsForm = tariffsFormArray[i];
    tariffsForm.addEventListener('scroll', function(){
        if (tariffsForm.scrollTop > 0) {
            tariffsBannerRabotodatel.classList.add('tariffs__banner-min')
            tariffsForm.classList.add('tariffs__form-max')
        } else {
            tariffsBannerRabotodatel.classList.remove('tariffs__banner-min')
            tariffsForm.classList.remove('tariffs__form-max')
        }
    })
}