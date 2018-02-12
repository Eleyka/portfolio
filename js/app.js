
$('.button-collapse').sideNav();
    
$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('vintage');
  } else {
    $('nav').removeClass('vintage');
  }
});


(function($) {
  $(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space