var CourseStore = Reflux.createStore({
  listenables: CourseActions,
  onEditCourse: function(courseId, course, success, error) {
    $.ajax({
      url: "/courses/" + courseId,
      method: "PUT",
      dataType: "json",
      data: { course: course },
      success: success,
      error: error
    });
  },
  onCreateCourse: function(course, success, error) {
    $.ajax({
      url: "/courses" ,
      method: "POST",
      dataType: "json",
      data: { course: course },
      success: success,
      error: error
    });
  },
  onLoadCourseData: function(courseId, rangeOfDays, success, error) {
    $.ajax({
      url: "/courses/" + courseId + "/data",
      method: "GET",
      dataType: "json",
      data: { range_of_days: rangeOfDays },
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
    geocoder.geocode({address: fullAddress}, function(results, status) {
      if (results[0] === undefined) {
        retrieveCoords(null);
      } else {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        retrieveCoords([latitude, longitude], results[0].formatted_address);
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