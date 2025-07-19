const inputAdjustmentArray = document.querySelectorAll('.input_adjustment')
for (let i = 0; i < inputAdjustmentArray.length; i++) {
    const inputAdjustment = inputAdjustmentArray[i];
    inputAdjustment.addEventListener('focus', function(){
        inputAdjustment.classList.add('input_adjustment-active')
    }) 
    inputAdjustment.addEventListener('focusout', function(){
        inputAdjustment.classList.remove('input_adjustment-active')
    }) 
}