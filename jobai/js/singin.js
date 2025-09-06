const formArray = document.querySelectorAll('.form')
const roleRabotodatel = document.getElementById('role-rabotodatel')
const roleKandidat = document.getElementById('role-kandidat')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
for (let i = 0; i < formArray.length; i++) {
    const form = formArray[i];
    form.addEventListener('submit', function(e){
        e.preventDefault()
        if (form.dataset.form === 'basic') {
            if (email.value != '') {
                for (let i = 0; i < formArray.length; i++) {
                    const formEmail = formArray[i];
                    if (formEmail.dataset.form === 'email') {
                        formEmail.classList.add('form_active')
                        const timer = formEmail.querySelector('.timer')
                        timerFun(timer)
                    } else {
                        formEmail.classList.remove('form_active')
                    }
                }
            } else {
                if (phone.value != '') {
                    for (let i = 0; i < formArray.length; i++) {
                        const formPhone = formArray[i];
                        if (formPhone.dataset.form === 'phone') {
                            formPhone.classList.add('form_active')
                            const timer = formPhone.querySelector('.timer')
                            timerFun(timer)
                        } else {
                            formPhone.classList.remove('form_active')
                        }
                    }
                }
            }
        }
    })
}
const formCancelArray = document.querySelectorAll('.form__cancel')
for (let i = 0; i < formCancelArray.length; i++) {
    const formCancel = formCancelArray[i];
    formCancel.addEventListener('click', function(){
        for (let i = 0; i < formArray.length; i++) {
            const form = formArray[i];
            if (form.dataset.form === 'basic') {
                form.classList.add('form_active')
            } else {
                form.classList.remove('form_active')
            }
        }
    })
}

function timerFun(timer) {
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

// Работа меню выбора языка 
const language = document.querySelector('.language')
const languageView = document.querySelector('.language__view')
const languageDropdawn = document.querySelector('.language__dropdawn')
const languageDropdawnOptionArray = document.querySelectorAll('.language__dropdawn-option')
languageView.addEventListener('click', function(){
    languageDropdawn.classList.toggle('language__dropdawn-active')
    for (let i = 0; i < languageDropdawnOptionArray.length; i++) {
        const languageDropdawnOption = languageDropdawnOptionArray[i];
        languageDropdawnOption.addEventListener('click', function(){
            const style = getComputedStyle(languageDropdawnOption)
            const bgImage= style['background-image']
            languageView.style.backgroundImage = bgImage
            languageDropdawn.classList.remove('language__dropdawn-active')
        })
    }
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(language);
        if ( ! withinBoundaries ) {
            languageDropdawn.classList.remove('language__dropdawn-active')
        }
    }) //Закрытие меню выбора языка по щелчку вне меню
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            languageDropdawn.classList.remove('language__dropdawn-active')
        }
    }) //Закрытие меню выбора языка по нажатию на ESC
})
const arrowMenu = document.querySelector('.arrow-menu')
const aarrowLogiin = document.querySelector('.arrow-login')
window.addEventListener('scroll', function () {
    let windowHeight = window.scrollY
    if (windowHeight > '300') {
        arrowMenu.style.display = 'none'
        aarrowLogiin.style.display = 'block'
    } else {
        arrowMenu.style.display = 'block'
        aarrowLogiin.style.display = 'none'
    }
})


