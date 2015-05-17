var Banner = React.createClass({
  render: function() {
    var p = this.props;
    return (
      <div className="course-background-banner">
        <img src={p.imageUrl} className="banner-background-image"></img>
        <div className="course-title-field">
          {p.title}
        </div>
      </div>
    )
  }
});