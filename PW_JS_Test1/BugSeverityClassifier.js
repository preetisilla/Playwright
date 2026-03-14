let frequncy = "always";
let imapct = "blocker";
if(frequncy =="always"){
    if(imapct == "blocker") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: blocker Severity: P0 - Critical: Stop release immediately");
    else if(imapct == "major") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: major Severity: P1 - High: Fix before release");
    else if(imapct == "minor") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: minor Severity: P2 - Medium: Fix in next release");
    else console.log("Bug Title: Checkout page crashes on applying coupon Frequency: always Impact: trivial Severity: P3 - Low: Fix if time permits");  
}
else if(frequncy == "sometimes"){
    if(imapct == "blocker") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: sometimes Impact: blocker Severity: P1 - High: Fix before release");
    else if(imapct == "major") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: sometimes Impact: major Severity: P2 - Medium: Fix in next release");
    else if(imapct == "minor") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: sometimes Impact: minor Severity: P3 - Low: Fix if time permits");
    else console.log("Bug Title: Checkout page crashes on applying coupon Frequency: sometimes Impact: trivial Severity: P4 - Very Low: Fix in future if reported again");
}
else if(frequncy == "rarely"){
    if(imapct == "blocker") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: blocker Severity: P2 - Medium: Fix in next release");
    else if(imapct == "major") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: major Severity: P3 - Low: Fix if time permits");
    else if(imapct == "minor") console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: minor Severity: P4 - Very Low: Fix in future if reported again");
    else console.log("Bug Title: Checkout page crashes on applying coupon Frequency: rarely Impact: trivial Severity: P5 - Informational: Monitor and fix if reported again");
}
