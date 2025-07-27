const btnTranscription = document.querySelector('.btn-transcription')
const btnStructuring = document.querySelector('.btn-structuring')
const subvideoContentArray = document.querySelectorAll('.subvideo__content')
const sectionBtnsWidth = document.querySelector('.section__btns-width')
const btnSubvideo = document.querySelector('.btn-subvideo')
const main = document.querySelector('.main')
const sectionMain = document.querySelector('.section__main')
const subvideo = document.querySelector('.subvideo')


btnSubvideo.addEventListener('click', function(){
    btnSubvideo.classList.remove('btn-subvideo-active')
    sectionBtnsWidth.classList.remove('section__btns-width-active')
    subvideo.classList.remove('subvideo_active')
    sectionMain.classList.remove('section__main-active')
    main.classList.remove('main_active')
    aside.classList.remove('aside_off')
    btnTranscription.classList.remove('btn_white-active')
    btnTranscription.classList.add('btn-icon48')
    btnStructuring.classList.remove('btn_white-active')
    btnStructuring.classList.add('btn-icon48')
})

btnTranscription.addEventListener('click', function(){
    openSubVideo ()
    btnTranscription.classList.add('btn_white-active')
    btnTranscription.classList.remove('btn-icon48')
    btnStructuring.classList.remove('btn_white-active')
    btnStructuring.classList.add('btn-icon48')
    openSubvideoConten('transcription')
})
btnStructuring.addEventListener('click', function(){
    openSubVideo ()
    btnStructuring.classList.add('btn_white-active')
    btnStructuring.classList.remove('btn-icon48')
    btnTranscription.classList.remove('btn_white-active')
    btnTranscription.classList.add('btn-icon48')
    openSubvideoConten('structuring')
})
function openSubVideo () {
    btnSubvideo.classList.add('btn-subvideo-active')
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