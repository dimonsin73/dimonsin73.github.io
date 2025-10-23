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
const panelTariffBlockArray = document.querySelectorAll('.panel__tariff-block')
for (let i = 0; i < panelTariffBlockArray.length; i++) {
    const panelTariffBlock = panelTariffBlockArray[i];
    autoGrow(panelTariffBlock)
    panelTariffBlock.addEventListener('input', function() {
        autoGrow(this);
    })
}
function autoGrow(el) {
  el.style.height = el.scrollHeight + 'px';
}
const panelTabArray = document.querySelectorAll('.panel__tab')
const panelContainerArray = document.querySelectorAll('.panel__container')
for (let i = 0; i < panelTabArray.length; i++) {
    const panelTab = panelTabArray[i];
    panelTab.addEventListener('click', function(){
        for (let i = 0; i < panelTabArray.length; i++) {
            const pt = panelTabArray[i];
            pt.classList.remove('panel__tab-active')
        }
        panelTab.classList.add('panel__tab-active')
        const dataPanel = panelTab.dataset.panel
        for (let i = 0; i < panelContainerArray.length; i++) {
            const panelContainer = panelContainerArray[i];
            if (panelContainer.dataset.panel === dataPanel) {
                panelContainer.classList.add('panel__container-active')
                for (let i = 0; i < panelTariffBlockArray.length; i++) {
                    const panelTariffBlock = panelTariffBlockArray[i];
                    autoGrow(panelTariffBlock)
                }
            } else {
                panelContainer.classList.remove('panel__container-active')
            }
        }
    })
}
// Каледнарь 
let datepicker = new Datepicker('#period-start', {
    weekStart: 1
});
let datepicker1 = new Datepicker('#period-finish', {
    weekStart: 1
});
let datepickerDoc = new Datepicker('#period-start-doc', {
    weekStart: 1
});
let datepickerDoc1 = new Datepicker('#period-finish-doc', {
    weekStart: 1
});
const paymentDocsLink = document.querySelector('.payment__docs-link')
paymentDocsLink.addEventListener('click', function(){
    for (let i = 0; i < panelTabArray.length; i++) {
        const panelTab = panelTabArray[i];
        if (panelTab.dataset.panel === 'accounting') {
           panelTab.classList.add('panel__tab-active') 
        } else {
            panelTab.classList.remove('panel__tab-active') 
        }
    }
    for (let i = 0; i < panelContainerArray.length; i++) {
        const panelContainer = panelContainerArray[i];
        if (panelContainer.dataset.panel === 'accounting') {
            panelContainer.classList.add('panel__container-active')
        } else {
            panelContainer.classList.remove('panel__container-active')
        }
    }
    payment.classList.remove('payment_active')
})


