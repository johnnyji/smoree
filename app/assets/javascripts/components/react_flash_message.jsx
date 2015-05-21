var ReactFlashMessage = React.createClass({
  propTypes: {
    flashType: React.PropTypes.string.isRequired,
    hideFlash: React.PropTypes.func.isRequired,
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className={"react-flash-message " + this.props.flashType}>
        <h3>{this.props.message}</h3>
        <div className="flash-exit">
          <i className="fa fa-remove" onClick={this.props.hideFlash}></i>
        </div>
      </div>
    )
  }
});