// Grab the size of the window
var siteWidth = 0;
var sliderWidth = 0; // Total width of the slider
var slides = 0; // Number of slides in the slider
var slider = $('.slider-inner')
var sliderPosition = 1; // Start on the first slide
var navColor = '#FFFFFF';
var year = 0;
var title = '';

siteWidth = $(window).width();
$('.slide').width( siteWidth );

slides = $( ".slide" ).length;
sliderWidth =  siteWidth * slides;


slider.width( sliderWidth );

// Debug
console.log('slides: ' + slides);
console.log('sliderWidth: ' + sliderWidth);

// Switch slides on click
$('#slider').click(function(){
	// If this is the last slide go back to the first slide
		if (sliderPosition == slides) {
			sliderPosition = 0;
		}

	// Mark active slide
	var active = $(".active").removeClass('active');
	if(active.next() && active.next().length){
    active.next().addClass('active');
  }
  else{
    active.siblings(":first").addClass('active');
  }

	// Figure out if nav should be black or white
	if($('.slide.active').is('.dark')) {
		navColor = '#FFFFFF';
	} else {
		navColor = '#000000';
	}

	$('.nav-color').css('color', navColor);
	$('.slider-content').css({"border":"16px solid " + navColor});

	// Move exisitng slide over
	$('.slider-inner').css({"transform":"translateX(-" + (sliderPosition * siteWidth) + "px)"});
	console.log("clicked");

	// Set title + Year
	year = $(".active").data('year');
	title = $(".active").data('title');

	$('#slider-title').html(title);
	$('#slider-year').html(year);
	$('#slide-title').html(title);

	sliderPosition++;
	console.log('sliderPosition: ' + sliderPosition);
});