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
        console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`)
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

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)



const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages)




//Add Elements

const friends = ["Michael", "Steven", "Peter"]
const newLength = friends.push("Jay")
console.log(friends)

console.log(newLength)

friends.unshift("Zidane")
console.log(friends)




//Remove Elements

friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends)


friends.shift()
console.log(friends)

console.log(friends.indexOf("Steven"))
console.log(friends.indexOf("Bob"))// returns -1 because there is no "Bob" in the array


friends.push(23)
console.log(friends.includes("Steven"))
console.log(friends.includes("Bob"))
console.log(friends.includes(23)) //checks for strick equality (===)

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven")
}



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}



const bills = [125, 555, 44]
const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])]


const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]


console.log(bills, tips, totals)



//Intro to Objects
const zidane = {
    firstName: "Zidane",
    lastNAme: "Innis",
    age: 2037 - 2001,
    job: " programmer",
    friends: ["Michael", "Peter", "Steven"]

};


console.log(zidane)



const zidane = {
    firstName: "Zidane",
    lastName: "Innis",
    age: 2037 - 2001,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"]

}



console.log(zidane)

console.log(zidane.lastName);
console.log(zidane["lastName"])

const nameKey = "Name"
console.log(zidane["first" + nameKey])
console.log(zidane["last" + nameKey])

// console.log(zidane."last" + nameKey)

const interestedIn = prompt("What do you want to know about Zidane? Choose between firstName, lastName, age, job, and friends")


if (zidane[interestedIn]) {
    console.log(zidane[interestedIn])
} else {
    console.log("Wrong Request! Choose between firstName, lastName, age, job, and friends")
}


zidane.location = "Jamaica";
zidane["instagram"] = "@zidxne_"
console.log(zidane);


//Challenge

console.log(`${zidane.firstName} has ${zidane.friends.length} friends, and his best friend is called ${zidane.friends[0]}`)

//Object Methods

const zidane = {
    firstName: "Zidane",
    lastName: "Innis",
    birthYear: 2001,
    job: "programmer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${zidane.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`





    }

};

console.log(zidane.calcAge())

console.log(zidane.age)
console.log(zidane.age)
console.log(zidane.age)


//Challenge
console.log(zidane.getSummary())



const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,




    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI

    }

}


const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,




    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI
    }

}

// SO after many trials and error I realized I must run these methods below first in order to log them by their property name(mark.BMI) in the console 

mark.calcBMI()
john.calcBMI()
/* if these aren't run first I realized the BMI values would come out as "undefined". 
 
I also noticed i could put ${mark.calcBMI()} in the template literal for example and it would output the value as well.

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} BMI (${john.BMI})`)
} else {
    (john.BMI > mark.BMI)
    console.log(`${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})`)

}





// console.log("Lifting weights repetition 1")
// console.log("Lifting weights repetition 2")
// console.log("Lifting weights repetition 3")
// console.log("Lifting weights repetition 4")
// console.log("Lifting weights repetition 5")
// console.log("Lifting weights repetition 6")
// console.log("Lifting weights repetition 7")
// console.log("Lifting weights repetition 8")
// console.log("Lifting weights repetition 9")
// console.log("Lifting weights repetition 10")

*/

//Iteration: The For Loop


//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}





