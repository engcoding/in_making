// 11. if conditional decision
const yourAge = 17;
// const canVote = yourAge >= 18;
// console.log(canVote);

if (yourAge >= 18) { // 조건이 참일 때
    console.log("You can vote.");
} else { // 조건이 거짓일 때
    const tillVote = 18 - yourAge;
    console.log(`You have to wait ${tillVote} year(s).`);
}
// Pass, Fail
const testScroe = 50;
let passFail;

if (testScroe >= 70) {
    passFail = "Pass";
} else {
    passFail = "Fail";
}
console.log(passFail);





































































