$(function() {

	//set up array variable to hold cat elements
	var $cats = $("#catList").children("li");
	var catCounts = [0,0,0,0,0,0,0]
	var $catImage = $('#catImage');
	for (var i = 0; i < $cats.length; i++) {
		var cat = $cats[i];

		cat.addEventListener('click', (function(currentCat) {
        	return function() {
        		//alert(cat.innerText)
        		$catImage.css("background-image","url('../src/images/" + currentCat.innerText + ".jpg')");
				$('#catCaption').text(currentCat.innerText);
				$catImage.text("0");
				//catCounts[$("#catList").find(currentCat).index()] = 0;
				$catImage.click(function(){
	  				catCounts[$("#catList").find(currentCat).index()] +=1;
	  				console.log(catCounts);

	  				//console.log($("#catList").find(currentCat).index());
	  				$catImage.text(catCounts[$("#catList").find(currentCat).index()]);
				});
	   		 };
		})(cat));

	};








});

