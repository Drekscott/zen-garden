// Seperating my JQuery from my HTML.
	$(function() {

	//$('.intro').fadeIn(1000);

	$('h3:contains(Resources)').click(function(){

		$('.view-css, .css-resources, .zen-faq, .zen-submit, .zen-translations, header > h2').slideToggle(1000);

	});

	$('h3:contains(Archives)').click(function(){

		$('.next, .viewall').slideToggle(1000);

	});

	$('h3:contains(Requirements)').click(function(){

		$('.requirements > p').slideToggle(1000);

	});

	$('h3:contains(Benefits)').click(function(){

		$('.benefits > p').slideToggle(1000);

	});

	$('h3:contains(Participation)').click(function(){

		$('.participation > p').slideToggle(1000);

	});

	$('h3:contains(So What is This About?)').click(function(){

		$('.explanation > p').slideToggle(1000);

	});

	$('h3:contains(The Road to Enlightenment)').click(function(){

		$('.preamble > p').slideToggle(1000);

	});

	$('h1:contains(CSS Zen Garden)').click(function(){

		//$('.summary > p').slideToggle(1000);
		//$('a:contains(html file), a:contains(css file)').fadeIn( "slow" );
		$( "div > p" ).fadeToggle( "slow" );
	});

	$('h3:contains(Select a Design:)').click(function(){

//		$("a[href~='/221/']").slideToggle(500);
		$( '.designer-name, .design-name, li:contains(by)').slideToggle(1000)
//		$( this ).toggleClass("h3");

	});

});