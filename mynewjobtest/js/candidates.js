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