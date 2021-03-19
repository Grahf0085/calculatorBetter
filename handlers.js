import {
    add,
    sub,
    div,
    mul,
} from './utils.js';

let mathResult;

export function addClick() {
    
    const firstNumber = document.getElementById('first-input');
    const secondNumber = document.getElementById('second-input');
    let result = document.getElementById('result');

    mathResult = add(Number(firstNumber.value), Number(secondNumber.value));

    result.textContent = mathResult; 
}

export function subClick() {

    const firstNumber = document.getElementById('first-input');
    const secondNumber = document.getElementById('second-input');
    let result = document.getElementById('result');

    mathResult = sub(Number(firstNumber.value), Number(secondNumber.value));

    result.textContent = mathResult; 
}

export function mulClick() {

    const firstNumber = document.getElementById('first-input');
    const secondNumber = document.getElementById('second-input');
    let result = document.getElementById('result');

    mathResult = mul(Number(firstNumber.value), Number(secondNumber.value));

    result.textContent = mathResult; 
}

export function divClick() {

    const firstNumber = document.getElementById('first-input');
    const secondNumber = document.getElementById('second-input');
    let result = document.getElementById('result');

    mathResult = div(Number(firstNumber.value), Number(secondNumber.value));

    result.textContent = mathResult; 
}