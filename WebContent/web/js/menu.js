
function hideSelectTag() {
	var tags = document.getElementsByTagName("select");
	if (tags && tags.length > 0) {
		for (var i = 0; i < tags.length; i++) {
			try {
				tags[i].style.visibility = "hidden";
			}
			catch (e) {
			}
		}
	}
}
function showSelectTag() {
	var tags = document.getElementsByTagName("select");
	if (tags && tags.length > 0) {
		for (var i = 0; i < tags.length; i++) {
			try {
				tags[i].style.visibility = "visible";
			}
			catch (e) {
			}
		}
	}
}
function menuFix() {
	var sfEls = document.getElementById("nav").getElementsByTagName("li");
	for (var i = 0; i < sfEls.length; i++) {
		sfEls[i].onmouseover = function () {
			this.className += (this.className.length > 0 ? " " : "") + "sfhover";
			hideSelectTag();
		};
		sfEls[i].onMouseDown = function () {
			this.className += (this.className.length > 0 ? " " : "") + "sfhover";
			hideSelectTag();
		};
		sfEls[i].onMouseUp = function () {
			this.className += (this.className.length > 0 ? " " : "") + "sfhover";
			hideSelectTag();
		};
		sfEls[i].onmouseout = function () {
			this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
			showSelectTag();
		};
	}
}
window.onload = menuFix;

