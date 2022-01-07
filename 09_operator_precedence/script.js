// 09 Operator Precedence
const currentYear = 2045;
const ageNeo = currentYear - 1999;
const ageTrinity = currentYear - 2000;
// console.log(ageNeo > ageTrinity);

// (currentYear - 1999) > (currentYear - 2000)

// 좌결합
// 50 - 30 - 20 -> (50 - 30) - 20 -> 0;

// 우결합
// 50 - 30 - 20 -> 50 - (30 - 20) -> 40;

// **, *
// let result;
// result = 3 * 2 ** 3;
//
// // 3 * (2 ** 3) -> 3 * 8 -> 24;
// console.log(result);

// assignment operator, 대입(할당) 연산자
let a, b;

a = b = 3;
// a = (b = 3); b -> 3
// a = b(3);
// a -> 3, b -> 3
// console.log(a, b);
//
// a = b = 50 + 30 -10;
// console.log(a, b);
// a = b = (50 + 30 -10);

// 좌결합
// (50 - 30) - 20 -> 0;

// 우결합
// 50 - (30 - 20) -> 40;
// +, /
console.log(ageNeo, ageTrinity);
const ageAverage = (ageNeo + ageTrinity) / 2;
console.log(ageAverage);

// const ageAverage = ageNeo + (ageTrinity / 2);
// 46 + 22.5 -> 68.5




















































































