document.addEventListener("DOMContentLoaded", function(event) { 
	var navPages = document.getElementById('pageNav').children;

	navPages[navPages.length-3].onclick = function() {
		window.location.href = "Mobile";
	};
	navPages[navPages.length-2].onclick = function() {
		window.location.href = "Mobilecv";
	};
	navPages[navPages.length-1].onclick = function() {
		window.location.href = "Mobileprojects";
	};
});