const showbyBtnArray = document.querySelectorAll('.showby__btn')
for (let i = 0; i < showbyBtnArray.length; i++) {
    const showbyBtn = showbyBtnArray[i];
    showbyBtn.addEventListener('click', function(){
        for (let i = 0; i < showbyBtnArray.length; i++) {
            const sb = showbyBtnArray[i];
            sb.classList.remove('showby__btn-active')
        }
        showbyBtn.classList.add('showby__btn-active')
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
// Переключение кнопок 
const newuserBtnArray = document.querySelectorAll('.newuser__btn')
const newuserShowArray = document.querySelectorAll('.newuser__show')
for (let i = 0; i < newuserBtnArray.length; i++) {
    const newuserBtn = newuserBtnArray[i];
    newuserBtn.addEventListener('click', function(){
        for (let i = 0; i < newuserBtnArray.length; i++) {
            const element = newuserBtnArray[i];
            element.classList.remove('newuser__btn-active')
        }
        newuserBtn.classList.add('newuser__btn-active')
        const datanewuser = newuserBtn.dataset.newuser
        for (let i = 0; i < newuserShowArray.length; i++) {
            const newuserShow = newuserShowArray[i];
            if (newuserShow.dataset.newuser === datanewuser) {
                newuserShow.classList.add('newuser__show-active')
            } else {
                const newuserInput = newuserShow.querySelector('.label__input')
                newuserInput.value = ''
                newuserShow.classList.remove('label-active')
                newuserShow.classList.remove('newuser__show-active')
            }
        }
    })
}
// Переключение роли
const newuserJob = document.getElementById('newuser-job')
const newuserEmployee = document.getElementById('newuser-employee')
const newuserJobArray = document.querySelectorAll('.newuser__job')
const newuserEmployeeArray = document.querySelectorAll('.newuser__employee')
document.querySelectorAll('input[type="radio"][name="newuser"]').forEach((button) => {
    button.addEventListener('change', function() {
        if (newuserJob.checked) {
            for (let i = 0; i < newuserJobArray.length; i++) {
                const newuserJob = newuserJobArray[i];
                newuserJob.classList.add('newuser__job-active')
            }
            for (let i = 0; i < newuserEmployeeArray.length; i++) {
                const newuserEmployee = newuserEmployeeArray[i];
                newuserEmployee.classList.remove('newuser__employee-active')
            }
            for (let i = 0; i < newuserBtnArray.length; i++) {
                const newuserBtn = newuserBtnArray[i];
                if (newuserBtn.dataset.newuser === 'tel') {
                    newuserBtn.classList.add('newuser__btn-active')
                } else {
                    newuserBtn.classList.remove('newuser__btn-active')
                }
            }
            for (let i = 0; i < newuserBtnArray.length; i++) {
                const newuserShow = newuserShowArray[i];
                if (newuserShow.dataset.newuser === 'tel') {
                    newuserShow.classList.add('newuser__show-active')
                } else {
                    newuserShow.classList.remove('newuser__show-active')
                }
            }
        }
        if (newuserEmployee.checked) {
            for (let i = 0; i < newuserJobArray.length; i++) {
                const newuserJob = newuserJobArray[i];
                newuserJob.classList.remove('newuser__job-active')
            }
            for (let i = 0; i < newuserEmployeeArray.length; i++) {
                const newuserEmployee = newuserEmployeeArray[i];
                newuserEmployee.classList.add('newuser__employee-active')
            }
            for (let i = 0; i < newuserBtnArray.length; i++) {
                const newuserShow = newuserShowArray[i];
                if (newuserShow.dataset.newuser === 'mail') {
                    newuserShow.classList.add('newuser__show-active')
                } else {
                    newuserShow.classList.remove('newuser__show-active')
                }
            }
        }
    });
});
const userItemDeleteArray = document.querySelectorAll('.user__item-delete')
const confirm = document.querySelector('.confirm')
const confirmWrapperArray = document.querySelectorAll('.confirm__wrapper')
for (let i = 0; i < userItemDeleteArray.length; i++) {
    const userItemDelete = userItemDeleteArray[i];
    userItemDelete.addEventListener('click', function(){
        const user = userItemDelete.parentElement.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    user.remove()
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
            }
        }
    })
}
const userItemPaymentArray = document.querySelectorAll('.user__item-payment')
const payment = document.querySelector('.payment')
const paymentClose = document.querySelector('.payment__close')
for (let i = 0; i < userItemPaymentArray.length; i++) {
    const userItemPayment = userItemPaymentArray[i];
    userItemPayment.addEventListener('click', function(){
        payment.classList.add('payment_active')
        
    })
}
paymentClose.addEventListener('click', function(){
    payment.classList.remove('payment_active')
})
const userStatusArray = document.querySelectorAll('.user__status')
for (let i = 0; i < userStatusArray.length; i++) {
    const userStatus = userStatusArray[i];
    const userStatusItem = userStatus.querySelector('.user__status-item')
    const userBlock = userStatus.querySelector('.user__block')
    userStatus.addEventListener('mouseenter', function(){
        const userBlockBtnArray = userBlock.querySelectorAll('.user__block-btn')
        userBlock.classList.add('user__block-active')
        userStatusItem.classList.remove('user__status-item-active')
        for (let i = 0; i < userBlockBtnArray.length; i++) {
            const userBlockBtn = userBlockBtnArray[i];
            userBlockBtn.addEventListener('click', function(){
                for (let i = 0; i < userBlockBtnArray.length; i++) {
                    const ubb = userBlockBtnArray[i];
                    ubb.classList.remove('user__block-btn-active')
                }
                userBlockBtn.classList.add('user__block-btn-active')
                if (userBlockBtn.dataset.status === 'block') {
                    for (let i = 0; i < confirmWrapperArray.length; i++) {
                        const confirmWrapper= confirmWrapperArray[i];
                        if (confirmWrapper.dataset.confirm === 'block') {
                            confirm.classList.add('confirm_active')
                            confirmWrapper.classList.add('confirm__wrapper-active')
                            const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                            const confirmClose = confirmWrapper.querySelector('.confirm__close')
                            confirmOk.addEventListener('click', function(){
                                userBlock.classList.add('user__block-red')
                                userBlock.classList.remove('user__block-blue')
                                userStatusItem.innerHTML = '<svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FF0034" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#FF0034" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.0003 10V11.3333M23.0003 14H31.0003C31.7367 14 32.3337 13.403 32.3337 12.6667V8.66667C32.3337 7.93029 31.7367 7.33333 31.0003 7.33333H23.0003C22.2639 7.33333 21.667 7.93029 21.667 8.66667V12.6667C21.667 13.403 22.2639 14 23.0003 14ZM29.667 7.33333V4.66667C29.667 3.19391 28.4731 2 27.0003 2C25.5276 2 24.3337 3.19391 24.3337 4.66667V7.33333H29.667Z" stroke="#FF0034" stroke-linecap="round"/></svg>'
                                confirmWrapper.classList.remove('confirm__wrapper-active')
                                confirm.classList.remove('confirm_active')
                            })
                            confirmClose.addEventListener('click', function(){
                                confirmWrapper.classList.remove('confirm__wrapper-active')
                                confirm.classList.remove('confirm_active')
                            })
                        }
                    }
                }
                if (userBlockBtn.dataset.status === 'unblock') {
                    for (let i = 0; i < confirmWrapperArray.length; i++) {
                        const confirmWrapper = confirmWrapperArray[i];
                        if (confirmWrapper.dataset.confirm === 'unblock') {
                            confirm.classList.add('confirm_active')
                            confirmWrapper.classList.add('confirm__wrapper-active')
                            const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                            const confirmClose = confirmWrapper.querySelector('.confirm__close')
                            confirmOk.addEventListener('click', function(){
                                userBlock.classList.remove('user__block-red')
                                userBlock.classList.add('user__block-blue')
                                userStatusItem.innerHTML = '<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#006FD8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z" stroke="#006FD8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                                confirmWrapper.classList.remove('confirm__wrapper-active')
                                confirm.classList.remove('confirm_active')
                            })
                            confirmClose.addEventListener('click', function(){
                                confirmWrapper.classList.remove('confirm__wrapper-active')
                                confirm.classList.remove('confirm_active')
                            })
                        }
                    }
                    
                }
            })
        }
    })
    userStatus.addEventListener('mouseleave', function(){
        userBlock.classList.remove('user__block-active')
        userStatusItem.classList.add('user__status-item-active')
    })
}




const docs = document.querySelector('.docs')
const docsImg = document.querySelector('.docs__img')
const receiptArray = document.querySelectorAll('.receipt')
for (let i = 0; i < receiptArray.length; i++) {
    const receipt = receiptArray[i];
    receipt.addEventListener('click', function(){
        window.open('images/docs/receipt.png')
    })
    
}
const reconciliationActArray = document.querySelectorAll('.reconciliation-act')
for (let i = 0; i < reconciliationActArray.length; i++) {
    const reconciliationAct = reconciliationActArray[i];
    reconciliationAct.addEventListener('click', function(){
        window.open('images/docs/reconciliation-act.png')
    })
}
const invoiceArray = document.querySelectorAll('.invoice')
for (let i = 0; i < invoiceArray.length; i++) {
    const invoice = invoiceArray[i];
    invoice.addEventListener('click', function(){
        window.open('images/docs/invoice.png')
    })
}
const actArray = document.querySelectorAll('.act')
for (let i = 0; i < actArray.length; i++) {
    const act = actArray[i];
    act.addEventListener('click', function(){
        window.open('images/docs/act.png')
    })
}



const datepickerInputArray = document.querySelectorAll('.datepicker')
for (let i = 0; i < datepickerInputArray.length; i++) {
    const datepickerInput = datepickerInputArray[i];
    datepickerInput.addEventListener('focus', function(){
        const label = datepickerInput.parentElement.parentElement
        label.classList.add('label-active')
    })
    datepickerInput.addEventListener('focusout', function(){
        const label = datepickerInput.parentElement.parentElement
        setTimeout(() => {
            if (datepickerInput.value == '') {
                label.classList.remove('label-active')
            } else {
                label.classList.add('label-active')
            }
        }, 200);
    })
}

const panelPeriodItemArray = document.querySelectorAll('.panel__period-item')
for (let i = 0; i < panelPeriodItemArray.length; i++) {
    const panelPeriodItem = panelPeriodItemArray[i];
    panelPeriodItem.addEventListener('click', function(){
        for (let i = 0; i < panelPeriodItemArray.length; i++) {
            const ppi = panelPeriodItemArray[i];
            ppi.classList.remove('panel__period-item-active')
        }
        panelPeriodItem.classList.add('panel__period-item-active')
    })
}

const docArray = document.querySelectorAll('.doc')
for (let i = 0; i < docArray.length; i++) {
    const doc = docArray[i];
    const docDelete = doc.querySelector('.doc__delete')
    if (docDelete != null) {
        doc.addEventListener('mouseenter', function(){
            docDelete.classList.add('doc__delete-active')
        })
        doc.addEventListener('mouseleave', function(){
            docDelete.classList.remove('doc__delete-active')
        })
    }
}
const docDeleteInvoiceArray = document.querySelectorAll('.doc__delete-invoice')
const docDeleteActArray = document.querySelectorAll('.doc__delete-act')
const docDeleteReconciliationActArray = document.querySelectorAll('.doc__delete-reconciliation-act')
for (let i = 0; i < docDeleteInvoiceArray.length; i++) {
    const docDeleteInvoice = docDeleteInvoiceArray[i];
    docDeleteInvoice.addEventListener('click', function(){
        const doc = docDeleteInvoice.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-invoice') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    doc.remove()
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
            }
        }
    })
}
for (let i = 0; i < docDeleteActArray.length; i++) {
    const docDeleteAct = docDeleteActArray[i];
    docDeleteAct.addEventListener('click', function(){
        const doc = docDeleteAct.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-act') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    doc.remove()
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
            }
        }
    })
}
for (let i = 0; i < docDeleteReconciliationActArray.length; i++) {
    const docDeleteReconciliationAct = docDeleteReconciliationActArray[i];
    docDeleteReconciliationAct.addEventListener('click', function(){
        const doc = docDeleteReconciliationAct.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-reconciliation-act') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    doc.remove()
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
            }
        }
    })
}

