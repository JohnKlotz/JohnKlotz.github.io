var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".randomButton");

//console.log(body.style.background);

//color1.value=body.background.linear-gradient.color1;
//color2.value=body.background.linear-gradient.color2;



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function pad(number,size) {
  var s = String(number);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}


function setRandomGradient() {
	color1.value="#"+pad((Math.floor((Math.random() * 255) + 1)).toString(16),2)+pad((Math.floor((Math.random() * 255) + 1)).toString(16),2)+pad((Math.floor((Math.random() * 255) + 1)).toString(16),2);
	color2.value="#"+pad((Math.floor((Math.random() * 255) + 1)).toString(16),2)+pad((Math.floor((Math.random() * 255) + 1)).toString(16),2)+pad((Math.floor((Math.random() * 255) + 1)).toString(16),2);
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click",setRandomGradient)

window.onload = function() { 
	css.textContent = body.style.background + ";";
};

