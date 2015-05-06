$(function() {
  var $header = $('header');
  window.stickyHeader = false;

  $(window).on('scroll', function(e) {
    if ($(this).scrollTop() > 1) {
      if (!window.stickyHeader) {
        stickHeader($header);
      }
    } else {
      console.log(window.stickyHeader);
      if (window.stickyHeader) {
        unstickHeader($header);
      }
    }
  });

});

var unstickHeader = function(header) {
  header.animate({
    height: '80px',
    opacity: 1
  }, 500);
  header.removeClass('sticky-header');
  window.stickyHeader = false;
}

var stickHeader = function(header) {
  header.addClass('sticky-header');
  header.animate({
    height: '60px',
    opacity: 0.9
  }, 500);
  return window.stickyHeader = true;
};