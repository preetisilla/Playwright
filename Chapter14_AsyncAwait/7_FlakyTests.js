//Flaky test rerun logic

//Retry function

let attemplt = 0;

function flakyAPI(){
    attemplt++;
    if(attemplt<3){
        return Promise.reject("Attempt " + attemplt + " API failed");
    } else {
        return Promise.resolve("Attempt " + attemplt + " API succeeded");
    }
}

async function retryTesting(maxRetries){
    for (let i=0; i<maxRetries; i++){
        try {
            let result = await flakyAPI();
            console.log(result);
            return; // Exit if successful //break;
        } catch (error) {
            console.error(error);
            if (i === maxRetries - 1) {
                console.error("Max retries reached. Test failed.");
            }
        }   
    }
}

retryTesting(5);