const edit = document.querySelector('.edit')
const editFormArray = edit.querySelectorAll('.edit__form')
const editCloseArray = document.querySelectorAll('.edit__close')
const btnEditFullnameArray = document.querySelectorAll('.btn-edit-fullname')
const btnEditCompanyArray = document.querySelectorAll('.btn-edit-company')
for (let i = 0; i < btnEditFullnameArray.length; i++) {
    const btnEditFullname = btnEditFullnameArray[i];
    btnEditFullname.addEventListener('click', function(){
        edit.classList.add('edit_active')
        for (let i = 0; i < editFormArray.length; i++) {
            const editForm = editFormArray[i];
            if (editForm.dataset.edit === 'fullname') {
                editForm.classList.add('edit__form-active')
                
            } else (
                editForm.classList.remove('edit__form-active')
            )
        }
    })
}
for (let i = 0; i < btnEditCompanyArray.length; i++) {
    const btnEditCompany = btnEditCompanyArray[i];
    btnEditCompany.addEventListener('click', function(){
        edit.classList.add('edit_active')
        for (let i = 0; i < editFormArray.length; i++) {
            const editForm = editFormArray[i];
            if (editForm.dataset.edit === 'company') {
                editForm.classList.add('edit__form-active')
            } else (
                editForm.classList.remove('edit__form-active')
            )
        }
    })
}
for (let i = 0; i < editCloseArray.length; i++) {
    const editClose = editCloseArray[i];
    editClose.addEventListener('click', function(){
        for (let i = 0; i < editFormArray.length; i++) {
            const editForm = editFormArray[i];
            editForm.classList.remove('edit__form-active')
        }
        edit.classList.remove('edit_active')
    })
}


