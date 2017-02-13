$(document).ready(function() {
	// remove placeholder after click
	$(document).ready(function () {
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
 	});
	/*
	// ScrollTo
	$('.navbar-collapse a').mPageScroll2id();
	*/


	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});



	
	//slick carousel
	$('.bags_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '.bags_next',
		prevArrow: '.bags_prev',
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
			}
		]
	});

	$('.product .slick-current').css('left', '70px');
	$('.product .slick-current .product_circle').css('border', 'solid 1px #93bb85');
	$('.product .slick-current').next().next().css('right', '70px');
	$('.product_next').click(function(){
		$('.product .slick-current').css('left', '70px');
		$('.product .slick-current .product_circle').css('border', 'solid 1px #93bb85');
		$('.product .slick-current').next().next().css('right', '70px');
	});

	//$('.product .slick-current').next().css('top', '200px');

	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '.review_next',
		prevArrow: '.review_prev'
	});
	
	/*var slickIndex = $('.slick-active').attr('data-slick-index');

	if (slickIndex == 1) {
		$(this).css('border', '1px solid blue');
	}
	else if (slickIndex == 0) {
		$(this).find('.product_circle').css('border', '1px solid red');
	}
	else {
		$(this).css('border', '1px solid green');
	}*/
	$('.bags_2_slider').owlCarousel({
		items: 3
	});
	/*
	// photo magnific gallery
	$('.photo_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	*/

	/*
	//video player + button
	$('#mainVideo').click(function(){
		if (this.paused) {
			this.play();
			$('#videoButton').fadeOut('fast');
		} else {
			$('#videoButton').fadeIn('fast');
			this.pause();
		}
	});
	$('#videoButton').on('click', function(event) {
		event.preventDefault();
		$('#videoButton').fadeOut('fast');
		$('#mainVideo').get(0).play();
	});
	*/

	/*
	//validation
	$('#').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Обязательно для заполения",
				minlength: "От 2 до 16 букв",
				maxlength: "От 2 до 16 букв"
			},
			email: {
				required: "Обязательно для заполения",
				email: "Введите корректный E-mail"
			},
			phone: {
				required: "Введите корректный номер"
			}
		}
	});

	*/


});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/