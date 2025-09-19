const btnModalopenArray = document.querySelectorAll('.btn-modalopen')
const modal = document.querySelector('.modal')
for (let i = 0; i < btnModalopenArray.length; i++) {
    const btnModalOpen = btnModalopenArray[i];
    btnModalOpen.addEventListener('click', function(){
        const dataModalopen = btnModalOpen.dataset.modalopen
        modal.classList.add('modal_active')
        const modalWrapperArray = modal.querySelectorAll('.modal__wrapper')
        const name = btnModalOpen.parentElement.parentElement.querySelector('.portfolio__title').textContent
        for (let i = 0; i < modalWrapperArray.length; i++) {
            const modalWrapper = modalWrapperArray[i];
            if (modalWrapper.dataset.modal === dataModalopen) {
                modalWrapper.classList.add('modal__wrapper-active')
                const modalClose = modalWrapper.querySelector('.modal__close')
                switch (modalWrapper.dataset.modal) {
                    case 'avatar':
                    const modalName = modalWrapper.querySelector('.modal__name')
                    modalName.textContent = name
                        const img = btnModalOpen.querySelector('.portfolio__avatar-img')
                        if (img != null) {
                            const imgSrc = img.getAttribute('src')
                            const modalAvatar = modal.querySelector('.modal__avatar')
                            const modalAvatarImg = document.createElement('img')
                            modalAvatarImg.classList.add('modal__avatar-img')
                            modalAvatarImg.setAttribute('src', imgSrc)
                            modalAvatar.append(modalAvatarImg)
                        }
                        break;
                    default:
                        break;
                }
                modalClose.addEventListener('click', function(){
                    modal.classList.remove('modal_active')
                    const modalAvatarImg = modal.querySelector('.modal__avatar-img')
                    if (modalAvatarImg != null) {
                        modalAvatarImg.remove()
                    }
                    
                })
            } else {
                modalWrapper.classList.remove('modal__wrapper-active')
            }
        }
    })
}
// Скрытие кнопок слайдера
const itcSliderArray = document.querySelectorAll('.itc-slider')
for (let i = 0; i < itcSliderArray.length; i++) {
    const itcSlider = itcSliderArray[i];
    const itcSliderItemArray = itcSlider.querySelectorAll('.itc-slider-item')
    const itcSliderItemActiveArray = itcSlider.querySelectorAll('.itc-slider-item-active')
    const itcSliderBtnArray = itcSlider.querySelectorAll('.itc-slider-btn')
    if (itcSliderItemArray.length === itcSliderItemActiveArray.length) {
        for (let i = 0; i < itcSliderBtnArray.length; i++) {
            const itcSliderBtn = itcSliderBtnArray[i];
            itcSliderBtn.classList.add('itc-slider-btn-hide')
        }
    }
}

const modalItemImgArray = document.querySelectorAll('.modal__item-img')
const modalSlider = document.querySelector('.modal-slider')
const modalSliderClose = document.querySelector('.modal-slider__close')
for (let i = 0; i < modalItemImgArray.length; i++) {
    const modalItemImg = modalItemImgArray[i];
    modalItemImg.addEventListener('click', function(){
        modalSlider.classList.add('modal-slider-active')
        let sliderElem = document.querySelector('#modal-slider');
        let slider = ItcSlider.getOrCreateInstance(sliderElem);
        slider.slideTo(i)
        console.log(i)
        modalSliderClose.addEventListener('click', function(){
            modalSlider.classList.remove('modal-slider-active')
            slider.dispose()
        })
    })
    
}

const btnLikeArray = document.querySelectorAll('.btn_like')
for (let i = 0; i < btnLikeArray.length; i++) {
    const btnLike = btnLikeArray[i];
    btnLike.addEventListener('click', function(){
        btnLike.classList.toggle('btn_like-active')
    })
}
const portfolioStitleCopyArray = document.querySelectorAll('.portfolio__stitle-copy')
for (let i = 0; i < portfolioStitleCopyArray.length; i++) {
    const portfolioStitleCopy = portfolioStitleCopyArray[i];
    portfolioStitleCopy.addEventListener('click', function(){
        const textCopy = portfolioStitleCopy.parentElement.textContent
        navigator.clipboard.writeText(textCopy)
    })
}
const portfolioFitsAiArray = document.querySelectorAll('.portfolio__fits-ai')
for (let i = 0; i < portfolioFitsAiArray.length; i++) {
    const portfolioFitsAi = portfolioFitsAiArray[i];
    portfolioFitsAi.addEventListener('click', function(){
        const loader = portfolioFitsAi.parentElement.querySelector('.portfolio__loader')
        const portfolioSuccess = portfolioFitsAi.parentElement.querySelector('.portfolio__fits-success')
        portfolioFitsAi.classList.add('portfolio__fits-disabled')
        loader.classList.add('portfolio__loader-loading')

        function success() {
            portfolioFitsAi.style.display = 'none'
            loader.classList.remove('portfolio__loader-loading')
            loader.classList.add('portfolio__loader-success')
            portfolioSuccess.style.display = 'flex'
        }
        setTimeout(success, 5000)
    })
}
const portfolioPositionArray = document.querySelectorAll('.portfolio__position')
const sectionToleftBtn = document.querySelector('.section_toleft-btn')
for (let i = 0; i < portfolioPositionArray.length; i++) {
    const portfolioPosition = portfolioPositionArray[i];
    portfolioPosition.addEventListener('click', function(){
        const windowScreen = screen.width
        const portfolio = portfolioPosition.parentElement.parentElement
        const portfolioHeight = portfolio.scrollHeight
        let yOffset
        if (windowScreen > 899) {
            yOffset = portfolioHeight - 360;
        } else {
            yOffset = portfolioHeight - 291;
        }
        const y = portfolio.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y })
    })
}
sectionToleftBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
})