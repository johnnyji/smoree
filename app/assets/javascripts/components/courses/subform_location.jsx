var SubformLocation = React.createClass({
  getInitialState: function() {
    return {
      country: null,
      state: null,
      city: null,
      address: null,
      fetchingLocation: false,
      locationSucess: false,
      locationNotFound: false
    }
  },
  handleCountryChange: function() {
    this.setState({
      country: event.target.value
    });
  },
  handleStateChange: function() {
    this.setState({
      state: event.target.value
    });
  },
  handleCityChange: function() {
    this.setState({
      city: event.target.value
    });
  },
  handleAddressChange: function() {
    this.setState({
      address: event.target.value
    });
  },
  handleLocationSave: function() {
    this.setState({
      fetchingLocation: true,
      locationNotFound: false,
      locationSuccess: false
    });
    CourseActions.geocodeLocation(this.state.country, this.state.state, this.state.city, this.state.address, this.retrieveCoords);
  },
  retrieveCoords: function(coordsArray, fullAddress) {
    if (coordsArray === null) {
      this.setState({
        fetchingLocation: false,
        locationNotFound: true
      });
    } else {
      this.setState({
        fetchingLocation: false,
        locationSuccess: true
      });
      this.props.handleLocationChange(coordsArray, fullAddress);
    } 
  },
  canBeSaved: function() {
    var s = this.state;
    return s.country && s.state && s.city && s.address;
  },
  render: function() {
    var margin = {
      marginTop: "3em"
    }

    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Location</h1>
          <label className="new-course-label" for="select-country">Country:</label>
          <input type="text" id="select-country" placeholder="ex. Canada" onChange={this.handleCountryChange}></input>

          <label className="new-course-label" for="select-state">State/Province:</label>
          <input type="text" id="select-state" placeholder="ex. BC" onChange={this.handleStateChange}></input>

          <label className="new-course-label" for="select-city">City:</label>
          <input type="text" id="select-city" placeholder="ex. Vancouver" onChange={this.handleCityChange}></input>

          <label className="new-course-label" for="select-state">Address:</label>
          <input type="text" id="select-address" placeholder="ex. 999 Canada Place" onChange={this.handleAddressChange}></input>

          {!this.canBeSaved() && <button className="cannot-save-info-button">Fill out the location</button>}
          {this.canBeSaved() && <button className="save-info-button" onClick={this.handleLocationSave}>Save Location</button>}
          
          {this.state.fetchingLocation && <div style={margin}><Spinner /></div>}
          {this.state.locationNotFound &&
            <div className="new-course-alert-container">
              <ErrorMessageBox message="Sorry, we couldn't find that address! Try another" />
            </div>
          }
          {this.state.locationSuccess &&
            <div className="new-course-alert-container">
              <SuccessMessageBox message="Your address is successfully saved!" />
            </div>
          }
      </div>
    )
  }
});