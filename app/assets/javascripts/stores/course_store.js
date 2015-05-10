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
  geocodeLocation: function(country, state, city, address, retrieveCoords) {
    var fullAddress = address + ", " + city + ", " + state + ", " + country;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress}, function(results, status) {
      if (results[0] === undefined) {
        retrieveCoords(null);
      } else {
        var latitude = results[0].geometry.location.A
        var longitude = results[0].geometry.location.F
        retrieveCoords([latitude, longitude]);
      }
      // this gets the latitude and the longitude, now i need to set those as the states on the main component
    });
  },
  animateErrors: function(errors) {
    debugger;
  }
});