var SubformImageDate = React.createClass({
  getInitialState: function() {
    return {
      startDate: null,
      endDate: null,
      canBeSaved: false,
      dateSaved: false
    }
  },
  handleStartDateChange: function(date) {
    this.setState({
      startDate: date,
      dateSaved: false
    });
  },
  handleEndDateChange: function(date) {
    this.setState({
      endDate: date,
      dateSaved: false
    });
  },
  handleDateChangeClick: function() {
    this.setState({ dateSaved: true });
    var start = this.state.startDate;
    var end = this.state.endDate;
    this.props.handleDateChange(start, end);
  },
  canBeSaved: function() {
    return this.state.startDate && this.state.endDate;
  },
  onDrop: function() {

  },
  render: function() {
    var s = this.state;
    var p = this.props;
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Upload Image</h1>
        <div className="new-course-image-uploader">
          <ImageUploader handleImageSave={p.handleImageSave}/>
        </div>
          <h1 className="nav-content-title no-margin save-date">Save The Date</h1>
          <DatePicker 
            key="start"
            selected={s.startDate}
            onChange={this.handleStartDateChange}
            minDate={moment()}
            placeholderText="Select start date"
          />
          <DatePicker 
            key="end"
            selected={s.endDate}
            onChange={this.handleEndDateChange}
            minDate={s.startDate === null ? moment() : s.startDate}
            placeholderText="Select end date"
          />
        {!this.canBeSaved() && <button className="cannot-save-info-button">Fill out the dates</button>}
        {this.canBeSaved() && <button className="save-info-button" onClick={this.handleDateChangeClick}>Save the date!</button>}
        <div className="new-course-alert-container">
          {s.dateSaved && <SuccessMessageBox message={"Dates have been saved!"} />}
        </div>
      </div>
    );
  }
});