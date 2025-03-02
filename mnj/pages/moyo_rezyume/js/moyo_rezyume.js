const ret = JSON.parse(localStorage.getItem('userMNJ'));
const headerUserAccount = document.querySelector('.header__user-account')
headerUserAccount.textContent = `${ret.surname} ${ret.name.charAt(0)}.`

const aside = document.querySelector('.aside')
const asideItemArr = document.querySelectorAll('.aside__item')

for (let i = 0; i < asideItemArr.length; i++) {
    const element = asideItemArr[i];
    element.addEventListener('click', function(){
        for (let i = 0; i < asideItemArr.length; i++) {
            const el = asideItemArr[i];
            el.classList.remove('aside__item-active')
        }
        element.classList.add('aside__item-active')
    })
}
const burger = document.querySelector('.burger')
burger.addEventListener('click', function(){
    aside.classList.add('aside-active')
    console.log('1')
})
document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ 
		aside.classList.remove('aside-active')
	}
});
document.addEventListener( 'click', (e) => {
	const withinBoundariesAside = e.composedPath().includes(aside);
    const withinBoundariesBurger = e.composedPath().includes(burger);
	if ( !withinBoundariesAside) {
        if (!withinBoundariesBurger) {
            aside.classList.remove('aside-active')
        }
    }
})