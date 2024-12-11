// Ф-ия выделения tag
const tagBtnArr = document.querySelectorAll('.tag__btn')
for (let i = 0; i < tagBtnArr.length; i++) {
    const element = tagBtnArr[i];
    element.addEventListener('click', function(){
        element.classList.toggle('tag__btn-active')
    })
}
// Ф-ия выпадающего меню
const attributSelectArr = document.querySelectorAll('.attribut__select')
for (let i = 0; i < attributSelectArr.length; i++) {
    const element = attributSelectArr[i];
    element.addEventListener('click', function(){
        const attributOptions = element.parentElement.querySelector('.attribut__options')
        attributOptions.classList.toggle('attribut__options-active')
        if (attributOptions.classList.contains('attribut__options-active')) {
            const attributOptionsArr = document.querySelectorAll('.attribut__options')
            for (let i = 0; i < attributOptionsArr.length; i++) {
                const element = attributOptionsArr[i];
                element.style.height = `0px`
                element.classList.remove('attribut__options-active')
            }
            attributOptions.style.height = `${attributOptions.scrollHeight}px`
            attributOptions.classList.add('attribut__options-active')
        } else {
            attributOptions.style.height = `0px`
        }
        const attributOptionArr = element.parentElement.querySelectorAll('.attribut__option')
        for (let i = 0; i < attributOptionArr.length; i++) {
            const el = attributOptionArr[i];
            el.addEventListener('click', function(){
                element.value = `${el.textContent}`
                attributOptions.style.height = `0px`
                attributOptions.classList.remove('attribut__options-active')
            })
        }
    })
}
// Ф-ия выпадающего меню для валют
const currencySelectArr = document.querySelectorAll('.currency__select')
for (let i = 0; i < currencySelectArr.length; i++) {
    const element = currencySelectArr[i];
    element.addEventListener('click', function(){
        const currencyOptions = element.parentElement.querySelector('.currency__options')
        currencyOptions.classList.toggle('currency__options-active')
        if (currencyOptions.classList.contains('currency__options-active')) {
            currencyOptions.style.height = `${currencyOptions.scrollHeight}px`
        } else {
            currencyOptions.style.height = `0px`
        }
        const currencyOptionArr = element.parentElement.querySelectorAll('.currency__option')
        for (let i = 0; i < currencyOptionArr.length; i++) {
            const el = currencyOptionArr[i];
            el.addEventListener('click', function(){
                element.textContent = `${el.textContent}`
                currencyOptions.style.height = `0px`
                currencyOptions.classList.remove('currency__options-active')
            })
        }
    })
}

// Табы
const tabs = document.querySelectorAll('.tabs__item')
const tabcontentItemArr = document.querySelectorAll('.tabcontent__item')

for (let i = 0; i < tabs.length; i++) {
    const element = tabs[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < tabs.length; i++) {
            const el = tabs[i];
            el.classList.remove('tabs__item-active')
        }
        element.classList.add('tabs__item-active')
        switch (element.dataset.tab) {
            case 'tab1':
                for (let i = 0; i < tabcontentItemArr.length; i++) {
                    const element = tabcontentItemArr[i];
                    if (element.dataset.content == 'tab1') {
                        element.classList.remove('tabcontent__item-hidden')
                    } else {
                        element.classList.add('tabcontent__item-hidden')
                    };
                };
                break;
            case 'tab2':
                for (let i = 0; i < tabcontentItemArr.length; i++) {
                    const element = tabcontentItemArr[i];
                    if (element.dataset.content == 'tab2') {
                        element.classList.remove('tabcontent__item-hidden')
                    } else {
                        element.classList.add('tabcontent__item-hidden')
                    };
                };
                break;
            case 'tab3':
                for (let i = 0; i < tabcontentItemArr.length; i++) {
                    const element = tabcontentItemArr[i];
                    if (element.dataset.content == 'tab3') {
                        element.classList.remove('tabcontent__item-hidden')
                    } else {
                        element.classList.add('tabcontent__item-hidden')
                    };
                };
                break;
            case 'tab4':
                for (let i = 0; i < tabcontentItemArr.length; i++) {
                    const element = tabcontentItemArr[i];
                    if (element.dataset.content == 'tab4') {
                        element.classList.remove('tabcontent__item-hidden')
                    } else {
                        element.classList.add('tabcontent__item-hidden')
                    };
                };
                break;
            default:
                break;
        }
    })
}