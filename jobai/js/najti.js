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
const headerBurger = document.querySelector('.header__burger')
const aside = document.querySelector('.aside')
headerBurger.addEventListener('click', function(){
    aside.classList.add('aside_active')
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(aside);
        if ( ! withinBoundaries ) {
            const withinBoundariesBurger = e.composedPath().includes(headerBurger);
            if (! withinBoundariesBurger) {
                aside.classList.remove('aside_active')
            }
        }
    }) //Скрытие Aside по щелчку вне 
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            aside.classList.remove('aside_active')
        }
    }) //Скрытие Aside по нажатию на ESC
})
// Открытие дополнительных фильтров
const adjustmentArray = document.querySelectorAll('.adjustment')
const sectionArray = document.querySelectorAll('.section')
for (let i = 0; i < adjustmentArray.length; i++) {
    const adjustment = adjustmentArray[i];
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
}

// Закрытие дополнительных фильтров
const sectionClose = document.querySelector('.section__close')
const sectionFormArray = document.querySelectorAll('.section__form')
const sectionTags = document.querySelector('.section__tags')
const sectionFormSearch = document.querySelector('.section__form-search')
const sectionFormNewSearch = document.querySelector('.section__form-new-search')
const totalFound = document.querySelector('.total-found')
const sectionToleftArray = document.querySelectorAll('.section_toleft')
let sectionPortfolios = false
sectionClose.addEventListener('click', function(){
    openNajti()
})
for (let i = 0; i < sectionFormArray.length; i++) {
    const sectionForm = sectionFormArray[i];
    switch (sectionForm.dataset.form) {
        case 'additional-filters':
            sectionForm.addEventListener('submit', function(e){
                e.preventDefault()
                sectionTags.innerHTML = ''
                openNajti()
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
                    const sectionTagClone = sectionTag.cloneNode(true)
                    const sectionTagText = document.createElement('p')
                    sectionTagText.classList.add('section__tag-text')
                    sectionTagText.textContent = tag
                    const sectionTagTextClone = sectionTagText.cloneNode(true)
                    const sectionTagBtn = document.createElement('button')
                    sectionTagBtn.setAttribute('type', 'button')
                    sectionTagBtn.classList.add('section__tag-btn', 'btn-icon')
                    const sectionTagBtnClone = sectionTagBtn.cloneNode(true)
                    sectionTag.append(sectionTagText, sectionTagBtn)
                    sectionTagClone.append(sectionTagTextClone, sectionTagBtnClone)
                    sectionTags.append(sectionTag)
                    sectionTagBtn.addEventListener('click', function(){
                        const sectionTagTarget = sectionTagBtn.parentElement
                        sectionTagTarget.remove()
                        sectionTagsHeight()
                    })
                    sectionTagBtnClone.addEventListener('click', function(){
                        const sectionTagTarget = sectionTagBtnClone.parentElement
                        const sectionTagTextTarget = sectionTagTarget.textContent
                        sectionTagTarget.remove()
                        const tagArray = sectionTags1.querySelectorAll('.section__tag')
                        for (let i = 0; i < tagArray.length; i++) {
                            const tag = tagArray[i];
                            if (sectionTagTextTarget === tag.textContent) {
                                tag.remove()
                            }
                        }
                        sectionTagsHeight()
                    })
                }
                sectionTagsHeight()
            })
            break;
        case 'najti':
            sectionForm.addEventListener('submit', function(e){
                e.preventDefault()
                sectionFormSearch.style.display = 'none'
                sectionFormNewSearch.style.display = 'flex'
                totalFound.style.display = 'flex'
                for (let i = 0; i < sectionToleftArray.length; i++) {
                    const sectionToleft = sectionToleftArray[i];
                    sectionToleft.classList.remove('section_mt-collapse')
                }
                for (let i = 0; i < sectionArray.length; i++) {
                    const section = sectionArray[i];
                    if (section.dataset.section === 'portfolios') {
                        section.classList.add('section_active')
                        sectionPortfolios = true
                    }
                }
            })
            break;
        default:
            break;
    }
}
// Функция закрытия дополнительных фильтров
function openNajti() {
    for (let i = 0; i < sectionArray.length; i++) {
        const section = sectionArray[i];
        if (section.dataset.section === 'najti') {
            section.classList.add('section_active')
        } else {
            section.classList.remove('section_active')
        }
        if (section.dataset.section === 'portfolios') {
            if (sectionPortfolios) {
                section.classList.add('section_active')
            } 
        }
    }
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
            options.classList.add('options_active')
        } else {
            options.classList.remove('options_active')
        }
        for (let i = 0; i < optionArray.length; i++) {
            const option = optionArray[i];
            option.addEventListener('click', function(){
                selectInput.value = option.textContent
                if (select.classList.contains('select_up')) {
                    selectUp(selectInput, selectTitle)
                }
            options.classList.remove('options_active')
                select.classList.remove('select-active')
            })
        }
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(select);
            if ( ! withinBoundaries ) {
                select.classList.remove('select-active')
                options.classList.remove('options_active')
            }
        }) //Закрытие селекта по щелчку вне меню
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                select.classList.remove('select-active')
                options.classList.remove('options_active')
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
        const rangeConclusion = switchInput.parentElement.parentElement.querySelector('.range__conclusion')
        if (switchInput.checked) {
            rangeInput.disabled = false
            rangeInput.classList.remove('range__input-disabled')
            rangeConclusion.classList.remove('range__conclusion-disabled')
        } else {
            rangeInput.disabled = true
            rangeInput.classList.add('range__input-disabled')
            rangeConclusion.classList.add('range__conclusion-disabled')
        }
    })
}
// Показ/скрытие подсказки
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
// Разворачивание/сворачивание текстового поля
const textareaAdjustmentArray = document.querySelectorAll('.textarea_adjustment')
const textareaSotrudnika = document.querySelector('.textarea_sotrudnika')
const sectionMt = document.querySelector('.section_mt')
for (let i = 0; i < textareaAdjustmentArray.length; i++) {
    const textareaAdjustment = textareaAdjustmentArray[i];
    const sectionSearch = textareaAdjustment.parentElement.parentElement
    const save = sectionSearch.querySelector('.section__search-save')
    const close = sectionSearch.querySelector('.section__search-close')
    let textStart = ''
    textareaAdjustment.addEventListener('focus', function(){
        dropdown.disabled = true
        sectionFormSearch.disabled = true
        sectionFormNewSearch.disabled = true
        textStart = textareaAdjustment.value
        sectionSearch.classList.add('section__search-active')
        textareaAdjustment.classList.add('textarea_adjustment-active')
    }) 
    save.addEventListener('click', function(){
        dropdown.disabled = false
        sectionFormSearch.disabled = false
        sectionFormNewSearch.disabled = false
        sectionSearch.classList.remove('section__search-active')
        textareaAdjustment.classList.remove('textarea_adjustment-active')
        textareaAdjustment.scrollTo(0, 0)
    })
    close.addEventListener('click', function(){
        dropdown.disabled = false
        sectionFormSearch.disabled = false
        sectionFormNewSearch.disabled = false
        sectionSearch.classList.remove('section__search-active')
        textareaAdjustment.classList.remove('textarea_adjustment-active')
        textareaAdjustment.scrollTo(0, 0)
        textareaAdjustment.value = textStart
    })
}

