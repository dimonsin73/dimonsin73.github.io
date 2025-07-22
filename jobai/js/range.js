const rangeInputArray = document.querySelectorAll('.range__input')
for (let i = 0; i < rangeInputArray.length; i++) {
    const rangeInput = rangeInputArray[i];
    const rangeNumber = rangeInput.parentElement.querySelector('.range__number')
    rangeInput.addEventListener('input', function(){
        rangeNumber.textContent = `${rangeInput.value}%`
    })
}