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
const kabinetTabArray = document.querySelectorAll('.kabinet__tab')
const kabinetContainerArray = document.querySelectorAll('.kabinet__container')
for (let i = 0; i < kabinetTabArray.length; i++) {
    const kabinetTab = kabinetTabArray[i];
    kabinetTab.addEventListener('click', function(){
        for (let i = 0; i < kabinetTabArray.length; i++) {
            const kt = kabinetTabArray[i];
            kt.classList.remove('kabinet__tab-active')
        }
        kabinetTab.classList.add('kabinet__tab-active')
        const dataKabinet = kabinetTab.dataset.kabinet
        for (let i = 0; i < kabinetContainerArray.length; i++) {
            const kabinetContainer = kabinetContainerArray[i];
            if (kabinetContainer.dataset.kabinet === dataKabinet) {
                kabinetContainer.classList.add('kabinet__container-active')
            } else {
                kabinetContainer.classList.remove('kabinet__container-active')
            }
        }
    })
}
const headerArray = document.querySelectorAll('.header')
const headerClickArray = document.querySelectorAll('.header__click')
for (let i = 0; i < headerClickArray.length; i++) {
    const headerClick = headerClickArray[i];
    headerClick.addEventListener('click', function(){
        const dataClick = headerClick.dataset.click
        for (let i = 0; i < headerArray.length; i++) {
            const header = headerArray[i];
            if (header.classList.contains(dataClick)) {
                header.style.display = 'flex'
            } else {
                header.style.display = 'none'
            }
        }
    })
}

const kabinetCopyArray = document.querySelectorAll('.kabinet__copy')
for (let i = 0; i < kabinetCopyArray.length; i++) {
    const kabinetCopy = kabinetCopyArray[i];
    kabinetCopy.addEventListener('click', function(){
        const textCopy = kabinetCopy.parentElement.querySelector('.kabinet__label-input').value
        navigator.clipboard.writeText(textCopy)
    })
}
const kabinetEditArray = document.querySelectorAll('.kabinet__edit')
for (let i = 0; i < kabinetEditArray.length; i++) {
    const kabinetEdit = kabinetEditArray[i];
    kabinetEdit.addEventListener('click', function(){
        const input = kabinetEdit.parentElement.querySelector('.kabinet__label-input')
        const btns = kabinetEdit.parentElement.querySelector('.kabinet__label-btns')
        const kabinetOk = btns.querySelector('.kabinet__ok')
        const kabinetClose = btns.querySelector('.kabinet__close')
        const kabinetCopy = kabinetEdit.parentElement.querySelector('.kabinet__copy')
        const inputValueStart = input.value
        input.disabled = false
        input.focus()
        btns.style.display = 'flex'
        kabinetEdit.style.display = 'none'
        if (kabinetCopy != null) {
            kabinetCopy.style.display = 'none'
        }
        kabinetOk.addEventListener('click', function(){
            input.disabled = true
            btns.style.display = 'none'
            kabinetEdit.style.display = 'flex'
            if (kabinetCopy != null) {
                kabinetCopy.style.display = 'flex'
            }
        })
        kabinetClose.addEventListener('click', function(){
            input.value = inputValueStart
            input.disabled = true
            btns.style.display = 'none'
            kabinetEdit.style.display = 'flex'
            if (kabinetCopy != null) {
                kabinetCopy.style.display = 'flex'
            }
        })
    })
}

const kabinetLogoImg = document.querySelector('.kabinet__logo-img')
const logotip = document.querySelector('.logotip')
kabinetLogoImg.addEventListener('click', function(){
    logotip.classList.add('logotip_active')
    const logotipClose = logotip.querySelector('.logotip__close')
    logotipClose.addEventListener('click', function(){
        logotip.classList.remove('logotip_active')
    })
})
const kabinetDeleteImg = document.querySelector('.kabinet__delete-img')
kabinetDeleteImg.addEventListener('click', function(){
    const bigImg = kabinetDeleteImg.parentElement.querySelector('.kabinet__logo-img')
    const miniImg = kabinetDeleteImg.parentElement.parentElement.querySelector('.kabinet__logo-miniimg')
    bigImg.remove()
    miniImg.remove()
})
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

