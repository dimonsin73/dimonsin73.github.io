const buttons = document.querySelectorAll('.aside__btn');
for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < buttons.length; i++) {
            const el = buttons[i];
            el.classList.remove('aside__btn-selected');
        };
        element.classList.add('aside__btn-selected');
    });
};


const menu = document.querySelector('.header__item-menu');
const aside = document.querySelector('.aside');
menu.addEventListener('click', function(){
    aside.style.marginLeft = '0';
    aside.classList.add('aside-active');
});
document.addEventListener('click', function(e) {
    let screenWidth = window.innerWidth;
    const outsideAside = e.composedPath().includes(aside);
    const outsideMenu = e.composedPath().includes(menu);
    if (screenWidth < '1024') {
        if (!outsideAside) {
            if (!outsideMenu) {
                aside.style.marginLeft = '-240px';
                aside.classList.remove('aside-active');
            };
        };
    };
});
document.addEventListener('keydown', function(e) {
    let innerWidth = window.innerWidth;
    if (innerWidth < '1024') {
        if( e.keyCode == 27 ){ 
            aside.style.marginLeft = '-240px';
            aside.classList.remove('aside-active');
        }; 
    }
	
});