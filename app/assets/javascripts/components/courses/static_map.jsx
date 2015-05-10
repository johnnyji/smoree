var StaticMap = React.createClass({
  render: function() {
    var staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=400x300&sensor=false&maptype=roadmap&markers=color:red|" + this.props.latitude + "," + this.props.longitude;
    return (
      <div className="course-google-maps">
        <img src={staticMapUrl}></img>
      </div>
    );
  }
});