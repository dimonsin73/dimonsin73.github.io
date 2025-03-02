const ret = JSON.parse(localStorage.getItem('userMNJ'));
const headerUserAccount = document.querySelector('.header__user-account')
headerUserAccount.textContent = `${ret.surname} ${ret.name.charAt(0)}.`

const aside = document.querySelector('.aside')
const asideItemArr = document.querySelectorAll('.aside__item')

for (let i = 0; i < asideItemArr.length; i++) {
    const element = asideItemArr[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < asideItemArr.length; i++) {
            const el = asideItemArr[i];
            el.classList.remove('aside__item-active')
        }
        element.classList.add('aside__item-active')
    })
}
const burger = document.querySelector('.burger')
burger.addEventListener('click', function(){
    aside.classList.add('aside-active')
    console.log('1')
})
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ 
		aside.classList.remove('aside-active')
	}
});
document.addEventListener( 'click', (e) => {
	const withinBoundariesAside = e.composedPath().includes(aside);
    const withinBoundariesBurger = e.composedPath().includes(burger);
	if ( !withinBoundariesAside) {
        if (!withinBoundariesBurger) {
            aside.classList.remove('aside-active')
        }
    }
})
// Каледнарь 
let datepicker = new Datepicker('#datepicker', {
    weekStart: 1
  });
const datepickerInput = document.getElementById('datepicker')
const datepickerDiv = document.querySelector('.datepicker')
const datepickerWrapper = document.querySelector('.datepicker__wrapper')
datepickerInput.addEventListener('focus', function(){
    datepickerDiv.classList.add('datepicker-focus')
})
datepickerInput.addEventListener('focusout', function(){
    setTimeout(() => {
        if (datepickerInput.value == '') {
            datepickerDiv.classList.remove('datepicker-active')
        } else {
            datepickerDiv.classList.add('datepicker-active')
        }
    }, 200);
    if (datepickerWrapper.style.display === 'block') {
    } else {
        datepickerDiv.classList.remove('datepicker-focus')
    }
    
})
// Ф-ия выделения tag
const tagBtnArr = document.querySelectorAll('.tag__btn')
for (let i = 0; i < tagBtnArr.length; i++) {
    const element = tagBtnArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('tag__btn-active')
    })
}
// Ф-ия выпадающего меню
function dropdawn() {
    const attributSelectArr = document.querySelectorAll('.attribut__select')
    for (let i = 0; i < attributSelectArr.length; i++) {
        const element = attributSelectArr[i];
        element.addEventListener('click', function(){
            const attributOptions = element.parentElement.querySelector('.attribut__options')
            attributOptions.classList.toggle('attribut__options-active')
            if (attributOptions.classList.contains('attribut__options-active')) {
                const attributOptionsArr = document.querySelectorAll('.attribut__options')
                for (let i = 0; i < attributOptionsArr.length; i++) {
                    const element = attributOptionsArr[i];
                    element.style.height = `0px`
                    element.classList.remove('attribut__options-active')
                }
                attributOptions.style.height = `${attributOptions.scrollHeight}px`
                attributOptions.classList.add('attribut__options-active')
            } else {
                attributOptions.style.height = `0px`
            }
            const attributOptionArr = element.parentElement.querySelectorAll('.attribut__option')
            for (let i = 0; i < attributOptionArr.length; i++) {
                const el = attributOptionArr[i];
                el.addEventListener('click', function(){
                    element.value = `${el.textContent}`
                    attributOptions.style.height = `0px`
                    attributOptions.classList.remove('attribut__options-active')

                })
            }
            const attribut = element.parentElement
            document.addEventListener( 'click', (e) => {
                const withinBoundaries = e.composedPath().includes(attribut);
                if ( ! withinBoundaries ) {
                    attributOptions.style.height = `0px`
                    attributOptions.classList.remove('attribut__options-active')
                }
            })
            document.addEventListener('keydown', function(e) {
                if( e.keyCode == 27 ){ 
                    attributOptions.style.height = `0px`
                    attributOptions.classList.remove('attribut__options-active')
                }
            })
        })
    }
}
dropdawn() 
// Ф-ия выпадающего меню для валют
const currencySelectArr = document.querySelectorAll('.currency__select')
for (let i = 0; i < currencySelectArr.length; i++) {
    const element = currencySelectArr[i];
    element.addEventListener('click', function(){
        const currencyOptions = element.parentElement.querySelector('.currency__options')
        currencyOptions.classList.toggle('currency__options-active')
        if (currencyOptions.classList.contains('currency__options-active')) {
            currencyOptions.style.height = `${currencyOptions.scrollHeight}px`
        } else {
            currencyOptions.style.height = `0px`
        }
        const currencyOptionArr = element.parentElement.querySelectorAll('.currency__option')
        for (let i = 0; i < currencyOptionArr.length; i++) {
            const el = currencyOptionArr[i];
            el.addEventListener('click', function(){
                element.textContent = `${el.textContent}`
                currencyOptions.style.height = `0px`
                currencyOptions.classList.remove('currency__options-active')
            })
        }
        const currency = document.querySelector('.currency')
        document.addEventListener( 'click', (e) => {
            const withinBoundaries = e.composedPath().includes(currency);
            if ( ! withinBoundaries ) {
                currencyOptions.style.height = `0px`
                currencyOptions.classList.remove('currency__options-active')
            }
        })
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                currencyOptions.style.height = `0px`
                currencyOptions.classList.remove('currency__options-active')
            }
        })
    })
}

