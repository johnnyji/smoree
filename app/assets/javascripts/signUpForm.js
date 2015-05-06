$(function() {
  var createCourse = $('.index-create-course-link');

  function exitForm() {
    $("body").removeClass("stop-scroll");
    $(".overlay").fadeOut(200, function() {
      $(this).hide().removeClass("backdrop");
    });
    $(".form-section").fadeOut(200, function() {
      $(".deviseUserForm").remove();
      $(this).hide().removeClass("display-form");
    });
  }

  function submitForm() {
    console.log("submitting form");
  };

  function displayForm(data) {
    $("html, body").animate({ scrollTop: 0 }, 200);
    setTimeout(function() {
      $("body").addClass("stop-scroll");
      $(".overlay").addClass("backdrop").fadeIn(200);
      $(".form-section").append(data).addClass("display-form").slideDown(300);
    }, 200);

    $(".exit-form").on("click", exitForm);
    $(".form-section").children("form").on("submit", submitForm);
  };

  function renderError(jqXHR, requestStatus, errorThrown) {
    debugger;
  }
 
  createCourse.on("click", function(e) {
    e.preventDefault();
    $.ajax({
      url: "/",
      method: "GET",
      dataType: "html",
      success: displayForm,
      failure: renderError,
    });
  })

  $("deviseUserForm").on("submit", function(e) {
    var userInputToJSON = { }
    e.preventDefault();
    $.ajax({
      url: "/users",
      method: "POST",
      data: {user: {}},
      dataType: "json",
      success: function() {
        // redirect the window to that created user
      },
      failure: function() {

      }
    });
  });

});