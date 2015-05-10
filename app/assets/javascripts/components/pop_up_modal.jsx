var PopUpModal = React.createClass({
  render: function() {
    return (
      <div className="overlay backdrop">
        <div className="popup-modal">
          <i className="fa fa-remove exit-modal" onClick={this.props.handleExitModal}></i>
          {this.props.content}
        </div>
      </div>
    );
  }
});