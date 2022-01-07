// 18. expression, statement
const userName = "Song";

const age = 18;
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You have to wait");
}

// exrpession vs statement
const currentYear = 2022;
const birthYear = 2000;
// const userAge = `Your age is ${currentYear - birthYear}.`;
const userAge = currentYear - birthYear;
const userAge = `Your age is ${if(userAge > 18) console.log("You can vote")}.`;























