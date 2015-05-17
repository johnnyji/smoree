var ManageAccount = React.createClass({
  propTypes: {
    userId: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      description: null,
      picture: null,
      banner: null
    };
  },
  componentWillMount: function() {
    UserActions.loadUser(this.props.userId, this.onLoadUserSuccess, this.onLoadUserError);
  },
  onLoadUserSuccess: function(data) {
    var user = data.user;
    this.setState({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email
    });
  },
  onLoadUserError: function(xhr, responseCode, error) {
    debugger;
  },
  handleSaveProfile: function() {
    var data = {
      first_name: this.refs.firstName.getDOMNode().value,
      last_name: this.refs.lastName.getDOMNode().value,
      email: this.refs.email.getDOMNode().value,
      description: this.refs.description.getDOMNode().value
    };
    UserActions.updateProfile(this.props.userId, data, this.handleUpdateSuccess, this.handleUpdateError);
  },
  handleUpdateSuccess: function(data) {
    debugger;
  },  
  handleUpdateError: function(xhr, responseCode, error) {
    debugger;
  },
  render: function() {
    var s = this.state;
    return (
      <form className="edit-user-container" onSubmit={this.handleSaveProfile}>
        <h1 className="title">Edit Profile</h1>
        <input ref="firstName" placeholder="First name" value={s.firstName}></input><br/>
        <input ref="lastName" placeholder="Last name" value={s.lastName}></input><br/>
        <input ref="email" placeholder="email@domain.com" value={s.email}></input><br/>
        <textarea ref="description" placeholder="Describe yourself to your students!" defaultValue={this.state.description}></textarea>
        <input type="submit" className="save-profile"></input>
      </form>
    )
  }
});