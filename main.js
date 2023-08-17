let mode = document.getElementById("nav-mode");
// let background = document.getElementById("body");

// document.body.style.background = "black";
console.log("hello");

if (!localStorage.getItem("Mode")) {
	localStorage.setItem("Mode", "true");
} else if (localStorage.getItem("Mode") == "false") {
	document.body.style.background = "#004861";
	mode.innerHTML = "Light Mode";
	// localStorage.setItem("Mode", "false");
	// darkMode = localStorage.getItem("Mode");
} else if (localStorage.getItem("Mode") == "true") {
	document.body.style.background = "#78c8e6";
	console.log("mode");
	mode.innerHTML = "Dark Mode";
	// localStorage.setItem("Mode", "true");
}

let darkMode = localStorage.getItem("Mode");

mode.onclick = function (event) {
	event.preventDefault();
	if (JSON.parse(darkMode) == true) {
		document.body.style.background = "#004861";
		mode.innerHTML = "Light Mode";
		localStorage.setItem("Mode", "false");
		darkMode = localStorage.getItem("Mode");
	} else if (JSON.parse(darkMode) == false) {
		document.body.style.background = "#78c8e6";
		mode.innerHTML = "Dark Mode";
		localStorage.setItem("Mode", "true");
		darkMode = localStorage.getItem("Mode");
	}
};

// mode.onclick = function (event) {
// 	event.preventDefault();
// 	if (mode.innerHTML == "Dark Mode") {
// 		background.style.backgroundColor = "midnightBlue";
// 		localStorage.setItem("Mode", "Dark");
// 		mode.innerHTML = "Light Mode";
// 		// console.log(change);
// 	} else if (mode.innerHTML == "Light Mode") {
// 		background.style.backgroundColor = "#78c8e6";
// 		mode.innerHTML = "Dark Mode";
// 	}
// };

// if (JSON.parse(localStorage.getItem("Mode"))) {
// 	background.style.backgroundColor = "midnightBlue";
// 	mode.innerHTML = "Light Mode";
// 	localStorage.setItem("Mode", "false");
// 	darkMode = localStorage.getItem("Mode");
// } else {
// 	background.style.backgroundColor = "#78c8e6";
// 	mode.innerHTML = "Dark Mode";
// 	localStorage.setItem("Mode", "true");
// 	darkMode = localStorage.getItem("Mode");
// }
