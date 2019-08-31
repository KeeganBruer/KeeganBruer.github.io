document.addEventListener("DOMContentLoaded", function(event) { 
	var navPages = document.getElementById('pageNav').children;

	navPages[0].onclick = function() {
		window.location.href = "index.html";
	};
	navPages[1].onclick = function() {
		window.location.href = "cv.html";
	};
});