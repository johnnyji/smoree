var CourseStore = Reflux.createStore({
  listenables: CourseActions,
  createCourse: function(userId, course, success, error) {
    $.ajax({
      url: "/users/" + userId + "/courses" ,
      method: "POST",
      data: { course: course },
      success: success,
      error: error
    });
  }
});