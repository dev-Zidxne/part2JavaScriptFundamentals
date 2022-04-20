"use strict";

// //JavaScript Fundamentals – Part 2

// //LECTURE: Functions



// //1. Write a function called 'describeCountry' which takes three parameters:'country', 'population' and 'capitalCity'. Based on this input, thefunction returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

// //2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

// // #1--->

// function describeCountry(country, population, capitalCity) {


//     const countryDescription = `${country} has ${population} people and its capital city is ${capitalCity}.`;
//     return countryDescription;
// }

// //# 2--->
// const jamaica = describeCountry("Jamaica", "3 million", "Mobay")

// const USA = describeCountry("USA", "300 million", "Washington")

// const china = describeCountry("China", "1 billion", "Hong Kong")

// console.log(jamaica, USA, china)

// //LECTURE: Function Declarations vs. Expressions

// //1. The world population is 7900 million people. Create a function declarationcalled 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

// //3 Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

// //4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

// //Declaration--------------------------------------------------------------

// // #1 and #3--->
// // function percentageOfWorld2(population) {
// //     return population / 7900 * 100
// // }
// // const jamaicaPercentage = percentageOfWorld2(3)

// // const americaPercentage = percentageOfWorld2(300)

// // const chinaPercentage = percentageOfWorld2(1000)

// // console.log(jamaicaPercentage, americaPercentage, chinaPercentage)




// // // //Expression-----------------------------------------------------

// // #4--->



const percentageOfWorld1 = function (population) {
    return (population / 7900 * 100)
}
// const percentage1 = percentageOfWorld1(3)

// const percentage2 = percentageOfWorld1(300)

// const percentage3 = percentageOfWorld1(1000)

// console.log("", percentage1, '\n', percentage2, '\n', percentage3) // '\n' can be used to break content into new line on the console :O

// //LECTURE: Arrow Functions

// //1. Recreate the last assignment, but this time create an arrow function called'percentageOfWorld3'

// const percentOfWorld3 = population => population / 7900 * 100
// const country1 = percentOfWorld3(3)

// console.log(country1)

// //LECTURE: Functions Calling Other Functions

// /*1. Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice*/




// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population)
//     const description = `${country} has ${population} million people, which is ${percentage}% of the world`
//     console.log(description)
// }

// describePopulation("Jamaica", 3)
// describePopulation("USA", 300)
// describePopulation("China", 1000)

// /*LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values*/


// const populations = [3, 300, 1000, 200]

// console.log(populations.length == 4)

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ]
// console.log(percentages)

/*LECTURE: Introduction to Objects
 
/1. Create an object called 'myCountry' for a country of your choice, containingproperties 'country', 'capital', 'language', 'population' and'neighbours' (an array like we used in previous assignments)*/

// // # 1--------------------------->

// const myCountry = {
//     country: "Jamaica",
//     capital: "Kingston",
//     language: "english",
//     population: 3,
//     neighbours: ["Cuba", "Haiti", "Puerto Rico"]

// }

// LECTURE: Dot vs. Bracket Notation

/*1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.*/

// # 1----------------->
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// // # 2----------------->

// console.log(myCountry.population += 2)

// console.log(myCountry['population'] - 2)


//LECTURE: Object Methods

/* 1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.*/


//# 1------------------>
// const myCountry = {
//     country: "Jamaica",
//     capital: "Kingston",
//     language: "english",
//     population: 3,
//     neighbours: ["Cuba", "Haiti", "Puerto Rico"],
//     describe: function () {
//         console.log(
//             `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)

//     },
//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;

//     }


// }


// myCountry.checkIsland()

// console.log(myCountry.isIsland)

/*LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'  */

// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter ${voter} is currently voting`)
// }

/*LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is*/


// #1

const populations = [3, 300, 1000, 200]

// #2


const percentages2 = []

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i])
    percentages2.push(perc);

}
console.log(percentages2)


















