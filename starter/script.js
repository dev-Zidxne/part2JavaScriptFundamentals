"use strict";
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


"use strict";

function logger() {
    console.log("My name is Zidane");
}

//calling/ running / invoking functions

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // return basically puts back the into the variable which is fruitProcessor in this
}

const appleJuice = fruitProcessor(5, 0); // here we put values into them

console.log(appleJuice); // it is displays full string from fruitProcessor

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");



//Function Declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function Expressions

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

function dayOfTheWeek(day) {
    const monday = `The day is ${day}`;
    return monday;

}



//Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "Zidane"));
console.log(yearsUntilRetirement(1976, "Chris"));



//Functions Calling Other Functions
function cutPieces(fruit) {
    return fruit * 8;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces
        } pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


*/



// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }
// yearsUntilRetirement(1991, "ZIdane")

const monthOfTheYear = function (month) {
    return `The month is ${month} `
}

const november = monthOfTheYear("november")
console.log(november)
