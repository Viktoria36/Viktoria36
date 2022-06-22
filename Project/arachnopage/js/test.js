const btn__yes1 = document.querySelector('.question__1 .test-buttons .yes');
const btn__yes2 = document.querySelector('.question__2 .test-buttons .yes');
const btn__yes3 = document.querySelector('.question__3 .test-buttons .yes');
const btn__yes4 = document.querySelector('.question__4 .test-buttons .yes');
const btn__yes5 = document.querySelector('.question__5 .test-buttons .yes');
const btn__yes6 = document.querySelector('.question__6 .test-buttons .yes');
const btn__no1 = document.querySelectorAll('.question__1 .test-buttons .no');
const btn__no2 = document.querySelectorAll('.question__2 .test-buttons .no');
const btn__no3 = document.querySelectorAll('.question__3 .test-buttons .no');
const btn__no4 = document.querySelectorAll('.question__4 .test-buttons .no');
const btn__no5 = document.querySelectorAll('.question__5 .test-buttons .no');
const btn__no6 = document.querySelectorAll('.question__6 .test-buttons .no');
const btn__result = document.querySelector('.test-result .btn-test-result');
let i = 0;
btn__yes1.onclick = function(){
    ++i;
    btn__yes1.classList.add('true');
    for(let j = 0; j < 3; j++) {
        btn__no1[j].classList.add('false');
    }
    btn__yes1.setAttribute('disabled', 'disabled');
    for(let j = 0; j < 3; j++) {
        btn__no1[j].setAttribute('disabled', 'disabled');
    }
    alert("Молодец! Правильно!");
}
for(let j = 0; j < 3; j++) {
    btn__no1[j].onclick = function(){
        btn__yes1.classList.add('true');
        for(let j = 0; j < 3; j++) {
            btn__no1[j].classList.add('false');
        }
        btn__yes1.setAttribute('disabled', 'disabled');
        for(let j = 0; j < 3; j++) {
            btn__no1[j].setAttribute('disabled', 'disabled');
        }
        alert('Неправильный ответ');
    }
}
btn__yes2.onclick = function(){
    ++i;
    btn__yes2.classList.add('true');
    for(let j = 0; j < 3; j++) {
        btn__no2[j].classList.add('false');
    }
    btn__yes2.setAttribute('disabled', 'disabled');
    for(let j = 0; j < 3; j++) {
        btn__no2[j].setAttribute('disabled', 'disabled');
    }
    alert("Молодец! Правильно!");
}
for(let j = 0; j < 3; j++) {
    btn__no2[j].onclick = function(){
        btn__yes2.classList.add('true');
        for(let j = 0; j < 3; j++) {
            btn__no2[j].classList.add('false');
        }
        btn__yes2.setAttribute('disabled', 'disabled');
        for(let j = 0; j < 3; j++) {
            btn__no2[j].setAttribute('disabled', 'disabled');
        }
        alert('Неправильный ответ');
    }
}
btn__yes3.onclick = function(){
    ++i;
    btn__yes3.classList.add('true');
    for(let j = 0; j < 3; j++) {
        btn__no3[j].classList.add('false');
    }
    btn__yes3.setAttribute('disabled', 'disabled');
    for(let j = 0; j < 3; j++) {
        btn__no3[j].setAttribute('disabled', 'disabled');
    }
    alert("Молодец! Правильно!");
}
for(let j = 0; j < 3; j++) {
    btn__no3[j].onclick = function(){
        btn__yes3.classList.add('true');
        for(let j = 0; j < 3; j++) {
            btn__no3[j].classList.add('false');
        }
        btn__yes3.setAttribute('disabled', 'disabled');
        for(let j = 0; j < 3; j++) {
            btn__no3[j].setAttribute('disabled', 'disabled');
        }
        alert('Неправильный ответ');
    }
}
btn__yes4.onclick = function(){
    ++i;
    btn__yes4.classList.add('true');
    for(let j = 0; j < 3; j++) {
        btn__no4[j].classList.add('false');
    }
    btn__yes4.setAttribute('disabled', 'disabled');
    for(let j = 0; j < 3; j++) {
        btn__no4[j].setAttribute('disabled', 'disabled');
    }
    alert("Молодец! Правильно!");
}
for(let j = 0; j < 3; j++) {
    btn__no4[j].onclick = function(){
        btn__yes4.classList.add('true');
        for(let j = 0; j < 3; j++) {
            btn__no4[j].classList.add('false');
        }
        btn__yes4.setAttribute('disabled', 'disabled');
        for(let j = 0; j < 3; j++) {
            btn__no4[j].setAttribute('disabled', 'disabled');
        }
        alert('Неправильный ответ');
    }
}
btn__yes5.onclick = function(){
    ++i;
    btn__yes5.classList.add('true');
    for(let j = 0; j < 3; j++) {
        btn__no5[j].classList.add('false');
    }
    btn__yes5.setAttribute('disabled', 'disabled');
    for(let j = 0; j < 3; j++) {
        btn__no5[j].setAttribute('disabled', 'disabled');
    }
    alert("Молодец! Правильно!");
}
for(let j = 0; j < 3; j++) {
    btn__no5[j].onclick = function(){
        btn__yes5.classList.add('true');
        for(let j = 0; j < 3; j++) {
            btn__no5[j].classList.add('false');
        }
        btn__yes5.setAttribute('disabled', 'disabled');
        for(let j = 0; j < 3; j++) {
            btn__no5[j].setAttribute('disabled', 'disabled');
        }
        alert('Неправильный ответ');
    }
}
btn__yes6.onclick = function(){
    ++i;
    btn__yes6.classList.add('true');
    for(let j = 0; j < 3; j++) {
        btn__no6[j].classList.add('false');
    }
    btn__yes6.setAttribute('disabled', 'disabled');
    for(let j = 0; j < 3; j++) {
        btn__no6[j].setAttribute('disabled', 'disabled');
    }
    alert("Молодец! Правильно!");
}
for(let j = 0; j < 3; j++) {
    btn__no6[j].onclick = function(){
        btn__yes6.classList.add('true');
        for(let j = 0; j < 3; j++) {
            btn__no6[j].classList.add('false');
        }
        btn__yes6.setAttribute('disabled', 'disabled');
        for(let j = 0; j < 3; j++) {
            btn__no6[j].setAttribute('disabled', 'disabled');
        }
        alert('Неправильный ответ');
    }
}
btn__result.onclick = function(){
    alert('Ваш результат ' + i +  ' из 6');
}