const form = document.querySelector('.edit__form')
// Поля ввода
const password = document.getElementById('password')
const passwordSecond = document.getElementById('password-repeat')
const passwordLabel = password.parentElement
const passwordSecondLabel = passwordSecond.parentElement


// Проверка надёжности пароля
password.addEventListener('input', function(){
    const labelLine = password.nextSibling
    const labelLineItemArr = labelLine.children
    attributLineAddColor(password, labelLineItemArr)
    passwordComparison()
})
passwordSecond.addEventListener('input', function(){
    const labelLine = passwordSecond.nextSibling
    const labelLineItemArr = labelLine.children
    attributLineAddColor(passwordSecond, labelLineItemArr)
    passwordComparison()
})
// Ф-ия очистки цветов
function attributLineRemoveColor(element) {
    element.classList.remove('label__line-orange')
    element.classList.remove('label__line-success')
    element.classList.remove('label__line-error')
}
// Ф-ция окрашивания 
function attributLineAddColor(password, labelLineItemArr) {
    if (password.value.length < 16) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-success')
        }
    }
    if (password.value.length < 14) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 3; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-success')
        }
    }
    if (password.value.length < 12) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 2; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-orange')
        }
    }
    if (password.value.length < 8) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
        for (let i = 0; i < 1; i++) {
            const element = labelLineItemArr[i];
            element.classList.add('label__line-error')
        }
    }
    if (password.value.length === 0) {
        for (let i = 0; i < labelLineItemArr.length; i++) {
            const element = labelLineItemArr[i];
            attributLineRemoveColor(element)
        }
    }
}
// Ф-ция проверки совпадения паролей
function passwordComparison() {
    
    if (passwordSecond.value.length === 0) {
        passwordSecondLabel.classList.remove('label_error')
    } else {
        if (passwordSecond.value != password.value) {
            passwordSecondLabel.classList.add('label_error')
            const labelLine = passwordSecond.nextSibling
            const labelLineItemArr = labelLine.children
            for (let i = 0; i < labelLineItemArr.length; i++) {
                const element = labelLineItemArr[i];
                attributLineRemoveColor(element)
            }
            for (let i = 0; i < 2; i++) {
                const element = labelLineItemArr[i];
                element.classList.add('label__line-error')
            }
        } else {
            passwordSecondLabel.classList.remove('label_error')
        }
    }
}
// Открытие/скрытие пароля
const labelEyeArray = document.querySelectorAll('.label__eye')
for (let i = 0; i < labelEyeArray.length; i++) {
    const labelEye = labelEyeArray[i];
    labelEye.addEventListener('click', function(){
        labelEye.classList.toggle('label__eye-active')
        const password = labelEye.parentElement.querySelector('.input')
        if (labelEye.classList.contains('label__eye-active')) {
            password.setAttribute('type', 'text')
        } else {
            password.setAttribute('type', 'password')
        }
    })
}
const edit = document.querySelector('.edit')
const editBtnArray = document.querySelectorAll('.edit-btn')
const editFormArray = document.querySelectorAll('.edit__form')
const editCloseArray = document.querySelectorAll('.edit__close')
for (let i = 0; i < editBtnArray.length; i++) {
    const editBtn = editBtnArray[i];
    editBtn.addEventListener('click', function(){
        const editData = editBtn.dataset.edit
        edit.classList.add('edit_active')
        for (let i = 0; i < editFormArray.length; i++) {
            const editForm = editFormArray[i];
            if (editForm.dataset.edit === editData) {
                editForm.classList.add('edit__form-active')
            } else {
                editForm.classList.remove('edit__form-active')
            }
        }
    })
}
for (let i = 0; i < editCloseArray.length; i++) {
    const editClose = editCloseArray[i];
    editClose.addEventListener('click', function(){
        edit.classList.remove('edit_active')
        for (let i = 0; i < editFormArray.length; i++) {
            const editForm = editFormArray[i];
            editForm.classList.remove('edit__form-active')
        }
    })
}
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