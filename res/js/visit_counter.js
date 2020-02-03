function loadCounter() {
	var count = localStorage.getItem('count');
	document.getElementById('counter_var').textContent = count;
	if(count == 1)
		document.getElementById('ctv_pl_sr').innerHTML = 'TIME.';
	if(count == 69)
		document.getElementById('nice').style.display = 'block';
}

function addCounter() {
	if('count' in localStorage)
		var count = localStorage.getItem('count');
	else
		var count = 0;
	count++;
	localStorage.setItem('count', count);
}