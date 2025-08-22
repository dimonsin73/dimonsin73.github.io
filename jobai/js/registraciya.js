const registeredUsers = [
    {
        id: 1,
        tel: '+79992222222',
        mail: '',
    }, {
        id: 2,
        tel: '',
        mail: 'admin@gmail.com',
    }
]
// Работа ASIDE
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
// Переключение кнопок 
const registraciyaBtnArray = document.querySelectorAll('.registraciya__btn')
const registraciyaShowArray = document.querySelectorAll('.registraciya__show')
for (let i = 0; i < registraciyaBtnArray.length; i++) {
    const registraciyaBtn = registraciyaBtnArray[i];
    registraciyaBtn.addEventListener('click', function(){
        for (let i = 0; i < registraciyaBtnArray.length; i++) {
            const element = registraciyaBtnArray[i];
            element.classList.remove('registraciya__btn-active')
        }
        registraciyaBtn.classList.add('registraciya__btn-active')
        const dataRegistraciya = registraciyaBtn.dataset.registraciya
        for (let i = 0; i < registraciyaShowArray.length; i++) {
            const registraciyaShow = registraciyaShowArray[i];
            if (registraciyaShow.dataset.registraciya === dataRegistraciya) {
                registraciyaShow.classList.add('registraciya__show-active')
            } else {
                const registraciyaInput = registraciyaShow.querySelector('.label__input')
                registraciyaInput.value = ''
                registraciyaShow.classList.remove('label-active')
                registraciyaShow.classList.remove('registraciya__show-active')
            }
        }
    })
}
// Переключение роли
const searchJob = document.getElementById('search-job')
const searchEmployee = document.getElementById('search-employee')
const registraciyaJobArray = document.querySelectorAll('.registraciya__job')
const registraciyaEmployeeArray = document.querySelectorAll('.registraciya__employee')
document.querySelectorAll('input[type="radio"][name="registraciya"]').forEach((button) => {
    button.addEventListener('change', function() {
        if (searchJob.checked) {
            for (let i = 0; i < registraciyaJobArray.length; i++) {
                const registraciyaJob = registraciyaJobArray[i];
                registraciyaJob.classList.add('registraciya__job-active')
            }
            for (let i = 0; i < registraciyaEmployeeArray.length; i++) {
                const registraciyaEmployee = registraciyaEmployeeArray[i];
                registraciyaEmployee.classList.remove('registraciya__employee-active')
            }
            for (let i = 0; i < registraciyaBtnArray.length; i++) {
                const registraciyaBtn = registraciyaBtnArray[i];
                if (registraciyaBtn.dataset.registraciya === 'tel') {
                    registraciyaBtn.classList.add('registraciya__btn-active')
                } else {
                    registraciyaBtn.classList.remove('registraciya__btn-active')
                }
            }
            for (let i = 0; i < registraciyaBtnArray.length; i++) {
                const registraciyaShow = registraciyaShowArray[i];
                if (registraciyaShow.dataset.registraciya === 'tel') {
                    registraciyaShow.classList.add('registraciya__show-active')
                } else {
                    registraciyaShow.classList.remove('registraciya__show-active')
                }
            }
        }
        if (searchEmployee.checked) {
            for (let i = 0; i < registraciyaJobArray.length; i++) {
                const registraciyaJob = registraciyaJobArray[i];
                registraciyaJob.classList.remove('registraciya__job-active')
            }
            for (let i = 0; i < registraciyaEmployeeArray.length; i++) {
                const registraciyaEmployee = registraciyaEmployeeArray[i];
                registraciyaEmployee.classList.add('registraciya__employee-active')
            }
            for (let i = 0; i < registraciyaBtnArray.length; i++) {
                const registraciyaShow = registraciyaShowArray[i];
                if (registraciyaShow.dataset.registraciya === 'mail') {
                    registraciyaShow.classList.add('registraciya__show-active')
                } else {
                    registraciyaShow.classList.remove('registraciya__show-active')
                }
            }
        }
    });
});
// Регистрация 
const registraciyaTitle = document.querySelector('.registraciya__title')
const registraciyaFormArray = document.querySelectorAll('.registraciya__form')
const registraciyaRadios = document.querySelector('.registraciya__radios')
const timerArray = document.querySelectorAll('.timer')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
for (let i = 0; i < registraciyaFormArray.length; i++) {
    const registraciyaForm = registraciyaFormArray[i];
    registraciyaForm.addEventListener('submit', function(e){
        e.preventDefault()
        if (email.value === '' ) {
            if (tel.value === '') {
                const emailLabel = email.parentElement
                emailLabel.classList.add('label_error')
                const telLabel = tel.parentElement
                telLabel.classList.add('label_error')
            } else {
                for (let i = 0; i < registeredUsers.length; i++) {
                    const registeredUser = registeredUsers[i];
                    if (tel.value === registeredUser.tel) {
                        inauthorization()
                    } 
                }
                const dataRegistraciya = 'sms'
                registraciyaNext (dataRegistraciya)
                
            }
        } else {
            for (let i = 0; i < registeredUsers.length; i++) {
                const registeredUser = registeredUsers[i];
                if (email.value === registeredUser.mail) {
                    inauthorization()
                } 
            }
            const dataRegistraciya = 'mail'
            registraciyaNext (dataRegistraciya)
        }
    })
}
function registraciyaNext (dataRegistraciya) {
    searchJob.disabled = true
    searchEmployee.disabled = true
    registraciyaTitle.classList.add('registraciya__title-blur')
    registraciyaRadios.classList.add('registraciya__radios-blur')
    for (let i = 0; i < registraciyaFormArray.length; i++) {
        const registraciyaForm = registraciyaFormArray[i];
        if (registraciyaForm.dataset.registraciya === dataRegistraciya) {
            registraciyaForm.classList.add('registraciya__form-active')
            const timer = registraciyaForm.querySelector('.timer')
            registraciyaTimer(timer)
        } else {
            registraciyaForm.classList.remove('registraciya__form-active')
        }
    }
}
function inauthorization() {
    if (searchJob.checked) {
        window.location.href = 'k_goauthorization.html'
    }
    if (searchEmployee.checked) {
        window.location.href = 'r_goauthorization.html'
    }
    
}
email.addEventListener('input', function(){
    const emailLabel = email.parentElement
    emailLabel.classList.remove('label_error')
    const telLabel = tel.parentElement
    telLabel.classList.remove('label_error')
})
tel.addEventListener('input', function(){
    const emailLabel = email.parentElement
    emailLabel.classList.remove('label_error')
    const telLabel = tel.parentElement
    telLabel.classList.remove('label_error')
})

function registraciyaTimer(timer) {
    const minutes = timer.querySelector('.timer__minutes')
    const seconds = timer.querySelector('.timer__seconds')
    let minutesValue =  Number(minutes.textContent)
    let secondsValue = Number(seconds.textContent)
    setInterval(function() {
        if (secondsValue > 0) {
            secondsValue--
        } else {
            if (minutesValue - 1 >= 0) {
                minutesValue--
                secondsValue = 60 - 1
            } else {
                clearInterval
            }
        }
        if (secondsValue < 10) {
            seconds.textContent = `0${secondsValue}`
        } else {
            seconds.textContent = secondsValue
        }
        if (minutesValue < 10) {
            minutes.textContent = `0${minutesValue}`
        } else {
            minutes.textContent = minutesValue
        }
    }, 1000)
}