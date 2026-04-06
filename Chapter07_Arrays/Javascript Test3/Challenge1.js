
let result = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }];

let totalcount = result.length;
let countpass = 0;
let countfail = 0;
let countskip = 0;
let failedtestcase = "";
let totalduration = 0;

for ( let r of result){
    totalduration += r.durationMs;
    if(r.status === "passed")
        countpass++;
    else if(r.status === "failed"){
        countfail++;
        failedtestcase = r.name;
    }
    else
        countskip++;
}

console.log(`Total Steps: ${totalcount} Passed: ${countpass} Failed: ${countfail} Skipped: ${countskip} Total Duration: ${totalduration} Failed Steps: ${failedtestcase}`)