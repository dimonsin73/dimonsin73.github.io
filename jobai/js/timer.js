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
const timer = document.querySelector('.timer')
registraciyaTimer(timer)