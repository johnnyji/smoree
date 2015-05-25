$(function() {
  var loginLink = $(".user-login");
  var newSessionForm = $(".new-session-form");

  function exitFormModal() {
    $("body").removeClass("stop-scroll");
    $(".overlay").fadeOut(200, function() {
      $(this).hide().removeClass("backdrop");
    });
    $(".new-session-form-section").fadeOut(200, function() {
      $(this).hide().removeClass("popup-modal");
    });
  }

  function displayFormModal() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    setTimeout(function() {
      $("body").addClass("stop-scroll");
      $(".overlay").addClass("backdrop").fadeIn(200);
      $(".new-session-form-section").addClass("popup-modal").fadeIn(300);
    }, 200);

    $(".exit-modal").on("click", exitFormModal);
  }

  loginLink.on("click", function(e) {
    e.preventDefault();
    displayFormModal();
  });

  newSessionForm.on("change", "input",function() {
    $(this).prev().empty();
  });

  newSessionForm.on("submit", function(e) {
    e.preventDefault();
  });

});