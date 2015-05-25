var EmailContainer = React.createClass({
  propTypes: {
    email: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      hasCourse: false,
      previewEmail: false,
      showEntireEmail: false
    }
  },
  componentDidMount: function () {
    if (this.props.email.course !== "undefined") {
      this.setState({ hasCourse: true });
    }  
  },
  handleResendClick: function() {
    this.props.resendEmail(this.props.email.raw_body);
  },
  toggleFullEmail: function() {
    if (this.state.showEntireEmail) {
      this.setState({ showEntireEmail: false });
    } else {
      this.setState({ showEntireEmail: true });
    }
  },
  render: function() {
    var p = this.props;
    var s = this.state;

    return (
      <div ref="email" className="email-container">
        <div className="email-body">
          {!s.showEntireEmail && <div className="email-text" onClick={this.toggleFullEmail}>{p.email.body}</div>}

          {s.showEntireEmail && <div className="email-text" onClick={this.toggleFullEmail}>{p.email.original_body}</div>}

          {s.hasCourse && <span>{p.email.course_title}</span>}
        </div>
        <div className="email-info">
          <button onClick={this.handleResendClick}>
            <i className="fa fa-paper-plane"></i>
            Resend
          </button>
          <div className="user-count">
            <i className="fa fa-user"></i>
            {p.email.student_count}&nbsp;
            {p.email.student_count == 1 ? "student" : "students"}
          </div>
        </div>
      </div>
    )
  }
});