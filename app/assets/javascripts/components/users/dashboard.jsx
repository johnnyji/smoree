var Dashboard = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    courses: React.PropTypes.array.isRequired,
    user: React.PropTypes.object.isRequired,
    students: React.PropTypes.array.isRequired
  },
  render: function() {
    var p = this.props;
    return (
      <div>
        <Banner title={"Heyo, " + p.user.first_name + " " + p.user.last_name} imagePath={p.imagePath}/>
        <DashboardController 
          tabs={p.tabs} 
          user={p.user} 
          courses={p.courses} 
          students={p.students}
        />
      </div>
    )
  }

});
