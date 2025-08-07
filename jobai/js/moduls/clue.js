const clueArray = document.querySelectorAll('.clue')
for (let i = 0; i < clueArray.length; i++) {
    const clue = clueArray[i];
    const clueText = clue.querySelector('.clue__text')
    clue.addEventListener('mouseover', function(){
        clueText.classList.add('clue__text-active')
    })
    clue.addEventListener('mouseout', function(){
        clueText.classList.remove('clue__text-active')
    })
}