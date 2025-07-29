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

const tabArray = document.querySelectorAll('.tab')
for (let i = 0; i < tabArray.length; i++) {
    const tab = tabArray[i];
    tab.addEventListener('click', function(){
        for (let i = 0; i < tabArray.length; i++) {
            const tab = tabArray[i];
            tab.classList.remove('tab_active')
        }
        tab.classList.add('tab_active')
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