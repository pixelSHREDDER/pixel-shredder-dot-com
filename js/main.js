TopUp.images_path = 'topup-1.7.2/images/top_up/';

$(function() {
	var isMobile = detectMobile();
	var onMenu = false;

	function init() {
		if (isMobile) {
			setOrientation();

			$(window).on('resize', function() {
				setOrientation();
			});
		};

		$('#topup_resume').attr('toptions', getTopupData());
		$('#topup_about').attr('toptions', getTopupData());
		animateIn();
	};

	function detectMobile() {
		return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
	};

	function setOrientation(div = '.content') {
		if (screen.width > screen.height) {
			$(div).addClass('landscape_mode');
			$(div).removeClass('portrait_mode');
		} else {
			$(div).addClass('portrait_mode');
			$(div).removeClass('landscape_mode');
		}
	};

	function resizeObj(obj) {
		var screenWidth = $(window).width();

		switch (obj) {
			case '#tv':
				$(obj).width(screenWidth);
				$(obj).height(screenWidth);
				break;
			case '#anim':
				$(obj).css('top', screenWidth * 0.082);
				$(obj).css('left', screenWidth * 0.071);
				$('#shinobi').width(screenWidth * 0.635);
				$('#shinobi').height(screenWidth * 0.44);
				break;
		};
	};

	function getTopupData() {
		var screenWidth = $(window).width();
		return `type = iframe, width = ${(screenWidth * 0.575)}, height = ${(screenWidth * 0.40)}, effect = clip, x = ${(screenWidth * 0.10)}, y = ${(screenWidth * 0.095)}, overlayClose = 1`;
	};

	function doRedirect(url = '') {
		setTimeout(() => {
			window.location.href = url;
		}, 100);
	};

	function updateImage() {
		if (!onMenu) {
			$('#shinobi').attr('src', `http://www.pixel-shredder.com/images/ShinobiTV.gif?${new Date().getTime()}`);
		} else {
			$('#shinobi').attr('src', 'http://www.pixel-shredder.com/images/MenuTV.gif');
		};
	};

	function linkClick(id = 'back') {
		if (onMenu) {
			switch (id) {
				case 'port':
					doRedirect('http://www.pixel-shredder.com/port/dv.html');
					break;
				case 'blog':
					doRedirect('http://www.pixel-shredder.com/blog/');
					break;
				case 'back':
					doRedirect();
					break;
			};
		} else {
			onMenu = true;
			updateImage();
		};
	};

	function animateIn() {
		resizeObj('#tv');
		updateImage();
		resizeObj('#anim');
		$('.content').css({'opacity': '1'});
	};

	$(window).resize(function() {
		resizeObj('#tv');
		resizeObj('#anim');
		$('#topup_resume').attr('toptions', getTopupData());
		$('#topup_about').attr('toptions', getTopupData());
	});

	$('.click-area').click(function(e) {
		linkClick(e.target.id);
	});

	$('#anim').click(function() {
		onMenu = !onMenu;
		updateImage();
	});

	init();
});