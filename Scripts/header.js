document.addEventListener("DOMContentLoaded", function(event) { 
	var navPages = document.getElementById('pageNav').children;

	navPages[navPages.length-1].onclick = function() {
		window.location.href = "index.html";
	};
	navPages[navPages.length-2].onclick = function() {
		window.location.href = "cv";
	};
	navPages[navPages.length-3].onclick = function() {
		window.location.href = "projects";
	};
});
