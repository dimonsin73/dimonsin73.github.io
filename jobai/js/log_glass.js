
const glassBtnArray = document.querySelectorAll('.glass__btn')
for (let i = 0; i < glassBtnArray.length; i++) {
    const glassBtn = glassBtnArray[i];
    glassBtn.addEventListener('click', function(){
        glassBtn.classList.toggle('glass__btn-active')
    })    
}
const arrowMenu = document.querySelector('.arrow-menu')
const arrowHiro = document.querySelector('.arrow-hiro')
const menu = document.getElementById('menu')
const hiro = document.getElementById('hiro')
window.addEventListener('wheel', function (e) {
    const delta = e.deltaY;
    if (delta > 0) {
        menu.classList.add('menu_up')
        hiro.classList.add('hiro_up')
        arrowMenu.style.display = 'none'
        arrowHiro.style.display = 'block'
    } else {
        menu.classList.remove('menu_up')
        hiro.classList.remove('hiro_up')
        arrowMenu.style.display = 'block'
        arrowHiro.style.display = 'none'
    }
})
let startX, startY;
window.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
})
window.addEventListener('touchmove', function(e) {
    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let deltaX = currentX - startX;
    let deltaY = currentY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            // свайп вправо
        } else {
            // свайп влево
        }
    } else {
        if (deltaY < 0) {
            menu.classList.add('menu_up')
            hiro.classList.add('hiro_up')
            arrowMenu.style.display = 'none'
            arrowHiro.style.display = 'block'
        } else {
            menu.classList.remove('menu_up')
            hiro.classList.remove('hiro_up')
            arrowMenu.style.display = 'block'
            arrowHiro.style.display = 'none'
        }
    }
})
arrowMenu.addEventListener("click", function(){
    menu.classList.add('menu_up')
    hiro.classList.add('hiro_up')
})
arrowHiro.addEventListener("click", function(){
    menu.classList.remove('menu_up')
    hiro.classList.remove('hiro_up')
})