// 17. switch case statement

/*
if () {}
else if () {}
...
else {}
 */


//switch case
// switch(조건식) {
//     // 이 안에 선택사항을 씁니다.
//     case value1:
//         // 실행코드
//         break;
//     case value2:
//         // 실행코드
//         break;
//     // ...
//     default:
// }

// switch case statement
const weekDay = "tuesday";
switch (weekDay) {
    // 이 안에 case 구문을 씁니다.
    case "monday":  // 실행 코드는 여기에 씁니다.
        console.log("Monday JavaScript.");
        break;
    case "tuesday":
        console.log("Tuesday HTML.");
        break;
    case "wednesday":
        console.log("Wednesday CSS");
        break;
    case "thursday":
        console.log("Thursday C.");
        break;
    case  "friday":
        console.log("Friday Linux.")
        break;
    case "saturday":
        console.log("Saturday exercise.");
        break;
    case "sunday":
        console.log("Enjoy Sunday");
        break;
    default:
        console.log("Not a weekday");
}
// switch case -> if - else
let weekDay = "saturday";
if (weekDay === "monday") {
    console.log("Monday JavaScript");
} else if (weekDay === "tuesday") {
    console.log("Tuesday HTML");
} else if (weekDay === "wednesday") {
    console.log("Wednesday CSS");
} else if (weekDay === "thursday") {
    console.log("Thursday C.");
} else if (weekDay === "friday") {
    console.log("Friday Linux.")
} else if (weekDay === "saturday" || weekDay === "sunday") {
    console.log(weekDay);
    console.log("Enjoy Weekend");
} else {
    console.log("Not a Weekday");}




































































































