// Grab the size of the window
var siteWidth = 0;
var sliderWidth = 0; // Total width of the slider
var slides = 0; // Number of slides in the slider
var slider = $('.slider-inner')
var sliderPosition = 1; // Start on the first slide
var navColor = '#000000';
var overlayColor = '';
var year = 0;
var title = '';

sliderSetup();

$('.nav-color').hover(function(){
	$('.nav-gradient').css('opacity', '1');
});

// Debug
console.log('slides: ' + slides);
console.log('sliderWidth: ' + sliderWidth);

function sliderSetup() {
	// Figure out how wide the site is
	siteWidth = $(window).width();
	$('.slide').width( siteWidth );

	// Count the amount of slides
	slides = $( ".slide" ).length;

	// ...and set the width of the slider
	sliderWidth =  siteWidth * slides;
	slider.width( sliderWidth );
};

function sliderRefresh() {
	// If this is the last slide go back to the first slide
	if (sliderPosition == slides) {
		sliderPosition = 0;
	}

	$('.nav-color').css('color', navColor);
	$('.body').css({"border":"16px solid " + navColor});
	// Move exisitng slide over
	$('.slider-inner').css({"transform":"translateX(-" + (sliderPosition * siteWidth) + "px)"});
}

$(window).resize(function(){
	sliderSetup();
	sliderRefresh();
});

// Work Nav

$('#work-nav').click(function(){
	$('.work-nav-wrapper').addClass('active');
	// $('.body').css({"border":"16px solid black"});

	// prevent click
	return false;
});

$('.work-nav-wrapper').click(function(){
	$(this).removeClass('active');

	// prevent click
	return false;
});

$('#coming-soon').click(function(){
	// prevent click
	return false;
});
