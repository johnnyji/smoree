var AppHeader = React.createClass({
  currentUser: React.PropTypes.object.isRequired,
  _redirectToDashboard: function() {
    window.location.href = "/profile"
  },
  render: function() {

    if (p.currentUser) {
      return (
        <header>
          <section className="header-left" onClick={this._redirectToDashboard}>smoree</section>
        </header>
      ); 
    } else {
      return (
        <header>
          <section className="header-left">smoree</section>
        </header>
      );
    }
  }
});