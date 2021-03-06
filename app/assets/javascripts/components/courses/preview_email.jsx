var PreviewEmail = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    handleExitModal: React.PropTypes.func.isRequired
  },
  render: function() {
    var p = this.props;
    return (
      <div className="important">
        <div className="modal-email-preview">
          <div className="pop-up-email-preview">
            <i className="fa fa-remove" onClick={this.props.handleExitModal}></i>
            <div className="fake-email-header">
              <span>From:</span><p>noreply@smoree.com</p><br/>
              <span>To:</span><p>john@smith.com</p><br/>
              <span>Date:</span><p>{moment().format()}</p><br/>
              <span>Subject:</span><p>Welcome to my class!</p>
            </div>
            <div className="fake-email-body">
              <h1 className="email-title">Heyo, John Smith!</h1>
              <h3>Thanks for taking my class</h3>
              <p className="email-body">{p.message}</p>
            </div>
            <div className="fake-email-footer">
              Sincerely,<br/><br/>
              <InstructorCard user={p.user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});