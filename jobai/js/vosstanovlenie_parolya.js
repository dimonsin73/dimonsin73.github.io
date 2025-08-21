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

const registraciyaFormArray = document.querySelectorAll('.registraciya__form')
const email = document.getElementById('email')
for (let i = 0; i < registraciyaFormArray.length; i++) {
    const registraciyaForm = registraciyaFormArray[i];
    registraciyaForm.addEventListener('submit', function(e){
        e.preventDefault()
        if (email.value === '' ) {
            const emailLabel = email.parentElement
            emailLabel.classList.add('label_error')
        } else {
            for (let i = 0; i < registraciyaFormArray.length; i++) {
                const rf = registraciyaFormArray[i];
                if (rf.dataset.avtorizaciya === 'reset_password') {
                    rf.classList.add('registraciya__form-active')
                } else {
                    rf.classList.remove('registraciya__form-active')
                }
            }
        }
    })
}
email.addEventListener('input', function(){
    const emailLabel = email.parentElement
    emailLabel.classList.remove('label_error')
})
