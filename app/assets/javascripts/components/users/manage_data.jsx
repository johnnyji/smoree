var ManageData = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired,
    courses: React.PropTypes.array.isRequired
  },
  getInitialState: function() {
    return {
      activeTabIndex: 0,
      courseTitles: [],
      componentReady: false
    };
  },
  componentWillMount: function() {
    var p = this.props;
    var courseTitles = [];
    for (var i = 0; i < p.courses.length; i++) {
      courseTitles.push(p.courses[i].title);
    }
    this.setState({
      courseTitles: courseTitles,
      componentReady: true
    });
  },
  handleTabClicked: function(tabIndex) {
    this.setState({ activeTabIndex: tabIndex });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    if (!s.componentReady) { return <Spinner /> }
    return (
      <div>
        <DataNav 
          tabs={s.courseTitles}
          handleClick={this.handleTabClicked}
          activeTabIndex={p.activeTabIndex}
        />
        <DataContent 
          course={p.courses[s.activeTabIndex]}
        />
      </div>
    );
  }
});