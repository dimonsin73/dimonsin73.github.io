// Раскрытие реквизитов 
const detailsHeader = document.querySelector('.details__header')
const detailsContent = document.querySelector('.details__content')
detailsHeader.addEventListener('click', function(){
    detailsHeader.classList.toggle('details__header-active')
    detailsContent.classList.toggle('details__content-active')
    if (detailsContent.classList.contains('details__content-active')) {
        detailsContent.style.height = `${detailsContent.scrollHeight}px`
    } else {
        detailsContent.style.height = 0
    }
})