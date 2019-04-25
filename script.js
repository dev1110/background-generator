var css = document.querySelector("h3");
var body = document.getElementById("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
color1.value =  rgb(0, 128, 128);
color2.value =  rgb(170, 164, 57);
function setGradient(){
	body.style.background= "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
	}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);