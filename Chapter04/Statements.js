let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}else {
    console.log("You are a minor.");
}

if (age >= 18 && age < 65) {
    console.log("You are an adult.");
}else if(age >= 65) {
    console.log("You are a senior.");
}else {
    console.log("You are a minor.");
}

if("Hello") console.log("The string is truthy.");
if(40) console.log("The number is truthy.");

//false results
if(false) console.log("This will not be printed.");
if(0) console.log("This will not be printed.");
if("") console.log("This will not be printed.");
if(null) console.log("This will not be printed.");
if(undefined) console.log("This will not be printed.");
if(NaN) console.log("This will not be printed.");

