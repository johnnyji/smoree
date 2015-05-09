var SubformLocation = React.createClass({
  getInitialState: function() {
    return {
      country: this.props.country,
      state: this.props.state,
      city: this.props.city,
      address: this.props.address
    }
  },
  handleLocationSave: function() {
    var latitudeLongitude = CourseActions.geocodeLocation(this.state.country, this.state.state, this.state.city, this.state.address);
  },
  render: function() {
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Location</h1>
          <label className="new-course-label" for="select-country">Country:</label>
          <input type="text" id="select-country" placeholder="Canada Eh?"></input>

          <label className="new-course-label" for="select-state">State/Province:</label>
          <input type="text" id="select-state"></input>

          <label className="new-course-label" for="select-state">Address:</label>
          <input type="text" id="select-address"></input>

          <button className="save-location-button" onClick={this.props.handleLocationSave}>Save Location</button>
      </div>
    )
  }
});