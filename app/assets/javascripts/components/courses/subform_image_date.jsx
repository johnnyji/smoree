var SubformImageDate = React.createClass({
  getInitialState: function() {
    return {
      startDate: null,
      endDate: null,
      canBeSaved: false
    }
  },
  handleStartDateChange: function(date) {
    this.setState({ startDate: date });
  },
  handleEndDateChange: function(date) {
    this.setState({ endDate: date });
  },
  canBeSaved: function() {
    return this.state.startDate && this.state.endDate;
  },
  render: function() {
    return (
      <div className="new-course-form">
        <div className="course-start-date-picker">
          <DatePicker 
            key="start"
            selected={this.state.startDate}
            onChange={this.handleStartDateChange}
            placeholderText="Select start date"
          />
        </div>
        <div className="course-start-date-picker">
          <DatePicker 
            key="end"
            selected={this.state.endDate}
            onChange={this.handleEndDateChange}
            placeholderText="Select end date"
          />
        </div>
        {!this.canBeSaved() && <button className="cannot-save-info-button">Fill out the dates</button>}
        {this.canBeSaved() && <button className="save-info-button">Save the date!</button>}
      </div>
    );
  }
});