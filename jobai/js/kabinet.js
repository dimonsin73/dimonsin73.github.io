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
const kabinetTabArray = document.querySelectorAll('.kabinet__tab')
const kabinetContainerArray = document.querySelectorAll('.kabinet__container')
for (let i = 0; i < kabinetTabArray.length; i++) {
    const kabinetTab = kabinetTabArray[i];
    kabinetTab.addEventListener('click', function(){
        for (let i = 0; i < kabinetTabArray.length; i++) {
            const kt = kabinetTabArray[i];
            kt.classList.remove('kabinet__tab-active')
        }
        kabinetTab.classList.add('kabinet__tab-active')
        const dataKabinet = kabinetTab.dataset.kabinet
        for (let i = 0; i < kabinetContainerArray.length; i++) {
            const kabinetContainer = kabinetContainerArray[i];
            if (kabinetContainer.dataset.kabinet === dataKabinet) {
                kabinetContainer.classList.add('kabinet__container-active')
            } else {
                kabinetContainer.classList.remove('kabinet__container-active')
            }
        }
    })
}
const headerArray = document.querySelectorAll('.header')
const headerClickArray = document.querySelectorAll('.header__click')
for (let i = 0; i < headerClickArray.length; i++) {
    const headerClick = headerClickArray[i];
    headerClick.addEventListener('click', function(){
        const dataClick = headerClick.dataset.click
        for (let i = 0; i < headerArray.length; i++) {
            const header = headerArray[i];
            if (header.classList.contains(dataClick)) {
                header.style.display = 'flex'
            } else {
                header.style.display = 'none'
            }
        }
    })
}

const kabinetCopyArray = document.querySelectorAll('.kabinet__copy')
for (let i = 0; i < kabinetCopyArray.length; i++) {
    const kabinetCopy = kabinetCopyArray[i];
    kabinetCopy.addEventListener('click', function(){
        const textCopy = kabinetCopy.parentElement.querySelector('.kabinet__label-input').value
        navigator.clipboard.writeText(textCopy)
    })
}
const kabinetEditArray = document.querySelectorAll('.kabinet__edit')
for (let i = 0; i < kabinetEditArray.length; i++) {
    const kabinetEdit = kabinetEditArray[i];
    kabinetEdit.addEventListener('click', function(){
        const input = kabinetEdit.parentElement.querySelector('.kabinet__label-input')
        const btns = kabinetEdit.parentElement.querySelector('.kabinet__label-btns')
        const kabinetOk = btns.querySelector('.kabinet__ok')
        const kabinetClose = btns.querySelector('.kabinet__close')
        const kabinetCopy = kabinetEdit.parentElement.querySelector('.kabinet__copy')
        const inputValueStart = input.value
        input.disabled = false
        input.focus()
        btns.style.display = 'flex'
        kabinetEdit.style.display = 'none'
        if (kabinetCopy != null) {
            kabinetCopy.style.display = 'none'
        }
        kabinetOk.addEventListener('click', function(){
            input.disabled = true
            btns.style.display = 'none'
            kabinetEdit.style.display = 'flex'
            if (kabinetCopy != null) {
                kabinetCopy.style.display = 'flex'
            }
        })
        kabinetClose.addEventListener('click', function(){
            input.value = inputValueStart
            input.disabled = true
            btns.style.display = 'none'
            kabinetEdit.style.display = 'flex'
            if (kabinetCopy != null) {
                kabinetCopy.style.display = 'flex'
            }
        })
    })
}

const kabinetLogoImg = document.querySelector('.kabinet__logo-img')
const logotip = document.querySelector('.logotip')
kabinetLogoImg.addEventListener('click', function(){
    logotip.classList.add('logotip_active')
    const logotipClose = logotip.querySelector('.logotip__close')
    logotipClose.addEventListener('click', function(){
        logotip.classList.remove('logotip_active')
    })
})
const kabinetDeleteImg = document.querySelector('.kabinet__delete-img')
kabinetDeleteImg.addEventListener('click', function(){
    const bigImg = kabinetDeleteImg.parentElement.querySelector('.kabinet__logo-img')
    const miniImg = kabinetDeleteImg.parentElement.parentElement.querySelector('.kabinet__logo-miniimg')
    bigImg.remove()
    miniImg.remove()
})
const kabinetDeleteTextarea = document.querySelector('.kabinet__delete-textarea')
kabinetDeleteTextarea.addEventListener('click', function(){
    const textarea = kabinetDeleteTextarea.parentElement.querySelector('.kabinet__textarea')
    textarea.value = ''
})
// Работа подсказок 
const clueArray = document.querySelectorAll('.clue')
for (let i = 0; i < clueArray.length; i++) {
    const clue = clueArray[i];
    const clueWrapper = clue.querySelector('.clue__wrapper')
    clue.addEventListener('mouseover', function(){
        clueWrapper.classList.add('clue__wrapper-active')
    })
    clue.addEventListener('mouseout', function(){
        clueWrapper.classList.remove('clue__wrapper-active')
    })
}


