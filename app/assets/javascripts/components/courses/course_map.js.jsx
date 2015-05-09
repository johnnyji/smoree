var CourseMap = React.createClass({
  getDefaultProps:function() {
    return {
      initialZoom: 8
    }
  },
  getInitialState: function() {
    return {
      map: null
    }
  },
  componentDidMount: function() {
    var mapOptions = {
      center: this.mapCenterCoords(),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: this.props.initialZoom
    }
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: this.mapCenterCoords(),
      title: "Venue",
      map: map
    });
    this.setState({ map: map });
  },
  mapCenterCoords: function() {
    return new google.maps.LatLng(this.props.latitude, this.props.longitude);
  },
  render: function() {
    return (
      <div className="course-google-maps" id="map-canvas">
      </div>
    );
  }
});