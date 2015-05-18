var Dashboard = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    courses: React.PropTypes.array.isRequired,
    user: React.PropTypes.object.isRequired,
    students: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      bannerBlob: this.props.user.banner_blob
    }
  },
  handleBannerSave: function(imageBlob) {
    this.setState({ bannerBlob: imageBlob });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div>
        <Banner 
          title={"Heyo, " + p.user.first_name + " " + p.user.last_name}
          imageUrl={s.bannerBlob}
        />
        <DashboardController 
          tabs={p.tabs} 
          user={p.user} 
          courses={p.courses} 
          students={p.students}

          handleBannerSave={this.handleBannerSave}
        />
      </div>
    )
  }

});
