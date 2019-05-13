const inp = document.getElementsByClassName("inputField");

for (var i = 0; i < inp.length; i++) {
	const widthLabel = document.getElementsByTagName("label")[i].offsetWidth;
	const widthContainer = document.getElementsByClassName("inputBlock")[0].offsetWidth;
	document.getElementsByClassName("inputField")[i].style.width = (widthContainer - widthLabel - 50) + "px";
}

window.addEventListener("resize", function() {
	for (var i = 0; i < inp.length; i++) {
		const widthLabel = document.getElementsByTagName("label")[i].offsetWidth;
		const widthContainer = document.getElementsByClassName("inputBlock")[0].offsetWidth;
		document.getElementsByClassName("inputField")[i].style.width = (widthContainer - widthLabel - 50) + "px";
	}
});