
class BaseClass{
    constructor(pageName){
        this.pageName = pageName;
    }

    Open(){
        console.log("Open the page" );
    }

    Close(){
        console.log("Closing the page" )
    }
}

class LoginClass extends BaseClass{
   
}

let loginClass = new LoginClass();
loginClass.Open();
loginClass.Close();