// Табы
const tabs = document.querySelectorAll('.tabs__item')
const tabcontentItemArr = document.querySelectorAll('.tabcontent__item')
function tab(tabN) {
    for (let i = 0; i < tabcontentItemArr.length; i++) {
        const element = tabcontentItemArr[i];
        if (element.dataset.content == tabN) {
            element.classList.remove('tabcontent__item-hidden')
        } else {
            element.classList.add('tabcontent__item-hidden')
        };
    };
    for (let i = 0; i < tabs.length; i++) {
        const element = tabs[i];
        if (element.dataset.tab == tabN) {
            element.classList.add('tabs__item-active')    
        }
    }
}
function removeTabsActive() {
    for (let i = 0; i < tabs.length; i++) {
        const el = tabs[i];
        el.classList.remove('tabs__item-active')
    }
}
for (let i = 0; i < tabs.length; i++) {
    const element = tabs[i];
    element.addEventListener('click', function(){
        removeTabsActive();
        element.classList.add('tabs__item-active')
        switch (element.dataset.tab) {
            case 'tab1':
                tab('tab1')
                break;
            case 'tab2':
                tab('tab2')
                break;
            case 'tab3':
                tab('tab3')
                break;
            case 'tab4':
                tab('tab4')
                break;
            default:
                break;
        }
    })
}
// Кнопки
const btnNext1 = document.getElementById('btn-next1')
const btnNext2 = document.getElementById('btn-next2')
const btnNext3 = document.getElementById('btn-next3')
const btnPrev1 = document.getElementById('btn-prev1')
const btnPrev2 = document.getElementById('btn-prev2')
const btnPrev3 = document.getElementById('btn-prev3')
btnNext1.addEventListener('click', function(){
    removeTabsActive()
    tab('tab2')    
})
btnNext2.addEventListener('click', function(){
    removeTabsActive()
    tab('tab3')    
})
btnNext3.addEventListener('click', function(){
    removeTabsActive()
    tab('tab4')    
})
btnPrev1.addEventListener('click', function(){
    removeTabsActive()
    tab('tab1')    
})
btnPrev2.addEventListener('click', function(){
    removeTabsActive()
    tab('tab2')    
})
btnPrev3.addEventListener('click', function(){
    removeTabsActive()
    tab('tab3')    
})
// Блокирова ввода
const keyPressArr = document.querySelectorAll('.keypress-none')
for (let i = 0; i < keyPressArr.length; i++) {
    const element = keyPressArr[i];
    element.addEventListener('keypress', function(e){
        e.preventDefault()
    })
}
// Ф-ия очистки полей ввода
function deletePart() {
    const educationDetails = document.getElementById('education-details')
    educationDetails.innerHTML = ''
    educationDetails.classList.remove('attribut__parts')
}
// Ф-ия появление и работы кнопки удалить
function btnDelete() {
    const attribut = educationBasicInput.parentElement
    attribut.classList.add('attribut-grid')
    const attributBtnNoactive = document.querySelector('.attribut__btn-noactive')
    attributBtnNoactive.style.display = 'block'
    attributBtnNoactive.addEventListener('click', function(){
        deletePart()
        attributBtnNoactive.style.display = 'none'
        attribut.classList.remove('attribut-grid')
        educationBasicInput.value = ''
    })
}
// Образование основное
const educationBasicInput = document.getElementById('education-basic')
educationBasicInput.addEventListener('focusout', function(e){
    e.preventDefault();
    const delay = 100;
    setTimeout(() => {
        education()
    }, delay);
})
function education() {
    switch (educationBasicInput.value) {
        case 'Без образования':
            deletePart()
            break;
        case 'Среднее образование':
            deletePart()
            createPart()
            btnDelete() 
            break;
        case 'Среднее специальное образование':
            deletePart()
            createPart()
            btnDelete() 
            break;
        case 'Высшее образование':
            deletePart()
            createPart()
            btnDelete() 
            break;
        case 'Несколько высших образований':
            deletePart()
            createPart()
            btnDelete() 
            break;
        default:
            break;
    }
}

