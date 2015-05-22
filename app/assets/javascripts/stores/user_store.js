var UserStore = Reflux.createStore({
  listenables: UserActions,
  onLoadEditUser: function(userId, success, error) {
    $.ajax({
      url: "/users/" + userId + "/edit",
      method: "GET",
      dataType: "json",
      success: success,
      error: error
    });
  },
  onLoadEmails: function(userId, success, error) {
    $.ajax({
      url: "/users/" + userId + "/emails",
      method: "GET",
      dataType: "json",
      success: success,
      error: error
    });
  },
  onUpdateProfile: function(userId, data, success, error) {
    $.ajax({
      url: "/users/" + userId,
      method: "PUT",
      dataType: "json",
      data: { user: data },
      success: success,
      error: error
    });
  },
  onSendEmail: function(studentsArray, email, success, error) {
    var info = { 
      id_array: studentsArray,
      email: email
    }
    $.ajax({
      url: "/emails",
      method: "POST",
      dataType: "json",
      data: info,
      success: success,
      error: error
    });
  },
  onSendCourseEmail: function(courseId, studentsArray, email, success, error) {
    var info = {
      course_id: courseId,
      id_array: studentsArray,
      email: email
    }
    $.ajax({
      url: "/emails",
      method: "POST",
      dataType: "json",
      data: info,
      success: success,
      error: error
    });
  }
});