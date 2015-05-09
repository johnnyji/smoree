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
    var fullAddress = address + ", " + city + ", " + state + ", " + country;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress}, function(result, status) {
      debugger;
    });
  },
  animateErrors: function(errors) {
    debugger;
  }
});