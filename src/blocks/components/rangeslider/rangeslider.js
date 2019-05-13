const rangeSliderController = (function(){
	const slider = document.getElementById("js");
	const sliderHandle = document.getElementById("handle");
	const sliderCounter = document.getElementById("counter");
	const sliderValue = 3; // give any slider value, result will be n+1
	let sliderOffset = slider.offsetLeft;
	let sliderWidth = slider.offsetWidth;
	let isMoving = false;
	let handlePosition = null;
	let valueStops = (function(){
		let array = [];
		let fraction = sliderWidth / sliderValue;
		for (let i = 0; i <= sliderValue; i++) {
			array.push(fraction * i);
		}
		return(array);
	}());
	let skipPoint = valueStops[1]/2;

	window.addEventListener("resize", function() {
		isMoving = false;
		handlePosition = null;
		valueStops = (function(){
			let array = [];
			let fraction = sliderWidth / sliderValue;
			for (let i = 0; i <= sliderValue; i++) {
				array.push(fraction * i);
			}
			return(array);
		}());
		skipPoint = valueStops[1]/2;
		sliderOffset = slider.offsetLeft;
		sliderWidth = slider.offsetWidth;
		valueStops.forEach(function(stop, i){
			if ( handlePosition >= (stop - skipPoint ) ) {
				sliderHandle.style.left = stop + "px";
				if (stop === sliderWidth) {
					sliderCounter.style.left = (stop - 8) + "px";
				} else {
					let liLeft = document.getElementsByClassName("labels__item")[i].offsetLeft;
					sliderCounter.style.left = (liLeft - 5) + "px";
				}
				sliderCounter.innerHTML = i + 1;
			}
		});
		let liLeft = document.getElementsByClassName("labels__item")[2].offsetLeft;
		sliderCounter.style.left = (liLeft - 5) + "px";
	});

	slider.addEventListener("mousedown", function(event){
		event.preventDefault();
		isMoving = true;
		handlePosition = event.pageX - sliderOffset;
		valueStops.forEach(function(stop, i){
			if ( handlePosition >= (stop - skipPoint ) ) {
				sliderHandle.style.left = stop + "px";
				if (stop === sliderWidth) {
					sliderCounter.style.left = (stop - 8) + "px";
				} else {
					let liLeft = document.getElementsByClassName("labels__item")[i].offsetLeft;
					sliderCounter.style.left = (liLeft - 5) + "px";
				}
				sliderCounter.innerHTML = i + 1;
			}
		});
	});

	window.addEventListener("mousemove", function(event){
		if (isMoving) {
			handlePosition = event.pageX - sliderOffset;
			valueStops.forEach(function(stop, i){
				if ( handlePosition >= (stop - skipPoint ) ) {
					sliderHandle.style.left = stop + "px";
					if (stop === sliderWidth) {
						sliderCounter.style.left = (stop - 8) + "px";
					} else {
						let liLeft = document.getElementsByClassName("labels__item")[i].offsetLeft;
						sliderCounter.style.left = (liLeft - 5) + "px";
					}
					sliderCounter.innerHTML = i + 1;
				}
			});
		}
	});

	window.addEventListener("mouseup", function(event){
		isMoving = false;
	});

	document.addEventListener("DOMContentLoaded", function() {
		let liLeft = document.getElementsByClassName("labels__item")[2].offsetLeft;
		sliderCounter.style.left = (liLeft - 5) + "px";
		for (let i=1; i < (valueStops.length - 1); i++) {
			let liEl = document.getElementsByClassName("labels__item")[i];
			liEl.className += " inner";
		}
	}, false);
})();