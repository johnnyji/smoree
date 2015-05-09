// Manages which icon is active and shows appropriate form fields

var FormTabManager = React.createClass({
  faIcon: function(iconName) {
    return "fa fa-" + iconName
  },
  render: function() {
    var tabs = [];
    var activeTab = this.props.tabs[this.props.activeTabIndex];
    
    for (var i = 0; i < this.props.tabs.length; i++) {
      var currentTab = this.props.tabs[i];
      if (currentTab === activeTab) { 
        tabs.push(
          <div className="course-nav-icons active" onClick={this.props.onTabClick.bind(this, i)}>
            <i className={this.faIcon(this.props.tabs[i])}></i>
          </div>
        )
      } else {
        tabs.push(
          <div className="course-nav-icons" onClick={this.props.onTabClick.bind(this, i)}>
            <i className={this.faIcon(this.props.tabs[i])}></i>
          </div>
        )
      }
    }
    return (
      <div className="course-nav-left">
        <div className="nav-icons">
          <i className="fa fa-chevron-left show-new-course-nav"></i>
          <i className="fa fa-chevron-right hide-new-course-nav"></i>
        </div>
        <div className="new-course-icons">{tabs}</div>
      </div>
    )
  }
});