// Редактирование меню лендинга 
const panelLandingEditArray = document.querySelectorAll('.panel__landing-edit')
const panelLandingDeleteArray = document.querySelectorAll('.panel__landing-delete')
for (let i = 0; i < panelLandingEditArray.length; i++) {
    const panelLandingEdit = panelLandingEditArray[i];
    panelLandingEdit.addEventListener('click', function () {
        funEdit(panelLandingEdit)
    })
}
function funEdit(panelLandingEdit) {
    panelLandingEdit.classList.add('panel__landing-edit-hide')
    const input = panelLandingEdit.parentElement.parentElement.querySelector('.panel__landing-input')
    const panelLandingUrl = panelLandingEdit.parentElement.parentElement.querySelector('.panel__landing-url')
    const panelLandingConfirmArray = panelLandingEdit.parentElement.querySelectorAll('.panel__landing-confirm')
    const panelLandingClose = panelLandingEdit.parentElement.querySelector('.panel__landing-close')
    const panelLandingSuccess = panelLandingEdit.parentElement.querySelector('.panel__landing-success')
    input.classList.add('panel__landing-input-active')
    input.readOnly = false
    panelLandingUrl.classList.add('panel__landing-url-active')
    for (let i = 0; i < panelLandingConfirmArray.length; i++) {
        const panelLandingConfirm = panelLandingConfirmArray[i];
        panelLandingConfirm.classList.add('panel__landing-confirm-active')
    }
    const inputValueStart = input.value
    const inputUrl = panelLandingUrl.querySelector('.panel__landing-urlinput')
    const inputUrlValueStart = inputUrl.value
    panelLandingClose.addEventListener('click', function(){
        input.value = inputValueStart
        inputUrl.value = inputUrlValueStart
        panelLandingEditFun(panelLandingEdit, input, panelLandingUrl, panelLandingConfirmArray)
    })
    panelLandingSuccess.addEventListener('click', function(){
        panelLandingEditFun(panelLandingEdit, input, panelLandingUrl, panelLandingConfirmArray)
    })
}
function panelLandingEditFun(panelLandingEdit, input, panelLandingUrl, panelLandingConfirmArray) {
    panelLandingEdit.classList.remove('panel__landing-edit-hide')
    input.classList.remove('panel__landing-input-active')
    panelLandingUrl.classList.remove('panel__landing-url-active')
    input.readOnly = true
    for (let i = 0; i < panelLandingConfirmArray.length; i++) {
        const panelLandingConfirm = panelLandingConfirmArray[i];
        panelLandingConfirm.classList.remove('panel__landing-confirm-active')
    }
}
for (let i = 0; i < panelLandingDeleteArray.length; i++) {
    const panelLandingDelete = panelLandingDeleteArray[i];
    panelLandingDeleteFun(panelLandingDelete)
}
function panelLandingDeleteFun(panelLandingDelete) {
    panelLandingDelete.addEventListener('click', function(){
        const li = panelLandingDelete.parentElement.parentElement
        li.remove()
    })
}
const panelLandingBtnArray = document.querySelectorAll('.panel__landing-btn')
for (let i = 0; i < panelLandingBtnArray.length; i++) {
    const panelLandingBtn = panelLandingBtnArray[i];
    panelLandingBtn.addEventListener('click', function(){
        const textCopy = panelLandingBtn.parentElement.querySelector('.panel__landing-urlinput').value
        navigator.clipboard.writeText(textCopy)
    })
}
// Редактирование документов 
const panelDocumentEditArray = document.querySelectorAll('.panel__document-edit')
const panelDocumentTexteditArray = document.querySelectorAll('.panel__document-textedit')
const panelDocumentDeleteArray = document.querySelectorAll('.panel__document-delete')
for (let i = 0; i < panelDocumentEditArray.length; i++) {
    const panelDocumentEdit = panelDocumentEditArray[i];
    panelDocumentEdit.addEventListener('click', function () {
        funEditDoc(panelDocumentEdit)
    })
}
function funEditDoc(panelDocumentEdit) {
    panelDocumentEdit.classList.add('panel__document-edit-hide')
    const input = panelDocumentEdit.parentElement.parentElement.querySelector('.panel__document-input')
    const panelDocumentUrl = panelDocumentEdit.parentElement.parentElement.querySelector('.panel__document-url')
    const panelDocumentConfirmArray = panelDocumentEdit.parentElement.querySelectorAll('.panel__document-confirm')
    const panelDocumentClose = panelDocumentEdit.parentElement.querySelector('.panel__document-close')
    const panelDocumentSuccess = panelDocumentEdit.parentElement.querySelector('.panel__document-success')
    input.classList.add('panel__document-input-active')
    input.readOnly = false
    panelDocumentUrl.classList.add('panel__document-url-active')
    for (let i = 0; i < panelDocumentConfirmArray.length; i++) {
        const panelDocumentConfirm = panelDocumentConfirmArray[i];
        panelDocumentConfirm.classList.add('panel__document-confirm-active')
    }
    const inputValueStart = input.value
    const inputUrl = panelDocumentUrl.querySelector('.panel__document-urlinput')
    const inputUrlValueStart = inputUrl.value
    panelDocumentClose.addEventListener('click', function(){
        input.value = inputValueStart
        inputUrl.value = inputUrlValueStart
        panelDocumentEditFun(panelDocumentEdit, input, panelDocumentUrl, panelDocumentConfirmArray)
    })
    panelDocumentSuccess.addEventListener('click', function(){
        panelDocumentEditFun(panelDocumentEdit, input, panelDocumentUrl, panelDocumentConfirmArray)
    })
}
function panelDocumentEditFun(panelDocumentEdit, input, panelDocumentUrl, panelDocumentConfirmArray) {
    panelDocumentEdit.classList.remove('panel__document-edit-hide')
    input.classList.remove('panel__document-input-active')
    panelDocumentUrl.classList.remove('panel__document-url-active')
    input.readOnly = true
    for (let i = 0; i < panelDocumentConfirmArray.length; i++) {
        const panelDocumentConfirm = panelDocumentConfirmArray[i];
        panelDocumentConfirm.classList.remove('panel__document-confirm-active')
    }
}
for (let i = 0; i < panelDocumentDeleteArray.length; i++) {
    const panelDocumentDelete = panelDocumentDeleteArray[i];
    panelLandingDeleteFun(panelDocumentDelete)
}
function panelLandingDeleteFun(panelDocumentDelete) {
    panelDocumentDelete.addEventListener('click', function(){
        const document = panelDocumentDelete.parentElement.parentElement
        document.remove()
    })
}
const panelDocumentBtnArray = document.querySelectorAll('.panel__document-btn')
for (let i = 0; i < panelDocumentBtnArray.length; i++) {
    const panelDocumentBtn = panelDocumentBtnArray[i];
    panelDocumentBtn.addEventListener('click', function(){
        const textCopy = panelDocumentBtn.parentElement.querySelector('.panel__document-urlinput').value
        navigator.clipboard.writeText(textCopy)
    })
}
const panelDocumentEdittextArray = document.querySelectorAll('.panel__document-edittext')
for (let i = 0; i < panelDocumentEdittextArray.length; i++) {
    const panelDocumentEdittext = panelDocumentEdittextArray[i];
    panelDocumentEdittext.addEventListener('click', function(){
        const textarea = panelDocumentEdittext.parentElement.parentElement.parentElement.querySelector('.panel__document-textarea')
        const save = panelDocumentEdittext.parentElement.querySelector('.panel__document-save')
        const cancell = panelDocumentEdittext.parentElement.querySelector('.panel__document-cancell')
        textarea.disabled = false
        panelDocumentEdittext.style.display = 'none'
        save.style.display = 'flex'
        cancell.style.display = 'flex'
        const textareaValueStart = textarea.value
        save.addEventListener('click', function(){
            textarea.disabled = true
            panelDocumentEdittext.style.display = 'flex'
            save.style.display = 'none'
            cancell.style.display = 'none'
        })
        cancell.addEventListener('click', function(){
            textarea.value = textareaValueStart
            textarea.disabled = true
            panelDocumentEdittext.style.display = 'flex'
            save.style.display = 'none'
            cancell.style.display = 'none'
        })
    })
}
for (let i = 0; i < panelDocumentTexteditArray.length; i++) {
    const panelDocumentTextedit = panelDocumentTexteditArray[i];
    panelDocumentTextedit.addEventListener('click', function(){
        const panelContent = panelDocumentTextedit.parentElement.parentElement.parentElement.querySelector('.panel__document-content')
        panelContentFun(panelContent)
    })
}
function panelContentFun(panelContent) {
    panelContent.classList.toggle('panel__document-content-active')
}
const panelAcquiringSelectArray = document.querySelectorAll('.panel__acquiring-select')
for (let i = 0; i < panelAcquiringSelectArray.length; i++) {
    const panelAcquiringSelect = panelAcquiringSelectArray[i];
    const bank = panelAcquiringSelect.nextSibling
    const labeInput = panelAcquiringSelect.parentElement.parentElement.querySelector('.panel__acquiring-iban')
    changeBankFun(panelAcquiringSelect, bank, labeInput)
    const optionArray = panelAcquiringSelect.parentElement.querySelectorAll('.option')
    for (let i = 0; i < optionArray.length; i++) {
        const option = optionArray[i];
        option.addEventListener('click', function () {
            const optionValue = option.textContent
            changeBank(optionValue, bank, labeInput)
        })
    }
}
function changeBankFun(panelAcquiringSelect, bank, labeInput) {
    const inputValue = panelAcquiringSelect.value
    changeBank(inputValue, bank, labeInput)
}
function changeBank(inputValue, bank, labeInput) {
    const panelAcquiringChangeArray = labeInput.parentElement.querySelectorAll('.panel__acquiring-change')
    switch (inputValue.trim()) {
        case 'БИК 044525593':
            bank.classList = ''
            bank.classList.add('bank', 'alfabank')
            for (let i = 0; i < panelAcquiringChangeArray.length; i++) {
                const panelAcquiringChange = panelAcquiringChangeArray[i];
                if (panelAcquiringChange.dataset.change === 'alfabank') {
                    labeInput.value = panelAcquiringChange.textContent
                    labeInput.style.backgroundImage = 'url(images/icons/alfabank.png)'
                }
            }
            break;
        case 'БИК 044525974':
            bank.classList = ''
            bank.classList.add('bank', 'tbank')
            for (let i = 0; i < panelAcquiringChangeArray.length; i++) {
                const panelAcquiringChange = panelAcquiringChangeArray[i];
                if (panelAcquiringChange.dataset.change === 'tbank') {
                    labeInput.value = panelAcquiringChange.textContent
                    labeInput.style.backgroundImage = 'url(images/icons/tbank.png)'
                }
            }
            break;
        case 'БИК 044525225':
            bank.classList = ''
            bank.classList.add('bank', 'sberbank')
            for (let i = 0; i < panelAcquiringChangeArray.length; i++) {
                const panelAcquiringChange = panelAcquiringChangeArray[i];
                if (panelAcquiringChange.dataset.change === 'sberbank') {
                    labeInput.value = panelAcquiringChange.textContent
                    labeInput.style.backgroundImage = 'url(images/icons/sberbank.png)'
                }
            }
            break;
        default:
            break;
    }
}
const labelEditArray = document.querySelectorAll('.label__edit')
for (let i = 0; i < labelEditArray.length; i++) {
    const labelEdit = labelEditArray[i];
    labelEdit.addEventListener('click', function(){
        const labelInput = labelEdit.parentElement.querySelector('.panel__acquiring-iban')
        const labelOk = labelEdit.parentElement.querySelector('.label__ok')
        labelEdit.style.display = 'none'
        labelOk.style.display = 'flex'
        labelInput.classList.add('panel__acquiring-iban-active')
        labelInput.disabled = false
        labelInput.focus()
        labelOk.addEventListener('click', function(){
            labelEdit.style.display = 'flex'
            labelOk.style.display = 'none'
            labelInput.classList.remove('panel__acquiring-iban-active')
            labelInput.disabled = true
        })
    })
}
const labelEditTitleArray = document.querySelectorAll('.label__edit-title')
for (let i = 0; i < labelEditTitleArray.length; i++) {
    const labelEditTitle = labelEditTitleArray[i];
    labelEditTitle.addEventListener('click', function(){
        const labelInput = labelEditTitle.parentElement.querySelector('.panel__acquiring-title')
        const labelOk = labelEditTitle.parentElement.querySelector('.label__ok-title')
        labelEditTitle.style.display = 'none'
        labelOk.style.display = 'flex'
        labelInput.classList.add('panel__acquiring-title-active')
        labelInput.disabled = false
        labelInput.focus()
        labelOk.addEventListener('click', function(){
            labelEditTitle.style.display = 'flex'
            labelOk.style.display = 'none'
            labelInput.classList.remove('panel__acquiring-title-active')
            labelInput.disabled = true
        })
    })
}
const invoiceSentArray = document.querySelectorAll('.invoice-sent')
for (let i = 0; i < invoiceSentArray.length; i++) {
    const invoiceSent = invoiceSentArray[i];
    invoiceSent.addEventListener('change', function(){
        const awaitingPayment = invoiceSent.parentElement.parentElement.parentElement.querySelector('.awaiting-payment')
        if (invoiceSent.checked) {
            awaitingPayment.classList.add('awaiting-payment-active')
        } else {
            awaitingPayment.classList.remove('awaiting-payment-active')
        }
    })
}
const invoicePaidArray = document.querySelectorAll('.invoice-paid')
for (let i = 0; i < invoicePaidArray.length; i++) {
    const invoicePaid = invoicePaidArray[i];
    invoicePaid.addEventListener('change', function(){
        const awaitingPayment = invoicePaid.parentElement.parentElement.parentElement.querySelector('.awaiting-payment')
        if (invoicePaid.checked) {
            awaitingPayment.classList.add('awaiting-payment-active')
        } else {
            awaitingPayment.classList.remove('awaiting-payment-active')
        }
    })
}
const docDeleteInvoiceCheckArray = document.querySelectorAll('.doc__delete-invoice_check')
for (let i = 0; i < docDeleteInvoiceCheckArray.length; i++) {
    const docDeleteInvoiceCheck = docDeleteInvoiceCheckArray[i];
    docDeleteInvoiceCheck.addEventListener('click', function(){
        const doc = docDeleteInvoiceCheck.parentElement
        doc.remove()
    })
}
const docDeleteInvoiceRequestArray = document.querySelectorAll('.doc__delete-invoice_request')
for (let i = 0; i < docDeleteInvoiceRequestArray.length; i++) {
    const docDeleteInvoiceRequest = docDeleteInvoiceRequestArray[i];
    docDeleteInvoiceRequest.addEventListener('click', function(){
        const doc = docDeleteInvoiceRequest.parentElement
        doc.remove()
    })
}
const paymentRequestDeleteArray = document.querySelectorAll('.payment__request-delete')
for (let i = 0; i < paymentRequestDeleteArray.length; i++) {
    const paymentRequestDelete = paymentRequestDeleteArray[i];
    paymentRequestDelete.addEventListener('click', function(){
        const request = paymentRequestDelete.parentElement.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-invoice_request') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    request.remove()
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
            }
        }
    })
}
const paymentInvoiceDeleteArray = document.querySelectorAll('.payment__invoice-delete')
for (let i = 0; i < paymentInvoiceDeleteArray.length; i++) {
    const paymentInvoiceDelete = paymentInvoiceDeleteArray[i];
    paymentInvoiceDelete.addEventListener('click', function(){
        const invoice = paymentInvoiceDelete.parentElement.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-invoice_check') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    invoice.remove()
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
                confirmClose.addEventListener('click', function(){
                    confirmWrapper.classList.remove('confirm__wrapper-active')
                    confirm.classList.remove('confirm_active')
                })
            }
        }
    })
}


