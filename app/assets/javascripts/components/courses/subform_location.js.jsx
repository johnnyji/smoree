var SubformLocation = React.createClass({
  getInitialState: function() {
    return {
      country: "",
      state: null,
      city: null,
      address: null
    }
  },
  handleLocationSave: function() {
    this.setState({ //This is recognizing the value that is being selected however it isn't updating the state to that value...
      country: "country"
      // state: document.getElementById("select-state").value,
      // city: document.getElementById("select-city").value,
      // address: document.getElementById("select-address").value
    });
    debugger;
    var coordinates = CourseActions.geocodeLocation(this.state.country, this.state.state, this.state.city, this.state.address);
    this.props.handleLocationChange.bind(this, coordinates);
  },
  render: function() {
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Location</h1>
          <label className="new-course-label" for="select-country">Country:</label>
          <input type="text" id="select-country" placeholder="Country"></input>

          <label className="new-course-label" for="select-state">State/Province:</label>
          <input type="text" id="select-state" placeholder="Format: NY, CA, BC, ON"></input>

          <label className="new-course-label" for="select-city">City:</label>
          <input type="text" id="select-city" placeholder="City"></input>

          <label className="new-course-label" for="select-state">Address:</label>
          <input type="text" id="select-address" placeholder="Format: 123 Fake Street"></input>

          <button className="save-location-button" onClick={this.handleLocationSave}>Save Location</button>
      </div>
    )
  }
});