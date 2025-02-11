const form = document.querySelector('.form')
// Поля ввода
const email = document.getElementById('email')
const attributError = email.parentElement.nextSibling
form.addEventListener('submit', function(event){
    event.preventDefault()
    email.classList.add('attribut__input-error')
    attributError.style.opacity = '1'
})
// Убрать состояние Error
email.addEventListener('input', function(){
    email.classList.remove('attribut__input-error')
    attributError.style.opacity = '0'
})