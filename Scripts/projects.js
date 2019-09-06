document.addEventListener("DOMContentLoaded", function(event) { 
	var navPages = document.getElementsByClassName('projectLink');

	navPages[0].onclick = function() {
		window.location.href = "https://www.npmjs.com/package/discord-webface";
	};
	navPages[1].onclick = function() {
		window.location.href = "https://github.com/KeeganBruer/Sheets";
	};
});
