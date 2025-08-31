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
const kabinetDeleteTextarea = document.querySelector('.kabinet__delete-textarea')
kabinetDeleteTextarea.addEventListener('click', function(){
    const textarea = kabinetDeleteTextarea.parentElement.querySelector('.kabinet__textarea')
    textarea.value = ''
})