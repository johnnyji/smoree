var SuccessMessageBox = React.createClass({
  render: function() {
    return (
      <div className="success-message-box">
        <h1>
          <i className="fa fa-check-circle"></i>&nbsp;&nbsp;
          Success :D
        </h1>
        {this.props.message}
      </div>
    );
  }
});