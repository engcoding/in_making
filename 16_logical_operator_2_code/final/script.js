// 16. Logical Operator, Code
// AND(&&), OR(||), NOT(!)
// Peter likes math AND science.

// const likeMath = true;
// const likeScience = true;
//
// // AND(&&)
// console.log(likeMath && likeScience);
//
// // OR(||)
// console.log(likeMath || likeScience);
//
// // NOT(!)
// console.log(!likeMath);
// console.log(!likeScience);
// if conditional
// const likeMath = false;
const likeMath = true;
const likeScience = true;
const likeHistory = true;
const canEnter = likeMath && likeScience && !likeHistory;
if (canEnter) {
    alert("Peter can enter MIT.");
} else {
    alert("Peter, you can't enter MIT.");
}

/*
Peter can enter MIT
if he likes math
/and if he likes science
/ and if he likes history.
 */

// console.log(likeMath && likeScience && likeHistory);
//
// // OR(||)
// console.log(likeMath || likeScience || likeHistory);


































































