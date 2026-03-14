let Env = "Staging";
const base_URL = "https://vwo.com/api/v2/";
let API_KEY = "12345-abcde-67890-fghij";
const Timeout = 8000;

switch(Env){
    case "Development":
        console.log(`Base URL: ${base_URL}dev | API Key: ${API_KEY} | Timeout: ${Timeout}ms`);
        break;
    case "Staging":
        console.log(`Base URL: ${base_URL}staging | API Key: ${API_KEY} | Timeout: ${Timeout}ms`);
        break;
    case "qa":
        console.log(`Base URL: ${base_URL}prod | API Key: ${API_KEY} | Timeout: ${Timeout}ms`);
        break;
    case "Production":
        console.log(`Base URL: ${base_URL}prod | API Key: ${API_KEY} | Timeout: ${Timeout}ms`);
        break;
    default:
        console.log("Invalid environment specified");
}