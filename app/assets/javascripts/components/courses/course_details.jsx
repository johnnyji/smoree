var CourseDetails = React.createClass({

  render: function() {
    return (
      <div className="course-additional-info">
        <h4>Dates:</h4>
        {this.props.startDate && <p>{this.props.startDate} - {this.props.endDate}</p>}
        <h4>Address:</h4>
        <p>{this.props.address}</p>
      </div>
    )
  }
});