"use strict";

// Functions Practice------------------

// const day1 = dayOfTheWeek("monday")

// console.log(day1)

// function dayOfTheWeek(day) {
//     const day1 = `The day is ${day}`
//     return day1
// }
// const tuesday = dayOfTheWeek("tuesday")


// console.log(tuesday)


// //-------declarative----------------------


// function dayOfTheWeek(day) {
//     const day4 = `The day is ${day}`
//     return day4
// }

// const wednesday = dayOfTheWeek("wednesday")

// console.log(wednesday)

// //--------- declarative--------------------------------


// function monthOfTheYear(month) {
//     const month11 = `The current month of the year is ${month}.`;
//     return month11
// }

// const november = monthOfTheYear("november")

// console.log(november)

// //---A function expression---------------

// const monthOfTheYear = function (month) {
//     return `The month is ${month} `
// }

// const november5 = monthOfTheYear("november")
// console.log(november5)


//JavaScript Fundamentals – Part 2

const describeCountry = function (country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`)
}

describeCountry("Jamaica", 3, "Kingston")
describeCountry("USA", 3, "Washington DC")
describeCountry("UK", 3, "London")

//LECTURE: Function Declarations vs.Expressions

const worldPopulation = 7900

function percentageOfWorld1(population) {
    return population / worldPopulation * 100

}


const jamaicaPop = percentageOfWorld1(3)
const USAPop = percentageOfWorld1(300)

const UKPop = percentageOfWorld1(67)



console.log("", jamaicaPop, "\n", USAPop, "\n", UKPop)

// const worldPopulation = 7900

// const percentageOfWorld2 = function (population) {
//     return population / worldPopulation * 100
// }

// const jamaicaPop = percentageOfWorld2(3)
// const USAPop = percentageOfWorld2(300)

// const UKPop = percentageOfWorld2(67)



// console.log("", jamaicaPop, "\n", USAPop, "\n", UKPop)


//LECTURE: Arrow Functions

// const percentageOfWorld3 = population => (population / 7900 * 100);

// const jamaicaPop = percentageOfWorld3(3)
// const USAPop = percentageOfWorld3(300)

// const UKPop = percentageOfWorld3(67)



// console.log("", jamaicaPop, "\n", USAPop, "\n", UKPop)


//LECTURE: Functions Calling Other Functions

const describePopulation = function (country, population) {
    console.log(`${country} has a ${population} million people, which is about ${percentageOfWorld1(population)}`)

}


describePopulation("USA", 300)
describePopulation("UK", 67)
describePopulation("Jamaica", 3)



//LECTURE: Introduction to Arrays 


let populations = [67, 300, 3, 400]

console.log((populations.length === 4))

const percentages = [

    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])

]

console.log(percentages)


//LECTURE: Basic Array Operations (Methods)


const neighbours = ["Mexico", "Canada", "Bahamas"]


neighbours.push("Utopia")

console.log(neighbours)

neighbours.pop()

console.log(neighbours)

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D")

}


//LECTURE: Introduction to Objects


const myCountry = {
    country: "America",
    capital: "Washington DC",
    language: "English",
    population: 300,
    neighbours: ["Canada", "Mexica", "Bahamas"],
    // LECTURE: Object Methods   
    describe: function () {
        //realized now that I must the console.log in the method so when it is called it will just log the string to the console smh
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
        )
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false
        return this.isIsland
    }
}
//LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} -speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} `)


console.log(myCountry.population += 2)
console.log(myCountry["population"] -= 2)

myCountry.describe()
myCountry.checkIsland()

console.log(myCountry.checkIsland())

//LECTURE: Iteration: The for Loop


for (let i = 0; i <= 50; i++) {
    console.log(`Voter ${i} is currently voting`)
}

//LECTURE: Looping Arrays, Breaking and Continuing




populations = [67, 300, 3, 400]

const percentages2 = []

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i])
    percentages2.push(perc)

}


console.log(percentages2)


//LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
    ["Canada", "Mexica"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
]

for (let i = 0; i < listOfNeighbours.length; i++)
    for (let y = 0; y < listOfNeighbours[i].length; y++)
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);




populations = [67, 300, 3, 400]

const percentages3 = []

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i])
    push.percentages3(perc); i++

}







