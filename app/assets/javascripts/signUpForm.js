$(function() {
  var createCourse = $('.index-create-course-link');
  var signUpForm = $('.user-form');

  function exitFormModal() {
    $("body").removeClass("stop-scroll");
    $(".overlay").fadeOut(200, function() {
      $(this).hide().removeClass("backdrop");
    });
    $(".form-section").fadeOut(200, function() {
      $(this).hide().removeClass("popup-modal");
    });
  }

  function displayFormModal() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    setTimeout(function() {
      $("body").addClass("stop-scroll");
      $(".overlay").addClass("backdrop").fadeIn(200);
      $(".form-section").addClass("popup-modal").fadeIn(300);
    }, 200);

    $(".exit-modal").on("click", exitFormModal);
  };

  function renderSignupErrors(jqXHR, requestStatus, errorThrown) {
    var errorObject = jqXHR.responseJSON;
    for (var err in errorObject) {
      if (errorObject.hasOwnProperty(err)) {
        var errorMessageArray = errorObject[err];
        $("#user_" + err).prev().text(errorMessageArray[0]);
      }
    }
  }
 
  createCourse.on("click", function(e) {
    e.preventDefault();
    displayFormModal();
  });

  signUpForm.on("submit", function(e) {
    e.preventDefault();
    $(".form-error").empty();
    var formData = signUpForm.serialize();
    $.ajax({
      url: "/users?" + formData,
      method: "POST",
      dataType:"json",
      success: function(user) {
        window.location.href = "/users/" + user.id;
      },
      error: renderSignupErrors
    });
  });

  signUpForm.on("change", "input", function() {
    $(this).prev().empty();
  });

});