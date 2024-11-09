const screenWidth = window.screen.width;
const NAVBTN = document.getElementById('news__nav-btn');
const NEWSNAV = document.getElementById('news__nav');
const SCROLLBTN = document.getElementById('news__sctoll-btn');
const SCROLL = document.getElementById('scroll');
const btn = document.querySelector('.expanded-btn');

NAVBTN.addEventListener('click', function(){
    let classes = NEWSNAV.classList.value;
    if ( classes.includes('expanded') ) {
        NEWSNAV.classList.remove('expanded');
        if (screenWidth < '1023') {
            NEWSNAV.style.height = '150px';
        } else {
            NEWSNAV.style.height = '400px';
        }
        btn.innerHTML = 'Открыть полностью';
    } else {
        NEWSNAV.classList.add('expanded');
        NEWSNAV.style.height = 'calc(100% - 40px)';
        btn.innerHTML = 'Свернуть оглавление';
    };
});
SCROLLBTN.addEventListener('click', function(){
    let classes = SCROLL.classList.value;
    if ( classes.includes('expanded') ) {
        SCROLL.classList.remove('expanded');
        SCROLL.style.height = '350px';
        btn.innerHTML = 'Открыть полностью';
    } else {
        SCROLL.classList.add('expanded');
        SCROLL.style.height = '100%';
        btn.innerHTML = 'Свернуть оглавление';
    };
});