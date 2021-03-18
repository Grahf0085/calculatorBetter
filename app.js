let mathResult;

const addButton = document.getElementById('do-add');
const subButton = document.getElementById('do-sub');
const mulButton = document.getElementById('do-mul');
const divButton = document.getElementById('do-div');



addButton.addEventListener('click', () => {

    const firstNumber = document.getElementById('first-add');
    const secondNumber = document.getElementById('second-add');
    let result = document.getElementById('result-add');

    mathResult = Number(firstNumber.value) + Number(secondNumber.value);

    result.textContent = mathResult; 
});

subButton.addEventListener('click', () => {

    const firstNumber = document.getElementById('first-sub');
    const secondNumber = document.getElementById('second-sub');
    let result = document.getElementById('result-sub');

    mathResult = Number(firstNumber.value) - Number(secondNumber.value);

    result.textContent = mathResult; 
});

mulButton.addEventListener('click', () => {

    const firstNumber = document.getElementById('first-mul');
    const secondNumber = document.getElementById('second-mul');
    let result = document.getElementById('result-mul');

    mathResult = Number(firstNumber.value) * Number(secondNumber.value);

    result.textContent = mathResult; 
});

divButton.addEventListener('click', () => {

    const firstNumber = document.getElementById('first-div');
    const secondNumber = document.getElementById('second-div');
    let result = document.getElementById('result-div');

    mathResult = Number(firstNumber.value) / Number(secondNumber.value);

    result.textContent = mathResult; 
});
