// Работа бокового меню Aside
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
const btnTranscriptionArray = document.querySelectorAll('.btn-transcription')
const btnStructuringArray = document.querySelectorAll('.btn-structuring')
const btnSubvideoArray = document.querySelectorAll('.btn-subvideo')

const subvideoContentArray = document.querySelectorAll('.subvideo__content')
const sectionBtnsWidth = document.querySelector('.section__btns-width')
const main = document.querySelector('.main')
const sectionMain = document.querySelector('.section__main')
const subvideo = document.querySelector('.subvideo')
const containerVideo = document.querySelector('.container_video')

for (let i = 0; i < btnSubvideoArray.length; i++) {
    const btnSubvideo = btnSubvideoArray[i];
    btnSubvideo.addEventListener('click', function(){
        containerVideo.classList.remove('container_video-active')
        btnSubvideo.classList.remove('btn-subvideo-active')
        sectionBtnsWidth.classList.remove('section__btns-width-active')
        subvideo.classList.remove('subvideo_active')
        sectionMain.classList.remove('section__main-active')
        main.classList.remove('main_active')
        aside.classList.remove('aside_off')
        for (let i = 0; i < btnTranscriptionArray.length; i++) {
            const btnTranscription = btnTranscriptionArray[i];
            btnTranscription.classList.remove('btn_white-active')
            btnTranscription.classList.add('btn-icon48')
        }
        for (let i = 0; i < btnStructuringArray.length; i++) {
            const btnStructuring = btnStructuringArray[i];
            btnStructuring.classList.remove('btn_white-active')
            btnStructuring.classList.add('btn-icon48')
        }
    })
}
for (let i = 0; i < btnTranscriptionArray.length; i++) {
    const btnTranscription = btnTranscriptionArray[i];
    btnTranscription.addEventListener('click', function(){
        openSubVideo ()
        for (let i = 0; i < btnTranscriptionArray.length; i++) {
            const btnTranscription = btnTranscriptionArray[i];
            btnTranscription.classList.add('btn_white-active')
            btnTranscription.classList.remove('btn-icon48')
        }
        for (let i = 0; i < btnStructuringArray.length; i++) {
            const btnStructuring = btnStructuringArray[i];
            btnStructuring.classList.remove('btn_white-active')
            btnStructuring.classList.add('btn-icon48')
        }
        openSubvideoConten('transcription')
    })
}

for (let i = 0; i < btnStructuringArray.length; i++) {
    const btnStructuring = btnStructuringArray[i];
    btnStructuring.addEventListener('click', function(){
        openSubVideo ()
        for (let i = 0; i < btnTranscriptionArray.length; i++) {
            const btnTranscription = btnTranscriptionArray[i];
            btnTranscription.classList.remove('btn_white-active')
            btnTranscription.classList.add('btn-icon48')
        } 
        for (let i = 0; i < btnStructuringArray.length; i++) {
            const btnStructuring = btnStructuringArray[i];
            btnStructuring.classList.add('btn_white-active')
            btnStructuring.classList.remove('btn-icon48')
        }
        openSubvideoConten('structuring')
    })
}

function openSubVideo () {
    containerVideo.classList.add('container_video-active')
    for (let i = 0; i < btnSubvideoArray.length; i++) {
        const btnSubvideo = btnSubvideoArray[i];
        btnSubvideo.classList.add('btn-subvideo-active')
    }
    sectionBtnsWidth.classList.add('section__btns-width-active')
    subvideo.classList.add('subvideo_active')
    sectionMain.classList.add('section__main-active')
    main.classList.add('main_active')
    aside.classList.add('aside_off')
}
function openSubvideoConten(data) {
    for (let i = 0; i < subvideoContentArray.length; i++) {
        const subvideoContent = subvideoContentArray[i];
        const dataSubvideo = subvideoContent.dataset.subvideo
        if (dataSubvideo === data) {
            subvideoContent.classList.add('subvideo__content-active')
        } else {
            subvideoContent.classList.remove('subvideo__content-active')
        }
    }
}