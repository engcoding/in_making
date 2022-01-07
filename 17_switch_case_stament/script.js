// 17. switch statment

const weekDay = "saturday";
switch (weekDay) {
    // 이 안에 case 구문을 씁니다.
    case "monday":  // 실행코드를 씁니다
        console.log("Monday JavaScript");
        break;
    case "tuesday":
        console.log("Tuesday HTML");
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

// if - else 구문
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
} else if (weekDay === "saturday" || weekDay === "suday") {
    console.log(weekDay, "Enjoy Weekend");
} else {
    console.log("Not a Weekday");}






































































