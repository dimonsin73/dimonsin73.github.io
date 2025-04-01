const modalBtnArr = document.querySelectorAll('.modal-btn')
const modals = document.querySelectorAll('.modal')
for (let i = 0; i < modalBtnArr.length; i++) {
    const modalBtn = modalBtnArr[i];
    modalBtn.addEventListener('click', function(){
        for (let i = 0; i < modals.length; i++) {
            const modal = modals[i];
            if (modalBtn.dataset.rate == modal.dataset.modal) {
                modal.classList.add('modal-active')
                const modalForm = modal.querySelector('.modal__form')
                const modalClose = modal.querySelector('.modal__close')
                modalClose.addEventListener('click', function(){
                    modal.classList.remove('modal-active')
                })
                document.addEventListener( 'mousedown', (e) => {
                    const withinBoundaries = e.composedPath().includes(modalForm);
                    if ( ! withinBoundaries ) {
                        modal.classList.remove('modal-active')
                    }
                })
                document.addEventListener('keydown', function(e) {
                    if( e.keyCode == 27 ){ 
                        modal.classList.remove('modal-active')
                    }
                });
            }
            
        }
        
    })
}


window.addEventListener('load', function(){
    let loc = document.getElementById("139204367e11932d4350");
    loc.value = window.location.href;
    let ref = document.getElementById("139204367e11932d4350ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});
window.addEventListener('load', function(){
    let loc = document.getElementById("139205867e1194720843");
    loc.value = window.location.href;
    let ref = document.getElementById("139205867e1194720843ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});
window.addEventListener('load', function(){
    let loc = document.getElementById("139205967e1195fabb55");
    loc.value = window.location.href;
    let ref = document.getElementById("139205967e1195fabb55ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});
window.addEventListener('load', function(){
    let loc = document.getElementById("139207067e119761f0b3");
    loc.value = window.location.href;
    let ref = document.getElementById("139207067e119761f0b3ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});
window.addEventListener('load', function(){
    let loc = document.getElementById("139207167e11987b180d");
    loc.value = window.location.href;
    let ref = document.getElementById("139207167e11987b180dref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});
window.addEventListener('load', function(){
    let loc = document.getElementById("139207367e1199735b73");
    loc.value = window.location.href;
    let ref = document.getElementById("139207367e1199735b73ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});