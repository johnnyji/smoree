var UserStore = Reflux.createStore({
  listenables: UserActions,
  onLoadUser: function(userId, success, error) {
    $.ajax({
      url: "/users/" + userId,
      method: "GET",
      dataType: "json",
      success: success,
      error: error
    });
  },
  onUpdateProfile: function(userId, data, success, error) {
    debugger;
    $.ajax({
      url: "/users/" + userId,
      method: "PUT",
      dataType: "json",
      data: { user: data },
      success: success,
      error: error
    });
  },
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