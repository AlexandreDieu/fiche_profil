let imageChange = document.getElementById("changeImage");
let buttonProfile = document.getElementById("buttonProfile");
let buttonSkills = document.getElementById("buttonSkills");

buttonProfile.onmouseenter = function () {
	imageChange.style.backgroundImage = "url('img/profile.png')";
};
buttonProfile.onmouseout = function () {
	imageChange.style.backgroundImage = "url('none')";
};
buttonSkills.onmouseenter = function () {
	imageChange.style.backgroundImage = "url('img/skills.png')";
};
buttonSkills.onmouseout = function () {
	imageChange.style.backgroundImage = "url('none')";
};
