var DashboardController = React.createClass({
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
      <ManageStudents />,
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