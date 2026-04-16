interface BugReport{
    id : number,
    title : string,
    severity : string,
    stepsToreproduce : string[]
}

function logBug (bug :BugReport) : void {
    console.log( bug.id + " " + bug.title + " " + bug.severity + bug.stepsToreproduce)
    bug.stepsToreproduce.forEach(function(step: String , i:number){
        console.log(" " + (i+1) + step)
    } )
}

let bug1 : BugReport = {
    id :1,
    title : "Login Failed",
    severity : "High",
    stepsToreproduce : ["Step 1 : Open Login Page", "Step2 : Enter credentials","Step3: Enter Login button","Step4: Verify error message"]
}

logBug(bug1);