// Работа бокового меню Aside
const asideBtnArray = document.querySelectorAll('.aside__btn')
for (let i = 0; i < asideBtnArray.length; i++) {
    const asideBtn = asideBtnArray[i];
    asideBtn.addEventListener('click', function(){
        for (let i = 0; i < asideBtnArray.length; i++) {
            const element = asideBtnArray[i];
            element.classList.remove('aside__btn-active')
        }
        asideBtn.classList.add('aside__btn-active')
    })
}
// Открытие дополнительных фильтров
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
// Закрытие дополнительных фильтров
const sectionClose = document.querySelector('.section__close')
const sectionFormArray = document.querySelectorAll('.section__form')
const sectionTags = document.querySelector('.section__tags')
sectionClose.addEventListener('click', function(){
    openNajtiSotrudnika()
})
for (let i = 0; i < sectionFormArray.length; i++) {
    const sectionForm = sectionFormArray[i];
    switch (sectionForm.dataset.form) {
        case 'additional-filters':
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
            break;
        case 'najti_sotrudnika':
            sectionForm.addEventListener('submit', function(e){
                e.preventDefault()
                window.location.href='najti_sotrudnika_cards.html'
            })
            break;
        default:
            break;
    }
}
// Функция закрытия дополнительных фильтров
function openNajtiSotrudnika() {
    for (let i = 0; i < sectionArray.length; i++) {
        const section = sectionArray[i];
        if (section.dataset.section === 'najti-sotrudnika') {
            section.classList.add('section_active')
        } else {
            section.classList.remove('section_active')
        }
        if (section.dataset.section === 'portfolios') {
            section.classList.add('section_active')
        }
    }
}

// Раскрывающееся описание
const portfolioDescriptionUpArray = document.querySelectorAll('.portfolio__description-up')
for (let i = 0; i < portfolioDescriptionUpArray.length; i++) {
    const portfolioDescriptionUp = portfolioDescriptionUpArray[i];
    portfolioDescriptionUp.addEventListener('click', function(){
        const portfolioDescription = portfolioDescriptionUp.parentElement
        const portfolioDescriptionList = portfolioDescriptionUp.parentElement.querySelector('.portfolio__description-list')
        portfolioDescription.classList.toggle('portfolio__description-active')
        if (portfolioDescription.classList.contains('portfolio__description-active')) {
           portfolioDescriptionList.style.height = `${portfolioDescriptionList.scrollHeight}px`
        } else {
            portfolioDescriptionList.style.height = `40px`
        }
    })
}

// Включение/выключение тегов
const tagBtnArray = document.querySelectorAll('.tag__btn')
for (let i = 0; i < tagBtnArray.length; i++) {
    const tagBtn = tagBtnArray[i];
    tagBtn.addEventListener('click', function(){
        tagBtn.classList.toggle('tag__btn-active')
    })
}
// Открытие/Закрытие селектов
const selectInputArray = document.querySelectorAll('.select__input')
for (let i = 0; i < selectInputArray.length; i++) {
    const selectInput = selectInputArray[i];
    const selectTitle = selectInput.parentElement.querySelector('.select__title')
    selectInput.addEventListener('click', function(){
        const select = selectInput.parentElement
        const options = selectInput.parentElement.querySelector('.options')
        const optionArray = options.querySelectorAll('.option')
        select.classList.toggle('select-active')
        if (select.classList.contains('select-active')) {
            options.style.height = `${options.scrollHeight}px`
        } else {
            options.style.height = '0px'
        }
        for (let i = 0; i < optionArray.length; i++) {
            const option = optionArray[i];
            option.addEventListener('click', function(){
                selectInput.value = option.textContent
                if (select.classList.contains('select_up')) {
                    selectUp(selectInput, selectTitle)
                }
                options.style.height = '0px'
                select.classList.remove('select-active')
            })
        }
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(select);
            if ( ! withinBoundaries ) {
                select.classList.remove('select-active')
                options.style.height = '0px'
            }
        }) //Закрытие селекта по щелчку вне меню
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                select.classList.remove('select-active')
                options.style.height = '0px'
            }
        }) //Закрытие селекта по нажатию на ESC
    })
}
// Функция поднятия заголовка селекта
function selectUp(selectInput, selectTitle) {
    if (selectInput.value != '') {
        selectTitle.classList.add('select__title-active')
    }
}
// Поднятия заголовка для импута 
const labelInputArray = document.querySelectorAll('.label__input')
for (let i = 0; i < labelInputArray.length; i++) {
    const labelInput = labelInputArray[i];
    labelInput.addEventListener('focus', function(){
        const label = labelInput.parentElement
        label.classList.add('label-active')
    })
    labelInput.addEventListener('focusout', function(){
        if (labelInput.value === '') {
            const label = labelInput.parentElement
            label.classList.remove('label-active')
        }
    })
}
// Разделение по разрядом для цифровых полей
const inputNumberArray = document.querySelectorAll('.input_number')
for (let i = 0; i < inputNumberArray.length; i++) {
    const inputNumber = inputNumberArray[i];
    inputNumber.addEventListener('input', function(){
        const number = inputNumber.value
        let format = number.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        inputNumber.value = format
    })
}
// Работа ползунка
const rangeInputArray = document.querySelectorAll('.range__input')
for (let i = 0; i < rangeInputArray.length; i++) {
    const rangeInput = rangeInputArray[i];
    const rangeNumber = rangeInput.parentElement.querySelector('.range__number')
    rangeInput.addEventListener('input', function(){
        rangeNumber.textContent = `${rangeInput.value}%`
    })
}
// Disabled ползунка
const switchInputArray = document.querySelectorAll('.switch__input')
for (let i = 0; i < switchInputArray.length; i++) {
    const switchInput = switchInputArray[i];
    switchInput.addEventListener('change', function(){
        const rangeInput = switchInput.parentElement.parentElement.querySelector('.range__input')
        if (switchInput.checked) {
            rangeInput.disabled = false
            rangeInput.classList.remove('range__input-disabled')
        } else {
            rangeInput.disabled = true
            rangeInput.classList.add('range__input-disabled')
        }
    })
}
// Показ/скрытие подсказки
const clueArray = document.querySelectorAll('.clue')
for (let i = 0; i < clueArray.length; i++) {
    const clue = clueArray[i];
    const clueText = clue.querySelector('.clue__text')
    clue.addEventListener('mouseover', function(){
        clueText.classList.add('clue__text-active')
    })
    clue.addEventListener('mouseout', function(){
        clueText.classList.remove('clue__text-active')
    })
}
// Разворачивание/сворачивание текстового поля
const textareaAdjustmentArray = document.querySelectorAll('.textarea_adjustment')
for (let i = 0; i < textareaAdjustmentArray.length; i++) {
    const textareaAdjustment = textareaAdjustmentArray[i];
    textareaAdjustment.addEventListener('focus', function(){
        textareaAdjustment.classList.add('textarea_adjustment-active')
    }) 
    textareaAdjustment.addEventListener('focusout', function(){
        textareaAdjustment.classList.remove('textarea_adjustment-active')
    }) 
}