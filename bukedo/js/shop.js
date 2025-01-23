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

const categoriesItemArr = document.querySelectorAll('.categories__item')
for (let i = 0; i < categoriesItemArr.length; i++) {
    const element = categoriesItemArr[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < categoriesItemArr.length; i++) {
            const el = categoriesItemArr[i];
            el.classList.remove('categories__item-active')
        }
        element.classList.add('categories__item-active')
    })
}