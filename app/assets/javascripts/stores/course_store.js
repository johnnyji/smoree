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
  geocodeLocation: function(country, state, city, address) {
    // this will take the address and geocode the LT LG
    debugger;
    $.ajax({

    });
  },
  animateErrors: function(errors) {
    debugger;
  }
});