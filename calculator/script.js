let input1 = 0;
let currentOperator = null;
const number = document.querySelectorAll('.digit');
const result = document.querySelector('#output');
for(let i = 0; i < number.length; i++){
    const currentElement = number[i];
    currentElement.addEventListener('click', function(){
        if(result.innerText == 0){
            result.innerText = currentElement.innerText;
        }
        else{
            result.innerText += currentElement.innerText;
        }
    });
}
const operator = document.querySelectorAll('.operator');
for(let i = 0; i < operator.length; i++){
    const currentElement = operator[i];
    currentElement.addEventListener('click', function(){
        input1 = result.innerText;
        currentOperator = selectOperator(currentElement.innerText);
        result.innerText = '0';
    });
}
const selectOperator = function(input){
    if(input == '+'){
        return sum;
    }
    if(input == '-'){
        return diff;
    }
    if(input == '*'){
        return mul;
    }
    if(input == '/'){
        return div;
    }
}
const remove = document.querySelector('#remove');
remove.addEventListener('click', function(){
    if(result.innerText.length > 1){
        result.innerText = result.innerText.slice(0, -1);
    }
    else{
        result.innerText = '0';
    }
});
const restart = document.querySelector('#clear');
restart.addEventListener('click', function(){
    result.innerText = '0';
});
const calculate = document.querySelector('#equal');
calculate.addEventListener('click', function(){
    result.innerText = currentOperator(input1, result.innerText);
});
const sum = function(a, b){
    return parseInt(a) + parseInt(b);
}
const diff = function(a, b){
    return a - b;
}
const mul = function(a, b){
    return a * b;
}
const div = function(a, b){
    return a / b;
}