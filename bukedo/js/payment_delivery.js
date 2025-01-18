const deliveryContentHeadArr = document.querySelectorAll('.delivery__content-head')
for (let i = 0; i < deliveryContentHeadArr.length; i++) {
    const element = deliveryContentHeadArr[i];
    element.addEventListener('click', function(){
        const item = element.parentElement
        const deliveryContentContent = item.querySelector('.delivery__content-content')
        item.classList.toggle('delivery__content-item-active')
        if (item.classList.contains('delivery__content-item-active')) {
            deliveryContentContent.style.height = `${deliveryContentContent.scrollHeight}px`
        } else {
            deliveryContentContent.style.height = 0
        }
        
    })
}