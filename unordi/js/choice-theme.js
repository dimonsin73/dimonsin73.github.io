const body = document.activeElement
let themeSite = localStorage.getItem('theme')
if (themeSite == 'light') {
    body.classList.add('light-theme')
    body.classList.remove('dark-theme')
} 
if (themeSite == 'dark') {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme') 
}

