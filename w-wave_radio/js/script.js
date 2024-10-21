const element = document.querySelector('.broadcast__author');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
});

new Accordion('.accordion-container');

const LogIn = document.getElementById('header__btn');
const LogInTop = document.getElementById('header__btn-top');
const Modal = document.getElementById('modal');
const ModalWrapper = document.querySelector('.modal__wrapper');
const ModalClose = document.getElementById('modal__close');

LogIn.addEventListener('click', function () {
    Modal.show();
});
LogInTop.addEventListener('click', function () {
    Modal.show();
});
ModalClose.addEventListener('click', function () {
    Modal.close();
});
Modal.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(ModalWrapper);
	if (!withinBoundaries ) {
		Modal.close();
	};
});
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ 
		Modal.close();
	}
});

const PodcastPlays = document.querySelectorAll('.play-btn');
const Plays = document.querySelectorAll('.play-play');
const Pauses = document.querySelectorAll('.play-pause');

for (let i = 0; i < PodcastPlays.length; i++) {
    PodcastPlays[i].addEventListener('click', function(){
        if (PodcastPlays[i].className.includes('active')) {
            PodcastPlays[i].classList.remove('active');
            Plays[i].style.display = 'block'; 
            Pauses[i].style.display = 'none';
        } else {
            for (let index = 0; index < PodcastPlays.length; index++) {
                PodcastPlays[index].classList.remove('active');
                Plays[index].style.display = 'block'; 
                Pauses[index].style.display = 'none';
            }
            PodcastPlays[i].classList.add('active');
            Plays[i].style.display = 'none'; 
            Pauses[i].style.display = 'block'; 
        };
    });
};

const Music = document.querySelectorAll('.header__item-btn');
const MusicPlays = document.querySelectorAll('.header__item-play');
const MusicPauses = document.querySelectorAll('.header__item-pause');

for (let i = 0; i < Music.length; i++) {
    Music[i].addEventListener('click', function(){
        if (Music[i].className.includes('active')) {
            Music[i].classList.remove('active');
            MusicPlays[i].style.display = 'block'; 
            MusicPauses[i].style.display = 'none';
        } else {
            for (let index = 0; index < Music.length; index++) {
                Music[index].classList.remove('active');
                MusicPlays[index].style.display = 'block'; 
                MusicPauses[index].style.display = 'none';
            }
            Music[i].classList.add('active');
            MusicPlays[i].style.display = 'none'; 
            MusicPauses[i].style.display = 'block'; 
        };
    });
};

const PodcastBtn = document.getElementById('podcasts__btn');
const Podcasts = document.querySelectorAll('.podcast');
PodcastBtn.addEventListener('click', function () {
    for (const podcast of Podcasts) {
        podcast.style.display = 'flex';
    };
});


const Guests = document.querySelectorAll('.ac-text');
const Img = document.querySelector('.guests__info-img');
const Social = document.querySelector('.guests__info-social');
const Name = document.querySelector('.guests__info-name');
const Description = document.querySelector('.guests__info-description');
const Btn = document.querySelector('.guests__info-btn');
const Plug = document.querySelector('.plug');

for (const guest of Guests) {
    guest.addEventListener('click', function (){
        for (const iterator of Guests) {
            iterator.classList.remove('ac-click');
        }
        this.classList.add('ac-click');
        Plug.style.display = 'none';
        Img.innerHTML = '';
        let guest_img = document.createElement('img');
        guest_img.setAttribute('src', `img/visitor/${this.textContent}.jpg`);
        guest_img.setAttribute('alt', `${this.textContent}`);
        Img.append(guest_img);
        Name.textContent = this.textContent;
        Social.style.display = 'block';
        if (this.textContent === 'Ольга Мартынова') {
            Description.textContent = 'Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты «Коммерсантъ». Ведёт активную блогерскую деятельность как куратор музея «Гараж», коим является с 2016 года.';
        } else {
            Description.textContent = `Описание о нашем госте. Это ${this.textContent}`
        }
        Btn.style.display = 'block';

    });
}

const Search = document.querySelector('.header__search');
const SearchInput = document.querySelector('.header__form-search');
const SearchForm = document.querySelector('.header__form');
Search.addEventListener('click', function (e) {
    e.preventDefault();
    SearchInput.style.display = 'block';
})


