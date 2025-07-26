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
                const modalName = modalWrapper.querySelector('.modal__name')
                const modalClose = modalWrapper.querySelector('.modal__close')
                modalName.textContent = name
                switch (modalWrapper.dataset.modal) {
                    case 'avatar':
                        const modalAvatar = modal.querySelector('.modal__avatar')
                        const imgSrc = btnModalOpen.getAttribute('src')
                        const modalAvatarImg = document.createElement('img')
                        modalAvatarImg.classList.add('modal__avatar-img')
                        modalAvatarImg.setAttribute('src', imgSrc)
                        modalAvatarImg.setAttribute('alt', 'avatar')
                        modalAvatar.append(modalAvatarImg)
                        break;
                    case 'resume':
                    default:
                        break;
                }
                modalClose.addEventListener('click', function(){
                    modal.classList.remove('modal_active')
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
//  Разворачивание/сворачивание/заполнение полей поиска сотрудника
const sectionBurger = document.querySelector('.section__burger')
const jobDescription = document.getElementById('job-description')
const jobTitle = document.getElementById('job-title')
const sectionViewText = document.querySelector('.section__view-text')
const sectionCollapse = document.querySelector('.section__collapse')
sectionBurger.addEventListener('click', function(){
    sectionCollapse.classList.toggle('section__collapse-collapse')
    if (jobDescription.value != '') {
        sectionViewText.textContent = jobDescription.value
    } else {
        sectionViewText.textContent = jobTitle.value
    }
})

const modalItemImgArray = document.querySelectorAll('.modal__item-img')
const modalSlider = document.querySelector('.modal-slider')
const modalSliderClose = document.querySelector('.modal-slider__close')
for (let i = 0; i < modalItemImgArray.length; i++) {
    const modalItemImg = modalItemImgArray[i];
    modalItemImg.addEventListener('click', function(){
        modalSlider.classList.add('modal-slider-active')
    })
    modalSliderClose.addEventListener('click', function(){
        modalSlider.classList.remove('modal-slider-active')
    })
}

const btnLikeArray = document.querySelectorAll('.btn_like')
for (let i = 0; i < btnLikeArray.length; i++) {
    const btnLike = btnLikeArray[i];
    btnLike.addEventListener('click', function(){
        btnLike.classList.toggle('btn_like-active')
    })
}