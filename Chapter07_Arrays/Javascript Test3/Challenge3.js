let rawMessage = " Locator not found after TIMEOUT "
let normalised = rawMessage.trim().toLowerCase();
console.log(`Normalized: ${normalised}`);
let category = "";
if(normalised.includes("locator"))
    category = "locator".toUpperCase();
else if(normalised.includes("timeout"))
    category = "timeout".toUpperCase();
else
    category = "GENERAL";

console.log(`Category: ${category}`)