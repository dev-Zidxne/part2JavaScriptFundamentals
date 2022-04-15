"use strict";

// Functions Practice------------------

const day1 = dayOfTheWeek("monday")

console.log(day1)

function dayOfTheWeek(day) {
    const day1 = `The day is ${day}`
    return day1
}
const tuesday = dayOfTheWeek("tuesday")


console.log(tuesday)


//-------declarative----------------------


function dayOfTheWeek(day) {
    const day4 = `The day is ${day}`
    return day4
}

const wednesday = dayOfTheWeek("wednesday")

console.log(wednesday)

//--------- declarative--------------------------------


function monthOfTheYear(month) {
    const month11 = `The current month of the year is ${month}.`;
    return month11
}

const november = monthOfTheYear("november")

console.log(november)

//---A function expression---------------

const monthOfTheYear = function (month) {
    return `The month is ${month} `
}

const november5 = monthOfTheYear("november")
console.log(november5)
