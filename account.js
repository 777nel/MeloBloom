let password = document.getElementById("userPassword");
let userName;
let allSignIn = document.getElementById("allSignIn");
let accountBtn = document.getElementById("nav-account");

let signIn = document.getElementById("signIn");
let username = document.getElementById("username");
let userPassword = document.getElementById("userPassword");
let recent = document.getElementById("recent");
let recentHappy = document.getElementById("recentHappy");
let recentHappyMood = document.getElementById("recentHappyMood");
let recentHappySong = document.getElementById("recentHappySong");
let recentIntro = document.getElementById("recentIntro");
let signOut = document.getElementById("signOut");

let innerCode = accountBtn.innerHTML;
let Change = "Sign In";

console.log(Change);

signOut.onclick = function () {
	localStorage.removeItem("navChange");
};

if (localStorage.getItem("navChange") == "My Music") {
	accountBtn.innerHTML = "My Music";
	allSignIn.style.display = "none";
	recent.style.display = "block";
	recentIntro.style.display = "flex";
} else {
	accountBtn.innerHTML = "Sign In";
	allSignIn.style.display = "block";
}

signIn.onclick = function () {
	userName = username.value;
	userPassword = password.value;
	for (let i = 0; i < users.length; i++) {
		if (
			userName == users[i].login.email &&
			userPassword == users[i].login.password
		) {
			allSignIn.style.display = "none";
			console.log(users[i].info);
			localStorage.setItem("navChange", "My Music");
			Change = localStorage.getItem("navChange");
			recent.style.display = "block";
			recentIntro.style.display = "flex";
			accountBtn.innerHTML = "My Music";
		}
	}
	// accountBtn.innerHTML = Change;
};