const confirm = document.querySelector('.confirm')
const confirmWrapperArray = document.querySelectorAll('.confirm__wrapper')

const kabinetTableDeleteArray = document.querySelectorAll('.kabinet__table-delete')
for (let i = 0; i < kabinetTableDeleteArray.length; i++) {
    const kabinetTableDelete = kabinetTableDeleteArray[i];
    kabinetTableDelete.addEventListener('click', function(){
        let itemTable = kabinetTableDelete.parentElement.parentElement.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-invoice_request') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                    itemTable = ''
                })
                confirmOk.addEventListener('click', function(){
                    if (itemTable != '') {
                        itemTable.remove()
                    }
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                
            }
        }
    })
}

const kabinetTableCopyArray = document.querySelectorAll('.kabinet__table-copy')
for (let i = 0; i < kabinetTableCopyArray.length; i++) {
    const kabinetTableCopy = kabinetTableCopyArray[i];
    kabinetTableCopy.addEventListener('click', function(){
        const textCopy = kabinetTableCopy.parentElement.querySelector('.kabinet__itemtable-text').textContent
        navigator.clipboard.writeText(textCopy)
    })
}





// Открытие/Закрытие селектов
const selectInputArray = document.querySelectorAll('.select__input')
for (let i = 0; i < selectInputArray.length; i++) {
    const selectInput = selectInputArray[i];
    const selectTitle = selectInput.parentElement.querySelector('.select__title')
    selectFun(selectInput, selectTitle)
}
function selectUp(selectInput, selectTitle) {
    if (selectInput.value != '') {
        selectTitle.classList.add('select__title-active')
    }
}
// Функция открытие/Закрытие селектов
function selectFun(selectInput, selectTitle) {
    selectInput.addEventListener('click', function(){
        const select = selectInput.parentElement
        const options = selectInput.parentElement.querySelector('.options')
        const optionArray = options.querySelectorAll('.option')
        select.classList.toggle('select-active')
        if (select.classList.contains('select-active')) {
            options.classList.add('options_active')
        } else {
            options.classList.remove('options_active')
        }
        for (let i = 0; i < optionArray.length; i++) {
            const option = optionArray[i];
            option.addEventListener('click', function(){
                selectInput.value = option.textContent
                if (select.classList.contains('select_up')) {
                    selectUp(selectInput, selectTitle)
                }
            options.classList.remove('options_active')
                select.classList.remove('select-active')
            })
        }
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(select);
            if ( ! withinBoundaries ) {
                select.classList.remove('select-active')
                options.classList.remove('options_active')
            }
        }) //Закрытие селекта по щелчку вне меню
        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                select.classList.remove('select-active')
                options.classList.remove('options_active')
            }
        }) //Закрытие селекта по нажатию на ESC
    })
}
// Поднятия заголовка для импута 
const labelInputArray = document.querySelectorAll('.label__input')
for (let i = 0; i < labelInputArray.length; i++) {
    const labelInput = labelInputArray[i];
    labelInput.addEventListener('focus', function(){
        const label = labelInput.parentElement
        label.classList.add('label-active')
    })
    labelInput.addEventListener('focusout', function(){
        if (labelInput.value === '') {
            const label = labelInput.parentElement
            label.classList.remove('label-active')
        }
    })
}
// Работа TABS 
const tabArray = document.querySelectorAll('.tab')
const sectionTabArray = document.querySelectorAll('.section__tab')
const sectionNavArray = document.querySelectorAll('.section__nav')
for (let i = 0; i < tabArray.length; i++) {
    const tab = tabArray[i];
    tab.addEventListener('click', function(){
        const dataTab = tab.dataset.tab
        openSectionTab(dataTab)
    })
}
for (let i = 0; i < sectionNavArray.length; i++) {
    const sectionNav = sectionNavArray[i];
    sectionNav.addEventListener('click', function(){
        const dataTab = sectionNav.dataset.nav
        openSectionTab(dataTab)
    })
}
function openSectionTab(dataTab) {
    for (let i = 0; i < sectionTabArray.length; i++) {
        const sectionTab = sectionTabArray[i];
        if (sectionTab.dataset.tab === dataTab) {
            sectionTab.classList.add('section__tab-active')
        } else {
            sectionTab.classList.remove('section__tab-active')
        }
    }
    for (let i = 0; i < tabArray.length; i++) {
        const tab = tabArray[i];
        if (tab.dataset.tab === dataTab) {
            tab.classList.add('tab_active')
        } else {
            tab.classList.remove('tab_active')
        }
    }
}
// Расчёт дней и стоимости
const priceDay = 1666
const sectionRangeArray = document.querySelectorAll('.section__range')
const sectionAccessInput = document.querySelector('.section__access-input')
const tariffsSale = document.getElementById('tariffs-sale')
const tariffsPrice = document.getElementById('tariffs-price')
const tariffsVat = document.getElementById('tariffs-vat')
const tariffsDayPrice = document.getElementById('tariffs-day-price')
const tariffsTotalPrice = document.getElementById('tariffs-total-price')
const tariffsTotalVat = document.getElementById('tariffs-total-vat')
const additionalRecruiters = document.getElementById('additional-recruiters')
const percentageOfCost = document.getElementById('percentage-of-cost')
const paymentForPeriod = document.getElementById('payment-for-period')
const paymentTotalPrice = document.getElementById('payment-total-price')
const paymentTotalVat = document.getElementById('payment-total-vat')

