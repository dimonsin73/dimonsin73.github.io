const textareaAdjustmentArray = document.querySelectorAll('.textarea_adjustment')
for (let i = 0; i < textareaAdjustmentArray.length; i++) {
    const textareaAdjustment = textareaAdjustmentArray[i];
    textareaAdjustment.addEventListener('focus', function(){
        textareaAdjustment.classList.add('textarea_adjustment-active')
    }) 
    textareaAdjustment.addEventListener('focusout', function(){
        textareaAdjustment.classList.remove('textarea_adjustment-active')
    }) 
}