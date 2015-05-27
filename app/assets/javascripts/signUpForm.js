$(function() {
  var createCourse = $('.non-user-create-course-link');
  var signUpForm = $('.user-form');

  function exitFormModal() {
    $(".header-right").fadeIn(300);
    $("body").removeClass("stop-scroll");
    $(".overlay").fadeOut(200, function() {
      $(this).hide().removeClass("backdrop");
    });
    $(".form-section").fadeOut(200, function() {
      $(this).hide().removeClass("popup-modal");
    });
  }

  function displayFormModal() {
    $(".header-right").fadeOut(300);
    $("html, body").animate({ scrollTop: 0 }, 200);
    setTimeout(function() {
      $("body").addClass("stop-scroll");
      $(".overlay").addClass("backdrop").fadeIn(200);
      $(".form-section").addClass("popup-modal").fadeIn(300);
    }, 200);

    $(".exit-modal").on("click", exitFormModal);
  }
 
  createCourse.on("click", function(e) {
    e.preventDefault();
    displayFormModal();
  });

  $(".user-sign-up").on("click", function(e) {
    e.preventDefault();
    displayFormModal();
  });

  signUpForm.on("change", "input", function() {
    $(this).prev().empty();
  });
});