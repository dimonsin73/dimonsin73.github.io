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
// Работа TABS 
const tabArray = document.querySelectorAll('.tab')
const sectionTabArray = document.querySelectorAll('.section__tab')
const sectionNavArray = document.querySelectorAll('.section__nav')
for (let i = 0; i < tabArray.length; i++) {
    const tab = tabArray[i];
    tab.addEventListener('click', function(){
        const dataTab = tab.dataset.tab
        openSectionTab(dataTab)
    })
}
for (let i = 0; i < sectionNavArray.length; i++) {
    const sectionNav = sectionNavArray[i];
    sectionNav.addEventListener('click', function(){
        const dataTab = sectionNav.dataset.nav
        openSectionTab(dataTab)
    })
}
function openSectionTab(dataTab) {
    for (let i = 0; i < sectionTabArray.length; i++) {
        const sectionTab = sectionTabArray[i];
        if (sectionTab.dataset.tab === dataTab) {
            sectionTab.classList.add('section__tab-active')
        } else {
            sectionTab.classList.remove('section__tab-active')
        }
    }
    for (let i = 0; i < tabArray.length; i++) {
        const tab = tabArray[i];
        if (tab.dataset.tab === dataTab) {
            tab.classList.add('tab_active')
        } else {
            tab.classList.remove('tab_active')
        }
    }
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
function selectUp(selectInput, selectTitle) {
    if (selectInput.value != '') {
        selectTitle.classList.add('select__title-active')
    }
}

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

const inputNumberArray = document.querySelectorAll('.input_number')
for (let i = 0; i < inputNumberArray.length; i++) {
    const inputNumber = inputNumberArray[i];
    inputNumber.addEventListener('input', function(){
        const number = inputNumber.value
        let format = number.replace(/\D/g, '').replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        inputNumber.value = format
    })
}

const labelTextareaArray = document.querySelectorAll('.label__textarea')
for (let i = 0; i < labelTextareaArray.length; i++) {
    const labelTextarea = labelTextareaArray[i];
    labelTextarea.addEventListener('focus', function(){
        const label = labelTextarea.parentElement
        label.classList.add('label-active')
    })
    labelTextarea.addEventListener('focusout', function(){
        if (labelTextarea.value === '') {
            const label = labelTextarea.parentElement
            label.classList.remove('label-active')
        }
    })    
}
// Работа поля План Найма
const hiringPlan = document.getElementById('hiring-plan')
const labelHiringPlan = hiringPlan.parentElement
const labelFlyingtext = document.querySelector('.label__flyingtext')
const sectionPlanMinus = document.querySelector('.section__plan-minus')
const sectionPlanPlus = document.querySelector('.section__plan-plus')
sectionPlanMinus.addEventListener('click', function(){
    let hiringPlanValue = Number(hiringPlan.value)
    if (hiringPlanValue > 0) {
        hiringPlanValue--
        hiringPlan.value = hiringPlanValue
        if (hiringPlanValue === 0) {
            sectionPlanMinus.disabled = true
        }
    }
    labelHiringPlan.classList.add('label-active')
    const arrayOfHiringPlan = Array.from(String(hiringPlanValue))
    flyingtext(arrayOfHiringPlan)
})
sectionPlanPlus.addEventListener('click', function(){
    let hiringPlanValue = Number(hiringPlan.value)
    hiringPlanValue++
    hiringPlan.value = hiringPlanValue
    labelHiringPlan.classList.add('label-active')
    sectionPlanMinus.disabled = false
    const arrayOfHiringPlan = Array.from(String(hiringPlanValue))
    flyingtext(arrayOfHiringPlan, hiringPlanValue)
})
function flyingtext (arrayOfHiringPlan){
    const num = arrayOfHiringPlan.length
    const left = getComputedStyle(labelFlyingtext).left
    let leftNum = Number(left.slice(0, -2))
    leftNum = 14.7 + 9.3*num
    labelFlyingtext.style.left = `${leftNum}px`
}
// Работа Предпросмотра 
const sectionArray = document.querySelectorAll('.section')
const previewArray = document.querySelectorAll('.preview')
for (let i = 0; i < previewArray.length; i++) {
    const preview = previewArray[i];
    preview.addEventListener('click', function(){
        for (let i = 0; i < sectionArray.length; i++) {
            const section = sectionArray[i];
            if (section.dataset.section === 'preview') {
                section.classList.add('section_active')
            } else {
                section.classList.remove('section_active')
            }
        }
    })
}
const previewBack = document.querySelector('.preview-back')
previewBack.addEventListener('click', function(){
    for (let i = 0; i < sectionArray.length; i++) {
        const section = sectionArray[i];
        if (section.dataset.section === 'sozdat_vakansiyu') {
            section.classList.add('section_active')
        } else {
            section.classList.remove('section_active')
        }
    }
})