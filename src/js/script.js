$(function() {

	//set up array variable to hold cat list item elements
	var $catListItems = $("#catList").children("li");

	// create array of objects to hold cat item information
	var cats = [];
	for (i = 0; i < $catListItems.length; i++)
	{
		cats[i] = {
			elem: $catListItems[i],
			count: 0,
			name: $catListItems[i].innerText
			}
	}


	var $catFrame = $("#catImageFrame");

	// loop through cat list elements to create event listeners
	for (var i = 0; i < $catListItems.length; i++) {
		var catListItem = $catListItems[i];



		// create event listener with a closure that does something when you click on a cat list item
		catListItem.addEventListener('click', (function(currentCat) {
        	return function() {

        		catName = currentCat.textContent;
        		cat = cats.filter(function (obj) {
        				return (obj.name === catName);
        			});


        		// first make sure any previously displayed cat div is no longer present
        		$("#catImageFrame").children().remove();

        		//insert the divs the cat, including their images and captions
        		catDivId = "#innerCatFrame-" + catName;
				$catFrame.append('<div id="innerCatFrame-' + catName + '">' +  '</div><div id="catCaption-' + catName + '">' + catName + '</div>');
				$(catDivId).css({"background-image":"url('../src/images/" + catName + ".jpg')","display":"block"});
				$(catDivId).text(cat[0].count);
				$catFrame.children().css("display","block");

        		//set up another event handler within the current cat's image div
        		$(catDivId).click(function(){

        			//find the array element in the cats array that matches the current cat
        			 cat = cats.filter(function (obj) {
        				return ("innerCatFrame-" + obj.name === $(catDivId).attr("id"));
        			});

        			// increment the count property of the cat array element
        			cat[0].count += 1;
        			// assign the new count to the inner text of the cat image
					$(catDivId).text(cat[0].count);
				});
   		 };
		})(catListItem));



	};








});

