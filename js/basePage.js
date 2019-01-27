function mainMenuAutoMarge() {
	// this function set margin in #container to don't be hide.

	var mainMenu = document.getElementById('mainMenu');
	var container = document.getElementById('container')

	container.style.marginTop = mainMenu.clientHeight + "px";
}

function init() {
	document.getElementById('body').onresize = mainMenuAutoMarge;
	mainMenuAutoMarge();
}