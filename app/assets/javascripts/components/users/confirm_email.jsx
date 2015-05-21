var ConfirmEmail = React.createClass({
  propTypes: {
    onConfirm: React.PropTypes.func.isRequired,
    email: React.PropTypes.object.isRequired,
    emailSent: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      students: [],
      selectedStudents: []
    };
  },
  componentWillMount: function () {
    var p = this.props;
    var students = [];
    var selectedStudents = [];
    for (var i = 0; i < p.email.students.length; i++) {
      selectedStudents.push(p.email.students[i].id)
      students.push(
        <ConfirmStudent student={p.email.students[i]} removeStudent={this.handleRemoveStudent} selectStudent={this.handleSelectStudent}/>
      )
    }
    this.setState({
      selectedStudents: selectedStudents,
      students: students
    });
  },
  handleSelectStudent: function(studentId) {
    var students = this.state.selectedStudents;
    students.push(studentId);
    this.setState({ selectedStudents: students });
  },
  handleRemoveStudent: function(studentId) {
    var students = this.state.selectedStudents;
    students.splice(students.indexOf(studentId), 1);
    this.setState({ selectedStudents: students });
  },
  handleConfirm: function() {
    if (this.state.selectedStudents.length < 1) {
      this.props.resendError();
    } else {
      if (this.props.email.course_id === "undefined") {
        UserActions.sendEmail(this.state.selectedStudents, this.props.email.original_body, this.handleSendSuccess, this.handleSendError);
      } else {
        UserActions.sendCourseEmail(this.props.email.course_id, this.state.selectedStudents, this.props.email.original_body, this.handleSendSuccess, this.handleSendError);
      }
    }
  },
  handleSendSuccess: function(data) {
    this.props.emailSent();
  },
  handleSendError: function(xhr, requestCode, error) {
    this.props.emailError
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    
    return (
      <div className="fullscreen-modal backdrop">
        <div className="confirm-email-lightbox">
          <button onClick={this.handleConfirm} className="send-button">
            <i className="fa fa-paper-plane"></i>Send
          </button>
          <i className="fa fa-remove exit-button" onClick={p.handleExitModal}></i>
          <h1>Selected Students</h1>
          {s.students}
        </div>
      </div>
    )
  }
});