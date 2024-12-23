
for (let i = 0; i < cardContentArr.length; i++) {
    const element = cardContentArr[i];
    const sliderItems = element.querySelector('.itc-slider-items')
    const sliderBtnNext = element.querySelector('.itc-slider-btn-next')
    if (sliderItems.scrollWidth < element.scrollWidth) {
        sliderBtnNext.classList.add('itc-slider-btn-hide')
    }
}