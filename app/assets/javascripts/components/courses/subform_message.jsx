var SubformMessage = React.createClass({
  propTypes: {
    handleWelcomeEmailChange: React.PropTypes.func.isRequired,
    course: React.PropTypes.object.isRequired 
  },
  getInitialState: function () {
      return {
        editingEmail: true,
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
    this.setState({ 
      editingEmail: false,
      emailSaved: true
    });
    if (this.state.editingEmail) {
      this.setState({ editingEmail: false });
    } else {
      this.setState({ editingEmail: true });
    }
  },
  showModal: function() {
    this.setState({ editingEmail: true });
  },
  handleExitModal: function() {
    this.setState({ editingEmail: false });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    return (
      <div>
        {s.editingEmail && <PreviewEmail user={p.user} message={p.welcomeEmail} handleExitModal={this.handleExitModal}/>}
        <div className="new-course-form">
          <h1 className="nav-content-title">Welcome Email</h1>
          <p>This is a welcome email that your students will recieve upon signing up for your course. Make them feel welcomed!</p>
          <br/>
          <textarea id="course_description" className="new-course-form-description" id="welcome-email" onChange={this.handleEmailChange} defaultValue={this.props.course.welcome_email}></textarea>
          {!this.state.canBeSaved && <button className="cannot-save-info-button">Provide a message</button>}
          {this.state.canBeSaved && <button className="save-info-button" onClick={this.handleEmailSave}>Save message</button>}
          <div className="new-course-alert-container">
            {this.state.emailSaved && <SuccessMessageBox message={"Email has been saved!"} />}
          </div> 
          {!s.editingEmail && <p className="preview-email" onClick={this.showModal}>Preview Email</p>}
        </div>
      </div>
    );
  }
});