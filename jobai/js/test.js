const popupArray = document.querySelectorAll('.popup')
for (let i = 0; i < popupArray.length; i++) {
    const popup = popupArray[i];
    const popupWrapper = popup.querySelector('.popup__wrapper')
    if (window.innerWidth < '767') {
        popup.addEventListener('click', function(){
            popup.classList.add('popup_active')
        })
        document.addEventListener('click', (e) => {
            const withinBoundaries = e.composedPath().includes(popupWrapper);
            if ( ! withinBoundaries ) {
                popup.classList.remove('popup_active')
            }
        })
    } else {
        popup.addEventListener('mouseenter', function(){
            popup.classList.add('popup_active')
        })
        popup.addEventListener('mouseleave', function(){
            popup.classList.remove('popup_active')
        })
    }
    
}

const neumorphicButtonArray = document.querySelectorAll('.neumorphic-button')
for (let i = 0; i < neumorphicButtonArray.length; i++) {
    const neumorphicButton = neumorphicButtonArray[i];
    neumorphicButton.addEventListener('click', function(){
        neumorphicButton.classList.toggle('neumorphic-button-active')
    })    
}