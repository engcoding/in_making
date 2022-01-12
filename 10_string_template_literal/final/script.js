// 10. string template literal
const user = "neo";
const greeting = "Hello" + " " + user;
// console.log(greeting);

const myName = "Neo";
const myJob = "Hacker";
const myAge = "45";
// const neo = "My name is " + " " + myName + ". " + "I am " + "a " + myJob + ". " + "I am" + " " + myAge + ".";

// console.log(neo);

// 숫자
const neoAge = 45 + " years old";
// console.log(typeof neo);

// ES6, String Template Literal
const templateNeo = `I am ${myName}. I am a ${myJob}. ${myAge} years old.`;

console.log(templateNeo);
const neoAge2 = `He is ${70 - 30} years old.`;
console.log(neoAge2);
console.log(typeof neoAge2);

// muti-line
const notMultiLIne = "First line" +
                     "Second line" +
                     "Third line"
console.log(notMultiLIne);
// console.log("First line \n\
// Second line \n\
// Third line \n");

const trueMultiLine = `First line
Second line
Third line`;
console.log(trueMultiLine);




















































