const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const emailTitle = email.querySelector('.card__social-title');
const emailText = email.querySelector('.card__social-text');

const ret = JSON.parse(localStorage.getItem('userMNJ'));
fullname.textContent = `${ret.surname} ${ret.name}`;
fullname.classList.remove('text-gray');
emailTitle.textContent = `${ret.email}`;

// Маска для телефона
$(function(){
    $("#phone-input").mask("+7 (999) 999-9999");
  });
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

// Открытие / закрытие описания вакансии
const expandBtnArr = document.querySelectorAll('.card__btn-expand')
for (let i = 0; i < expandBtnArr.length; i++) {
    const element = expandBtnArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('btn-black-active')
        const card = element.parentElement.parentElement
        const expand = card.querySelector('.card__expand')
        const btnPrint = card.querySelector('.card__print')
        const btnDawnload = card.querySelector('.card__dawnloader')
        expand.classList.toggle('card__expand-active')
        if (expand.classList.contains('card__expand-active')) {
            expand.style.height = `${expand.scrollHeight}px`
            btnPrint.style.display = 'flex'
            btnDawnload.style.display = 'flex'
        } else {
            expand.style.height = '0'
            btnPrint.style.display = 'none'
            btnDawnload.style.display = 'none'
        }
        const expandUp = card.querySelector('.card__expand-up')
        expandUp.addEventListener('click', function(){
            expand.style.height = '0'
            btnPrint.style.display = 'none'
            btnDawnload.style.display = 'none'
            expand.classList.remove('card__expand-active')
            element.classList.remove('btn-black-active')
        })
    })
}
// Спрятать кнопки под кнопкой с точками
const cardFooterDotsArr = document.querySelectorAll('.card__footer-dots')
for (let i = 0; i < cardFooterDotsArr.length; i++) {
    const element = cardFooterDotsArr[i];
    element.addEventListener('click', function(){
        const cardFooterIcons = element.parentElement.querySelector('.card__footer-icons')
        cardFooterIcons.style.display = 'flex'
        element.style.display = 'none'
    })
}
// Прятать кнопку слайдера
const cardContentArr = document.querySelectorAll('.card__content')
for (let i = 0; i < cardContentArr.length; i++) {
    const element = cardContentArr[i];
    const sliderBtnNext = element.querySelector('.itc-slider-btn-next')
    const sliderItems = element.querySelector('.itc-slider-items')
    if (sliderItems.scrollWidth < element.scrollWidth) {
        sliderBtnNext.classList.add('itc-slider-btn-hide')
    }
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
// Блокирова ввода в селекторах
const keyPressArr = document.querySelectorAll('.keypress-none')
for (let i = 0; i < keyPressArr.length; i++) {
    const element = keyPressArr[i];
    element.addEventListener('keypress', function(e){
        e.preventDefault()
    })
}
/*
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
*/



// Константы для редактирования
const save = document.querySelector('.save')
const inputArr = document.querySelectorAll('.attribut__input')
const insearchSpace = document.querySelector('.insearch-space')
const cardHeadSex = document.querySelector('.card__head-sex')
const cardHeadComma = document.querySelector('.card__head-comma')
const cardHeadAge = document.querySelector('.card__head-age')
const cardHeadSalary = document.querySelector('.card__head-salary')
const job = document.getElementById('job')
const jobTitle = job.querySelector('.card__social-title')
const jobText = job.querySelector('.card__social-text')
const oldjob = document.getElementById('oldjob')
const oldjobTitle = oldjob.querySelector('.card__social-title')
const oldjobText = oldjob.querySelector('.card__social-text')
const city = document.getElementById('city')
const cityTitle = city.querySelector('.card__social-title')
const cityText = city.querySelector('.card__social-text')
const phone = document.getElementById('phone')
const phoneTitle = phone.querySelector('.card__social-title')
const phoneText = phone.querySelector('.card__social-text')
const sex = document.getElementById('sex')


// Открытие меню редактирования
const edit = document.querySelector('.edit')
const head = document.querySelector('.head')
const card = document.querySelector('.card')
const float = document.querySelector('.float')
const editBtn = document.getElementById('edit-btn')
editBtn.addEventListener('click', function(){
    edit.classList.add('edit-open')
    head.classList.add('section-none')
    card.classList.add('section-none')
    float.classList.add('float-hide')
    
    // Статус
    if (insearchSpace.classList.contains('insearch')) {
        const statusVal = insearchSpace.textContent
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'status') {
                element.value = statusVal
            }
        }
    }
    // ФИО
    if (fullname.classList.contains('text-gray')) {
    } else {
        const fullnameVal = fullname.textContent.split(' ')
        const lastnameVal = fullnameVal[0]
        const firstnameVal = fullnameVal[1]
        const middlenameVal = fullnameVal[2]
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'lastname') {
                element.value = lastnameVal
            }
            if (element.name === 'firstname') {
                if (firstnameVal == undefined) {
                    element.value = ''
                } else {
                    element.value = firstnameVal
                }
            }
            if (element.name === 'middlename') {
                if (middlenameVal == undefined) {
                    element.value = ''
                } else {
                    element.value = middlenameVal
                }
            }
        }
    }
    // Пол
    if (cardHeadSex != '') {
        const sexVal = cardHeadSex.textContent
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'sex') {
                element.value = sexVal
            }
        }
    }
    //Почта
    if (email.classList.contains('card__unfilled') ) {  
    } else {
        const emailVal = emailTitle.textContent
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'email') {
                element.value = emailVal
            }
        }
    }
    // Город проживания
    if (city.classList.contains('card__unfilled') ) {  
    } else {
        const cityVal = cityTitle.textContent
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'city') {
                element.value = cityVal
            }
        }
    }
    // Желаемая должность
    if (job.classList.contains('card__unfilled') ) {  
    } else {
        const jobVal = jobTitle.textContent
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'job') {
                element.value = jobVal
            }
        }
    }
    // Желаемая зарплата
    if (cardHeadSalary.classList.contains('text-gray') ) {  
    } else {
        const cardHeadSalaryArr = cardHeadSalary.textContent.split(' - ')
        const last = cardHeadSalaryArr[1].length - 1
        cardHeadSalaryArr.push(cardHeadSalaryArr[1][last])
        cardHeadSalaryArr[1] = cardHeadSalaryArr[1].slice(0, -2)
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'difference-from') {
                element.value = cardHeadSalaryArr[0]
            }
            if (element.name === 'difference-to') {
                element.value = cardHeadSalaryArr[1]
            }
        }
         // Желаемая зарплата (валюта)
        const currency = document.querySelector('.currency')
        const currencySelect = currency.querySelector('.currency__select')
        currencySelect.textContent = cardHeadSalaryArr[2]
    }
    // Последнее место работы
    if (oldjob.classList.contains('card__unfilled') ) {  
    } else {
        const oldjobVal = oldjobTitle.textContent
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            if (element.name === 'oldjob') {
                element.value = oldjobVal
            }
        }
    }
})
// Закрытие меню редактирования
const headHome = document.querySelector('.head-home')
headHome.addEventListener('click', function(){
    editClose()
})
function editClose() {
    edit.classList.remove('edit-open')
    head.classList.remove('section-none')
    card.classList.remove('section-none')
    float.classList.remove('float-hide')
}



