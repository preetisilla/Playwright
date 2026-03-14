let year = 2001;
switch (true) {
    case year % 4 === 0 && year % 100 !== 0:
        console.log(year + " is a leap year");
        break;
    case year % 400 === 0:
        console.log(year + " is a leap year");
        break;
    default:
        console.log(year + " is not a leap year");
}