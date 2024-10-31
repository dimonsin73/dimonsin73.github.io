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
