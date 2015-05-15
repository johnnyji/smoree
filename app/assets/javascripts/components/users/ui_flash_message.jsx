var UiFlashMessage = React.createClass({
  getInitialState: function() {
    return {
      hidden: false
    }
  },
  hideFlash: function() {
    this.setState({ hidden: true });
  },
  render: function() {
    if (!this.state.hidden) {
      return (
        <div className={"react-flash-message " + this.props.flashType}>
          <h3>{this.props.message}</h3>
          <i className="fa fa-remove" onClick={this.hideFlash}></i>
        </div>
      )
    } else {
      return <div/>
    }
  }
});