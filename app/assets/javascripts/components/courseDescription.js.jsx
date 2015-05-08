var CourseInfo = React.createClass({
  render: function() {
    return (
      <div className="course-info-section">
        <h2 className="course-summary-field">{this.props.summary}</h2>
        <p className="course-description-field">{this.props.description}</p>
      </div>
    )
  }
});