var CourseInfo = React.createClass({
  render: function() {
    return (
      <div className="course-info-section">
        <div className="course-info-left">
          <h2 className="course-summary-field">{this.props.summary}</h2>
          <p className="course-description-field">{this.props.description}</p>
        </div>
        <div className="course-info-right">
          <StaticMap latitude={this.props.latitude} longitude={this.props.longitude}/>
          <MockSignupForm />
        </div>
      </div>
    )
  }
});