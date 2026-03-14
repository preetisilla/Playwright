Element e = new Element();
e.isPresent = true;
e.isDisplayed = true;
e.isEnabled = false;

if(e.isPresent && e.isDisplayed && e.isEnabled){
    console.log("Element is enabled");
}else if(e.isPresent && e.isDisplayed && !e.isEnabled){
    console.log("Element is present and displayed but not enabled");
}else if(e.isPresent && !e.isDisplayed){
    console.log("Element is present but not displayed");
}       