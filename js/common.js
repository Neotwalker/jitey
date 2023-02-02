$(function() {

	let menuBtn = $('.burger');
	let menu = $('.header--wrapper .menu');
	menuBtn.click( function(){
		menu.slideToggle('medium').toggleClass('active');
		$('body').toggleClass("overlay");
		$('.burger').toggleClass('open');
	})

	let btnUp = document.querySelectorAll(".up"),
	btnDown = document.querySelectorAll(".down"),
	input = document.querySelectorAll("input");

	input.forEach(item => {
		item.addEventListener('keypress', function(e) {
			if(e.key === "Enter") {
				e.preventDefault();
				sum();
			}
		});
		item.addEventListener('blur', function(e) {
			item.value = item.value === '' ? 0 : item.value ;
			sum();
		});
	});

	btnDown.forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			if (item.parentNode.querySelector("input").value > "0") {
				item.nextElementSibling.stepDown();
			};
			sum();
		});
	});

	btnUp.forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			item.previousElementSibling.stepUp();
			sum();
		});
	})

	function sum() {
		let total = 0,
		total1 = 0;
		let inputField = document.querySelectorAll(".row1");
		inputField.forEach(item => {
		let value = item.querySelector("input").value;
		console.log(value);
		let price = item.querySelector(".price").innerText.replace('$','');
		total = total + value * price;
		document.querySelector('.total').children[0].innerHTML = total;

		let capsule = item.querySelector(".capsule").innerText.replace('$','');
		total1 = total1 + value * capsule;
		document.querySelector('.total1').children[0].innerHTML = total1;
		});
	}

	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
		if ($(window).width() <= '1000'){
			$('body').removeClass("overlay");
			menu.slideToggle('medium').removeClass('active');
			$('.burger').removeClass('open');
		}
	});

	$("#menu1").on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

});
