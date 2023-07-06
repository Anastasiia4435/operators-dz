//first

const text1 = document.querySelector('.first-1');
const text2 = document.querySelector('.second-1');
const btn = document.querySelector('.btn-1');
const trueFalse = document.querySelector('.trueFalse');

btn.addEventListener('click', event => {
    if (text1.value.length > 0 && text2.value.length > 0){
        trueFalse.textContent = "Обидва поля заповнені";
        trueFalse.style.color = '#a8e98a'
    }
    else {
        trueFalse.textContent = "Не всі поля заповнені";
        trueFalse.style.color = 'rgb(233, 114, 114)';
    }
})

//second

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const btn2 = document.querySelector('.btn-2');
const trueFalse2 = document.querySelector('.trueFalse2');

btn2.addEventListener('click', summa)

function summa(){
    let n1 = number1.value;
    let n2 = number2.value;

    n1 = Number(n1);
    n2 = Number(n2);

    let plus = n1 + n2;

    if(plus > 10) {
        trueFalse2.innerHTML = "Сума більша за 10";
        trueFalse2.style.color = '#a8e98a'
    }
    else {
        trueFalse2.innerHTML = "Сума менша або дорівнює 10";
        trueFalse2.style.color = '#e9a359'
    }
}

//third

const jsText = document.querySelector('.jsText');
const jsBtn = document.querySelector('.jsBtn');
const jsResults = document.querySelector('.jsResults')

jsBtn.addEventListener('click', findingWord);

function findingWord(){
    let textValue = jsText.value;

    if(textValue.includes("JavaScript")){
        jsResults.textContent = "Текст містить слово JavaScript";
        jsResults.style.color = '#a8e98a'
    }
    else {
        jsResults.textContent = "Текст не містить слово JavaScript";
        jsResults.style.color = 'rgb(233, 114, 114)'
    }
}

//fourth 

const number = document.querySelector(".number");
const btnNumber = document.querySelector(".btnNumber");
const nResults = document.querySelector(".nResults");

btnNumber.addEventListener('click', checking);

function checking(){
    let n = number.value;
    n = Number(n)

    if(n > 10 && n < 20) {
        nResults.textContent = "Число входить в діапазон від 10 до 20";
        nResults.style.color = '#a8e98a'
    }
    else {
        nResults.textContent = "Число не входить в діапазон від 10 до 20";
        nResults.style.color = 'rgb(233, 114, 114)'
    }
}

//fifth

const name1 = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');
const regBtn = document.querySelector('.regBtn');
const link = document.querySelector('.link');

regBtn.addEventListener('click', () => {

    if (name1.value.length >= 3){
        nameError.textContent = "";
    }
    else {
        nameError.textContent = "ім'я має містити не менше 3 символів";
    }

    if (password.value.length >= 6){
        passwordError.textContent = "";
    }
    else {
        passwordError.textContent = "пароль має містити не менше 6 символів"
    }

    if (email.value.includes("@") && email.value.includes(".") && email.value.length > 1){
        emailError.textContent = "";
    }
    else {
        emailError.textContent = "email введений неправильно";
    }

    if (name1.value.length >= 3 && password.value.length >= 6 && email.value.includes("@") && email.value.includes(".") && email.value.length > 1) {
        link.textContent = "Натисніть сюди, якщо ви завершили реєстрацію";
    }
})