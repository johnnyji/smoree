var EmailSignature = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  render: function() {
    var p = this.props;
    return (
      <div className="instructor-info">
        <img src={p.user.image_blob}></img>
        <div className="instructor-title">
          <h3>{p.user.first_name} {p.user.last_name}</h3>
          <p>{p.user.email}</p>
        </div>
        <p className="instructor-bio">{p.user.description}</p>
      </div>
    )
  }
});