// собираем все якоря; устанавливаем время анимации и количество кадров
	var ancors = screen.querySelectorAll('.js__ancor'); 


	ancors.forEach(function(ancor) {
		// для плавного перехода к полным правилам с попапа, якорю присваиваем обработчик события
		ancor.addEventListener('click', function(e) {

			// устанавливаем время анимации и количество кадров
			var animationTime = 1000,
				framesCount = 20;

			// убираем стандартное поведение
			e.preventDefault();

			// для каждого якоря берем соответствующий ему элемент и определяем его координату Y если несколько корей
			//let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

			//если один якорь определяем положение скролла
			var scroll = window.pageYOffset || document.documentElement.scrollTop
			
			// определяем координату Y до элемента соответствующему якорю
			var coordY = rules.getBoundingClientRect().top + scroll;
			
			// запускаем интервал, в котором
			var scroller = setInterval(function() {
				// считаем на сколько скроллить за 1 такт
				var scrollBy = coordY / framesCount;
				
				// если к-во пикселей для скролла за 1 такт больше расстояния до элемента
				// и дно страницы не достигнуто
				if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
					// то скроллим на к-во пикселей, которое соответствует одному такту
					window.scrollBy(0, scrollBy);
				} else {
					// иначе добираемся до элемента и выходим из интервала
					window.scrollTo(0, coordY);
					clearInterval(scroller);
				}
			// время интервала равняется частному от времени анимации и к-ва кадров
			}, animationTime / framesCount);
		});
	})