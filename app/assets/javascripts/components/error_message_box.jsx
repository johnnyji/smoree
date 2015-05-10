var ErrorMessageBox = React.createClass({
  render: function() {
    return (
      <div className="error-message-box">
        <h1>
          <i className="fa fa-exclamation-circle"></i>&nbsp;&nbsp;
          Error :(
        </h1>
        {this.props.message}
      </div>
    );
  }
});