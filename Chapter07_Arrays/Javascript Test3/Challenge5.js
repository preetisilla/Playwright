

function runStep(stepNameDetails, fn){
    let step1 = {stepName : "",
        passed : false,
        message : ""
    }
    step1.stepName = JSON.stringify(stepNameDetails);
    try{
        step1.message = JSON.stringify(fn());
        step1.passed = true
        
    }
    catch{
        step1.passed = false;
    }
    console.log(step1);
}
runStep("open dashboard", () => "Page loaded");
