const rr1 = document.getElementById('registration__radio-1')
const rr2 = document.getElementById('registration__radio-2')
const rr3 = document.getElementById('registration__radio-3')
const rr4 = document.getElementById('registration__radio-4')
const form1 = document.getElementById('ltForm1582131')
const form2 = document.getElementById('ltForm8871401')
const checks = document.querySelectorAll('.registration__radio-input')
const email1 = document.getElementById('email1')
const name1 = document.getElementById('name1')
const tel1 = document.getElementById('tel1')
const email2 = document.getElementById('email2')
const name2 = document.getElementById('name2')
const tel2 = document.getElementById('tel2')
for (let i = 0; i < checks.length; i++) {
    const check = checks[i];
    check.addEventListener('change', function(){
        if (rr1.checked) {
            form1.style.display = 'flex'
            form2.style.display = 'none'
            rr1.checked = true
            rr2.checked = false
            rr3.checked = false
            rr4.checked = false
        }
        if (rr2.checked) {
            form1.style.display = 'none'
            form2.style.display = 'flex'
            rr1.checked = false
            rr2.checked = false
            rr3.checked = false
            rr4.checked = true
            email2.value = email1.value
            name2.value = name1.value
            tel2.value = tel1.value
        }
        if (rr3.checked) {
            form1.style.display = 'flex'
            form2.style.display = 'none'
            rr1.checked = true
            rr2.checked = false
            rr3.checked = false
            rr4.checked = false
            email1.value = email2.value
            name1.value = name2.value
            tel1.value = tel2.value
        }
        if (rr4.checked) {
            form1.style.display = 'none'
            form2.style.display = 'flex'
            rr1.checked = false
            rr2.checked = false
            rr3.checked = false
            rr4.checked = true
        }

    })
}
window.addEventListener('load', function(){
    let loc = document.getElementById("139470367e54822bf917");
    loc.value = window.location.href;
    let ref = document.getElementById("139470367e54822bf917ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});

window.addEventListener('load', function(){
    let loc = document.getElementById("139470867e547e8ec593");
    loc.value = window.location.href;
    let ref = document.getElementById("139470867e547e8ec593ref");
    ref.value = document.referrer;

    let statUrl = "https://womanproject.ru/stat/counter?ref=" + encodeURIComponent(document.referrer)
        + "&loc=" + encodeURIComponent(document.location.href);
    document.getElementById('gccounterImgContainer').innerHTML
        = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
});