const accountingChange = document.getElementById('accounting-change')
const accountingArray = document.querySelectorAll('.accounting')
const panelNewrequestArray = document.querySelectorAll('.panel__newrequest')
const inputSearch2Array = document.querySelectorAll('.input_search2')
const clueAccountingArray = document.querySelectorAll('.clue__accounting')
const panelDuoPaid = document.querySelector('.panel__duo-paid')
accountingChange.addEventListener('click', function(){
    const optionArray = accountingChange.parentElement.querySelectorAll('.option')
    for (let i = 0; i < optionArray.length; i++) {
        const option = optionArray[i];
        option.addEventListener('click', function(){
            const dataOption = option.dataset.accounting
            for (let i = 0; i < accountingArray.length; i++) {
                const accounting = accountingArray[i];
                if (accounting.dataset.accounting === dataOption) {
                    accounting.classList.add('accounting_active')
                } else {
                    accounting.classList.remove('accounting_active')
                }
            }
            for (let i = 0; i < panelNewrequestArray.length; i++) {
                const panelNewrequest = panelNewrequestArray[i];
                if (panelNewrequest.dataset.accounting === dataOption) {
                    panelNewrequest.classList.add('panel__newrequest-active')
                } else {
                    panelNewrequest.classList.remove('panel__newrequest-active')
                }
            }
            if (dataOption === 'paid') {
                panelDuoPaid.style.display = 'flex'
            } else {
                panelDuoPaid.style.display = 'none'
            }
            for (let i = 0; i < inputSearch2Array.length; i++) {
                const inputSearch2 = inputSearch2Array[i];
                if (inputSearch2.dataset.accounting === dataOption) {
                    inputSearch2.classList.add('input_search2-active')
                } else {
                    inputSearch2.classList.remove('input_search2-active')
                }
            }
            for (let i = 0; i < clueAccountingArray.length; i++) {
                const clueAccounting = clueAccountingArray[i];
                if (clueAccounting.dataset.accounting === dataOption) {
                    clueAccounting.classList.add('clue__accounting-active')
                } else {
                    clueAccounting.classList.remove('clue__accounting-active')
                }
            }
        })
    }
})

