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



// const percentageOfWorld1 = function (population) {
//     return (population / 7900 * 100)
// }
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







