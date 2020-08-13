//Set variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");


//Description: This function updates the background style on the body and outputs the new value to the screen
//Arguments: None
function updateBGColor(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

//Add event listeners to input boxes
color1.addEventListener("input", updateBGColor);
color2.addEventListener("input", updateBGColor);