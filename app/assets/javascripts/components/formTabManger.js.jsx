// Manages which icon is active and shows appropriate form fields

var FormTabManager = React.createClass({
  render: function() {
    var tabs = [];
    var activeTab = this.props.tabs[this.props.activeTabIndex];
    
    for (var i = 0; i < this.props.tabs.length; i++ ) {
      var currentTab = this.props.tabs[i];
      if (currentTab === activeTab) { 
        tabs.push(
          <div className="active" onClick={this.props.onTabClick.bind(this, i)}>
            {this.props.tabs[i]}
          </div>
        )
      } else {
        tabs.push(
          <div onClick={this.props.onTabClick.bind(this, i)}>
            {this.props.tabs[i]}
          </div>
        )
      }
    }
    return <div className="new-course-icons">{tabs}</div>
  }
});