var ConfirmStudent = React.createClass({
  propTypes: {
    student: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      selected: true 
    };
  },
  selectStudent: function() {
    this.props.selectStudent(this.props.student.id);
    this.setState({ selected: true });
  },
  removeSelectedStudent: function() {
    this.props.removeStudent(this.props.student.id);
    this.setState({ selected: false });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div className={s.selected ? "resend-student-container selected" : "resend-student-container"}>

        <p className="student-name">
          <span><i className="fa fa-user"></i></span>
          <span>{p.student.first_name + " " + p.student.last_name}</span>
        </p>

        {s.selected && <i className="fa fa-remove" onClick={this.removeSelectedStudent}></i>}
        {!s.selected && <i className="fa fa-plus" onClick={this.selectStudent}></i>}
      </div>
    )
  }
});