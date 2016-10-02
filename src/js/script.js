$(function() {

	//set up array variable to hold cat elements
	var cats = document.getElementById("catList").getElementsByTagName("li");
	var catCount = 0;
	var $catImage = $('#catImage');
	for (var i = 0; i < cats.length; i++) {
		var cat = cats[i];

		cat.addEventListener('click', (function(cat) {
        	return function() {
        		//alert(cat.innerText)
        		$catImage.css("background-image","url('../src/images/" + cat.innerText + ".jpg')");
				$('#catCaption').text(cat.innerText);

				$catImage.click(function(){
	  				catCount++;
	  				$catImage.text(catCount);
				});
	   		 };
		})(cat));

	};








});

