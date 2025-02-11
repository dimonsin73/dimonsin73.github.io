const form = document.querySelector('.form')
// Поля ввода
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', function(event){
    event.preventDefault()
    email.classList.add('attribut__input-error')
    password.classList.add('attribut__input-error')
})
// Убрать состояние Error
email.addEventListener('input', function(){
    email.classList.remove('attribut__input-error')
})
password.addEventListener('input', function(){
    password.classList.remove('attribut__input-error')
})  