$(function() {
	var elem = document.getElementById('catImage');
	var elemCount = elem.innerText;
	elem.addEventListener('click', function(){
	  elemCount++;
	  elem.innerText = elemCount;
	}, false);
});