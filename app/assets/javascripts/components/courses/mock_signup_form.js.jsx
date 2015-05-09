var MockSignupForm = React.createClass({
  render: function() {
    return (
      <div className="user-signup-form">
        <div className="mock-form-overlay"></div>
        <input className="user-signup-name-field" placeholder="Full Name"></input><br></br>
        <input className="user-signup-email-field" placeholder="Email"></input><br></br>
        <textarea className="user-signup-comment-field" placeholder="Tell the instructor something!"></textarea>
      </div>
    )
  }
});