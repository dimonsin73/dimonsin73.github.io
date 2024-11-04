const BTNSORT = document.querySelectorAll('.header__list-btn');
const BLOGSITEM = document.querySelectorAll('.blogs__item');
for (let i = 0; i < BTNSORT.length; i++) {
    const element = BTNSORT[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < BTNSORT.length; i++) {
            const element = BTNSORT[i];
            element.classList.remove('item-active');
        };
        element.classList.add('item-active');
        let sortParam = element.dataset.sort;

        for (let i = 0; i < BLOGSITEM.length; i++) {
            const element = BLOGSITEM[i];
            element.style.display = 'none';
            switch (sortParam) {
                case 'all':
                    element.style.display = 'block';
                    break;
                default:
                    if (element.dataset.sort == sortParam) {
                        element.style.display = 'block';
                    };
                    break;
            }
        };
        
    });
};

const NAVBTN = document.getElementById('news__nav-btn');
const NAV = document.getElementById('news__nav');
const SCROLLBTN = document.getElementById('news__sctoll-btn');
const SCROLL = document.getElementById('scroll');

NAVBTN.addEventListener('click', function(){
    expanded(NAVBTN, NAV);
});
SCROLLBTN.addEventListener('click', function(){
    expanded(SCROLLBTN, SCROLL);
});

function expanded(btn, list) {
    let classes = list.classList.value;
    if ( classes.includes('expanded') ) {
        list.classList.remove('expanded');
        list.style.height = '400px';
        btn.innerHTML = 'Открыть полностью';
    } else {
        list.classList.add('expanded');
        list.style.height = '800px';
        
        btn.innerHTML = 'Свернуть оглавление';
    };
};

