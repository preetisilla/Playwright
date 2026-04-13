import { BasePage } from "./BasePage";

export class AuthPage extends BasePage{
    constructor(){
        super("AuthPage");
        console.log("Hello Auth Page");
    }
    AuthPageLogin(){
        console.log("Auth Page Login")
    }
}