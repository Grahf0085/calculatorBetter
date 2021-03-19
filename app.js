import {
    addClick,
    subClick,
    mulClick,
    divClick
} from './handlers.js';


const addButton = document.getElementById('do-add');
const subButton = document.getElementById('do-sub');
const mulButton = document.getElementById('do-mul');
const divButton = document.getElementById('do-div');

addButton.addEventListener('click', addClick);

subButton.addEventListener('click', subClick);

mulButton.addEventListener('click', mulClick);

divButton.addEventListener('click', divClick);