//Print "Hello" 5 times
for(let i = 1; i <=5; i++){
    console.log("Hello");
}

//Print 1 to 10
for(let i = 1; i <=10; i++){
    console.log(i);
}

//Even numbers from 1 to 20
for(let i = 1; i <=20; i++){
    if(i%2==0){
        console.log(i);
    }
}

//Sum of 1st 10 natural numbers
let result = 0;
for(let i = 1; i <=10; i++){
    result = result +i;
}
console.log(result); 

//Print multiplication table of 5
for(let i = 1; i <=10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}
