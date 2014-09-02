// Seperating my JQuery from my HTML.
	$(function() {

	//$('.intro').fadeIn(1000);

	$('h3:contains(Resources)').click(function(){

		$('.view-css, .css-resources, .zen-faq, .zen-submit, .zen-translations, header > h2').fadeToggle(500);

	});

	$('h3:contains(Resources)').click(function(){


		$('h3:contains(Resources)').html('Click to Hide');
	

	});

	$('h3:contains(Archives)').click(function(){

		$('.next, .viewall').slideToggle(500);

	});

	$('h3:contains(Archives)').click(function(){


		$('h3:contains(Archives)').html('Click to Hide');
	

	});

	$('h3:contains(Requirements)').click(function(){

		$('.requirements > p').slideToggle(500);

	});

	$('h3:contains(Requirements)').click(function(){


		$('h3:contains(Requirements)').html('Click to Hide');
	

	});

	$('h3:contains(Benefits)').click(function(){

		$('.benefits > p').slideToggle(500);

	});

	$('h3:contains(Benefits)').click(function(){


		$('h3:contains(Benefits)').html('Click to Hide');
	

	});

	$('h3:contains(Participation)').click(function(){

		$('.participation > p').slideToggle(500);

	});

	$('h3:contains(Participation)').click(function(){


		$('h3:contains(Participation)').html('Click to Hide');
	

	});

	$('h3:contains(So What is This About?)').click(function(){

		$('.explanation > p').slideToggle(500);

	});

	$('h3:contains(So What is This About?)').click(function(){


		$('h3:contains(So What is This About?)').html('Click to Hide');
	
	});

	$('h3:contains(The Road to Enlightenment)').click(function(){

		$('.preamble > p').slideToggle(500);

	});

	$('h3:contains(The Road to Enlightenment)').click(function(){

		$('h3:contains(The Road to Enlightenment)').html('Click to Hide');
	
	});

	$('h1:contains(CSS Zen Garden)').click(function(){

		$( ".summary > p" ).slideToggle(500);
	
	});

	$('h1:contains(CSS Zen Garden)').click(function(){


		$('h1:contains(CSS Zen Garden)').html('Click to Hide');
	

	});

	$('h1:contains(Click to Hide)').click(function(){


		$('h1:contains(Click to Hide)').html('CSS Zen Garden');
	
		
	});


	$('h3:contains(Select a Design:)').click(function(){

//		$("a[href~='/221/']").slideToggle(500);
		$( '.designer-name, .design-name, li:contains(by)').slideToggle(500);
//		$( this ).toggleClass("h3");

	});

	$('h3:contains(Select a Design:)').click(function(){


		$('h3:contains(Select a Design:)').html('Click to Show');
	

	});

});