function createPart() {
    const educationDetails = document.getElementById('education-details')
    educationDetails.classList.add('attribut__parts')

    const Institution = document.createElement('div')
    Institution.classList.add('attribut__part')

    const createInputInstitution = document.createElement('input');
    createInputInstitution.classList.add('attribut__input')
    createInputInstitution.setAttribute('required', 'true')
    createInputInstitution.setAttribute('type', 'text')
    const createTitleInstitution = document.createElement('h3')
    createTitleInstitution.classList.add('attribut__title')
    createTitleInstitution.textContent = 'Название учебного заведения'

    Institution.append(createInputInstitution, createTitleInstitution)

    const Faculty = document.createElement('div')
    Faculty.classList.add('attribut__part')

    const createInputFaculty = document.createElement('input');
    createInputFaculty.classList.add('attribut__input')
    createInputFaculty.setAttribute('required', 'true')
    createInputFaculty.setAttribute('type', 'text')
    const createTitleFaculty = document.createElement('h3')
    createTitleFaculty.classList.add('attribut__title')
    createTitleFaculty.textContent = 'Факультет'
    
    Faculty.append(createInputFaculty, createTitleFaculty)

    
    const Specialization = document.createElement('div')
    Specialization.classList.add('attribut__part')

    const createInputSpecialization = document.createElement('input');
    createInputSpecialization.classList.add('attribut__input')
    createInputSpecialization.setAttribute('required', 'true')
    createInputSpecialization.setAttribute('type', 'text')
    const createTitleSpecialization = document.createElement('h3')
    createTitleSpecialization.classList.add('attribut__title')
    createTitleSpecialization.textContent = 'Специализация'
    
    Specialization.append(createInputSpecialization, createTitleSpecialization)

    const Year = document.createElement('div')
    Year.classList.add('attribut__part')

    const createInputYear = document.createElement('input');
    createInputYear.classList.add('attribut__input')
    createInputYear.setAttribute('required', 'true')
    createInputYear.setAttribute('type', 'text')
    const createTitleYear = document.createElement('h3')
    createTitleYear.classList.add('attribut__title')
    createTitleYear.textContent = 'Год окончания'
    
    Year.append(createInputYear, createTitleYear)

    educationDetails.append(Institution, Faculty, Specialization, Year)
}
/*
// Образование дополнительное
const educationAdditional = document.getElementById('education-additional')
educationAdditional.addEventListener('click', function(){
    const attributDopsection = educationAdditional.parentElement.querySelector('.attribut__dopsection')
    attributDopsection.classList.add('attribut__items')
    const attributPart = document.createElement('div')
    attributPart.classList.add('attribut__item')

    const attributInput = document.createElement('input')
    attributInput.classList.add('attribut__input', 'attribut__select', 'keypress-none')
    attributInput.setAttribute('required', 'true')
    attributInput.setAttribute('type', 'text')
    attributInput.setAttribute('onpaste', 'return false;')
    const attributTitle = document.createElement('h3')
    attributTitle.classList.add('attribut__title')
    attributTitle.textContent = 'Образование'
    const attributOptions = document.createElement('div')
    attributOptions.classList.add('attribut__options')
    const attributOptionArr = ['Без образования', 'Среднее образование', 'Среднее специальное образование', 'Высшее образование', 'Несколько высших образований']
    for (let i = 0; i < attributOptionArr.length; i++) {
        const element = attributOptionArr[i];
        const attributOption = document.createElement('div')
        attributOption.classList.add('attribut__option')
        attributOption.textContent = element
        attributOptions.append(attributOption)
    }    
    attributPart.append(attributInput, attributTitle, attributOptions)
    attributDopsection.append(attributPart)

    const educationDetails = document.getElementById('education-details')
    educationDetails.classList.add('attribut__parts')
    const Institution = document.createElement('div')
    Institution.classList.add('attribut__part')

    const createInputInstitution = document.createElement('input');
    createInputInstitution.classList.add('attribut__input')
    createInputInstitution.setAttribute('required', 'true')
    createInputInstitution.setAttribute('type', 'text')
    const createTitleInstitution = document.createElement('h3')
    createTitleInstitution.classList.add('attribut__title')
    createTitleInstitution.textContent = 'Название учебного заведения'

    Institution.append(createInputInstitution, createTitleInstitution)

    const Faculty = document.createElement('div')
    Faculty.classList.add('attribut__part')

    const createInputFaculty = document.createElement('input');
    createInputFaculty.classList.add('attribut__input')
    createInputFaculty.setAttribute('required', 'true')
    createInputFaculty.setAttribute('type', 'text')
    const createTitleFaculty = document.createElement('h3')
    createTitleFaculty.classList.add('attribut__title')
    createTitleFaculty.textContent = 'Факультет'
    
    Faculty.append(createInputFaculty, createTitleFaculty)

    
    const Specialization = document.createElement('div')
    Specialization.classList.add('attribut__part')

    const createInputSpecialization = document.createElement('input');
    createInputSpecialization.classList.add('attribut__input')
    createInputSpecialization.setAttribute('required', 'true')
    createInputSpecialization.setAttribute('type', 'text')
    const createTitleSpecialization = document.createElement('h3')
    createTitleSpecialization.classList.add('attribut__title')
    createTitleSpecialization.textContent = 'Специализация'
    
    Specialization.append(createInputSpecialization, createTitleSpecialization)

    const Year = document.createElement('div')
    Year.classList.add('attribut__part')

    const createInputYear = document.createElement('input');
    createInputYear.classList.add('attribut__input')
    createInputYear.setAttribute('required', 'true')
    createInputYear.setAttribute('type', 'text')
    const createTitleYear = document.createElement('h3')
    createTitleYear.classList.add('attribut__title')
    createTitleYear.textContent = 'Год окончания'
    
    Year.append(createInputYear, createTitleYear)

    educationDetails.append(Institution, Faculty, Specialization, Year)
})
*/