for (let i = 0; i < sectionRangeArray.length; i++) {
    const sectionRange = sectionRangeArray[i];
    const sectionRangeInput = sectionRange.querySelector('.range__input')
    const sectionRangeMeaning = sectionRange.querySelector('.range__meaning')
    let sectionRangeMeaningPosition = sectionRangeInput.value * 100 / sectionRangeInput.max
    sectionRangeMeaning.style.left = `${sectionRangeMeaningPosition}%`
    sectionRangeInput.addEventListener('input', function(){
        sectionRangeMeaning.textContent = sectionRangeInput.value
        let sectionRangeMeaningPosition = sectionRangeInput.value * 100 / sectionRangeInput.max
        sectionRangeMeaning.style.left = `${sectionRangeMeaningPosition}%`
        sectionAccessInputNum ()
    })   
}
const additionalRecruitersOptionArray = additionalRecruiters.parentElement.querySelectorAll('.option')
let risePrice = 1
let sale = 1
for (let i = 0; i < additionalRecruitersOptionArray.length; i++) {
    const additionalRecruitersOption = additionalRecruitersOptionArray[i];
    additionalRecruitersOption.addEventListener('click', function(){
        switch (additionalRecruitersOption.dataset.recruiters) {
            case "1":
                percentageOfCost.value = '0%'
                risePrice = 1
                break;
            case "2":
                percentageOfCost.value = '+ 5%'
                risePrice = 1.05
                break;
            case "3":
                percentageOfCost.value = '+ 10%'
                risePrice = 1.1
                break;
            case "4":
                percentageOfCost.value = '+ 15%'
                risePrice = 1.15
                break;
            default:
                break;
        }
        totalPrice(sectionAccessInput.value)
    })
}


function sectionAccessInputNum (){
    const rangeDays =  document.getElementById('range-days')
    const rangeDaysValue = rangeDays.value
    const rangeDaysMeaning = rangeDays.parentElement.querySelector('.range__meaning')
    const rangeMonthsValue = document.getElementById('range-months').value
    if (Number(rangeMonthsValue) === 12) {
        rangeDays.value = 0
        rangeDaysMeaning.textContent = 0
        rangeDaysMeaning.style.left = 0
        rangeDays.disabled = true
        rangeDays.classList.add('range__input-disabled')
        sectionAccessInput.value = 360
        paymentForPeriod.value = 360
        totalPrice(sectionAccessInput.value)
    } else {
        rangeDays.disabled = false
        rangeDays.classList.remove('range__input-disabled')
        sectionAccessInput.value = Number(rangeDaysValue) + Number(rangeMonthsValue)*30
        paymentForPeriod.value = sectionAccessInput.value
        totalPrice(sectionAccessInput.value)
    }
}
function totalPrice(days){
    if (days < 31) {
        tariffsSale.value = 'Без скидок'
        sale = 1
    }
    if (days > 30) {
        tariffsSale.value = 'Скидка 5%'
        sale = 0.95
    }
    if (days > 90) {
        tariffsSale.value = 'Скидка 10%'
        sale = 0.9
    }
    if (days > 180) {
        tariffsSale.value = 'Скидка 20%'
        sale = 0.8
    }
    
    tariffsDayPrice.value = (priceDay * sale * risePrice).toFixed(2)
    tariffsPrice.value = (days * priceDay * sale * risePrice).toFixed(2)
    tariffsTotalPrice.value = tariffsPrice.value
    paymentTotalPrice.value = tariffsPrice.value
    
    tariffsVat.value = ( (tariffsPrice.value * 20/100) / (1 + 20/100) ).toFixed(2)
    tariffsTotalVat.value = ( (tariffsTotalPrice.value * 20/100) / (1 + 20/100) ).toFixed(2)
    paymentTotalVat.value = tariffsTotalVat.value
}

