const tagBtnArray = document.querySelectorAll('.tag__btn')
for (let i = 0; i < tagBtnArray.length; i++) {
    const tagBtn = tagBtnArray[i];
    tagBtn.addEventListener('click', function(){
        tagBtn.classList.toggle('tag__btn-active')
    })
}