// Курсы
const educationCourses = document.getElementById('education-courses')
educationCourses.addEventListener('click', function(){
    const attributDopsection = educationCourses.parentElement.querySelector('.attribut__dopsection')
    attributDopsection.classList.add('attribut-grid')
    const attribut = educationCourses.parentElement
    attribut.classList.add('attribut-border')
    const tittleYes = attributDopsection.parentElement.querySelector('.title-mb24')
    if (tittleYes == null) {
        const attributItemTitle = document.createElement('h2')
        attributItemTitle.classList.add('education__title', 'title-large', 'title-mb24')
        attributItemTitle.textContent = 'Повышение квалификации, курсы'
        attributDopsection.before(attributItemTitle)
    }
    const attributItems = document.createElement('div')
    attributItems.classList.add('attribut__items')

    const coursesArr = ['Название курса', 'Проводившая организация', 'Специализация', 'Год окончания']
    for (let i = 0; i < coursesArr.length; i++) {
        const element = coursesArr[i];
        
        const attributItem = document.createElement('div')
        attributItem.classList.add('attribut__item')
        
        const attributInput = document.createElement('input')
        attributInput.classList.add('attribut__input')
        attributInput.setAttribute('required', 'true')
        attributInput.setAttribute('type', 'text')
        const attributTitle = document.createElement('h3')
        attributTitle.classList.add('attribut__title')
        attributTitle.textContent = element

        attributItem.append(attributInput, attributTitle)
        attributItems.append(attributItem)
    }

    const attributBtn = document.createElement('button')
    attributBtn.classList.add('attribut__btn', 'svg-container', 'attribut__btn-trash')

    attributDopsection.append(attributItems, attributBtn)

    attributBtn.addEventListener('click', function(){
        attributItems.remove()
        attributBtn.remove()
        if (attributDopsection.childNodes.length == 0) {
            const tittleYes = attributDopsection.parentElement.querySelector('.title-mb24')
            tittleYes.remove()
            attribut.classList.remove('attribut-border')
        }
    })
})

