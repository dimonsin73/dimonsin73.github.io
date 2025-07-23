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
const sectionFormArray = document.querySelectorAll('.section__form')
const sectionTags = document.querySelector('.section__tags')
sectionClose.addEventListener('click', function(){
    openNajtiSotrudnika()
})
for (let i = 0; i < sectionFormArray.length; i++) {
    const sectionForm = sectionFormArray[i];
    if (sectionForm.dataset.form === 'additional-filters') {
        sectionForm.addEventListener('submit', function(e){
            e.preventDefault()
            sectionTags.innerHTML = ''
            openNajtiSotrudnika()
            const formData = new FormData(sectionForm)
            const tags = []
            if (formData.get('specialization') != '') {
                tags.push(formData.get('specialization'))
            }
            if ( formData.get('salary-from') != '' || formData.get('salary-to') != '' ) {
                if ( formData.get('salary-from') != '') {
                    if (formData.get('salary-to') != '') {
                        tags.push(`от ${formData.get('salary-from')} до ${formData.get('salary-to')} ${formData.get('currency')}`)
                    } else {
                        tags.push(`от ${formData.get('salary-from')} ${formData.get('currency')}`)
                    }
                } else {
                    if (formData.get('salary-to') != '') {
                        tags.push(`до ${formData.get('salary-to')} ${formData.get('currency')}`)
                    }
                }
            }
            if (formData.get('tax') != '') {
                tags.push(formData.get('tax'))
            }
            if (formData.get('region') != '') {
                tags.push(formData.get('region'))
            }
            if (formData.get('relocation') != null) {
                tags.push(formData.get('relocation'))
            }
            if (formData.get('business-trip') != null) {
                tags.push(formData.get('business-trip'))
            }
            if (formData.get('citizenship') != '') {
                tags.push(formData.get('citizenship'))
            }
            if (formData.get('education') != '') {
                tags.push(formData.get('education'))
            }
            if (formData.get('employment-full') != null) {
                tags.push(formData.get('employment-full'))
            }
            if (formData.get('employment-part') != null) {
                tags.push(formData.get('employment-part'))
            }
            if (formData.get('employment-project') != null) {
                tags.push(formData.get('employment-project'))
            }
            if (formData.get('work-office') != null) {
                tags.push(formData.get('work-office'))
            }
            if (formData.get('work-remote') != null) {
                tags.push(formData.get('work-remote'))
            }
            if (formData.get('work-hybrid') != null) {
                tags.push(formData.get('work-hybrid'))
            }
            if (formData.get('work-shift') != null) {
                tags.push(formData.get('work-shift'))
            }
            if (formData.get('experience-no') != null) {
                tags.push(formData.get('experience-no'))
            }
            if (formData.get('experience-1') != null) {
                tags.push(formData.get('experience-1'))
            }
            if (formData.get('experience-3') != null) {
                tags.push(formData.get('experience-3'))
            }
            if (formData.get('experience-5') != null) {
                tags.push(formData.get('experience-5'))
            }
            if (formData.get('experience-10') != null) {
                tags.push(formData.get('experience-10'))
            }
            if (formData.get('experience-more') != null) {
                tags.push(formData.get('experience-more'))
            }
            if ( formData.get('age-from') != '' || formData.get('age-to') != '' ) {
                if ( formData.get('age-from') != '') {
                    if (formData.get('age-to') != '') {
                        tags.push(`от ${formData.get('age-from')} до ${formData.get('age-to')} лет`)
                    } else {
                        tags.push(`от ${formData.get('age-from')} лет`)
                    }
                } else {
                    if (formData.get('age-to') != '') {
                        tags.push(`до ${formData.get('age-to')} лет`)
                    }
                }
            }
            if (formData.get('sex') != '') {
                tags.push(formData.get('sex'))
            }
            for (let i = 0; i < tags.length; i++) {
                const tag = tags[i];
                const sectionTag = document.createElement('div')
                sectionTag.classList.add('section__tag')
                const sectionTagText = document.createElement('p')
                sectionTagText.classList.add('section__tag-text')
                sectionTagText.textContent = tag
                const sectionTagBtn = document.createElement('button')
                sectionTagBtn.setAttribute('type', 'button')
                sectionTagBtn.classList.add('section__tag-btn', 'btn-icon')
                sectionTag.append(sectionTagText, sectionTagBtn)
                sectionTags.append(sectionTag)
                sectionTagBtn.addEventListener('click', function(){
                    const sectionTagTarget = sectionTagBtn.parentElement
                    sectionTagTarget.remove()
                })
            }
        })
    }
}

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