let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500;
let SLABreachCount = 0;
for(let i=0;i<responseTimes.length;i++){
    if(responseTimes[i] > SLA_LIMIT){
        console.log(`Response: ${responseTimes[i]}ms`);
        SLABreachCount++;
    }
}

console.log(`Total Response: ${responseTimes.length}`);
console.log(`Min Response:${Math.min(...responseTimes)}`);
console.log(`Max Response:${Math.max(...responseTimes)}`);
console.log(`SLA Breaches: ${SLABreachCount}`);