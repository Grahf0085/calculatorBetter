// IMPORT MODULES under test here:
// import { example } from '../example.js';

import {add, sub, div, mul} from '../utils.js'

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const addExpected = 12;
    const subExpected = 12;
    const mulExpected = 12;
    const divExpected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const addActual = add(4, 8);
    const subAcutal = sub(13, 1);
    const mulActual = mul(4, 3);
    const divActual = div(12, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(addActual, addExpected);
    expect.equal(subAcutal, subExpected);
    expect.equal(mulActual, mulExpected);
    expect.equal(divActual, divExpected);
});
