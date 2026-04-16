function getFirstResult<T>(Results :T[]): T{
    return Results[0]!;
}

let firstNum = getFirstResult<number>([200,300,240]);
let firstString = getFirstResult<string>(["Login","Dashboard","Checkout"])

console.log(firstNum);
console.log(firstString)