var CourseStore = Reflux.createStore({
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
  geocodeLocation: function(country, state, city, address, retrieveCoords) {
    var fullAddress = address + ", " + city + ", " + state + ", " + country;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress}, function(results, status) {
      if (results[0] === undefined) {
        retrieveCoords(false);
      } else {
        var latitude = results[0].geometry.location.A
        var longitude = results[0].geometry.location.F
        retrieveCoords([latitude, longitude]);
      }
    });
  },
  animateErrors: function(errors) {
  }
});