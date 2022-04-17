"use strict";
/*Strict Mode Lecture*/

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






const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }

}

// return `${firstName} retires in ${retirement} years`



console.log(yearsUntilRetirement(1991, "Zidane"))

console.log(yearsUntilRetirement(1950, "Chris"))



//My Answer to code function challenge


const calcAverage = scores => scores / 3
let dolphinsAverage = calcAverage(44 + 23 + 71)
let koalasAverage = calcAverage(65 + 54 + 49)
console.log("", dolphinsAverage, '\n', koalasAverage)

function checkWinner(dolphinsAverage, koalasAverage) {
    if (koalasAverage > 2 * dolphinsAverage)
        return `Koalas win (${koalasAverage} vs ${dolphinsAverage})`
    else if (dolphinsAverage > 2 * koalasAverage)
        return `Dolphins win (${dolphinsAverage} vs ${koalasAverage})`
    else return `No one wins`
}

console.log(checkWinner(dolphinsAverage, koalasAverage))



//Lecture's code

//Note: Lecturer did not use return to output string instead he used the console.log output. He also made his Arrow function with a + b + c to have the values added with the fucntion without need to put a (+) symbol between each like I did.


const calcAverage = (a, b, c) => (a + b + c) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)
console.log("", scoreDolphins, '\n', scoreKoalas);

function checkWinner(dolphinsAverage, koalasAverage) {
    if (koalasAverage > 2 * dolphinsAverage)
        console.logI(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`)
    else if (dolphinsAverage > 2 * koalasAverage)
        console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`)
    else console.log(`No one wins`)
}

checkWinner(scoreDolphins, scoreKoalas)



//Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";


const friends = ["Micael", "Steven", "Peter"]
console.log(friends);

const y = new Array(1991, 1984, 2001, 2020);


console.log(friends[0])
console.log(friends[2])

console.log(friends.length)

console.log(friends[friends.length - 1])

friends[2] = "Drake"

console.log(friends)

//friends = ["Bob", "Alice"]//

const firstName = "Zidane";

const zidane = [firstName, "Innis", 2037 - 2001, "teacher", friends];
console.log(zidane.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages)










