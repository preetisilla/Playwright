
//Function Declaration
function validateStatusCode(statuscode){
    if(statuscode >= 200 && statuscode <= 299){
        console.log("Success"); 
    }
}

validateStatusCode(200); // Output: Success

//Function Expression
const validateStatusCode_Exp = function(statuscode){
    if(statuscode >= 200 && statuscode <= 299){
        console.log("Success"); 
    }   
}
validateStatusCode_Exp(201); // Output: Success

//Function Arrow
const validateStatusCode_Arrow = (statuscode) => {
    if(statuscode >= 200 && statuscode <= 299){
        console.log("Success"); 
    }   
}
validateStatusCode_Arrow(204); // Output: Success