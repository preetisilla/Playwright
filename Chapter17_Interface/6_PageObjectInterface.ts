interface BasePage{
    url : string,
    title : string
}

interface loginPage extends BasePage{
    username : string,
    password : string,
    submitBtn : string
}

let login : loginPage = {
    url : "https://www.google.com/",
    title : "google.com",
    username : "preeti",
    password : "silla",
    submitBtn : "submit"
}

console.log(login.url)
console.log(login.username)