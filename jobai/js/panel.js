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
const paymentDocsLink = document.querySelector('.payment__docs-link')
paymentDocsLink.addEventListener('click', function(){
    for (let i = 0; i < panelTabArray.length; i++) {
        const panelTab = panelTabArray[i];
        if (panelTab.dataset.panel === 'payment') {
           panelTab.classList.add('panel__tab-active') 
        } else {
            panelTab.classList.remove('panel__tab-active') 
        }
    }
    for (let i = 0; i < panelContainerArray.length; i++) {
        const panelContainer = panelContainerArray[i];
        if (panelContainer.dataset.panel === 'payment') {
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

const newuser = document.querySelector('.newuser')
const addUser = document.getElementById('add-user')
const newuserClose = document.querySelector('.newuser__close')
addUser.addEventListener('click', function(){
    newuser.classList.add('newuser_active')
})
newuserClose.addEventListener('click', function(){
    newuser.classList.remove('newuser_active')
})

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
// Добавление пункта меню лендинга 
const panelLandingAdd = document.querySelector('.panel__landing-add')
const panelLandingList = document.querySelector('.panel__landing-list')
panelLandingAdd.addEventListener('click', function(){
    const panelLandingLi = document.createElement('li')
    panelLandingLi.classList.add('panel__landing-li')
    const panelLandingInput = document.createElement('input')
    panelLandingInput.classList.add('panel__landing-input', 'panel__landing-input-active')
    panelLandingInput.setAttribute('type', 'text')
    const panelLandingBtns = document.createElement('div')
    panelLandingBtns.classList.add('panel__landing-btns')
    const panelLandingClose = document.createElement('button')
    panelLandingClose.setAttribute('type', 'button')
    panelLandingClose.classList.add('btn-icon', 'panel__landing-close', 'panel__landing-confirm', 'panel__landing-confirm-active')
    panelLandingClose.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#6A6A73"/></svg>'
    const panelLandingSuccess = document.createElement('button')
    panelLandingSuccess.setAttribute('type', 'button')
    panelLandingSuccess.classList.add('btn-icon', 'panel__landing-success', 'panel__landing-confirm', 'panel__landing-confirm-active')
    panelLandingSuccess.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#6A6A73"/></svg>'
    const panelLandingEdit = document.createElement('button')
    panelLandingEdit.setAttribute('type', 'button')
    panelLandingEdit.classList.add('btn-icon', 'panel__landing-edit', 'panel__landing-edit-hide')
    panelLandingEdit.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4142 2.58579C16.6332 1.80474 15.3668 1.80474 14.5858 2.58579L7 10.1716V13H9.82842L17.4142 5.41421C18.1953 4.63316 18.1953 3.36683 17.4142 2.58579Z" fill="#6A6A73"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H8C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6H4V16H14V12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12V16C16 17.1046 15.1046 18 14 18H4C2.89543 18 2 17.1046 2 16V6Z" fill="#6A6A73"/></svg>'
    const panelLandingDelete = document.createElement('button')
    panelLandingDelete.setAttribute('type', 'button')
    panelLandingDelete.classList.add('btn-icon', 'panel__landing-delete')
    panelLandingDelete.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#6A6A73"/></svg>'
    const panelLandingUrl = document.createElement('div')
    panelLandingUrl.classList.add('panel__landing-url', 'panel__landing-url-active')
    const panelLandingP = document.createElement('p')
    panelLandingP.textContent = 'URL'
    const panelLandingUrlinput = document.createElement('input')
    panelLandingUrlinput.classList.add('panel__landing-urlinput')
    panelLandingUrlinput.setAttribute('type', 'text')
    panelLandingBtns.append(panelLandingClose, panelLandingSuccess, panelLandingEdit, panelLandingDelete)
    panelLandingUrl.append(panelLandingP, panelLandingUrlinput)
    panelLandingLi.append(panelLandingInput, panelLandingBtns, panelLandingUrl)
    panelLandingList.append(panelLandingLi)
    const panelLandingConfirmArray = panelLandingBtns.querySelectorAll('.panel__landing-confirm')
    panelLandingDeleteFun(panelLandingDelete)
    panelLandingClose.addEventListener('click', function(){
        panelLandingInput.value = ''
        panelLandingEditFun(panelLandingEdit, panelLandingInput, panelLandingConfirmArray)
    })
    panelLandingSuccess.addEventListener('click', function(){
        panelLandingEditFun(panelLandingEdit, panelLandingInput, panelLandingUrl, panelLandingConfirmArray)
    })
    panelLandingEdit.addEventListener('click', function () {
        funEdit(panelLandingEdit)
    })
})

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
    const panelDocumentConfirmArray = panelDocumentEdit.parentElement.querySelectorAll('.panel__document-confirm')
    const panelDocumentClose = panelDocumentEdit.parentElement.querySelector('.panel__document-close')
    const panelDocumentSuccess = panelDocumentEdit.parentElement.querySelector('.panel__document-success')
    input.classList.add('panel__document-input-active')
    input.readOnly = false
    for (let i = 0; i < panelDocumentConfirmArray.length; i++) {
        const panelDocumentConfirm = panelDocumentConfirmArray[i];
        panelDocumentConfirm.classList.add('panel__document-confirm-active')
    }
    const inputValueStart = input.value
    panelDocumentClose.addEventListener('click', function(){
        input.value = inputValueStart
        panelDocumentEditFun(panelDocumentEdit, input, panelDocumentConfirmArray)
    })
    panelDocumentSuccess.addEventListener('click', function(){
        panelDocumentEditFun(panelDocumentEdit, input, panelDocumentConfirmArray)
    })
}
function panelDocumentEditFun(panelDocumentEdit, input, panelDocumentConfirmArray) {
    panelDocumentEdit.classList.remove('panel__document-edit-hide')
    input.classList.remove('panel__document-input-active')
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
// Добавление документа 
let panelDocumentAddID = 0
const panelDocumentAdd = document.querySelector('.panel__document-add')
const panelDocumentsWrapper = document.querySelector('.panel__documents-wrapper')
panelDocumentAdd.addEventListener('click', function(){
    const panelDocument = document.createElement('div')
    panelDocument.classList.add('panel__document')
    const panelDocumentTop = document.createElement('div') 
    panelDocumentTop.classList.add('panel__document-top')
    const panelDocumentContent = document.createElement('div')
    panelDocumentContent.classList.add('panel__document-content')
    const panelDocumentInput = document.createElement('input')
    panelDocumentInput.classList.add('panel__document-input', 'panel__document-input-active')
    panelDocumentInput.setAttribute('type', 'text')
    const panelDocumentBtns = document.createElement('div')
    panelDocumentBtns.classList.add('panel__document-btns')
    const panelDocumentClose = document.createElement('button')
    panelDocumentClose.setAttribute('type', 'button')
    panelDocumentClose.classList.add('btn-icon', 'panel__document-close', 'panel__document-confirm')
    panelDocumentClose.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#6A6A73"/></svg>'
    const panelDocumentSuccess = document.createElement('button')
    panelDocumentSuccess.setAttribute('type', 'button')
    panelDocumentSuccess.classList.add('btn-icon', 'panel__document-success', 'panel__document-confirm')
    panelDocumentSuccess.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#6A6A73"/></svg>'
    const panelDocumentEdit = document.createElement('button')
    panelDocumentEdit.setAttribute('type', 'button')
    panelDocumentEdit.classList.add('btn-icon', 'panel__document-edit')
    panelDocumentEdit.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.4142 2.58579C16.6332 1.80474 15.3668 1.80474 14.5858 2.58579L7 10.1716V13H9.82842L17.4142 5.41421C18.1953 4.63316 18.1953 3.36683 17.4142 2.58579Z" fill="#6A6A73"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H8C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6H4V16H14V12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12V16C16 17.1046 15.1046 18 14 18H4C2.89543 18 2 17.1046 2 16V6Z" fill="#6A6A73"/></svg>'
    const panelDocumentTextedit = document.createElement('button')
    panelDocumentTextedit.setAttribute('type', 'button')
    panelDocumentTextedit.classList.add('btn-icon', 'panel__document-textedit')
    panelDocumentTextedit.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11V14C9 14.5523 9.44772 15 10 15H11C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13V10C11 9.44772 10.5523 9 10 9H9Z" fill="#6A6A73"/></svg>'
    const panelDocumentDelete = document.createElement('button')
    panelDocumentDelete.setAttribute('type', 'button')
    panelDocumentDelete.classList.add('btn-icon', 'panel__document-delete')
    panelDocumentDelete.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z" fill="#6A6A73"/></svg>'
    const panelDocumentImage = document.createElement('div') 
    panelDocumentImage.classList.add('panel__document-image')
    const panelDocumentImg = document.createElement('img')
    panelDocumentImg.classList.add('panel__document-img')
    panelDocumentImg.setAttribute('src', 'images/icons/menu-bar.png')
    const panelDocumentTextarea = document.createElement('textarea')
    panelDocumentTextarea.classList.add('panel__document-textarea')
    panelDocumentTextarea.setAttribute('name', `document_${panelDocumentAddID}`)
    const panelDocumentFooter = document.createElement('div')
    panelDocumentFooter.classList.add('panel__document-footer')
    const panelDocumentLeft = document.createElement('div')
    panelDocumentLeft.classList.add('panel__document-left')
    const panelDocumentAttached = document.createElement('div')
    panelDocumentAttached.classList.add('panel__document-attached')
    const panelDocumentAttach = document.createElement('button')
    panelDocumentAttach.setAttribute('type', 'button')
    panelDocumentAttach.classList.add('panel__document-attach')
    panelDocumentAttach.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C6.34315 4 5 5.34315 5 7V11C5 13.7614 7.23858 16 10 16C12.7614 16 15 13.7614 15 11V7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V11C17 14.866 13.866 18 10 18C6.13401 18 3 14.866 3 11V7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7V11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11V7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 5.34315 9.65685 4 8 4Z" fill="#6A6A73"/></svg> Прикрепить документ'
    const panelDocumentButtons = document.createElement('div')
    panelDocumentButtons.classList.add('panel__document-buttons')
    const panelDocumentEdittext = document.createElement('button')
    panelDocumentEdittext.setAttribute('type', 'button')
    panelDocumentEdittext.classList.add('btn', 'btn_primary', 'panel__document-edittext')
    panelDocumentEdittext.textContent = 'Редактировать'
    const panelDocumentSave = document.createElement('button')
    panelDocumentSave.setAttribute('type', 'button')
    panelDocumentSave.classList.add('btn', 'btn_primary', 'panel__document-save')
    panelDocumentSave.textContent = 'Сохранить'
    const panelDocumentCancell = document.createElement('button')
    panelDocumentCancell.setAttribute('type', 'button')
    panelDocumentCancell.classList.add('btn', 'btn_tertiary', 'panel__document-cancell')
    panelDocumentCancell.textContent = 'Отмена'

    panelDocumentBtns.append(panelDocumentClose, panelDocumentSuccess, panelDocumentEdit, panelDocumentTextedit, panelDocumentDelete)
    panelDocumentTop.append(panelDocumentInput, panelDocumentBtns)
    panelDocumentImage.append(panelDocumentImg)
    panelDocumentLeft.append(panelDocumentAttached, panelDocumentAttach)
    panelDocumentButtons.append(panelDocumentEdittext, panelDocumentSave, panelDocumentCancell)
    panelDocumentFooter.append(panelDocumentLeft, panelDocumentButtons)
    panelDocumentContent.append(panelDocumentImage, panelDocumentTextarea, panelDocumentFooter)

    panelDocument.append(panelDocumentTop, panelDocumentContent)
    panelDocumentsWrapper.append(panelDocument)
    panelDocumentAddID++
    funEditDoc(panelDocumentEdit)
    panelDocumentTextedit.addEventListener('click', function(){
        panelContentFun(panelDocumentContent)
        panelDocumentEdittext.style.display = 'none'
        panelDocumentSave.style.display = 'flex'
        panelDocumentCancell.style.display = 'flex'
    })
    panelLandingDeleteFun(panelDocumentDelete)

    let textareaValueStart = panelDocumentTextarea.value
    panelDocumentSave.addEventListener('click', function(){
        panelDocumentTextarea.disabled = true
        panelDocumentEdittext.style.display = 'flex'
        panelDocumentSave.style.display = 'none'
        panelDocumentCancell.style.display = 'none'
    })
    panelDocumentCancell.addEventListener('click', function(){
        panelDocumentTextarea.value = textareaValueStart
        panelDocumentTextarea.disabled = true
        panelDocumentEdittext.style.display = 'flex'
        panelDocumentSave.style.display = 'none'
        panelDocumentCancell.style.display = 'none'
    })
    panelDocumentEdittext.addEventListener('click', function(){
        panelDocumentTextarea.disabled = false
        panelDocumentEdittext.style.display = 'none'
        panelDocumentSave.style.display = 'flex'
        panelDocumentCancell.style.display = 'flex'
        textareaValueStart = panelDocumentTextarea.value
    })
})

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
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-invoice_check') {
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
const paymentItemDeleteArray = document.querySelectorAll('.payment__item-delete')
for (let i = 0; i < paymentItemDeleteArray.length; i++) {
    const paymentItemDelete = paymentItemDeleteArray[i];
    paymentItemDelete.addEventListener('click', function(){
        const payment = paymentItemDelete.parentElement.parentElement
        confirm.classList.add('confirm_active')
        for (let i = 0; i < confirmWrapperArray.length; i++) {
            const confirmWrapper = confirmWrapperArray[i];
            if (confirmWrapper.dataset.confirm === 'delete-request') {
                confirmWrapper.classList.add('confirm__wrapper-active')
                const confirmOk = confirmWrapper.querySelector('.confirm__ok')
                const confirmClose = confirmWrapper.querySelector('.confirm__close')
                confirmOk.addEventListener('click', function(){
                    payment.remove()
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