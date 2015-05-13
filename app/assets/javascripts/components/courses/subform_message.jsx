var SubformMessage = React.createClass({
  getInitialState: function () {
      return {
        canBeSaved: false,
        emailSaved: false  
      }
  },
  handleChange: function(e) {
    this.setState({ emailSaved: false });
    var message = e.target.value;
    if (message === "") {
      this.setState({ canBeSaved: false });
    } else {
      this.setState({ canBeSaved: true });
    }
  },
  handleEmailSave: function() {
    this.setState({ emailSaved: true });
    var email = document.getElementById("welcome-email").value;
    this.props.handleWelcomeEmailChange(email);
  },
  render: function() {
    return (
      <div className="new-course-form">
        <h1 className="nav-content-title">Welcome Email</h1>
        <p>This is a welcome email that your students will recieve upon signing up for your course. Make them feel welcomed!</p>
        <br/>
        <textarea placeholder="Welcome to my course! I'm so glad to hav... (now you fill in the rest!)" id="course_description" className="new-course-form-description" id="welcome-email" onChange={this.handleChange} defaultValue={this.props.course.welcome_email}></textarea>
        {!this.state.canBeSaved && <button className="cannot-save-info-button">Provide a message</button>}
        {this.state.canBeSaved && <button className="save-info-button" onClick={this.handleEmailSave}>Save message</button>}
        <div className="new-course-alert-container">
          {this.state.emailSaved && <SuccessMessageBox message={"Email has been saved!"} />}
        </div>
      </div>
    );
  }
});