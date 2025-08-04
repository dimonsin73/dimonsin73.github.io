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
        }
    });
});

const registraciyaFormArray = document.querySelectorAll('.registraciya__form')
const registraciyaRadios = document.querySelector('.registraciya__radios')
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
                registraciyaNext ()
                for (let i = 0; i < registraciyaFormArray.length; i++) {
                    const registraciyaForm = registraciyaFormArray[i];
                    if (registraciyaForm.dataset.registraciya == 'sms') {
                        registraciyaForm.classList.add('registraciya__form-active')
                    } else {
                        registraciyaForm.classList.remove('registraciya__form-active')
                    }
                }
            }
        } else {
            registraciyaNext ()
            for (let i = 0; i < registraciyaFormArray.length; i++) {
                const registraciyaForm = registraciyaFormArray[i];
                if (registraciyaForm.dataset.registraciya == 'mail') {
                    registraciyaForm.classList.add('registraciya__form-active')
                } else {
                    registraciyaForm.classList.remove('registraciya__form-active')
                }
            }
        }
    })
}
function registraciyaNext () {
    searchJob.disabled = true
    searchEmployee.disabled = true
    registraciyaRadios.classList.add('registraciya__radios-blur')
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