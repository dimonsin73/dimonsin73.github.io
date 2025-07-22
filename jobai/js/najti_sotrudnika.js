const adjustment = document.querySelector('.adjustment')
const sectionArray = document.querySelectorAll('.section')
adjustment.addEventListener('click', function(){
    for (let i = 0; i < sectionArray.length; i++) {
        const section = sectionArray[i];
        if (section.dataset.section === 'additional-filters') {
            section.classList.add('section_active')
        } else {
            section.classList.remove('section_active')
        }
    }
})

const sectionClose = document.querySelector('.section__close')
const sectionSuccess = document.querySelector('.section__success')
sectionClose.addEventListener('click', function(){
    openNajtiSotrudnika()
})
sectionSuccess.addEventListener('submit', function(e){
    e.preventDefault()
    openNajtiSotrudnika()
    console.log()
})

function openNajtiSotrudnika() {
    for (let i = 0; i < sectionArray.length; i++) {
        const section = sectionArray[i];
        if (section.dataset.section === 'najti-sotrudnika') {
            section.classList.add('section_active')
        } else {
            section.classList.remove('section_active')
        }
    }
}