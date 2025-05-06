// купить\в корзине
const productBtns = document.querySelectorAll('.btn-by');
for (let i = 0; i < productBtns.length; i++) {
    const element = productBtns[i];
    element.addEventListener('click', function(){
        if (window.innerWidth < '1023') {
            element.classList.toggle('btn-by-active');
            if (element.classList.contains('btn-by-active')) {
                element.innerHTML = `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.1665 12C6.21984 14.0493 7.8265 16.416 9.1665 19C12.2772 13.1107 16.1665 8.444 20.8332 5" stroke="#03A050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>`;
            } else {
                element.innerHTML = `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.8335 1.03345H4.14073C5.11433 1.03345 5.95388 1.71764 6.15038 2.6712L8.34746 13.3331C8.60945 14.6045 9.72886 15.5168 11.027 15.5168H19.2706C20.5342 15.5168 21.6335 14.6513 21.93 13.423L23.1086 8.5411C23.4202 7.25014 22.442 6.00769 21.114 6.00769H6.80774M10.7871 20.9304C10.7871 21.4799 10.3417 21.9253 9.79229 21.9253C9.24285 21.9253 8.79744 21.4799 8.79744 20.9304C8.79744 20.381 9.24285 19.9356 9.79229 19.9356C10.3417 19.9356 10.7871 20.381 10.7871 20.9304ZM21.7305 20.9304C21.7305 21.4799 21.2851 21.9253 20.7356 21.9253C20.1862 21.9253 19.7408 21.4799 19.7408 20.9304C19.7408 20.381 20.1862 19.9356 20.7356 19.9356C21.2851 19.9356 21.7305 20.381 21.7305 20.9304Z" stroke="#AD2950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>`;
            };
        } else {
            element.classList.toggle('btn-by-active');
            if (element.classList.contains('btn-by-active')) {
                element.innerHTML = 'В корзине';
            } else {
                element.innerHTML = 'Купить';
            };
        }
       
    });
};
// понравившиеся
const productHears = document.querySelectorAll('.btn-heart')
for (let i = 0; i < productHears.length; i++) {
    const element = productHears[i];
    element.addEventListener('click', function(){
        element.classList.toggle('btn-heart-active');
    });
};
const dataForm = document.querySelector('.data__form')
// активация кнопки Сохранить
const dataBtn = document.querySelector('.data__btn-btn')
dataForm.addEventListener('input', function(){
    dataBtn.removeAttribute('disabled')
})
// Верификация
const ialArr = document.querySelectorAll('.ial')
const dataName = document.getElementById('data-name')
const dataEmail = document.getElementById('data-email')
const passwordFirst = document.getElementById('password-first')
const passwordSecond = document.getElementById('password-second')
dataForm.addEventListener('submit', function(event){
    event.preventDefault()
    if (dataName.value.length <= 3) {
        dataName.parentElement.classList.add('data__head-item-error')
    }
    if (dataEmail.value.includes('@')) {
        console.log(dataEmail.value.includes('@'))
    } else {
        dataEmail.parentElement.classList.add('data__head-item-error')
    }
    if (passwordFirst.value.length <= 5) {
        passwordFirst.parentElement.classList.add('data__password-item-error')
    }
    if (passwordFirst.value != passwordSecond.value) {
        passwordSecond.parentElement.classList.add('data__password-item-error')
    }
})
for (let i = 0; i < ialArr.length; i++) {
    const ial = ialArr[i];
    ial.addEventListener('input', function(){
        const label = ial.querySelector('.ial__label')
        const input = ial.querySelector('.ial__input')
        if (input.value.length > 0) {
            label.classList.add('ial__label-up')
        } else {
            label.classList.remove('ial__label-up')
        }
    })
}
// показать пароль
const dataPasswordShowArr = document.querySelectorAll('.ial__show')
for (let i = 0; i < dataPasswordShowArr.length; i++) {
    const element = dataPasswordShowArr[i];
    element.addEventListener('click', function(){
        const dataPasswordInput = element.parentElement.querySelector('.ial__input')
        dataPasswordInput.classList.toggle('ial__input-show')
        if (dataPasswordInput.classList.contains('ial__input-show')) {
            dataPasswordInput.setAttribute('type', 'text')
        } else {
            dataPasswordInput.setAttribute('type', 'password')
        }
    })
}