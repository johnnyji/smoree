var CourseStore = Reflux.createStore({
  listenables: CourseActions,
  onCreateCourse: function(userId, course, success, error) {
    $.ajax({
      url: "/courses" ,
      method: "POST",
      dataType: "json",
      data: { course: course },
      success: success,
      error: error
    });
  },
  onDeleteCourse: function(courseId, success) {
    $.ajax({
      url: "/courses/" + courseId,
      method: "DELETE",
      dataType: "json",
      data: { id: courseId },
      success: success
    });
  },
  onGeocodeLocation: function(country, state, city, address, retrieveCoords) {
    var fullAddress = address + ", " + city + ", " + state + ", " + country;
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: fullAddress}, function(results, status) {
      if (results[0] === undefined) {
        retrieveCoords(null);
      } else {
        var latitude = results[0].geometry.location.A
        var longitude = results[0].geometry.location.F
        retrieveCoords([latitude, longitude], fullAddress);
      }
    });
  },
  onAddStudent: function(data, success, error) {
    $.ajax({
      url: "/students",
      method: "POST",
      dataType: "json",
      data: { student: data },
      success: success,
      error: error
    });
  }
});