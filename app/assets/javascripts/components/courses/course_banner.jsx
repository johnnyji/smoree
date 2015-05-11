var Banner = React.createClass({
  render: function() {
    return (
      <div className="course-background-banner">
        <img src={this.props.imagePath} className="banner-background-image"></img>
        <div className="course-title-field">{this.props.title}</div>
      </div>
    )
  }
});