document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(SearchForm);
	if (!withinBoundaries ) {
		SearchInput.style.display = 'none'; 
	};
});


const Burger = document.querySelector('.burger');
const Menu = document.querySelector('.menu');
const MenuClose = document.querySelector('.menu__close');
Burger.addEventListener('click', function () {
    Menu.style.display = 'block';
})
MenuClose.addEventListener('click', function () {
    Menu.style.display = 'none';
});

const Now = document.querySelector('.now');
const NowPlus = document.querySelector('.now__plus');
const MusicNow = document.querySelector('.music');
Now.addEventListener('click', function () {
    if (MusicNow.style.display === 'flex') {
        NowPlus.style.transform = 'rotate(0deg)';
        MusicNow.style.display = 'none'
    } else{
        NowPlus.style.transform = 'rotate(45deg)';
        MusicNow.style.display = 'flex';
    };    
});

window.addEventListener('resize', function () {
  if( window.innerWidth >= 768 ){
    MusicNow.style.display = 'none';
  } 
})


const ErrorMessage = document.createElement('div');
ErrorMessage.textContent = 'Ошибка';
ErrorMessage.classList.add('error-message')

const Submit = document.querySelector('.about__input-btn');
const TextForm = document.getElementById('textarea');
const NameForm = document.getElementById('name');
const Email = document.getElementById('email');
const Check = document.querySelector('.about__check');
const Checkbox = document.querySelector('.about__checkbox');
const TextError = document.getElementById('textarea-error');
const NameError = document.getElementById('name-error');
const EmailError = document.getElementById('email-error');

Submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (TextForm.value.length < 10 ) {
        TextForm.classList.add('error');
        TextError.textContent = 'Сообщение слишком короткое';
    }
    if (NameForm.value.length < 3) {
        NameForm.classList.add('error');
        NameError.textContent = 'Вы ввели сликом короткое имя';
    }
    if (!Email.value.includes('@')) {
        Email.classList.add('error');
        EmailError.textContent = 'Вы ввели некорректный email';
    }
    if (Email.value.length < 5) {
        Email.classList.add('error');
        EmailError.textContent = 'Слишком короткий email';
    }
    if (!Check.checked) {
        Checkbox.classList.add('error-check');
    }
});
TextForm.addEventListener('input', function () {
    TextForm.classList.remove('error');
    TextError.textContent = '';
});
NameForm.addEventListener('input', function () {
    NameForm.classList.remove('error');
    NameError.textContent = '';
});
Email.addEventListener('input', function () {
    Email.classList.remove('error');
    EmailError.textContent = '';
});
Check.addEventListener('input', function (){
    Checkbox.classList.remove('error-check');
})

const ModalBtn = document.querySelector('.modal-btn');
const ModalLogin = document.getElementById('login');
const ModalPassword = document.getElementById('password');
const LoginError = document.getElementById('login-error');
const PasswordError = document.getElementById('password-error');
ModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (ModalLogin.value.length < 3 ) {
        ModalLogin.classList.add('error');
        LoginError.textContent = 'Логин слишком короткий';
    }
    if (ModalPassword.value.length < 6) {
        ModalPassword.classList.add('error');
        PasswordError.textContent = 'Вы ввели слишком короткий пароль';
    }
});
ModalLogin.addEventListener('input', function () {
    ModalLogin.classList.remove('error');
    LoginError.textContent = '';
});
ModalPassword.addEventListener('input', function () {
    ModalPassword.classList.remove('error');
    PasswordError.textContent = '';
});

const SliderBtn = document.querySelectorAll('.playlists__slider-item');
for (const iterator of SliderBtn) {
    iterator.addEventListener('click', function () {
        if (this.className.includes('playlists__slider-active')) {
            this.classList.remove('playlists__slider-active');
        } else {
            for (const iterator of SliderBtn) {
                iterator.classList.remove('playlists__slider-active');
            }
            this.classList.add('playlists__slider-active');
        }
    });
};

const Playlists = document.querySelectorAll('.playlists__card');
const PlaylistsBtn = document.querySelectorAll('.playlists__play-btn');
for (let i = 0; i < Playlists.length; i++) {
    Playlists[i].addEventListener('click', function () {
        PlaylistsBtn[i].focus();
    });
};