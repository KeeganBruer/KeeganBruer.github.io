let alertTimeoutS = 120;
let tutorName = "Keegan%20Bruer";
var keepPageRefreshed = function(){ 
	var alertBox = document.getElementById("alert");
	var counter = document.getElementById("counter");
	setInterval(function() {
		counter.innerHTML = ""+alertTimeoutS;
		if (alertTimeoutS < 1) {
			if (window.location.href.includes("name=") &&  window.location.href.split("name=")[1] == tutorName){
				window.location.href = window.location.href.replace("?name=" + window.location.href.split("name=")[1], "") + "?name=" + tutorName;	
			} else {
				console.log("here2");
				location.reload();
			}
		} else if (alertTimeoutS < 30) {
			alertBox.style.display= "flex";	
		} else {
			alertBox.style.display= "none";
		}
		alertTimeoutS -= 1;
	}, 1000);
}
window.onload = function() {
	tutorName = window.location.href.split("name=")[1];
	console.log(tutorName);
	if (tutorName == undefined) {
		window.location.href = window.location.href + "?name=Keegan%20Bruer";
	}
	var form = document.getElementById("form");
	var src = "https://docs.google.com/forms/d/e/1FAIpQLSdlhJApTDnMv8aPoglowX6_2vcl2GoNDiaUUpSCG6XlEHYE8A/viewform?embedded=true";
	src += "&entry.372252838=" + tutorName;
	var date = new Date();
	document.getElementById("date").innerHTML = "Date: " + ("0" + (date.getMonth()+1)).slice(-2)+"/"+("0" + (date.getDate())).slice(-2) + "/" +  date.getFullYear();
	src += "&entry.1280230343="+date.getFullYear()+"-"+ ("0" + (date.getMonth()+1)).slice(-2)+"-"+("0" + (date.getDate())).slice(-2);
	console.log(src)
	form.src = src;
	keepPageRefreshed();
}	
var onRefreshClick = function() {
	alertTimeoutS = 120;
}
var onComment = function() {
	console.log(document.getElementById("comment").value);
	
	let answer = encodeURIComponent(document.getElementById("comment").value);

	var formId = '1FAIpQLSe9mH0k9sMBiS34vnJ2jrwju3nHnRbrEFUyYl4Ce94LMZSg9Q'
	var queryString = '&entry.1407520925=' + answer + '&submit=SUBMIT'

	var urlLink = 'https://docs.google.com/forms/d/e/' + formId + "/formResponse?embedded=true" +queryString
	console.log(urlLink);
	var wnd = window.open(urlLink, "", 'width=,height=,resizable=no,top=0,left=10000');
	wnd.blur();
	setTimeout(function() {
	  wnd.close();
	}, 500);
	document.getElementById("comment").value = "";
}