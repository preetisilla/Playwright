let responses = [200,201,404,500,404,200,503];

if(responses.every(r => r >= 200 && r < 300)){
    console.log("All responses are successful (2xx).");
} else {
    console.log("Some responses are not successful (2xx).");
}

let firstnum = responses.find(r => r<200 || r>=300);
if(firstnum !== undefined){
    console.log("First non-successful response:", firstnum);
}

// spot the bug 
// returns 1200 which is not fastest
//let sorted = responseTimes.sort((a,b) => a-b);
//console.log("Fastest response time:", sorted[0]);

//pass, shallow copy when used spread. for deep copy assign suite2 = suite1 and then modify suite1 to see the effect on suite2