const tariffsCurrency = document.getElementById('tariffs-currency')
const tariffsCurrencyOptionArray = tariffsCurrency.parentElement.querySelectorAll('.option')
const labelCurrencyArray = tariffsCurrency.parentElement.parentElement.querySelectorAll('.label__currency')
for (let i = 0; i < tariffsCurrencyOptionArray.length; i++) {
    const tariffsCurrencyOption = tariffsCurrencyOptionArray[i];
    tariffsCurrencyOption.addEventListener('click', function(){
        for (let i = 0; i < labelCurrencyArray.length; i++) {
            const labelCurrency = labelCurrencyArray[i];
            labelCurrency.textContent = tariffsCurrencyOption.textContent
        }
    })
}
const tariffsCurrencyTotal = document.getElementById('tariffs-currency-total')
const tariffsCurrencyTotalArray = tariffsCurrencyTotal.parentElement.querySelectorAll('.option')
const labelCurrencyTotalArray = tariffsCurrencyTotal.parentElement.parentElement.querySelectorAll('.label__currency')
for (let i = 0; i < tariffsCurrencyTotalArray.length; i++) {
    const tariffsCurrencyTotal = tariffsCurrencyTotalArray[i];
    tariffsCurrencyTotal.addEventListener('click', function(){
        for (let i = 0; i < labelCurrencyTotalArray.length; i++) {
            const labelCurrencyTotal = labelCurrencyTotalArray[i];
            labelCurrencyTotal.textContent = tariffsCurrencyTotal.textContent
        }
    })
}
const paymentCurrencyTotal = document.getElementById('payment-currency-total')
const paymentCurrencyTotalArray = paymentCurrencyTotal.parentElement.querySelectorAll('.option')
const labelPaymentCurrencyTotalArray = paymentCurrencyTotal.parentElement.parentElement.querySelectorAll('.label__currency')
for (let i = 0; i < paymentCurrencyTotalArray.length; i++) {
    const paymentCurrencyTotal = paymentCurrencyTotalArray[i];
    paymentCurrencyTotal.addEventListener('click', function(){
        for (let i = 0; i < labelPaymentCurrencyTotalArray.length; i++) {
            const labelPaymentCurrencyTotal = labelPaymentCurrencyTotalArray[i];
            labelPaymentCurrencyTotal.textContent = paymentCurrencyTotal.textContent
        }
    })
}

const withVat = document.getElementById('with-vat')
withVat.addEventListener('change', function(){
    const label = paymentTotalVat.parentElement
    if (withVat.checked) {
        label.style.display = 'flex'
    } else {
        label.style.display = 'none'
    }
    
})
const sectionRadioInputArray = document.querySelectorAll('.section__radio-input')
const invoice = document.getElementById('invoice')
const payBtn = document.getElementById('pay-btn')
const sectionTariffs4 = document.querySelector('.section__tariffs4')
for (let i = 0; i < sectionRadioInputArray.length; i++) {
    const sectionRadioInput = sectionRadioInputArray[i];
    sectionRadioInput.addEventListener('change', function(){
        if (invoice.checked) {
            sectionTariffs4.style.opacity = '1'
            payBtn.style.display = 'none'
            invoiceSend.style.display = 'none'
            enterMailLabel.style.display = 'flex'
        } else {
            sectionTariffs4.style.opacity = '0'
            payBtn.style.display = 'flex'
            personalAccount.style.display = 'none'
        }
    })
}
const enterMail = document.getElementById('enter-mail')
const enterMailLabel = document.querySelector('.enter-mail')
const sendEmail = document.getElementById('send-email')
const invoiceSend = document.querySelector('.invoice-send')
const personalAccount = document.getElementById('personal-account')
enterMail.addEventListener('input', function(){
    if (enterMail.value.length > 0) {
        sendEmail.style.display = 'block'
    } else {
        sendEmail.style.display = 'none'
    }
})
sendEmail.addEventListener('click', function(){
    enterMailLabel.style.display = 'none'
    invoiceSend.style.display = 'flex'
    personalAccount.style.display = 'flex'
})

