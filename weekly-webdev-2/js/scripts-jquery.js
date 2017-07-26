
// scroll down by push scroller
$('#scroll').click(function() {
	$('html, body').animate({
		scrollTop: $(".about").offset().top
	}, 2000);
});

// smooth scrolling after click 'a' element in top menu
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* Show rest elements by click buttons */
$(function() {
	$('#btn-show-hide1').click(function() {
		$(this)
			.html($(this)
			.text() === 'Show less' ? 'View more' : 'Show less');
		$('#show-hide1')
			.slideToggle();
	});
});

$(function() {
		$("#btn-show-hide2").click(function() {
			$(this)
				.html($(this)
				.text() === 'show less' ? 'view more' : 'show less');
			$("#show-hide2")
				.slideToggle('slow');
		});
	});


/* Scroll spy */
$(function () {
    var sections = [];
    var menuItems = $('.navbar-right').eq(0).find('li');
    $(menuItems).each(function () {
			sections
				.push($(this)
				.find('a')
				.attr('href')
				.replace('#', ''));
    });

  $(document).scroll(function () {
      var $navigation = $(".navbar-fixed-top");
      $navigation.toggleClass('scrolled', $(this)
				.scrollTop() > $navigation.height());
			var scrollTopOffset = $(document)
				.scrollTop();

      $(sections).each(function (k, v) {
          if($('#' + v).length && scrollTopOffset >= $('#' + v).offset().top - $('.navbar-fixed-top').height()) {
              $('.navbar-right li')
								.removeClass('active');
              var x = $('.navbar-right li')
								.find('a[href="#' + v + '"]');
              x.parent('li').addClass('active');
          }
      });
  });
});
