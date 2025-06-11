// переход карта\список
const addressesTabsBtn = document.querySelectorAll('.addresses__tabs-btn')
const addressesList = document.getElementById('addresses-list')
const addressesMap = document.getElementById('addresses-map')
for (let i = 0; i < addressesTabsBtn.length; i++) {
    const element = addressesTabsBtn[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < addressesTabsBtn.length; i++) {
            const element = addressesTabsBtn[i];
            element.classList.remove('addresses__tabs-btn-active')
        }
        element.classList.add('addresses__tabs-btn-active')
        switch (element.dataset.tab) {
            case 'list':
                addressesList.style.display = 'block'
                addressesMap.style.display = 'none'
                break;
            case 'map':
                addressesMap.style.display = 'block'
                addressesList.style.display = 'none'
                break;
            default:
                break;
        }
    })
}
// переход в магазин 
const addressesContentBtnArr = document.querySelectorAll('.addresses__content-btn')
for (let i = 0; i < addressesContentBtnArr.length; i++) {
    const element = addressesContentBtnArr[i];
    element.addEventListener('click', function(){
        window.location.href = 'shop.html'
    })
}
// Карта 
// Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("addresses-map", {
        center: [55.758829, 37.621567],
        zoom: 13
    });
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    shop1 = new ymaps.Placemark([55.761355, 37.551717], {
        hintContent: 'г. Москва, 2-я Звенигородская улица, 13с42',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, 2-я Звенигородская улица, 13с42</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
        
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
        
    }),
    shop2 = new ymaps.Placemark([55.737294, 37.693857], {
        hintContent: 'г. Москва, Нижегородская, 25',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, Нижегородская, 25</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),
    shop3 = new ymaps.Placemark([55.739934, 37.674606], {
        hintContent: 'г. Москва, Рогожский вал, 17',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, Рогожский вал, 17</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),
    shop4 = new ymaps.Placemark([55.737568, 37.631748], {
        hintContent: 'г. Москва, Новокузнецкая улица, 13с1',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, Новокузнецкая улица, 13с1</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),
    shop5 = new ymaps.Placemark([55.740902, 37.606155], {
        hintContent: 'г. Москва, Курсовой переулок, 13',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, Курсовой переулок, 13</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),
    shop6 = new ymaps.Placemark([55.752060, 37.591081], {
        hintContent: 'г. Москва, улица Новый Арбат, 17',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, улица Новый Арбат, 17</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),
    shop7 = new ymaps.Placemark([55.767590, 37.600945], {
        hintContent: 'г. Москва, Тверская улица, 22',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, Тверская улица, 22</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),
    shop8 = new ymaps.Placemark([55.762262, 37.642276   ], {
        hintContent: 'г. Москва, Чистопрудный бульвар, 10с1',
        balloonContentBody: '<div class="addresses__content-item "><h4 class="addresses__content-title">г. Москва, Чистопрудный бульвар, 10с1</h4> <div class="addresses__content-delivery"><div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Время работы</h5> <p class="addresses__content-subtext">Пн-Вс 8:00-22:00</p></div>  <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Телефон</h5> <a href="tel:+7 901 634-66-28" class="addresses__content-subtext">+7 901 634-66-28</a></div> <div class="addresses__content-paragraph"><h5 class="addresses__content-subtitle">Доставка</h5> <p class="addresses__content-subtext">450 ₽ через 3-4 часа</p></div> </div> <a href="shop.html" class="addresses__content-btn btn btn_primary">Заказать в магазине</a> </div>',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker.png',
        iconImageSize: [44, 50]
    }),

  
    myMap.geoObjects
        .add(shop1)
        .add(shop2)
        .add(shop3)
        .add(shop4)
        .add(shop5)
        .add(shop6)
        .add(shop7)
        .add(shop8)
}