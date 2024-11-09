const screenWidth = window.screen.width;

const BTNLANGUAGE = document.querySelectorAll('.language__btn');
for (let i = 0; i < BTNLANGUAGE.length; i++) {
    const element = BTNLANGUAGE[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < BTNLANGUAGE.length; i++) {
            const element = BTNLANGUAGE[i];
            element.classList.remove('language__btn-active');
        };
        element.classList.add('language__btn-active');
    });
};

const QUESTION = document.querySelector('.postNews__question');
const CLUE = document.querySelector('.postNews__clue');
const CLUEBTN = document.querySelector('.postNews__clue-btn');
const CLUEHIDDEN = document.querySelectorAll('.postNews__clue-hidden');
QUESTION.addEventListener('mouseover', function(){
    CLUE.style.display = 'block';
    CLUEBTN.addEventListener('click', function(){
        CLUE.style.width = '716px';
        if (screenWidth < '767') {
            CLUE.style.width = '410px';
        }
        if (screenWidth < '424') {
            CLUE.style.width = '300px';
        }
        for (let i = 0; i < CLUEHIDDEN.length; i++) {
            const element = CLUEHIDDEN[i];
            element.style.display = 'block';
        };
    });
});
QUESTION.addEventListener('mouseleave', function(){ 
    CLUE.style.display = 'none';
    CLUE.style.width = '312px';
    for (let i = 0; i < CLUEHIDDEN.length; i++) {
        const element = CLUEHIDDEN[i];
        element.style.display = 'none';
    };
});

const FILESBTN = document.getElementById('files-btn');
const FILESERROR = document.querySelector('.files__footer-error')
FILESBTN.addEventListener('click', function(){
    FILESERROR.style.display = 'block';
});

const FORMADD1 = document.getElementById('form__add-1');
const FORMHIDDEN1 = document.getElementById('form__hidden-1');
FORMADD1.addEventListener('click', function(){
    FORMHIDDEN1.style.display = 'grid';
});

const FORMADD2 = document.getElementById('form__add-2');
const FORMHIDDEN2 = document.getElementById('form__hidden-2');
FORMADD2.addEventListener('click', function(){
    FORMHIDDEN2.style.display = 'grid';
});

const BTNCLOSE1 = document.getElementById('form__close-1');
const BTNCLOSE2 = document.getElementById('form__close-2');
BTNCLOSE1.addEventListener('click', function(){
    FORMHIDDEN1.style.display = 'none';
});
BTNCLOSE2.addEventListener('click', function(){
    FORMHIDDEN2.style.display = 'none';
});
const FILESTELEGRAMLOAD = document.querySelector('.files__telegram-load');
const FILESTELEGRAM = document.querySelectorAll('.files__telegram-hidden');
FILESTELEGRAMLOAD.addEventListener('click', function(){
    FILESTELEGRAMLOAD.style.display = 'none';
    for (let i = 0; i < FILESTELEGRAM.length; i++) {
        const element = FILESTELEGRAM[i];
        element.style.display = 'flex';
    }
});

let countSlides;
if (screenWidth >= '1440') {
    countSlides = '4';
}
if (screenWidth < '1440') {
    countSlides = '3';
}
if (screenWidth < '1024') {
    countSlides = '2';
}
if (screenWidth < '768') {
    countSlides = '1';
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: countSlides,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const POSTBTNDELETE = document.querySelectorAll('.post__btn-delete');
for (let i = 0; i < POSTBTNDELETE.length; i++) {
    const element = POSTBTNDELETE[i];
    element.addEventListener('click', function(){
        element.classList.toggle('delete-active');
    });
  };