document.addEventListener("DOMContentLoaded", function(event) { 
	var navPages = document.getElementsByClassName('projectLink');
	let navLinks = ["https://www.npmjs.com/package/discord-webface",
					"https://github.com/KeeganBruer/javadoc-generator",
					"https://github.com/KeeganBruer/UGResearchDrMEC",
					"https://github.com/KeeganBruer/FRCSignIn",
					"https://github.com/KeeganBruer/KeeganBruer.github.io",
					"https://github.com/KeeganBruer/Sheets",
					"https://github.com/KeeganBruer/DatabaseManagementScripting"];
	for (let i = 0; i < navPages.length; i++) {
		let index = Math.floor(i/2);
		navPages[i].onclick = function() {
			window.location.href = navLinks[index];
		};
	}
});
