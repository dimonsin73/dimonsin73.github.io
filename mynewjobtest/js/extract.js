
// Ф-ция кликов по табам
const tabs = document.querySelectorAll('.extract__tab');
for (let i = 0; i < tabs.length; i++) {
    const element = tabs[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < tabs.length; i++) {
            const el = tabs[i];
            el.classList.remove('tab-active');
        };
        element.classList.add('tab-active');
    });
};
// Ф-ция клика по кнопкам выпадающего меню
const filters = document.querySelectorAll('.extract__filter-item');
const dropMenus = document.querySelectorAll('.extract__drop');
const iconFilters = document.querySelectorAll('.icon-filter');
for (let i = 0; i < filters.length; i++) {
    const element = filters[i];
    element.addEventListener('click', function(e){
        const dropMenu = element.querySelector('.extract__drop');
        const iconFilter = element.querySelector('.icon-filter');
        element.classList.toggle('item-active');
        if (element.classList.contains('item-active')) {
            for (let i = 0; i < dropMenus.length; i++) {
                const el = dropMenus[i];
                el.style.display = 'none';
            }
            for (let i = 0; i < iconFilters.length; i++) {
                const el = iconFilters[i];
                el.style.transform = 'rotate(0deg)';
            }
            iconFilter.style.transform = 'rotate(180deg)';
            dropMenu.style.display = 'block';
            for (let i = 0; i < filters.length; i++) {
                const el = filters[i];
                el.classList.remove('item-active');
            };
            element.classList.add('item-active');
        } else {
            iconFilter.style.transform = 'rotate(0deg)';
            dropMenu.style.display = 'none';
        };
        
    });
};

// Ф-ция кликов пунктов выпадающего меню
const extractDropItems = document.querySelectorAll('.extract__drop-item'); 
for (let i = 0; i < extractDropItems.length; i++) {
    const element = extractDropItems[i];
    const checkbox = element.querySelector('.checkbox');
    const checkboxs = element.parentElement.querySelectorAll('.checkbox');
    element.addEventListener('click', function(e){
        e.stopPropagation();
        checkbox.classList.toggle('bg-black');
        if (element.classList.contains('itemall')) {
            if (checkbox.classList.contains('bg-black')) {
                for (let i = 0; i < checkboxs.length; i++) {
                    const element = checkboxs[i];
                    element.classList.add('bg-black');
                };
            } else {
                for (let i = 0; i < checkboxs.length; i++) {
                    const element = checkboxs[i];
                    element.classList.remove('bg-black');
                };
            };
        };
        // Ф-ция кнопки сбросить
        const btnReset = element.parentElement.querySelector('.extract__btn-reset');
        btnReset.addEventListener('click', function(e){
            e.stopPropagation();
            for (let i = 0; i < checkboxs.length; i++) {
                const element = checkboxs[i];
                element.classList.remove('bg-black');
            };
        });
    });
};


