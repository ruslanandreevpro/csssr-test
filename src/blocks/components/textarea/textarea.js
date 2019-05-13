// let autoExpand = function (field) {
//
// 	field.style.height = "inherit";
//
// 	let computed = window.getComputedStyle(field);
//
// 	let height = parseInt(computed.getPropertyValue("border-top-width"), 0)
//         + parseInt(computed.getPropertyValue("padding-top"), 0)
//         + field.scrollHeight
//         + parseInt(computed.getPropertyValue("padding-bottom"), 0)
//         + parseInt(computed.getPropertyValue("border-bottom-width"), 0);
//
// 	field.style.height = height + "px";
//
// };
//
// document.addEventListener("input", function (event) {
// 	if (event.target.tagName.toLowerCase() !== "textarea") return;
// 	autoExpand(event.target);
// }, false);

let textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", autosize);

function autosize(){
	let el = this;
	setTimeout(function(){
		el.style.cssText = "height:auto; padding:0";
		el.style.cssText = "height:" + el.scrollHeight + "px";
	},0);
}

document.addEventListener("DOMContentLoaded", function() {
	textarea.dispatchEvent(new KeyboardEvent("keydown"))
}, false);