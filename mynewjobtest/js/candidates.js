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

var slider = document.querySelector('.search__range-input');
var output = document.querySelector('.search__range-output');

slider.oninput = function() {
    output.innerHTML = `${this.value}%`;
}

const quantityYear = document.querySelector('.quantity__year');
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
