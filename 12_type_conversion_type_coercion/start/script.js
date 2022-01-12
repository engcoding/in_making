// 12. Type Conversion(형변환), Type Coercion(형강제변환)
// type conversion, 형변환
// const inputYear = "2010";
// let voteYear = inputYear + 18;
// console.log(voteYear);
// console.log(typeof voteYear);
// // Number()
// const newInputYear = Number(inputYear);
// console.log(typeof newInputYear);
//
// voteYear = newInputYear + 18;
// console.log(voteYear);
// console.log(`type of inputYear: ${typeof inputYear}`);
//
// const myName = "song";
// console.log(Number(myName));
// console.log(typeof NaN);
// to String
// String()
// const currentYear = 2022;
// let numToString;
//
// numToString = String(currentYear);
// console.log(numToString);
// console.log(typeof numToString);
// console.log(typeof currentYear);
// to Number, to String, to Boolean
// Type Coercion (형강제변환)
// const toString = "2010" + 18;
// console.log(toString);
//
// const toString2 = 18 + "2000";
// console.log(toString2);
//
// const voteAge = "You can vote in " + 2018;
// const voteAge2 = "You can vote in " + "2018";
// const voteAge3 = `You can vote in 2018`;
// console.log(voteAge);
// console.log(voteAge2);
// console.log(voteAge3);
// - operator
// const numMinus = "2010" - 10;
// const numMinus2 = 10 - "2010";
// console.log(numMinus, numMinus2);
//
// console.log("2010" + 10);
// // *, /  type coercion (형강제변환)
// console.log("45" * 2);
// console.log(2 * "45");
//
// const div = "45" / 5;
// console.log(div);
//
// // Quiz!
// let num = "2010" + 1;
// console.log(num);
// num -= 1;   // num = num -1
// console.log(num);

// Quiz!!
const sum = 1 + 2 + "3";
console.log(sum);

const sum2 = 1 + 2 + "3" + 4 + 5;
/*
1 + 2; 3
3 + "3"; "33"
"33" + 4: "334"
"334" + 5: "3345"
 */
console.log(sum2);

const minusSum = "5" - "4" - "3" - "2" - 1;
console.log(minusSum);
// Type Coercion (형강제변환)








































