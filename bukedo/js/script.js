const flowerBtns = document.querySelectorAll('.flower__btn');
for (let i = 0; i < flowerBtns.length; i++) {
    const element = flowerBtns[i];
    element.addEventListener('click', function(){
        element.classList.toggle('flower__btn-active');
        if (element.classList.contains('flower__btn-active')) {
            element.innerHTML = 'В корзине';
        } else {
            element.innerHTML = 'Купить';
        };
    });
};

const flowerHears = document.querySelectorAll('.flower__heart')
for (let i = 0; i < flowerHears.length; i++) {
    const element = flowerHears[i];
    element.addEventListener('click', function(){
        element.classList.toggle('flower__heart-active');
    });
};