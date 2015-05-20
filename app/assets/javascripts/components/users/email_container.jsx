var EmailContainer = React.createClass({
  propTypes: {
    email: React.PropTypes.object.isRequired
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className="email-container">
        <div>{this.props.email.body}</div>
      </div>
    )
  }
});