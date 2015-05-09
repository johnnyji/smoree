var CourseBanner = React.createClass({
  render: function() {
    return (
      <div className="course-background-banner">
        <div className="course-title-field">{this.props.courseTitle}</div>
      </div>
    )
  }
});