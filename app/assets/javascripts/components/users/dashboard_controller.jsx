var DashboardController = React.createClass({
  propTypes: {
    tabs: React.PropTypes.array.isRequired,
    courses: React.PropTypes.array.isRequired,
    user: React.PropTypes.object.isRequired,
    students: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      activeTabIndex: 0,
      resendEmailBody: null
    }
  },
  handleResendEmail: function(emailBody) {
    this.setState({ 
      activeTabIndex: 1,
      resendEmailBody: emailBody
    })
  },
  handleTabChange: function(selectedTab) {
    this.setState({
      activeTabIndex: selectedTab,
      resendEmailBody: null
    });
  },
  render: function() {
    var s = this.state;
    var p = this.props;
    var sections = [
      <ManageCourses user={p.user} courses={p.courses}/>,
      <ManageStudents user={p.user} students={p.students} initialEmailValue={s.resendEmailBody}/>,
      <ManageEmailHistory user={p.user} resendEmail={this.handleResendEmail}/>,
      <ManageData user={p.user} courses={p.courses}/>,
      <ManageAccount userId={p.user.id} handleBannerSave={p.handleBannerSave}/>
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