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

const sendButtons = document.querySelectorAll('.send')
const questions = document.querySelectorAll('.question')
const modal = document.querySelector('.modal')
for (let i = 0; i < sendButtons.length; i++) {
    const sendButton = sendButtons[i];
    sendButton.addEventListener('click', function(event){
        event.preventDefault()
        const fr = sendButton.parentElement.querySelectorAll('.form__radio')
        const datasetText = sendButton.dataset.btn
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
            if (datasetText === 'last') {
                modal.classList.add('modal-active')
            } else {
                for (let i = 0; i < questions.length; i++) {
                    const question = questions[i];
                    question.classList.remove('question-active')
                    if (question.dataset.view === datasetText) {
                        question.classList.add('question-active')
                    }
                }
            }
        } 
        
    })
}

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