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

function registraciyaTimer(timer) {
    const minutes = timer.querySelector('.timer__minutes')
    const seconds = timer.querySelector('.timer__seconds')
    let minutesValue =  Number(minutes.textContent)
    let secondsValue = Number(seconds.textContent)
    setInterval(function() {
        if (secondsValue > 0) {
            secondsValue--
        } else {
            if (minutesValue - 1 >= 0) {
                minutesValue--
                secondsValue = 60 - 1
            } else {
                clearInterval
            }
        }
        if (secondsValue < 10) {
            seconds.textContent = `0${secondsValue}`
        } else {
            seconds.textContent = secondsValue
        }
        if (minutesValue < 10) {
            minutes.textContent = `0${minutesValue}`
        } else {
            minutes.textContent = minutesValue
        }
    }, 1000)
}
const timerArray = document.querySelectorAll('.timer')
for (let i = 0; i < timerArray.length; i++) {
    const timer = timerArray[i];
    registraciyaTimer(timer)
}
