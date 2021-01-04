$(function () {

	// Клик по элементу имитирует клик по ссылке
	$(document).on("click", "a[data-href], button[data-href]", function (e) {
		e.preventDefault();
		var a = $(e.target).data("href");
		"" === a || "undefined" === a ? alert("Add href for element") : window.open(a)
	});

	// Мобильное меню
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header__authorisation').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
		$('.header__burger, .header__menu, .header__authorisation').removeClass('active');
		$('body').removeClass('lock');
	});

});