// Массив выплат
let payments = [
    { name: 'АО “Альфа-Банк”',
      details: 'Уменьшение лимита при выдачи по договору №134532 ',
      number: '39940',
      date: new Date('2024, 11, 07'),
      sum: '+ 32 345, 00 Р'
    },
    { name: 'АО “Альфа-Банк”',
        details: 'Уменьшение лимита при выдачи по договору №134532 ',
        number: '39940',
        date: new Date('2024, 11, 07'),
        sum: '+ 56 345, 00 Р'
    },
    { name: 'АО “Альфа-Банк”',
        details: 'Уменьшение лимита при выдачи по договору №134532 ',
        number: '39940',
        date: new Date('2024, 11, 07'),
        sum: '+ 10 000, 00 Р'
    },
    { name: 'АО “Альфа-Банк”',
        details: 'Уменьшение лимита при выдачи по договору №134532 ',
        number: '39940',
        date: new Date('2024, 11, 07'),
        sum: '+ 35 345, 00 Р'
    },
    { name: 'АО “Альфа-Банк”',
        details: 'Уменьшение лимита при выдачи по договору №134532 ',
        number: '39940',
        date: new Date('2024, 09, 07'),
        sum: '+ 32 345, 00 Р'
    }
];
// Ф-ция построеня выплат из массива
const paymentsItems = document.querySelector('.payments__items');
function createPayment(name, details, number, date, sum) {
    let paymentsItem = document.createElement('div');
    paymentsItem.classList.add('payments__item');
    paymentsItems.append(paymentsItem);
    let paymentsCheck = document.createElement('div');
    paymentsCheck.classList.add('payments__check', 'checkbox', 'svg-container');
    paymentsCheck.innerHTML = '<svg class="icon" viewBox="0 0 14 10" width="12" height="10"><use href="img/component_1.svg#check"> </use></svg>';
    let paymentsType = document.createElement('div');
    paymentsType.classList.add('payments__type');
    paymentsType.innerHTML = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="16" fill="#005EB8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8001 16.7999C16.8001 15.4744 17.8746 14.3999 19.2001 14.3999H28.8001C30.1256 14.3999 31.2001 15.4744 31.2001 16.7999V31.1999C31.8628 31.1999 32.4001 31.7372 32.4001 32.3999C32.4001 33.0626 31.8628 33.5999 31.2001 33.5999H27.6001C26.9374 33.5999 26.4001 33.0626 26.4001 32.3999V29.9999C26.4001 29.3372 25.8628 28.7999 25.2001 28.7999H22.8001C22.1374 28.7999 21.6001 29.3372 21.6001 29.9999V32.3999C21.6001 33.0626 21.0628 33.5999 20.4001 33.5999H16.8001C16.1374 33.5999 15.6001 33.0626 15.6001 32.3999C15.6001 31.7372 16.1374 31.1999 16.8001 31.1999V16.7999ZM20.4001 17.9999H22.8001V20.3999H20.4001V17.9999ZM22.8001 22.7999H20.4001V25.1999H22.8001V22.7999ZM25.2001 17.9999H27.6001V20.3999H25.2001V17.9999ZM27.6001 22.7999H25.2001V25.1999H27.6001V22.7999Z" fill="white"/></svg>';
    let paymentsDate = document.createElement('div');
    paymentsDate.classList.add('payments__date', 'payments__text');
    function correctDate(x) {
        if (x < 10) {
            x = `0${x}`;
        }
        return x;
    };
    paymentsDate.innerHTML = `${correctDate(date.getDate())}.${correctDate(date.getMonth()+1)}.${date.getFullYear()}`
    let paymentsContent = document.createElement('div');
    paymentsContent.classList.add('payments__content');
    let paymentsContentTitle = document.createElement('div');
    let paymentsContentText = document.createElement('div');
    paymentsContentTitle.classList.add('payments__content-title', 'payments__text');
    paymentsContentText.classList.add('payments__content-text', 'payments__text');
    paymentsContentTitle.innerHTML = `${name}`;
    paymentsContentText.innerHTML = `${details}`;
    paymentsContent.append(paymentsContentTitle, paymentsContentText);
    let paymentsNumber = document.createElement('div');
    paymentsNumber.classList.add('payments__number', 'payments__text')
    paymentsNumber.innerHTML = `${number}`;
    let paymentsSum = document.createElement('div');
    paymentsSum.classList.add('payments__sum', 'payments__text')
    paymentsSum.innerHTML = `${sum}`;
    paymentsItem.append(paymentsCheck, paymentsType, paymentsDate, paymentsContent, paymentsNumber, paymentsSum);
    paymentsCheck.addEventListener('click', function(){
        this.classList.toggle('bg-black');
    });
};
// Ф-ция отметки выплаты
const paymentsHeaderCheck = document.querySelector('.payments__header-check');
paymentsHeaderCheck.addEventListener('click', function(){
    const paymentsChecks = document.querySelectorAll('.payments__check');
    paymentsHeaderCheck.classList.toggle('bg-black');
    if (paymentsHeaderCheck.classList.contains('bg-black')) {
        for (let i = 0; i < paymentsChecks.length; i++) {
            const element = paymentsChecks[i];
            element.classList.add('bg-black');
        };
    }else{
        for (let i = 0; i < paymentsChecks.length; i++) {
            const element = paymentsChecks[i];
            element.classList.remove('bg-black');
        };
    };
});
// Ф-ция вывода выплат
const extractFieldCount= document.querySelector('.extract__field-count');
function fillPayment() {
    for (let i = 0; i < payments.length; i++) {
        createPayment(payments[i].name, payments[i].details, payments[i].number, payments[i].date, payments[i].sum);
        extractFieldCount.innerHTML = `${payments.length}`;
    };
};
fillPayment();

const inputeSearch = document.querySelector('.extract__search');
const extractFilterAfter = document.querySelector('.extract__filter-after');
inputeSearch.addEventListener('input', function(){
    extractFilterAfter.style.display = 'block';
    extractFilterAfter.addEventListener('click', function(){
        inputeSearch.value = '';
        extractFilterAfter.style.display = 'none';
    });
    if (inputeSearch.value == '') {
        extractFilterAfter.style.display = 'none';
    }
});

onst quantityYear = document.querySelector('.quantity__year');
const quantityNum = document.querySelector('.quantity__num');
quantityNum.addEventListener('input', function(){
    if (quantityNum.value == '') {
        quantityYear.style.display = 'none';
    } else {
        quantityYear.style.display = 'block';
    };
    
});
const quantityArrowMinus = document.querySelector('.quantity__arrow-minus');
const quantityArrowPlus = document.querySelector('.quantity__arrow-plus');
quantityArrowMinus.addEventListener('click', function(){
    console.log(quantityNum.value)
    if (quantityNum.value == '') {
        quantityNum.value = 2025;
    }
    if (quantityNum.value > 1900) {
        quantityNum.value--;
    }
    quantityYear.style.display = 'block';
});
quantityArrowPlus.addEventListener('click', function(){
    if (quantityNum.value == '') {
        quantityNum.value = 2023;
    }
    if (quantityNum.value < 2099) {
        quantityNum.value++;
    }
    quantityYear.style.display = 'block';
});
