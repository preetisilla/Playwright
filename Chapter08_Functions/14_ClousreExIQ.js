//Write a function makeRateLimiter that returns a function
//each call to return function tracks the usage and
// return true if the usage is within the limit and false if it exceeds the limit
function makeRateLimiter(limit) {
    let usage = 0;
    function limitChecker(){
        usage++;
        if(usage <= limit){
            return true;
        } else{
            return false;
        }       
    }
    return limitChecker;
}

let rateLimiter = makeRateLimiter(3);
console.log(rateLimiter());
console.log(rateLimiter());
console.log(rateLimiter());
console.log(rateLimiter());