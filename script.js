const btn = document.querySelectorAll('.button__number');
const input = document.querySelector('.input');
const clear = document.querySelector('.button__ac');
const actions = document.querySelectorAll('.button__do');
const result = document.querySelector('.button__equality')
const dot = document.querySelector('.button__dot')
const back = document.querySelector('.button__larr')
const prosent = document.querySelector('.button__prosent')

let number1 = '';
let number2 = '';
let pracent = '100';
let addition = '';
let finish = '';

// вывод кнопок
function action(event){
    if(addition === '-' && number1 === ''){
        number1 += addition;
        number1 += event.target.innerText;
        input.innerText = number1  
        addition = ''      
    } else if(number1 == '' || addition === ''){
        number1 += event.target.innerText;
        input.innerText = number1;
    } else {
        number2 += event.target.innerText;
        input.innerText = number2;
    }
console.log('number #1: '+ number1 +', '+'number #2: ' +number2);
} 
    
// Работа с кнопками действия
function add (event){
    addition = event.target.innerText;
    input.innerText = addition;
    console.log(addition);
}  

// работа со сбросом
clear.addEventListener('click', function clear(){
    if(number1 > 0 || number2 > 0 || finish !== '0'){
        number1 ='';
        number2 ='';
        addition ='';
        finish =''
        input.innerText = 0;
        
    }
})

// Шаг назад
function larr (){
    if(number1 >= 0 && addition === ''){
        number1 = number1.slice(0, -1);
        input.innerText = number1;
    } else {
        number2 = number2.slice(0, -1);
        input.innerText = number2;
    }
}

// Добравление точки
function fraction(event){
let point = event.target.innerText
    if (point === '.' && !number1.includes('.') && number1 !== '' && addition === '') {
        number1 += point;
    } else if (point === '.' && !number2.includes('.') && number2 !== '') {
        number2 += point;
    }     
}     
// Процент от числа
prosent.addEventListener('click', function(){
    if(number2 >=0){
        number2 = number1 / pracent * number2;
        finish = number2;
    }
});

// результат
function finich(){
    if(addition === '+'){
        number1 = (+number1) + (+number2);
        if(number1 === Math.trunc(number1)){
            finish = number1
            number2 = '';
            addition = '';
            input.innerText = finish;
            number1 = String(number1)
            console.log(number1)
        } else {
            number2 = '';
            addition = '';
            finish = number1.toFixed(2)
            input.innerText = finish;
            number1 = String(number1);
            console.log(number1);
       }
    } else if (addition === '-'){
       number1 = number1 - number2;
            if(number1 === Math.trunc(number1)){
            finish = number1
            number2 = '';
            addition = '';
            input.innerText = finish;
            number1 = String(number1);
            console.log(number1);
       } else {
            number2 = '';
            addition = '';
            finish = number1.toFixed(2)
            input.innerText = finish;
            number1 = String(number1);
            console.log(number1);
       }
    } else if (addition === '*'){
        number1 = number1 * number2;
            if(number1 === Math.trunc(number1)){
            finish = number1
            number2 = '';
            addition = '';
            input.innerText = finish;
            number1 = String(number1)
            console.log(number1);
       } else {
            number2 = '';
            addition = '';
            finish = number1.toFixed(2)
            input.innerText = finish;
            console.log(number1);
            number1 = String(number1);
       }
    } else if (addition === '/'){
        number1 = number1 / number2;
        if(number1 === Math.trunc(number1)){
            finish = number1
            number2 = '';
            addition = '';
            input.innerText = finish;
            number1 = String(number1)
            console.log(number1);
       } else {
            number2 = '';
            addition = '';
            finish = number1.toFixed(2)
            input.innerText = finish;
            number1 = String(number1)
            console.log(number1);
       }
    } else if (addition === '%'){
        finish = number2;
        number2 = '';
        addition = '';
        finish = number1.toFixed(2);
        input.innerText = finish;
        number1 = String(number1)
        console.log(number1);
}}

// обход классов 
for(let a of actions){
    a.addEventListener ('click', add)};
for(let i of btn){

i.addEventListener('click', action)};

back.addEventListener('click', larr);

result.addEventListener('click', finich);

dot.addEventListener('click', fraction);