const sectionWrapperArray = document.querySelectorAll('.section__wrapper')
for (let i = 0; i < sectionWrapperArray.length; i++) {
    const sectionWrapper = sectionWrapperArray[i];
    if (sectionWrapper.dataset.tariffs === '1') {
        sectionWrapper.style.display = 'flex'
    } else {
        sectionWrapper.style.display = 'none'
    }
}
const sectionFormStart = document.querySelector('.section__form-start')
sectionFormStart.addEventListener('submit', function(e){
    e.preventDefault()
    for (let i = 0; i < sectionWrapperArray.length; i++) {
        const sectionWrapper = sectionWrapperArray[i];
        if (sectionWrapper.dataset.tariffs === '2') {
            sectionWrapper.style.display = 'flex'
        } else {
            sectionWrapper.style.display = 'none'
        }
    }
})
const sectionBack = document.getElementById('section-back')
sectionBack.addEventListener('click', function(){
    for (let i = 0; i < sectionWrapperArray.length; i++) {
        const sectionWrapper = sectionWrapperArray[i];
        if (sectionWrapper.dataset.tariffs === '1') {
            sectionWrapper.style.display = 'flex'
        } else {
            sectionWrapper.style.display = 'none'
        }
    }
})


const kabinetStatusArray = document.querySelectorAll('.kabinet__status')
for (let i = 0; i < kabinetStatusArray.length; i++) {
    const kabinetStatus = kabinetStatusArray[i];
    const kabinetStatusItem = kabinetStatus.querySelector('.kabinet__status-item')
    const kabinetBlock = kabinetStatus.querySelector('.kabinet__block')
    kabinetStatus.addEventListener('mouseenter', function(){
        const kabinetBlockBtnArray = kabinetBlock.querySelectorAll('.kabinet__block-btn')
        kabinetBlock.classList.add('kabinet__block-active')
        kabinetStatusItem.classList.remove('kabinet__status-item-active')
        for (let i = 0; i < kabinetBlockBtnArray.length; i++) {
            const kabinetBlockBtn = kabinetBlockBtnArray[i];
            kabinetBlockBtn.addEventListener('click', function(){
                for (let i = 0; i < kabinetBlockBtnArray.length; i++) {
                    const ubb = kabinetBlockBtnArray[i];
                    ubb.classList.remove('kabinet__block-btn-active')
                }
                kabinetBlockBtn.classList.add('kabinet__block-btn-active')

                if (kabinetBlockBtn.dataset.status === 'block') {
                    kabinetBlock.classList.add('kabinet__block-red')
                    kabinetBlock.classList.remove('kabinet__block-blue')
                    kabinetStatusItem.innerHTML = '<svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FF0034" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#FF0034" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.0003 10V11.3333M23.0003 14H31.0003C31.7367 14 32.3337 13.403 32.3337 12.6667V8.66667C32.3337 7.93029 31.7367 7.33333 31.0003 7.33333H23.0003C22.2639 7.33333 21.667 7.93029 21.667 8.66667V12.6667C21.667 13.403 22.2639 14 23.0003 14ZM29.667 7.33333V4.66667C29.667 3.19391 28.4731 2 27.0003 2C25.5276 2 24.3337 3.19391 24.3337 4.66667V7.33333H29.667Z" stroke="#FF0034" stroke-linecap="round"/></svg>'
                }
                if (kabinetBlockBtn.dataset.status === 'unblock') {
                    kabinetBlock.classList.remove('kabinet__block-red')
                    kabinetBlock.classList.add('kabinet__block-blue')
                    kabinetStatusItem.innerHTML = '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#006FD8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z" stroke="#006FD8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                }
            })
        }
    })
    kabinetStatus.addEventListener('mouseleave', function(){
        kabinetBlock.classList.remove('kabinet__block-active')
        kabinetStatusItem.classList.add('kabinet__status-item-active')
    })
}