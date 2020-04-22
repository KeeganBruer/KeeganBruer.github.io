let alertTimeoutS = 120;
var keepPageRefreshed = function(){ 
	var alertBox = document.getElementById("alert");
	var counter = document.getElementById("counter");
	setInterval(function() {
		counter.innerHTML = ""+alertTimeoutS;
		console.log(window.location.href.includes("name="));
			console.log(window.location.href.split("name=")[1] == document.getElementById("tutorName").value.replace(" ", "%20"));
			console.log(document.getElementById("tutorName").value.replace(" ", "%20"));
		if (alertTimeoutS < 1) {
			
			
			if (window.location.href.includes("name=") &&  window.location.href.split("name=")[1] != document.getElementById("tutorName").value.replace(" ", "%20")){
				window.location.href = window.location.href.replace("?name=" + window.location.href.split("name=")[1], "") + "?name=" + document.getElementById("tutorName").value.replace(" ", "%20");	
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
	let paramsLine = window.location.href.split("?")[1];
	let params =[];
	if (paramsLine) {
	    params = paramsLine.split("&");
	}
	console.log(params);
	let tutorName = undefined;
	for (let param of params) {
		if (param.includes("name")) {
			tutorName = param.split("=")[1];	
		}
	}
	if (tutorName == undefined) {
		window.location.href = window.location.href + "?name=Keegan%20Bruer";
	}
	document.getElementById("tutorName").value = tutorName.replace("%20", " ");
	var form = document.getElementById("form");
	var src = "https://docs.google.com/forms/d/e/1FAIpQLSdlhJApTDnMv8aPoglowX6_2vcl2GoNDiaUUpSCG6XlEHYE8A/viewform?embedded=true";
	src += "&entry.372252838=" + tutorName;
	var date = new Date();
	document.getElementById("date").innerHTML = "Date: " + ("0" + (date.getMonth()+1)).slice(-2)+"/"+("0" + (date.getDate())).slice(-2) + "/" +  date.getFullYear();
	src += "&entry.1280230343="+date.getFullYear()+"-"+ ("0" + (date.getMonth()+1)).slice(-2)+"-"+("0" + (date.getDate())).slice(-2);
	console.log(src)
	form.src = src;
	keepPageRefreshed();
	
	$(document).mousemove(function(event){
		onRefreshClick();
	});
	
	$("#tutorName").keyup(function(event) {
    	if (event.keyCode === 13) {
        	if (window.location.href.includes("name=") &&  window.location.href.split("name=")[1] != document.getElementById("tutorName").value.replace(" ", "%20")){
				window.location.href = window.location.href.replace("?name=" + window.location.href.split("name=")[1], "") + "?name=" + document.getElementById("tutorName").value.replace(" ", "%20");	
			} else {
				console.log("here2");
				location.reload();
			}
    	}
	});
}	
var onRefreshClick = function() {
	alertTimeoutS = 120;
	document.getElementById("alert").style.display = "none";
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
