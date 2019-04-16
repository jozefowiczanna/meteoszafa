// window.addEventListener("load", function() {
//
// 	const initMargin = 60;
// 	const fpe = document.querySelector(`.fpe`); // fpe = full page element
//
// 	function makeFullPage(fpe) {
// 		const fpeStyle = window.getComputedStyle(fpe);
// 		const fpeH = fpeStyle.getPropertyValue("height");
// 		const fpeRect = fpe.getBoundingClientRect();
// 		const fpePos = parseInt(fpeH) + fpeRect.top;
// 		const marginBottom = window.innerHeight - fpePos;
// 		if (marginBottom > initMargin) {
// 			fpe.style.marginBottom = marginBottom + "px";
// 		}
// 	}
//
// 	makeFullPage(fpe);
//
// 	window.addEventListener("resize", function() {
// 		makeFullPage(fpe);
// 	})
//
// });
