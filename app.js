let mathResult;
let result = document.getElementById('add-result');
const button = document.getElementById('do-it');

button.addEventListener('click', () => {

    const firstNumber = document.getElementById('first-input');
    const secondNumber = document.getElementById('second-input');

    mathResult = Number(firstNumber.value) + Number(secondNumber.value);

    result.textContent = mathResult; 
});
