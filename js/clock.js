function checkTime(i) {
	if (i<10) {
		i="0" + i;
	}
	return i;
}

function startTime(myElement) {
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById(myElement).innerHTML=h+":"+m+":"+s;
	t=setTimeout(function(){startTime(myElement)},500);
}

