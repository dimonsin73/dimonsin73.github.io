const faqTopArray = document.querySelectorAll('.faq__top')
for (let i = 0; i < faqTopArray.length; i++) {
    const faqTop = faqTopArray[i];
    faqTop.addEventListener('click', function(){
        const faqContainer = faqTop.parentElement.querySelector('.faq__container')

        if (faqTop.classList.contains('faq__top--active')) {
            faqTop.classList.remove('faq__top--active')
            faqContainer.style.height = `0px`;
        } else {
            for (let i = 0; i < faqTopArray.length; i++) {
                const elFT = faqTopArray[i];
                const elFC = elFT.parentElement.querySelector('.faq__container')
                elFT.classList.remove('faq__top--active')
                elFC.style.height = `0px`;
            }
            faqTop.classList.add('faq__top--active')
            faqContainer.style.height = `${faqContainer.scrollHeight}px`;
        }

    })
}