var CourseStore = Reflux.createStore({
  listenables: CourseActions,
  createCourse: function(userId, course, success, error) {
    $.ajax({
      url: "/users/" + userId + "/courses" ,
      method: "POST",
      dataType: "json",
      data: { course: course },
      success: success,
      error: error
    });
  },
  verifyUserInput: function(inputState, defaultState) {
    if (inputState === defaultState) { return "" };
    return inputState;
  },
  animateErrors: function(errors) {
    debugger;
  }
});