// Разбитие на разряды
for (let i = 0; i < inputArr.length; i++) {
    const element = inputArr[i];
    if (element.name === 'difference-from') {
        element.addEventListener('input', function(){
            const differenceFrom = element.value
            const differenceFromSpace = differenceFrom.replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            element.value = differenceFromSpace
        })
        
    }
    if (element.name === 'difference-to') {
        element.addEventListener('input', function(){
            const differenceTo = element.value
            const differenceToSpace = differenceTo.replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            element.value = differenceToSpace
        })
    }
}

// Сохранить изенения редактирования
save.addEventListener('click', function(){
    let fullnameEdit = '';
    let currencyNum = '';
    for (let i = 0; i < inputArr.length; i++) {
        const element = inputArr[i];
        // Статус
        if (element.name === 'status') {
            const status = element.value
            if (status.trim() != '') {
                insearchSpace.classList.add('insearch')
                insearchSpace.textContent = status
            }
        }
        //  ФИО
        if (element.name === 'lastname') {
            const lastname = element.value
            fullnameEdit = `${lastname}`
        }
        if (element.name === 'firstname') {
            const firstname = element.value
            fullnameEdit = `${fullnameEdit} ${firstname}`
        }
        if (element.name === 'middlename') {
            const middlename = element.value
            fullnameEdit = `${fullnameEdit} ${middlename}`
        }
        if (fullnameEdit.trim() != '') {
            fullname.textContent = fullnameEdit
            fullname.classList.remove('text-gray')
        }  
        // Пол
        if (element.name === 'sex') {
            cardHeadSex.innerHTML = element.value
        }
        // Возраст 
        const birthdayFull = datepickerInput.value.split('.')
        if (birthdayFull != '') {
            const birthdayDay = birthdayFull[0]
            const birthdayMounth = birthdayFull[1]
            const birthdayYear = birthdayFull[2]
            const birthdayDate = new Date(`${birthdayYear}-${birthdayMounth}-${birthdayDay}`)
            const x = new Date
            let y = x.getFullYear() - birthdayDate.getFullYear()
            const m = x.getMonth() - birthdayDate.getMonth()
            const d = x.getDate() - birthdayDate.getDate()
            if (m < 0) {
                y--
            }
            if (m === 0) {  
                if (d < 0) {
                    y--
                }
            }
            if ( (y % 100) == 11 || (y % 100) == 12 || (y % 100) == 13 || (y % 100) == 14) {
                cardHeadAge.innerHTML = `${y} лет`
            }else {
                switch (y % 10) {
                    case 1:
                        cardHeadAge.innerHTML = `${y} год`
                        break;
                    case 2:
                        cardHeadAge.innerHTML = `${y} года`
                        break;
                    case 3:
                        cardHeadAge.innerHTML = `${y} года`
                        break;
                    case 4:
                        cardHeadAge.innerHTML = `${y} года`
                        break;
                    default:
                        cardHeadAge.innerHTML = `${y} лет`
                        break;
                }
            }
        }
        // Запятая
        if (cardHeadSex.textContent != '') {
            if (cardHeadAge.textContent != '') {
                cardHeadComma.innerHTML = ', '
            }
        }
        // Почта
        if (element.name === 'email') {
            const email = element.value
            emailTitle.textContent = email
            if (email.trim() != '') {
                emailTitle.textContent = email
                emailText.textContent = 'Почта'
                element.classList.remove('card__unfilled')
            }
        }
        // Телефон
        if (element.name === 'phone') {
            const phoneNum = element.value
            if (phoneNum.trim() != '') {
                phoneTitle.textContent = phoneNum
                phoneText.textContent = 'Телефон'
                phone.classList.remove('card__unfilled')
            }
        }
        // Город проживания
        if (element.name === 'city') {
            const cityContent = element.value
            if (cityContent.trim() != '') {
                cityTitle.textContent = cityContent
                cityText.textContent = 'Город проживания'
                city.classList.remove('card__unfilled')
            }
        }
        // Желаемая должность 
        if (element.name === 'job') {
            const jobContent = element.value
            if (jobContent.trim() != '') {
                jobTitle.textContent = jobContent
                jobText.textContent = 'Желаемая должность'
                job.classList.remove('card__unfilled')
            }
        }
        // Желаемая зарплата
        if (element.name === 'difference-from') {
            const differenceFrom = element.value
            currencyNum = `${differenceFrom}`
        }
        if (element.name === 'difference-to') {
            const differenceTo = element.value
            if (differenceTo != '') {
                if (currencyNum == '') {
                    currencyNum = `${differenceTo}`
                } else {
                    currencyNum = `${currencyNum} - ${differenceTo}`
                }
            }
        }
        // Последнее место работы
        if (element.name === 'oldjob') {
            const oldjobContent = element.value
            if (oldjobContent.trim() != '') {
                oldjobTitle.textContent = oldjobContent
                oldjobText.textContent = 'Последнее место работы'
                oldjob.classList.remove('card__unfilled')
            }
        }
    }
    // Желаемая зарплата (валюта)
    if (currencyNum.trim() != '') {
        const currency = document.querySelector('.currency')
        const currencySelect = currency.querySelector('.currency__select')
        const differenceCurrency = currencySelect.textContent
        currencyNum = `${currencyNum} ${differenceCurrency}`
        cardHeadSalary.textContent = currencyNum
        cardHeadSalary.classList.remove('text-gray')
    }
    editClose()
})