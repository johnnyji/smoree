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
      banner: null,
      saved: false
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
      email: user.email,
      description: user.description
    });
  },
  onLoadUserError: function(xhr, responseCode, error) {
    debugger;
  },
  handleImageSave: function(imageBlob) {
    var data = { image_blob: imageBlob }
    UserActions.updateProfile(this.props.userId, data, this.handleImageSaveSuccess);
  },
  handleBannerSave: function(bannerBlob) {
    var data = { banner_blob: bannerBlob }
    UserActions.updateProfil(this.props.userId, data, this.handleBannerSaveSuccess);
  },
  handleSaveProfile: function(e) {
    e.preventDefault();
    var data = {
      first_name: this.refs.firstName.getDOMNode().value,
      last_name: this.refs.lastName.getDOMNode().value,
      email: this.refs.email.getDOMNode().value,
      description: this.refs.description.getDOMNode().value
    };
    UserActions.updateProfile(this.props.userId, data, this.handleUpdateSuccess);
  },
  handleImageSaveSuccess: function(data) {
    var imageBlob = data.user.image_blob;
    this.props.handleImageSave(imageBlob);
  },
  handleBannerSaveSuccess: function(data) {
    debugger;
  },
  handleUpdateSuccess: function(data) {
    this.setState({ saved: true });
  },
  handleHideFlash: function() {
    this.setState({ saved: false });
  },
  render: function() {
    var s = this.state;
    return (
      <div>
        {s.saved && <ReactFlashMessage flashType="flash-success" message="Profile saved!" hideFlash={this.handleHideFlash} />}
        <form className="edit-user-container" onSubmit={this.handleSaveProfile}>
          <h1 className="title">Edit Profile</h1>
          <label>First Name</label>
          <input ref="firstName" placeholder="First name" value={s.firstName}></input><br/>
          <label>Last Name</label>
          <input ref="lastName" placeholder="Last name" value={s.lastName}></input><br/>
          <label>Email</label>
          <input ref="email" placeholder="email@domain.com" value={s.email}></input><br/>
          <textarea ref="description" placeholder="Describe yourself to your students!" defaultValue={this.state.description}></textarea><br/>
          <label>Profile Picture</label>
          <ImageUploader handleImageSave={this.handleImageSave} />
          <label>Banner Picture</label>
          <ImageUploader handleImageSave={this.handleBannerSave} />
          <input type="submit" className="save-profile"></input>
        </form>
      </div>
    )
  }
});