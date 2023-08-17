// console.log(users);

let ham = document.getElementById("ham");
let goals = document.getElementById("nav-goals");
let music = document.getElementById("nav-music");
let game = document.getElementById("nav-game");
let navLinks = document.getElementsByClassName("nav-links");
let nav = document.querySelector("nav");
let note = document.getElementById("note");
let title = document.getElementById("title");
let dWidth = window.innerWidth;

let musicFeel = document.getElementById("music-feel");
let feelBtn = document.getElementById("feelBtn");
let moods = document.getElementById("moods");
let happy = document.getElementById("happy");
let sad = document.getElementById("sad");
let calm = document.getElementById("calm");
let angry = document.getElementById("angry");
let hype = document.getElementById("hype");
let nostalgic = document.getElementById("nostalgic");

let playlists = document.getElementsByClassName("playlists");
let happyList = document.getElementById("happy-list");
let sadList = document.getElementById("sad-list");
let calmList = document.getElementById("calm-list");
let angryList = document.getElementById("angry-list");
let hypeList = document.getElementById("hype-list");
let nostalgiaList = document.getElementById("nostalgia-list");

// if (mode.innerHTML === "Dark Mode") {
// 	mode.onclick = function () {
// 		mode.innerHTML = "Light Mode";
// 	};
// }
// if (mode.innerHTML === "Light Mode") {
// 	mode.onclick = function () {
// 		mode.innerHTML = "Dark Mode";
// 	};
// }

happy.style.display = "none";
happy.style.width = "300px";
sad.style.display = "none";
sad.style.width = "300px";
calm.style.display = "none";
calm.style.width = "300px";
angry.style.display = "none";
angry.style.width = "300px";
hype.style.display = "none";
hype.style.width = "300px";
nostalgic.style.display = "none";
nostalgic.style.width = "300px";

happyList.style.display = "none";
sadList.style.display = "none";
calmList.style.display = "none";
angryList.style.display = "none";
hypeList.style.display = "none";
nostalgiaList.style.display = "none";

musicFeel.style.display = "flex";
musicFeel.style.justifyContent = "center";
musicFeel.style.marginTop = "50px";

feelBtn.style.fontSize = "50px";
feelBtn.style.padding = "10px";
feelBtn.style.borderRadius = "10px";

feelBtn.onclick = function () {
	feelBtn.style.marginTop = "0px";
	happy.style.display = "block";
	sad.style.display = "block";
	calm.style.display = "block";
	angry.style.display = "block";
	hype.style.display = "block";
	nostalgic.style.display = "block";
};

happy.onclick = function () {
	happy.style.marginTop = "-20px";
	feelBtn.style.display = "none";
	sad.style.display = "none";
	calm.style.display = "none";
	angry.style.display = "none";
	hype.style.display = "none";
	nostalgic.style.display = "none";
	happyList.style.display = "block";
	happyList.style.display = "flex";
	happyList.style.justifyContent = "center";
};
sad.onclick = function () {
	sad.style.marginTop = "-30px";
	sad.style.marginBottom = "20px";
	feelBtn.style.display = "none";
	happy.style.display = "none";
	calm.style.display = "none";
	angry.style.display = "none";
	hype.style.display = "none";
	nostalgic.style.display = "none";
	sadList.style.display = "block";
	sadList.style.display = "flex";
	sadList.style.justifyContent = "center";
};
calm.onclick = function () {
	calm.style.marginTop = "-55px";
	calm.style.marginBottom = "40px";
	feelBtn.style.display = "none";
	sad.style.display = "none";
	happy.style.display = "none";
	angry.style.display = "none";
	hype.style.display = "none";
	nostalgic.style.display = "none";
	calmList.style.display = "block";
	calmList.style.display = "flex";
	calmList.style.justifyContent = "center";
};
angry.onclick = function () {
	angry.style.marginTop = "-75px";
	angry.style.marginBottom = "60px";
	feelBtn.style.display = "none";
	sad.style.display = "none";
	calm.style.display = "none";
	happy.style.display = "none";
	hype.style.display = "none";
	nostalgic.style.display = "none";
	angryList.style.display = "block";
	angryList.style.display = "flex";
	angryList.style.justifyContent = "center";
};

hype.onclick = function () {
	hype.style.marginTop = "-95px";
	hype.style.marginBottom = "80px";
	feelBtn.style.display = "none";
	sad.style.display = "none";
	calm.style.display = "none";
	happy.style.display = "none";
	angry.style.display = "none";
	nostalgic.style.display = "none";
	hypeList.style.display = "block";
	hypeList.style.display = "flex";
	hypeList.style.justifyContent = "center";
};

nostalgic.onclick = function () {
	nostalgic.style.marginTop = "-95px";
	nostalgic.style.marginBottom = "80px";
	feelBtn.style.display = "none";
	sad.style.display = "none";
	calm.style.display = "none";
	happy.style.display = "none";
	angry.style.display = "none";
	hype.style.display = "none";
	nostalgiaList.style.display = "block";
	nostalgiaList.style.display = "flex";
	nostalgiaList.style.justifyContent = "center";
};

title.style.textDecoration = "none";
if (ham.style.display == "none") {
	navLinks.style.display = "flex";
}

ham.onclick = function () {
	if (music.style.display == "block") {
		goals.style.display = "none";
		music.style.display = "none";
		game.style.display = "none";
		nav.style.height = "105px";
		note.style.alignItems = "center";
		title.style.alignItems = "center";
		title.style.marginTop = "20px";
	} else {
		goals.style.display = "block";
		music.style.display = "block";
		game.style.display = "block";
		nav.style.height = "200px";
		note.style.alignItems = "flex-start";
		title.style.alignItems = "flex-start";
		title.style.marginTop = "35px";
	}
};

// const database = app.database().ref();
// console.log(database);

console.log(users);
