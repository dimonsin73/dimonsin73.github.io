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
// Каледнарь 
let datepicker = new Datepicker('#datepicker', {
    weekStart: 1
});
let datepicker1 = new Datepicker('#datepicker_year-finish', {
    weekStart: 1
});


const datepickerInputArray = document.querySelectorAll('.datepicker')
for (let i = 0; i < datepickerInputArray.length; i++) {
    const datepickerInput = datepickerInputArray[i];
    datepickerInput.addEventListener('focus', function(){
        const label = datepickerInput.parentElement.parentElement
        label.classList.add('label-active')
    })
    datepickerInput.addEventListener('focusout', function(){
        const label = datepickerInput.parentElement.parentElement
        setTimeout(() => {
            if (datepickerInput.value == '') {
                label.classList.remove('label-active')
            } else {
                label.classList.add('label-active')
            }
        }, 200);
    })
}


// Открытие/Закрытие селектов
const selectInputArray = document.querySelectorAll('.select__input')
for (let i = 0; i < selectInputArray.length; i++) {
    const selectInput = selectInputArray[i];
    const selectTitle = selectInput.parentElement.querySelector('.select__title')
    selectFun(selectInput, selectTitle)
}
function selectUp(selectInput, selectTitle) {
    if (selectInput.value != '') {
        selectTitle.classList.add('select__title-active')
    }
}
// Функция открытие/Закрытие селектов
function selectFun(selectInput, selectTitle) {
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
// Работа Input
const labelInputArray = document.querySelectorAll('.label__input')
for (let i = 0; i < labelInputArray.length; i++) {
    const labelInput = labelInputArray[i];
    inputFun(labelInput)
}
// Функция Input
function inputFun(labelInput) {
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
// Работа textarea
const labelTextareaArray = document.querySelectorAll('.label__textarea')
for (let i = 0; i < labelTextareaArray.length; i++) {
    const labelTextarea = labelTextareaArray[i];
    textareaFun(labelTextarea)
}
// Функция textarea 
function textareaFun(labelTextarea) {
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

// Удаление
const sectionDeleteArray = document.querySelectorAll('.section__delete')
for (let i = 0; i < sectionDeleteArray.length; i++) {
    const sectionDelete = sectionDeleteArray[i];
    sectionDeleteFun(sectionDelete)
}
// Функция Удаления
function sectionDeleteFun(sectionDelete) {
    sectionDelete.addEventListener('click', function(){
        const sectionExperience = sectionDelete.parentElement.parentElement
        sectionExperience.remove()
    })
}
// Добавить опыт работы
const addWorkExperience = document.querySelector('.add_work-experience')
const sectionExperiences = document.querySelector('.section__experiences')
let addWorkExperienceId = 1
addWorkExperience.addEventListener('click', function(){
    const sectionExperience = document.createElement('div')
    sectionExperience.classList.add('section__experience', 'section__experience-topline')
    const sectionItem = document.createElement('div')
    sectionItem.classList.add('section__item', 'section__item-withbtn')
    const label = document.createElement('label')
    label.classList.add('label')
    label.setAttribute('for', `name-employing-company_${addWorkExperienceId}`)
    const labelTitle = document.createElement('h3')
    labelTitle.classList.add('label__title')
    labelTitle.textContent = 'Название компании-работодателя'
    const labelInput = document.createElement('input')
    labelInput.classList.add('label__input', 'input')
    labelInput.id = `name-employing-company_${addWorkExperienceId}`
    labelInput.setAttribute('type', 'text')
    labelInput.setAttribute('name', `name-employing-company_${addWorkExperienceId}`)
    const sectionDelete = document.createElement('button')
    sectionDelete.classList.add('section__icon', 'section__icon-icon', 'section__delete')
    sectionDelete.setAttribute('type', 'button')
    sectionDelete.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#6A6A73"/></svg>'
    const sectionItem2 = document.createElement('div')
    sectionItem2.classList.add('section__item', 'section__item-withbtn')
    const label2 = document.createElement('label')
    label2.classList.add('label')
    label2.setAttribute('for', `your-position_${addWorkExperienceId}`)
    const labelTitle2 = document.createElement('h3')
    labelTitle2.classList.add('label__title')
    labelTitle2.textContent = 'Ваша должность'
    const labelInput2 = document.createElement('input')
    labelInput2.classList.add('label__input', 'input')
    labelInput2.id = `your-position_${addWorkExperienceId}`
    labelInput2.setAttribute('type', 'text')
    labelInput2.setAttribute('name', `your-position_${addWorkExperienceId}`)
    const sectionItem3 = document.createElement('div')
    sectionItem3.classList.add('section__item-withbtn')
    
    const select = document.createElement('div')
    select.classList.add('select', 'select_up')
    const selectInput = document.createElement('input')
    selectInput.classList.add('select__input', 'input')
    selectInput.setAttribute('type', 'text')
    selectInput.setAttribute('name', `city-region_${addWorkExperienceId}`)
    selectInput.readOnly = true
    selectInput.id = `city-region_${addWorkExperienceId}`
    const selectLabel = document.createElement('label')
    selectLabel.classList.add('select__title')
    selectLabel.setAttribute('for', `city-region_${addWorkExperienceId}`)
    selectLabel.textContent = 'Город или регион'
    const options = document.createElement('div')
    options.classList.add('options')
    const optionsWrapper = document.createElement('div')
    optionsWrapper.classList.add('options__wrapper')
    const optionArray = ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеренбург', 'Владивосток']
    for (let i = 0; i < optionArray.length; i++) {
        const optionText = optionArray[i];
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = optionText
        optionsWrapper.append(option)
    }
    options.append(optionsWrapper)
    const selectBox = document.createElement('div')
    selectBox.classList.add('select__box', 'select__box-vert')
    const check = document.createElement('div')
    check.classList.add('check')
    const checkInput = document.createElement('input')
    checkInput.classList.add('check__input')
    checkInput.id = `remote-work_${addWorkExperienceId}`
    checkInput.setAttribute('type', 'checkbox')
    checkInput.setAttribute('name', `remote-work_${addWorkExperienceId}`)
    checkInput.value = 'Готовность к релокации'
    const checkLabel = document.createElement('label')
    checkLabel.classList.add('check__label')
    checkLabel.setAttribute('for', `remote-work_${addWorkExperienceId}`)
    const checkCheck = document.createElement('div')
    checkCheck.classList.add('check__check')
    const checkInfo = document.createElement('div')
    checkInfo.classList.add('check__info')
    const checkText = document.createElement('p')
    checkText.classList.add('check__text')
    checkText.textContent = 'Удаленная работа'
    checkInfo.append(checkText)
    checkLabel.append(checkCheck, checkInfo)
    check.append(checkInput, checkLabel)
    selectBox.append(check)

    const sectionItem4 = document.createElement('div')
    sectionItem4.classList.add('section__item')
    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('section__title')
    sectionTitle.textContent = 'Начало работы'
    const sectionLinedate = document.createElement('div')
    sectionLinedate.classList.add('section__linedate')
    
    const select2 = document.createElement('div')
    select2.classList.add('select', 'select_up')
    const selectInput2 = document.createElement('input')
    selectInput2.classList.add('select__input', 'input')
    selectInput2.setAttribute('type', 'text')
    selectInput2.setAttribute('name', `work-start-month_${addWorkExperienceId}`)
    selectInput2.readOnly = true
    selectInput2.id = `work-start-month_${addWorkExperienceId}`
    const selectLabel2 = document.createElement('label')
    selectLabel2.classList.add('select__title')
    selectLabel2.setAttribute('for', `work-start-month_${addWorkExperienceId}`)
    selectLabel2.textContent = 'Месяц'
    const options2 = document.createElement('div')
    options2.classList.add('options')
    const optionsWrapper2 = document.createElement('div')
    optionsWrapper2.classList.add('options__wrapper')
    const monthArray = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    for (let i = 0; i < monthArray.length; i++) {
        const month = monthArray[i];
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = month
        optionsWrapper2.append(option)
    }
    options2.append(optionsWrapper2)

    const select3 = document.createElement('div')
    select3.classList.add('select', 'select_up')
    const selectInput3 = document.createElement('input')
    selectInput3.classList.add('select__input', 'input')
    selectInput3.setAttribute('type', 'text')
    selectInput3.setAttribute('name', `work-start-year_${addWorkExperienceId}`)
    selectInput3.readOnly = true
    selectInput3.id = `work-start-year_${addWorkExperienceId}`
    const selectLabel3 = document.createElement('label')
    selectLabel3.classList.add('select__title')
    selectLabel3.setAttribute('for', `work-start-year_${addWorkExperienceId}`)
    selectLabel3.textContent = 'Год '
    const options3 = document.createElement('div')
    options3.classList.add('options')
    const optionsWrapper3 = document.createElement('div')
    optionsWrapper3.classList.add('options__wrapper')
    const yearArray = ['2025', '2024', '2023', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960']
    for (let i = 0; i < yearArray.length; i++) {
        const year = yearArray[i];
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = year
        optionsWrapper3.append(option)
    }
    options3.append(optionsWrapper3)

    const sectionItem5 = document.createElement('div')
    sectionItem5.classList.add('section__item')
    const sectionTitle2 = document.createElement('h2')
    sectionTitle2.classList.add('section__title')
    sectionTitle2.textContent = 'Окончание работы'
    const sectionLinedate2 = document.createElement('div')
    sectionLinedate2.classList.add('section__linedate')

    const select4 = document.createElement('div')
    select4.classList.add('select', 'select_up')
    const selectInput4 = document.createElement('input')
    selectInput4.classList.add('select__input', 'input')
    selectInput4.setAttribute('type', 'text')
    selectInput4.setAttribute('name', `work-finish-month_${addWorkExperienceId}`)
    selectInput4.readOnly = true
    selectInput4.id = `work-finish-month_${addWorkExperienceId}`
    const selectLabel4 = document.createElement('label')
    selectLabel4.classList.add('select__title')
    selectLabel4.setAttribute('for', `work-finish-month_${addWorkExperienceId}`)
    selectLabel4.textContent = 'Месяц'
    const options4 = document.createElement('div')
    options4.classList.add('options')
    const optionsWrapper4 = document.createElement('div')
    optionsWrapper4.classList.add('options__wrapper')
    for (let i = 0; i < monthArray.length; i++) {
        const month = monthArray[i];
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = month
        optionsWrapper4.append(option)
    }
    options4.append(optionsWrapper4)

    const select5 = document.createElement('div')
    select5.classList.add('select', 'select_up')
    const selectInput5 = document.createElement('input')
    selectInput5.classList.add('select__input', 'input')
    selectInput5.setAttribute('type', 'text')
    selectInput5.setAttribute('name', `work-finish-year_${addWorkExperienceId}`)
    selectInput5.readOnly = true
    selectInput5.id = `work-finish-year_${addWorkExperienceId}`
    const selectLabel5 = document.createElement('label')
    selectLabel5.classList.add('select__title')
    selectLabel5.setAttribute('for', `work-finish-year_${addWorkExperienceId}`)
    selectLabel5.textContent = 'Год '
    const options5 = document.createElement('div')
    options5.classList.add('options')
    const optionsWrapper5 = document.createElement('div')
    optionsWrapper5.classList.add('options__wrapper')
    for (let i = 0; i < yearArray.length; i++) {
        const year = yearArray[i];
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = year
        optionsWrapper5.append(option)
    }
    options5.append(optionsWrapper5)
    const selectBox2 = document.createElement('div')
    selectBox2.classList.add('select__box', 'select__box-vert')
    const check2 = document.createElement('div')
    check2.classList.add('check')
    const checkInput2 = document.createElement('input')
    checkInput2.classList.add('check__input')
    checkInput2.id = `to-date_${addWorkExperienceId}`
    checkInput2.setAttribute('type', 'checkbox')
    checkInput2.setAttribute('name', `to-date_${addWorkExperienceId}`)
    checkInput2.value = 'Готовность к релокации'
    const checkLabel2 = document.createElement('label')
    checkLabel2.classList.add('check__label')
    checkLabel2.setAttribute('for', `to-date_${addWorkExperienceId}`)
    const checkCheck2 = document.createElement('div')
    checkCheck2.classList.add('check__check')
    const checkInfo2 = document.createElement('div')
    checkInfo2.classList.add('check__info')
    const checkText2 = document.createElement('p')
    checkText2.classList.add('check__text')
    checkText2.textContent = 'Удаленная работа'
    checkInfo2.append(checkText2)
    checkLabel2.append(checkCheck2, checkInfo2)
    check2.append(checkInput2, checkLabel2)
    selectBox2.append(check2)

    const sectionItem6 = document.createElement('div')
    sectionItem6.classList.add('section__item-withbtn')
    const label3 = document.createElement('label')
    label3.classList.add('label')
    label3.setAttribute('for', `workplace-responsibilities_${addWorkExperienceId}`)
    const labelTitle3 = document.createElement('div')
    labelTitle3.classList.add('label__title', 'label__title-textarea')
    labelTitle3.textContent = 'Обязанности на рабочем месте'
    const textarea = document.createElement('textarea')
    textarea.classList.add('label__textarea', 'label__textarea-big')
    textarea.id = `workplace-responsibilities_${addWorkExperienceId}`
    textarea.setAttribute('name', `workplace-responsibilities_${addWorkExperienceId}`)
    textarea.setAttribute('maxlength', '10000')
    textarea.setAttribute('placeholder', 'Например: - Опишите свои прямые должностные обязанности; - Приведите частичное описание своих должностных инструкций; - Сколько сотрудников было в подчинении? - Какие показатели были выполнены; - Какой сегмент рынка развивали.')
    const labelText = document.createElement('p')
    labelText.classList.add('label__text')
    labelText.textContent = 'Обязанности на рабочем месте должны содержать не более 10 000 символов с учетом пробелов'

    label.append(labelTitle, labelInput)
    label2.append(labelTitle2, labelInput2)
    select.append(selectInput, selectLabel, options, selectBox)
    select2.append(selectInput2, selectLabel2, options2)
    select3.append(selectInput3, selectLabel3, options3)
    select4.append(selectInput4, selectLabel4, options4)
    select5.append(selectInput5, selectLabel5, options5)
    label3.append(labelTitle3, textarea, labelText)

    sectionLinedate.append(select2, select3)
    sectionLinedate2.append(select4, select5, selectBox2)

    sectionItem.append(label, sectionDelete)
    sectionItem2.append(label2)
    sectionItem3.append(select)
    sectionItem4.append(sectionTitle, sectionLinedate)
    sectionItem5.append(sectionTitle2, sectionLinedate2)
    sectionItem6.append(label3)

    sectionExperience.append(sectionItem, sectionItem2, sectionItem3, sectionItem4, sectionItem5, sectionItem6)
    sectionExperiences.append(sectionExperience)
    addWorkExperienceId++

    sectionDeleteFun(sectionDelete)
    textareaFun(textarea)
    inputFun(labelInput)
    inputFun(labelInput2)
    selectFun(selectInput, selectLabel)
    selectFun(selectInput2, selectLabel2)
    selectFun(selectInput3, selectLabel3)
    selectFun(selectInput4, selectLabel4)
    selectFun(selectInput5, selectLabel5)
})

const education = document.getElementById('education')
const selectEducation = education.parentElement
const sectionEducation = document.querySelector('.section__education')
const sectionShow = education.parentElement.querySelector('.section__show')
const optionEducationArr = education.parentElement.querySelectorAll('.option')
for (let i = 0; i < optionEducationArr.length; i++) {
    const optionEducation = optionEducationArr[i];
    optionEducation.addEventListener('click', function(){
        const optionEducationValue = optionEducation.textContent
        if (optionEducationValue != 'Без образования') {
            selectEducation.classList.add('section__item-withbtn')
            sectionShow.classList.add('section__show-active')
            sectionEducation.classList.add('section__education-active')
        } else {
            selectEducation.classList.remove('section__item-withbtn')
            sectionShow.classList.remove('section__show-active')
            sectionEducation.classList.remove('section__education-active')
        }
    })
}


const sectionShowBtn = document.querySelector('.section__show-btn')
sectionShowBtn.addEventListener('click', function(){
    const selectInput = sectionShowBtn.parentElement.parentElement.querySelector('.select__input')
    const selectTitle = sectionShowBtn.parentElement.parentElement.querySelector('.select__title')
    selectTitle.classList.remove('select__title-active')
    selectInput.value = ''
    selectEducation.classList.remove('section__item-withbtn')
    sectionShow.classList.remove('section__show-active')
    sectionEducation.classList.remove('section__education-active')
})

const addAdditionalEducation = document.querySelector('.add_additional_education')
const sectionEducations = document.querySelector('.section__educations')
let addAdditionalEducationId = 1
addAdditionalEducation.addEventListener('click', function(){
    const sectionEducationsItem = document.createElement('div')
    sectionEducationsItem.classList.add('section__educations-item')
    const select = document.createElement('div')
    select.classList.add('select', 'select_up')
    const selectInput = document.createElement('input')
    selectInput.classList.add('select__input', 'input')
    selectInput.id = `education_${addAdditionalEducationId}`
    const selectTitle = document.createElement('label')
    selectTitle.classList.add('select__title')
    selectTitle.setAttribute('for', `education_${addAdditionalEducationId}`)
    selectTitle.textContent = 'Образование'
    const options = document.createElement('div')
    options.classList.add('options')
    const optionsWrapper = document.createElement('div')
    optionsWrapper.classList.add('options__wrapper')
    const educationOptionArray = ['Без образования', 'Среднее', 'Среднее специальное', 'Высшее', 'Несколько высших']
    for (let i = 0; i < educationOptionArray.length; i++) {
        const educationOption = educationOptionArray[i];
        const option = document.createElement('div')
        option.classList.add('option')
        option.textContent = educationOption
        optionsWrapper.append(option)
        option.addEventListener('click', function(){
            optionEducationFun(option)
        })
    }

    options.append(optionsWrapper)
    const sectionShow = document.createElement('div')
    sectionShow.classList.add('section__show')
    const sectionShowBtn = document.createElement('button')
    sectionShowBtn.classList.add('section__icon', 'section__icon-icon', 'section__show-btn')
    sectionShowBtn.setAttribute('type', 'button')
    sectionShowBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#6A6A73"/></svg>'
    sectionShow.append(sectionShowBtn)
    const sectionEducation = document.createElement('div')
    sectionEducation.classList.add('section__education')
    const sectionItemWithbtn = document.createElement('div')
    sectionItemWithbtn.classList.add('section__item-withbtn')

    const label = document.createElement('label')
    label.classList.add('label')
    label.setAttribute('for', `educational-institution_${addAdditionalEducationId}`)
    const labelTitle = document.createElement('h3')
    labelTitle.classList.add('label__title')
    labelTitle.textContent = 'Название учебного заведения'
    const labelInput = document.createElement('input')
    labelInput.classList.add('label__input', 'input')
    labelInput.setAttribute('type', 'text')
    labelInput.setAttribute('name', `educational-institution_${addAdditionalEducationId}`)
    labelInput.id = `educational-institution_${addAdditionalEducationId}`
    label.append(labelTitle, labelInput)
    sectionItemWithbtn.append(label)

    const sectionItemWithbtn2 = document.createElement('div')
    sectionItemWithbtn2.classList.add('section__item-withbtn')

    const label2 = document.createElement('label')
    label2.classList.add('label')
    label2.setAttribute('for', `faculty_${addAdditionalEducationId}`)
    const labelTitle2 = document.createElement('h3')
    labelTitle2.classList.add('label__title')
    labelTitle2.textContent = 'Факультет'
    const labelInput2 = document.createElement('input')
    labelInput2.classList.add('label__input', 'input')
    labelInput2.setAttribute('type', 'text')
    labelInput2.setAttribute('name', `faculty_${addAdditionalEducationId}`)
    labelInput2.id = `faculty_${addAdditionalEducationId}`
    label2.append(labelTitle2, labelInput2)
    sectionItemWithbtn2.append(label2)

    const sectionItemWithbtn3 = document.createElement('div')
    sectionItemWithbtn3.classList.add('section__item-withbtn')

    const label3 = document.createElement('label')
    label3.classList.add('label')
    label3.setAttribute('for', `department_${addAdditionalEducationId}`)
    const labelTitle3 = document.createElement('h3')
    labelTitle3.classList.add('label__title')
    labelTitle3.textContent = 'Кафедра'
    const labelInput3 = document.createElement('input')
    labelInput3.classList.add('label__input', 'input')
    labelInput3.setAttribute('type', 'text')
    labelInput3.setAttribute('name', `department_${addAdditionalEducationId}`)
    labelInput3.id = `department_${addAdditionalEducationId}`
    label3.append(labelTitle3, labelInput3)
    sectionItemWithbtn3.append(label3)

    const sectionItemWithbtn4 = document.createElement('div')
    sectionItemWithbtn4.classList.add('section__item-withbtn')

    const label4 = document.createElement('label')
    label4.classList.add('label')
    label4.setAttribute('for', `speciality_${addAdditionalEducationId}`)
    const labelTitle4 = document.createElement('h3')
    labelTitle4.classList.add('label__title')
    labelTitle4.textContent = 'Специальность'
    const labelInput4 = document.createElement('input')
    labelInput4.classList.add('label__input', 'input')
    labelInput4.setAttribute('type', 'text')
    labelInput4.setAttribute('name', `speciality_${addAdditionalEducationId}`)
    labelInput4.id = `speciality_${addAdditionalEducationId}`
    label4.append(labelTitle4, labelInput4)
    sectionItemWithbtn4.append(label4)

    const sectionItemWithbtn5 = document.createElement('div')
    sectionItemWithbtn5.classList.add('section__item-withbtn')
    const sectionCol = document.createElement('div')
    sectionCol.classList.add('section__col')
    const label5 = document.createElement('label')
    label5.classList.add('label')
    label5.setAttribute('for', `datepicker_year-finish_${addAdditionalEducationId}`)
    const labelTitle5 = document.createElement('h3')
    labelTitle5.classList.add('label__title')
    labelTitle5.textContent = 'Год окончания'
    const labelInput5 = document.createElement('input')
    labelInput5.classList.add('label__input', 'input', 'input_icon', 'datepicker')
    labelInput5.setAttribute('autocomplete', 'off')
    labelInput5.setAttribute('type', 'text')
    labelInput5.setAttribute('name', `datepicker_year-finish_${addAdditionalEducationId}`)
    labelInput5.id = `datepicker_year-finish_${addAdditionalEducationId}`
    const sectionText = document.createElement('p')
    sectionText.classList.add('section__text')
    sectionText.textContent = 'Если еще учитесь, укажите год предполагаемого окончания'

    label5.append(labelTitle5, labelInput5)
    sectionCol.append(label5, sectionText)
    sectionItemWithbtn5.append(sectionCol)
    
    select.append(selectInput, selectTitle, options, sectionShow)
    sectionEducation.append(sectionItemWithbtn, sectionItemWithbtn2, sectionItemWithbtn3, sectionItemWithbtn4, sectionItemWithbtn5)

    sectionEducationsItem.append(select, sectionEducation)
    sectionEducations.append(sectionEducationsItem)
    addAdditionalEducationId++
    selectFun(selectInput, selectTitle)
    
    inputFun(labelInput)
    inputFun(labelInput2)
    inputFun(labelInput3)
    inputFun(labelInput4)
    let datepicker = new Datepicker(labelInput5, {
        weekStart: 1
    });
    labelInput5.addEventListener('focus', function(){
        const label = labelInput5.parentElement.parentElement
        label.classList.add('label-active')
    })
    labelInput5.addEventListener('focusout', function(){
        const label = labelInput5.parentElement.parentElement
        setTimeout(() => {
            if (labelInput5.value == '') {
                label.classList.remove('label-active')
            } else {
                label.classList.add('label-active')
            }
        }, 200);
    })
    
})

function optionEducationFun (option){
    const selectEducation = option.parentElement.parentElement.parentElement
    const sectionShow = option.parentElement.parentElement.parentElement.querySelector('.section__show')
    const sectionEducation = option.parentElement.parentElement.parentElement.parentElement.querySelector('.section__education')
    const sectionShowBtn = option.parentElement.parentElement.parentElement.querySelector('.section__show-btn')

    const optionEducationValue = option.textContent
    if (optionEducationValue != 'Без образования') {
        selectEducation.classList.add('section__item-withbtn')
        sectionShow.classList.add('section__show-active')
        sectionEducation.classList.add('section__education-active')
    } else {
        selectEducation.classList.remove('section__item-withbtn')
        sectionShow.classList.remove('section__show-active')
        sectionEducation.classList.remove('section__education-active')
    }

    sectionShowBtn.addEventListener('click', function(){
        const sectionEducationsItem = sectionShowBtn.parentElement.parentElement.parentElement
        sectionEducationsItem.remove()
    })
}