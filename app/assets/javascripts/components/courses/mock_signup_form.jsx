var MockSignupForm = React.createClass({
  render: function() {
    return (
      <div>
        <div className="user-signup-form">
          <h1 className="signup-form-title">Register Here!</h1>
          <input type="text" className="user-signup-name-field" placeholder="First Name" id="student-first-name" readOnly></input><br></br>
          <input type="text" className="user-signup-name-field" placeholder="Last Name" id="student-last-name" readOnly></input><br></br>
          <input type="email" className="user-signup-email-field" placeholder="Email" id="student-email" readOnly></input><br></br>
          <textarea className="user-signup-comment-field" placeholder="Tell the instructor something!" id="student-description" readOnly></textarea>
          <button className="no-user-signup-submit-button" disabled>Demo Purpose Only</button>
        </div>
      </div>
    );
  }
});