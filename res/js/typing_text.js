var descList = [ "Student.", "Developer.", "Coffeeholic.", "Designer.", "Professional Retard." ];
var curr = 0;
var currIdx = 0;
var interval;
var currEle = document.querySelector("#main_type");
var cursorEle = document.querySelector("#main_cursor");

interval = setInterval(type, 70);

function type() { 
	var text =  descList[curr].substring(0, currIdx + 1);
	currEle.innerHTML = text;
	currIdx++;
	if(text === descList[curr]) {
		clearInterval(interval);
		setTimeout(function() { interval = setInterval(backspace, 40); }, 1000);
	}
}

function backspace() {
	var text = descList[curr].substring(0, currIdx - 1);
	currEle.innerHTML = text;
	currIdx--;
	if(text === '') {
		clearInterval(interval);
		if(curr == (descList.length - 1))
			curr = 0;
		else
			curr++;
		currIdx = 0;
		setTimeout(function() { cursorEle.style.display = 'inline-block'; interval = setInterval(type, 70); }, 200);
	}
}