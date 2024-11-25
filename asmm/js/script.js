const buttons = document.querySelectorAll('.menu__head');
const menuSlides = document.querySelectorAll('.menu__slide');
const menuContentWrapper = document.querySelector('.menu__content-wrapper');
for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    element.addEventListener('click', function () {
        switch (element.dataset.btn) {
            case '1':
                menuContentWrapper.style.height = '0px';
                for (let i = 0; i < menuSlides.length; i++) {
                    const element = menuSlides[i];
                    if (element.dataset.content == '1') {
                        element.style.height = `${element.scrollHeight}px`;
                    } else {
                        element.style.height = '0';
                    };
                };
                break;
            case '2':
                menuContentWrapper.style.height = '0px';
                for (let i = 0; i < menuSlides.length; i++) {
                    const element = menuSlides[i];
                    if (element.dataset.content == '2') {
                        element.style.height = `${element.scrollHeight}px`;
                    } else {
                        element.style.height = '0';
                    };
                };
                break;
            case '3':
                menuContentWrapper.style.height = '0px';
                for (let i = 0; i < menuSlides.length; i++) {
                    const element = menuSlides[i];
                    if (element.dataset.content == '3') {
                        element.style.height = `${element.scrollHeight}px`;
                    } else {
                        element.style.height = '0';
                    };
                };
                break;
        
            default:
                break;
        }
    });
};