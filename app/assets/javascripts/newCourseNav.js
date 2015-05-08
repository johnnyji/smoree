$(function() {
  var newCourseNavBar = $(".new-course-nav-bar");
  var hideNav = $(".hide-new-course-nav");
  var showNav = $(".show-new-course-nav");

  showNav.hide();
  // hides the new course nav
  hideNav.on("click", function() {
    newCourseNavBar.addClass("nav-bar-hide");
    $(this).hide();
    showNav.show();
  });

  // shows the new course nav
  showNav.on("click", function() {
    $(this).hide();
    hideNav.show();
    newCourseNavBar.removeClass("nav-bar-hide");
  });

  
});