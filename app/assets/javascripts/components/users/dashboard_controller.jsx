var DashboardController = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    courses: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    students: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      activeTabIndex: 0
    }
  },
  handleTabChange: function(selectedTab) {
    this.setState({ activeTabIndex: selectedTab });
  },  
  render: function() {
    var s = this.state;
    var p = this.props;
    var sections = [
      <ManageCourses user={p.user} courses={p.courses}/>,
      <ManageStudents user={p.user} students={p.students}/>,
      <ManageAccount />
    ]
    return (
      <div className="user-dashboard-container">
        <DashboardNav 
          tabs={p.tabs} 
          activeTabIndex={s.activeTabIndex} 
          handleClick={this.handleTabChange}
        />
        <div className="user-dashboard-content">{sections[s.activeTabIndex]}</div>
      </div>
    );
  }
});