$(function() {
  var newCourseNavBar = $(".new-course-nav-bar");
  var hideNav = $(".hide-new-course-nav");
  var showNav = $(".show-new-course-nav");

  showNav.hide();
  // hides the new course nav
  hideNav.on("click", function() {
    newCourseNavBar.animate({
      "right": "-330"
    }, 300);
    $(this).fadeOut(300);
    showNav.fadeIn(300);
  });

  // shows the new course nav
  showNav.on("click", function() {
    $(this).fadeOut(100);
    hideNav.fadeIn(300);
    newCourseNavBar.animate({
      "right": "0"
    }, 300);
  });

  
});