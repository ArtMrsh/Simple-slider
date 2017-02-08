document.querySelector(".left").onclick = slideLeft;
document.querySelector(".right").onclick = slideRight;
var left = 0;
var right = 0;

function slideRight() {
	 var string = document.querySelector(".string");
	 left -= 512;
	 if (left <= -2560) {
		left = 0;
	}
	 string.style.left = left + "px";
}

function slideLeft() {
	 var string = document.querySelector(".string");
	 left += 512;
	 if (left > 0) {
		left = -2048;
	}
	 string.style.left = left + "px";
}