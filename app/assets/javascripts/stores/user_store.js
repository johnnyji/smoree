var UserStore = Reflux.createStore({
  listenables: UserActions,
  onSendEmail: function(studentsArray, email, success, error) {
    var info = { 
      id_array: studentsArray,
      email: email
    }
    $.ajax({
      url: "/students/mail",
      method: "POST",
      dataType: "json",
      data: info,
      success: success,
      error: error
    });
  },
  onCreateNewCourse: function() {
    window.location.href = "/courses/new";
  }
});