var SubformMessage = React.createClass({
  propTypes: {
    handleWelcomeEmailChange: React.PropTypes.func.isRequired,
    course: React.PropTypes.object.isRequired 
  },
  getInitialState: function () {
      return {
        canBeSaved: false,
        emailSaved: false,
        message: null
      }
  },
  componentWillMount: function() {
    var welcomeEmail = this.props.course.welcome_email
    if (welcomeEmail === null) {
      this.setState({ message: "" });
    } else {
      this.setState({
        message: welcomeEmail,
        canBeSaved: true
      });
    }
    this.props.handleEditingEmail();
  },
  handleEmailChange: function(e) {
    var emailBody = e.target.value;
    this.setState({ 
      emailSaved: false,
      message: emailBody
    });
    if (emailBody === "") {
      this.setState({ canBeSaved: false });
    } else {
      this.setState({ canBeSaved: true });
    }
    this.props.handleWelcomeEmailChange(emailBody);
  },
  handleEmailSave: function() {
    this.props.handleEditingEmail();
    this.setState({ emailSaved: true });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    return (
        <div className="new-course-form">
          <h1 className="nav-content-title">Welcome Email</h1>
          <p>This is a welcome email that your students will recieve upon signing up for your course. Make them feel welcomed!</p>
          <br/>
          <textarea id="course_description" className="new-course-form-description" id="welcome-email" onChange={this.handleEmailChange} defaultValue={p.course.welcome_email}></textarea>
          {!s.canBeSaved && <button className="cannot-save-info-button">Provide a message</button>}
          {s.canBeSaved && <button className="save-info-button" onClick={this.handleEmailSave}>Save message</button>}
          <div className="new-course-alert-container">
            {s.emailSaved && <SuccessMessageBox message={"Email has been saved!"} />}
          </div> 
          <p className="preview-email" onClick={p.handleEditingEmail}>Preview Email</p>
        </div>
    );
  }
});