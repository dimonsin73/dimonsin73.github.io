const rangeInputArray = document.querySelectorAll('.range__input')
for (let i = 0; i < rangeInputArray.length; i++) {
    const rangeInput = rangeInputArray[i];
    const rangeNumber = rangeInput.parentElement.querySelector('.range__number')
    rangeInput.addEventListener('input', function(){
        rangeNumber.textContent = `${rangeInput.value}%`
    })
}
const switchInputArray = document.querySelectorAll('.switch__input')
for (let i = 0; i < switchInputArray.length; i++) {
    const switchInput = switchInputArray[i];
    switchInput.addEventListener('change', function(){
        const rangeInput = switchInput.parentElement.parentElement.querySelector('.range__input')
        if (switchInput.checked) {
            rangeInput.disabled = false
        } else {
            rangeInput.disabled = true
        }
    })
}