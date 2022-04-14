/*Strict Mode Lecture

//Always enable strict mode going forward

//strict modes help to show errors in your code to easier avoid them

"use strict"; // strict mode activation

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive")

// const interface = "Audio"; interface is a reserved word

// const private = 444;
*/

"use strict";

function logger() {
    console.log("My name is Zidane")
}

//calling/ running / invoking functions

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");




