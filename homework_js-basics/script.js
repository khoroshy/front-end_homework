let nameInp = document.querySelector('.name__text');
let nameOut = document.querySelector('.message__text');
let nameRes = document.querySelector('.name__submit');
const ageInp = document.querySelector('.age__input');
let ageOut = document.querySelector('.age__text');
let ageRes = document.querySelector('.age__submit');
const date = new Date();
const year = date.getFullYear();
let sqrInp = document.querySelector('.square__intput');
let sqrOut = document.querySelector('.square__text');
let sqrRes = document.querySelector('.square__submit');


nameRes.onclick = () => {
    nameOut.innerHTML = nameInp.value;
};

ageRes.onclick = () => {
    ageOut.innerHTML = year - ageInp.value;
};

sqrRes.onclick = () => {
    sqrOut.innerHTML = sqrInp.value * 4;
};

