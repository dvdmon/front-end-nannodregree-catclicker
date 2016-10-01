$(function() {
	var $cat1Image = $('#catImage1');
	var $cat2Image = $('#catImage2');

	$cat1Image.css("background-image","url('http://lorempixel.com/400/300/cats/')");
	$cat2Image.css("background-image","url('http://lorempixel.com/300/300/cats/')");
	$('#catCaption1').text("Harry");
	$('#catCaption2').text("Betty");
    //console.log( "ready!" );


	var cat1Count = $cat1Image.text();
	var cat2Count = $cat2Image.text();

	$cat1Image.click(function(){
	  cat1Count++;
	  $cat1Image.text(cat1Count);
	});

	$cat2Image.click(function(){
	  cat2Count++;
	  $cat2Image.text(cat2Count);
	});

});