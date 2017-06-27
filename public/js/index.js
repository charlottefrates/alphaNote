/* ================================== SMOOTH SCROLL TOP ================================== */

$('.nav-brand').click(function(event) {
  event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 800
    );
});

/* ================================== SMOOTH SCROLL ON NAV LINKS ================================== */

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top-55
    }, 800, 'swing', function(){
      window.location.hash = hash;
    });
  }
});


/* ================================== NAVIGATION STYLING ON SCROLL ================================== */

$(window).scroll(function(){
    var a = 10;
    var pos = $(window).scrollTop();
    if(pos > a) {
        $('nav ul').addClass('nav-ul-scroll');
        $('.nav-brand').addClass('nav-brand-scroll');
    }
    else {
        $('nav ul').removeClass('nav-ul-scroll');
        $('.nav-brand').removeClass('nav-brand-scroll');
    }
});



/* ================================== Animation================================== */

// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}


// Check if it's time to start the animation.
function checkAnimation2() {
    var $elem = $('.about');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Check if it's time to start the animation.
function checkAnimation3() {
    var $elem = $('.journal');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

function checkAnimation4() {
    var $elem = $('.analyze');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation2();
    checkAnimation3();
    checkAnimation4();
});
