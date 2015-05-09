var CourseErrors = React.createClass({
  render: function() {
    var errorsArray = [];
    for (var key in this.props.errors) {
      errorsArray.push(<div>{this.props.errors[key][0]}</div>)
    }
    return (
      <PopUpModal content={errorsArray} handleExitModal={this.props.handleExitModal}/>
    );
  }
});