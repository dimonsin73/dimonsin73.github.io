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