const sectionToleftBtnArray = document.querySelectorAll('.section_toleft-btn')
for (let i = 0; i < sectionToleftBtnArray.length; i++) {
    const sectionToleftBtn = sectionToleftBtnArray[i];
    sectionToleftBtn.addEventListener('click', function(){
        window.scrollTo(0, 0)
    })
}
function sectionTagsHeight() {
    const marginTop = sectionTags.scrollHeight
    if (marginTop === 0 ) {
        sectionMt.classList.remove('section_1line')
        sectionMt.classList.remove('section_2line')
        textareaSotrudnika.classList.remove('textarea_sotrudnika-line1')
        textareaSotrudnika.classList.remove('textarea_sotrudnika-line2')
    }
    if (marginTop > 20) {
        sectionMt.classList.add('section_1line')
        sectionMt.classList.remove('section_2line')
        textareaSotrudnika.classList.add('textarea_sotrudnika-line1')
        textareaSotrudnika.classList.remove('textarea_sotrudnika-line2')
    }
    if (marginTop > 60) {
        sectionMt.classList.remove('section_1line')
        sectionMt.classList.add('section_2line')
        textareaSotrudnika.classList.remove('textarea_sotrudnika-line1')
        textareaSotrudnika.classList.add('textarea_sotrudnika-line2')
    }
    
}
const btnModalopenArray = document.querySelectorAll('.btn-modalopen')
const modal = document.querySelector('.modal')
for (let i = 0; i < btnModalopenArray.length; i++) {
    const btnModalOpen = btnModalopenArray[i];
    btnModalOpen.addEventListener('click', function(){
        const dataModalopen = btnModalOpen.dataset.modalopen
        modal.classList.add('modal_active')
        const modalWrapperArray = modal.querySelectorAll('.modal__wrapper')
        const name = btnModalOpen.parentElement.parentElement.querySelector('.portfolio__title').textContent
        for (let i = 0; i < modalWrapperArray.length; i++) {
            const modalWrapper = modalWrapperArray[i];
            if (modalWrapper.dataset.modal === dataModalopen) {
                modalWrapper.classList.add('modal__wrapper-active')
                const modalClose = modalWrapper.querySelector('.modal__close')
                switch (modalWrapper.dataset.modal) {
                    case 'avatar':
                    const modalName = modalWrapper.querySelector('.modal__name')
                    modalName.textContent = name
                        const img = btnModalOpen.querySelector('.portfolio__avatar-img')
                        if (img != null) {
                            const imgSrc = img.getAttribute('src')
                            const modalAvatar = modal.querySelector('.modal__avatar')
                            const modalAvatarImg = document.createElement('img')
                            modalAvatarImg.classList.add('modal__avatar-img')
                            modalAvatarImg.setAttribute('src', imgSrc)
                            modalAvatar.append(modalAvatarImg)
                        }
                        const logo = btnModalOpen.querySelector('.portfolio__avatar-logo')
                        if (logo != null) {
                            const logoSrc = logo.getAttribute('src')
                            const modalAvatar = modal.querySelector('.modal__avatar')
                            const modalAvatarlogo = document.createElement('img')
                            modalAvatarlogo.classList.add('modal__avatar-logo')
                            modalAvatarlogo.setAttribute('src', logoSrc)
                            modalAvatar.append(modalAvatarlogo)
                        }
                        break;
                    default:
                        break;
                }
                modalClose.addEventListener('click', function(){
                    modal.classList.remove('modal_active')
                    const modalAvatarImg = modal.querySelector('.modal__avatar-img')
                    if (modalAvatarImg != null) {
                        modalAvatarImg.remove()
                    }
                    const modalAvatarLogo = modal.querySelector('.modal__avatar-logo')
                    if (modalAvatarLogo != null) {
                        modalAvatarLogo.remove()
                    }
                })
            } else {
                modalWrapper.classList.remove('modal__wrapper-active')
            }
        }
    })
}
// Скрытие кнопок слайдера
const itcSliderArray = document.querySelectorAll('.itc-slider')
for (let i = 0; i < itcSliderArray.length; i++) {
    const itcSlider = itcSliderArray[i];
    const itcSliderItemArray = itcSlider.querySelectorAll('.itc-slider-item')
    const itcSliderItemActiveArray = itcSlider.querySelectorAll('.itc-slider-item-active')
    const itcSliderBtnArray = itcSlider.querySelectorAll('.itc-slider-btn')
    if (itcSliderItemArray.length === itcSliderItemActiveArray.length) {
        for (let i = 0; i < itcSliderBtnArray.length; i++) {
            const itcSliderBtn = itcSliderBtnArray[i];
            itcSliderBtn.classList.add('itc-slider-btn-hide')
        }
    }
}

