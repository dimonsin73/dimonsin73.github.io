const formRadioArr = document.querySelectorAll('.form__radio')
for (let i = 0; i < formRadioArr.length; i++) {
    const formRadio = formRadioArr[i];
    if (formRadio.checked == true) {
        formRadio.parentElement.classList.add('form__label-active')
    } else {
        formRadio.parentElement.classList.remove('form__label-active')
    }
    formRadio.addEventListener('click', function(){
        for (let i = 0; i < formRadioArr.length; i++) {
            const element = formRadioArr[i];
            if (element.checked == true) {
                element .parentElement.classList.add('form__label-active')
            } else {
                element.parentElement.classList.remove('form__label-active')
            }
        }
    })
}

const nextButtons = document.querySelectorAll('.next')
const questions = document.querySelectorAll('.question')
const modal = document.querySelector('.modal')
for (let i = 0; i < nextButtons.length; i++) {
    const nextButton = nextButtons[i];
    nextButton.addEventListener('click', function(){
        const fr = nextButton.parentElement.querySelectorAll('.form__radio')
        const datasetText = nextButton.dataset.btn
        let fre = 0
        for (let i = 0; i < fr.length; i++) {
            const element = fr[i];
            if (element.checked == true ) {
                fre ++
            }
        }
        if (datasetText === 'question-1') {
            fre ++
        }
        if (fre === 1) {
            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                question.classList.remove('question-active')
                if (question.dataset.view === datasetText) {
                    question.classList.add('question-active')
                }
            }
        } 
        
    })
}
const send = document.querySelector('.send')
send.addEventListener('click', function(){
    modal.classList.add('modal-active')
})
const modalBtn = document.querySelector('.modal__btn')
const view = document.querySelector('.view')
modalBtn.addEventListener('click', function(){
    modal.classList.remove('modal-active')
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        question.classList.remove('question-active')
    }
    view.classList.add('question-active')
})