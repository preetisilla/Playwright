function maxRetry(maxAttempts) {
    let attempt = 0;
    function retry(){
        attempt++;
        console.log(`Retrying... Attempt: ${attempt}`);
        if(attempt>maxAttempts){
            console.log("Max retry limit reached.");
        }
        return  attempt;
    }
    return retry;

}
let retryFn = maxRetry(3);
console.log(retryFn());
console.log(retryFn());
console.log(retryFn());
console.log(retryFn());