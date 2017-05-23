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

/* ================================== MODAL EVENTS ================================== */

$('.modal-close').on('click', function(event) {
  $('.modal').addClass('modal-close');
});

$('.log-in').on('click', function(event) {
  event.preventDefault();
  $('.modal').removeClass('modal-close');
});

$('.handle').on('click', function(event) {
  $('nav ul').toggleClass('showing');
});

$('nav ul a').on('click', function(event) {
  $('nav ul').toggleClass('showing');
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

/* =============================== POST TO /USERS FOR USER CREATION =============================== */

function addUser(firstName, lastName, username, password, callback) {
  $.ajax({
    url: "/users",
    contentType: 'application/json',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(
      {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password
      }
    ),
    success: function(data) {
      callback();
    },
    error: function(error) {
      let errorString = error.responseText.split(':')[1];
      let errorStringEdit = errorString.substring(1).slice(0, errorString.length -3)
      alert(errorStringEdit);
    }
  });
}

/* ================================== REPLACE SIGN UP WITH LOGIN ================================== */

function replaceSignUp() {
  $('.sign-up-title').html('Thank you for signing up!');
  $('.sign-up-box').html('<p>Please click below to log in.</p>' +
    '<a href="#log-in" class="login2"><p class="log-in-button2 log-in">Log in</p></a>');
}

/* ================================== NEW USER SIGN UP ================================== */

$('.register').submit(function(event) {
  let firstName = $('.register').find('#firstName').val();
  let lastName = $('.register').find('#lastName').val();
  let username = $('.register').find('#username').val();
  let password = $('.register').find('#password').val();
  addUser(firstName, lastName, username, password, replaceSignUp);
  return false;
});
