const screenWidth = window.screen.width;    
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


const filesClose = document.querySelectorAll('.files__download-close');
for (let i = 0; i < filesClose.length; i++) {
    const element = filesClose[i];
    element.addEventListener('click', function(){
        element.classList.toggle('files__close-active');
    });
};

const btnUpdates = document.querySelectorAll('.post__btn-update');
for (let i = 0; i < btnUpdates.length; i++) {
    const btnUpdate = btnUpdates[i];
    btnUpdate.addEventListener('click', function(){
        if (btnUpdate.classList.contains('post__btn-updateActive')) {
            btnUpdate.classList.remove('post__btn-updateActive');
            const container = btnUpdate.parentElement.parentElement.parentElement;
            for (let i = 0; i < container.children.length; i++) {
                const element = container.children[i];
                if (element.classList.contains('post-subtext')) {
                    element.innerHTML = 'Оставить без измениний';
                };
            };
            const PDD = container.querySelector('.post__div-delete');
            PDD.hidden = false;
        } else {
            btnUpdate.classList.add('post__btn-updateActive');
            const container = btnUpdate.parentElement.parentElement.parentElement;
            for (let i = 0; i < container.children.length; i++) {
                const element = container.children[i];
                if (element.classList.contains('post-subtext')) {
                    element.innerHTML = 'Создать новое на основе этого';
                };
            };
            const PDD = container.querySelector('.post__div-delete');
            PDD.hidden = true;
        };
    });
};

const btnDeletes = document.querySelectorAll('.post__btn-delete');
for (let i = 0; i < btnDeletes.length; i++) {
    const btnDelete = btnDeletes[i];
    btnDelete.addEventListener('click', function(){
        if (btnDelete.classList.contains('delete-active')) {
            btnDelete.classList.remove('delete-active');
            const container = btnDelete.parentElement.parentElement.parentElement;
            for (let i = 0; i < container.children.length; i++) {
                const element = container.children[i];
                if (element.classList.contains('post-subtext')) {
                    element.innerHTML = 'Оставить без измениний';
                };
            };
            const PDU = container.querySelector('.post__div-update');
            PDU.hidden = false;
        } else {
            console.log('1')
            btnDelete.classList.add('delete-active');
            const container = btnDelete.parentElement.parentElement.parentElement;
            for (let i = 0; i < container.children.length; i++) {
                const element = container.children[i];
                if (element.classList.contains('post-subtext')) {
                    element.innerHTML = 'Удалить';
                };
            };
            const PDU = container.querySelector('.post__div-update');
            PDU.hidden = true;
        };
    });
};
