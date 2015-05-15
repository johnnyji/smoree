var UserStore = Reflux.createStore({
  listenables: UserActions,
  onSendEmail: function(studentsArray, subject, email, success, error) {
    var info = { 
      id_array: studentsArray,
      subject: subject,
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
  }
});