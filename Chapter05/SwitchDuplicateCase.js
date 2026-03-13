let x = 10;
switch (x) {
    case 5:
        console.log("x is 5");  
        break;
    case 10:
        console.log("x is 10"); // takes first match and exits the switch statement, so the second case with value 10 will never be reached
        break;
    case 10: // Duplicate case value
        console.log("This will cause an error");
        break;
    default:
        console.log("x is something else");
}

let value = "5";
switch (value) {
    case 5: // This will not match because of type difference
        console.log("Value is the number 5");
        break;
    case "5": // This will match
        console.log("Value is the string '5'"); // strict matches the type and value
        break;
    default:
        console.log("Value is something else");
       // default:
       // console.log("This is the default case"); duplicate default case will cause an error
}   