// Seperating my JQuery from my HTML.
	$(function() {

	//$('.intro').fadeIn(1000);

	$('.zen-resources :first-child').on('click', function(){

		$('.view-css, .css-resources, .zen-faq, .zen-submit, .zen-translations').slideToggle(1000);

	});

	$('.archives').on('click', function(){

		$('.next, .viewall').slideToggle(1000);

	});

	$('h3:contains(Requirements)').on('click', function(){

		$('.requirements > p').slideToggle(1000);

	});

	$('h3:contains(Benefits)').on('click', function(){

		$('.benefits > p').slideToggle(1000);

	});

	$('h3:contains(Participation)').on('click', function(){

		$('.participation > p').slideToggle(1000);

	});

	$('h3:contains(So What is This About?)').on('click', function(){

		$('.explanation > p').slideToggle(1000);

	});

	$('h3:contains(The Road to Enlightenment)').on('click', function(){

		$('.preamble > p').slideToggle(1000);

	});

	$('h1:contains(CSS Zen Garden)').on('click', function(){

		$('.summary > p, header > h2').slideToggle(1000);

	});

	$('.select').on('click', function(){

//		$("a[href~='/221/']").slideToggle(500);
		$( '.designer-name, .design-name, li:contains(by)' ).slideToggle(1000)
//		$( this ).toggleClass("h3");

	});

	$('.design-archives :first-child').on('click', function(){

		$('').slideToggle(1000);

	});

});