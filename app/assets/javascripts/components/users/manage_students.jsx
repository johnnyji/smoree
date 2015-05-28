var ManageStudents = React.createClass({
  propTypes: {
    initialEmailValue: React.PropTypes.string,
    students: React.PropTypes.array.isRequired,
    user: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
      return {
        selectedAll: false,
        droppedAll: true,
        selectedStudents: [],
        students: null,
        componentReady: false
      }
  },
  componentDidMount: function() {
    var distinct = [];
    var students = this.props.students;
    // checks if the email is a duplicate before sending to all students
    for (var i = 0; i < students.length; i++) {
      var duplicateEmails = distinct.filter(function(s) {
        return s.email === students[i].email
      })
      if (duplicateEmails.length === 0) {
        distinct.push(students[i]);
      }
    }
    this.setState({ 
      componentReady: true,
      students: distinct
    });
  },
  handleSelectedStudent: function(studentId) {
    var students = this.state.selectedStudents;
    students.push(studentId);
    this.setState({
      selectedStudents: students,
      droppedAll: false
    });
  },
  handleRemoveSelectedStudent: function(studentId) {
    var students = this.state.selectedStudents;
    var i = students.indexOf(studentId);
    students.splice(i, 1);
    this.setState({
      selectedStudents: students,
      selectedAll: false
    });
  },
  handleSelectAll: function() {
    var allStudents = [];
    for (var i = 0; i < this.state.students.length; i++) {
      allStudents.push(this.state.students[i].id)
    }
    this.setState({
      selectedAll: true,
      droppedAll: false,
      selectedStudents: allStudents
    });
  },
  handleDropAll: function() {
    this.setState({
      selectedAll: false,
      droppedAll: true,
      selectedStudents: []
    });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    
    if (!s.componentReady) { return <Spinner /> }

    return (
      <div>
        <UserEmailBox 
          students={s.selectedStudents}
          initialEmailValue={p.initialEmailValue === null ? "" : p.initialEmailValue}
        />
        <AllStudentsContainer
          students={s.students}
          selectedAll={s.selectedAll}
          droppedAll={s.droppedAll}
          handleSelectAll={this.handleSelectAll}
          handleDropAll={this.handleDropAll}
          handleSelectedStudent={this.handleSelectedStudent}
          handleRemoveSelectedStudent={this.handleRemoveSelectedStudent}
        />
      </div>
    )
  }
});