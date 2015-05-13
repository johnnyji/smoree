var Student = React.createClass({
  getInitialState: function () {
      return {
        selected: false,
        containerClass: "student-container"  
      } 
  },
  handleSelectClick: function() {
    if (this.state.selected) {
      this.setState({
        selected: false,
        containerClass: "student-container"
      });
      this.props.handleRemoveSelectedStudent(this.props.student.id);
    } else {
      this.setState({ 
        selected: true,
        containerClass: "student-container-selected"
      });
      this.props.handleSelectedStudent(this.props.student.id);
    }
  },
  render: function() {
    var p = this.props;
    return (
      <div className={this.state.containerClass}>
        <h1>{p.student.name}</h1>
        <p>{p.student.email }</p>
        <p>{p.student.intro_message }</p>
        <button onClick={this.handleSelectClick}></button>
      </div>
    )
  }

});