// Языки
const educationLanguage = document.getElementById('education-language')
educationLanguage.addEventListener('click', function(){
    const attributDopsection = educationLanguage.parentElement.querySelector('.attribut__dopsection')
    attributDopsection.classList.add('attribut-grid')
    console.log(attributDopsection)
    const attribut = educationLanguage.parentElement
    attribut.classList.add('attribut-border')
    const tittleYes = attributDopsection.parentElement.querySelector('.title-mb24')
    if (tittleYes == null) {
        const attributItemTitle = document.createElement('h2')
        attributItemTitle.classList.add('education__title', 'title-large', 'title-mb24')
        attributItemTitle.textContent = 'Знание языков:'
        attributDopsection.before(attributItemTitle)
    }
    const attributItems = document.createElement('div')
    attributItems.classList.add('attribut__items')
    const coursesArr = ['Язык', 'Уровень владения']
    for (let i = 0; i < coursesArr.length; i++) {
        const element = coursesArr[i];
        
        const attributItem = document.createElement('div')
        attributItem.classList.add('attribut__item')
        
        const attributInput = document.createElement('input')
        attributInput.classList.add('attribut__input')
        attributInput.setAttribute('required', 'true')
        attributInput.setAttribute('type', 'text')
        const attributTitle = document.createElement('h3')
        attributTitle.classList.add('attribut__title')
        attributTitle.textContent = element

        attributItem.append(attributInput, attributTitle)
        attributItems.append(attributItem)
    }

    const attributBtn = document.createElement('button')
    attributBtn.classList.add('attribut__btn', 'svg-container', 'attribut__btn-trash')

    attributDopsection.append(attributItems, attributBtn)

    attributBtn.addEventListener('click', function(){
        attributItems.remove()
        attributBtn.remove()
        if (attributDopsection.childNodes.length == 0) {
            const tittleYes = attributDopsection.parentElement.querySelector('.title-mb24')
            tittleYes.remove()
            attribut.classList.remove('attribut-border')
        }
    })
})