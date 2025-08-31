const headerBurger = document.querySelector('.header__burger')
const aside = document.querySelector('.aside')
headerBurger.addEventListener('click', function(){
    aside.classList.add('aside_active')
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(aside);
        if ( ! withinBoundaries ) {
            const withinBoundariesBurger = e.composedPath().includes(headerBurger);
            if (! withinBoundariesBurger) {
                aside.classList.remove('aside_active')
            }
        }
    }) //Скрытие Aside по щелчку вне 
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ 
            aside.classList.remove('aside_active')
        }
    }) //Скрытие Aside по нажатию на ESC
})
const kabinetTabArray = document.querySelectorAll('.kabinet__tab')
const kabinetContainerArray = document.querySelectorAll('.kabinet__container')
for (let i = 0; i < kabinetTabArray.length; i++) {
    const kabinetTab = kabinetTabArray[i];
    kabinetTab.addEventListener('click', function(){
        for (let i = 0; i < kabinetTabArray.length; i++) {
            const kt = kabinetTabArray[i];
            kt.classList.remove('kabinet__tab-active')
        }
        kabinetTab.classList.add('kabinet__tab-active')
        const dataKabinet = kabinetTab.dataset.panel
        for (let i = 0; i < kabinetContainerArray.length; i++) {
            const kabinetContainer = kabinetContainerArray[i];
            if (kabinetContainer.dataset.panel === dataKabinet) {
                kabinetContainer.classList.add('kabinet__container-active')
            } else {
                panelContainer.classList.remove('kabinet__container-active')
            }
        }
    })
}
const headerArray = document.querySelectorAll('.header')
const headerClickArray = document.querySelectorAll('.header__click')
for (let i = 0; i < headerClickArray.length; i++) {
    const headerClick = headerClickArray[i];
    headerClick.addEventListener('click', function(){
        const dataClick = headerClick.dataset.click
        for (let i = 0; i < headerArray.length; i++) {
            const header = headerArray[i];
            if (header.classList.contains(dataClick)) {
                header.style.display = 'flex'
            } else {
                header.style.display = 'none'
            }
        }
    })
}