const modalItemImgArray = document.querySelectorAll('.modal__item-img')
const modalSlider = document.querySelector('.modal-slider')
const modalSliderClose = document.querySelector('.modal-slider__close')
for (let i = 0; i < modalItemImgArray.length; i++) {
    const modalItemImg = modalItemImgArray[i];
    modalItemImg.addEventListener('click', function(){
        modalSlider.classList.add('modal-slider-active')
        let sliderElem = document.querySelector('#modal-slider');
        let slider = ItcSlider.getOrCreateInstance(sliderElem);
        slider.slideTo(i)
        modalSliderClose.addEventListener('click', function(){
            modalSlider.classList.remove('modal-slider-active')
            slider.dispose()
        })
    })
}

const btnLikeArray = document.querySelectorAll('.btn_like')
for (let i = 0; i < btnLikeArray.length; i++) {
    const btnLike = btnLikeArray[i];
    btnLike.addEventListener('click', function(){
        btnLike.classList.toggle('btn_like-active')
    })
}
const portfolioStitleCopyArray = document.querySelectorAll('.portfolio__stitle-copy')
for (let i = 0; i < portfolioStitleCopyArray.length; i++) {
    const portfolioStitleCopy = portfolioStitleCopyArray[i];
    portfolioStitleCopy.addEventListener('click', function(){
        const textCopy = portfolioStitleCopy.parentElement.textContent
        navigator.clipboard.writeText(textCopy)
    })
}
const portfolioFitsAiArray = document.querySelectorAll('.portfolio__fits-ai')
for (let i = 0; i < portfolioFitsAiArray.length; i++) {
    const portfolioFitsAi = portfolioFitsAiArray[i];
    portfolioFitsAi.addEventListener('click', function(){
        const loader = portfolioFitsAi.parentElement.querySelector('.portfolio__loader')
        const portfolioSuccess = portfolioFitsAi.parentElement.querySelector('.portfolio__fits-success')
        portfolioFitsAi.classList.add('portfolio__fits-disabled')
        loader.classList.add('portfolio__loader-loading')

        function success() {
            portfolioFitsAi.style.display = 'none'
            loader.classList.remove('portfolio__loader-loading')
            loader.classList.add('portfolio__loader-success')
            portfolioSuccess.style.display = 'flex'
        }
        setTimeout(success, 5000)
    })
}
const portfolioPositionArray = document.querySelectorAll('.portfolio__position')
for (let i = 0; i < portfolioPositionArray.length; i++) {
    const portfolioPosition = portfolioPositionArray[i];
    portfolioPosition.addEventListener('click', function(){
        const windowScreen = screen.width
        const portfolio = portfolioPosition.parentElement.parentElement
        const portfolioHeight = portfolio.scrollHeight
        let yOffset
        if (windowScreen > 899) {
            yOffset = portfolioHeight - 408;
        } else {
            yOffset = portfolioHeight - 318;
        }
        const y = portfolio.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y })
    })
}
const modalContentArray = document.querySelectorAll('.modal__content')
for (let i = 0; i < modalContentArray.length; i++) {
    const modalContent = modalContentArray[i];
    modalContent.addEventListener('scroll', function(){
        const modalContentBtn = modalContent.querySelector('.modal__content-btn')
        if (modalContentBtn != null) {
            if (modalContent.scrollTop > 20) {
                modalContentBtn.classList.add("modal__content-btn-active")
            } else {
                modalContentBtn.classList.remove("modal__content-btn-active")
            }
        }
    })
}
const modalContentBtnArray = document.querySelectorAll('.modal__content-btn')
for (let i = 0; i < modalContentBtnArray.length; i++) {
    const modalContentBtn = modalContentBtnArray[i];
    modalContentBtn.addEventListener('click', function(){
        const modalContent = modalContentBtn.parentElement
        modalContent.scrollTo(0, 0)
    })
}

sectionFormNewSearch.addEventListener('click', function(){
    for (let i = 0; i < sectionArray.length; i++) {
        const section = sectionArray[i];
        if (section.dataset.section === 'portfolios') {
            section.style.display = 'none'
            setTimeout(function(){
                section.style.display = 'grid'
            }, 500)
        }
    }
})
const dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', function(){
    const drops = dropdown.parentElement.querySelector('.drops')
    drops.classList.add('drops_active')
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(dropdown)
        if ( ! withinBoundaries ) {
            drops.classList.remove('drops_active')
        }
    })
    const dropArray = drops.querySelectorAll('.drop')
    for (let i = 0; i < dropArray.length; i++) {
        const drop = dropArray[i];
        drop.addEventListener('click', function(){
            const dropText = drop.textContent
            const textarea = dropdown.parentElement.querySelector('.textarea_adjustment')
            const sectionTags = dropdown.parentElement.querySelector('.section__tags')
            textarea.value = dropText
            setTimeout(() => {
                drops.classList.remove('drops_active')
                sectionTags.innerHTML = ''
                sectionTagsHeight()
            }, 100);
            
        })
    }
})