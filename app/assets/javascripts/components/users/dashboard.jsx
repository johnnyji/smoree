var Dashboard = React.createClass({
  render: function() {
    var p = this.props;
    return (
      <div>
        <Banner title={"Heyo, " + p.user.first_name + " " + p.user.last_name} imagePath={p.imagePath}/>
        <DashboardController tabs={p.tabs} user={p.user} courses={p.courses}/>
      </div>
    )
  }

});