const btnCopyArray = document.querySelectorAll('.btn-copy')
for (let i = 0; i < btnCopyArray.length; i++) {
    const btnCopy = btnCopyArray[i];
    btnCopy.addEventListener('click', function(){
        const textCopy = btnCopy.parentElement.querySelector('.user__item-text').textContent
        navigator.clipboard.writeText(textCopy)
    })
}
const btnCopy2Array = document.querySelectorAll('.btn-copy2')
for (let i = 0; i < btnCopy2Array.length; i++) {
    const btnCopy = btnCopy2Array[i];
    btnCopy.addEventListener('click', function(){
        const textCopy = btnCopy.parentElement.querySelector('.payment__item-text').textContent
        navigator.clipboard.writeText(textCopy)
    })
}

// Показать пароль
const neumorphicPasswordArray = document.querySelectorAll('.neumorphic-password')
for (let i = 0; i < neumorphicPasswordArray.length; i++) {
    const neumorphicPassword = neumorphicPasswordArray[i];
    neumorphicPassword.addEventListener('click', function(){
        neumorphicPassword.classList.toggle('neumorphic-password-slash')
        const input = neumorphicPassword.nextSibling
        if (neumorphicPassword.classList.contains('neumorphic-password-slash')) {
            input.setAttribute('type', 'text')
        } else {
            input.setAttribute('type', 'password')
        }
    })
}
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const hiro = document.querySelector('.hiro')
const hiroForm = document.querySelector('.hiro__form')
const login = document.querySelector('#login')
const password = document.querySelector('#password')
const asideLinkExit = document.querySelector('.aside__link-exit')
hiroForm.addEventListener('submit', function(e){
    e.preventDefault() 
    if (login.value.length === 0) {
        login.classList.add('neumorphic-input-error')
    }
    if (password.value.length === 0) {
        password.classList.add('neumorphic-input-error')
    }
    if (login.classList.contains('neumorphic-input-error') || password.classList.contains('neumorphic-input-error')) {
    } else { 
        aside.classList.remove('aside_hide')
        header.classList.remove('header_hide')
        main.classList.remove('main_hide')
        hiro.classList.add('hiro_hide')
    }
})
asideLinkExit.addEventListener('click', function(){
    aside.classList.add('aside_hide')
    header.classList.add('header_hide')
    main.classList.add('main_hide')
    hiro.classList.remove('hiro_hide')
})
login.addEventListener('input', function(){
    login.classList.remove('neumorphic-input-error')
})
password.addEventListener('input', function(){
    password.classList.remove('neumorphic-input-error')
})