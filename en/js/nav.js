function setMarginContainer() {
	// this function set margin in #container to don't be hide.

	var mainMenu = document.getElementById('mainMenu');
	var container = document.getElementById('container')

	container.style.marginTop = mainMenu.clientHeight + "px";
}

function initNav() {
	setMarginContainer();
}