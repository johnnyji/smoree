var CourseEmailPage = React.createClass({
  getInitialState: function () {
      return {
        selectedStudents: []     
      }
  },
  handleSelectedStudent: function(studentId) {
    var students = this.state.selectedStudents;
    students.push(studentId);
    this.setState({ selectedStudents: students });
  },
  handleRemoveSelectedStudent: function(studentId) {
    var students = this.state.selectedStudents;
    var i = students.indexOf(studentId);
    students.splice(i, 1);
    this.setState({ selectedStudents: students });
  },
  render: function() {
    var p = this.props;
    var s = this.state;
    return (
      <div>
        <Banner imageUrl={p.course.image_url} title={p.course.title} />
        
        <EmailBox students={s.selectedStudents}/>

        <StudentsContainer 
          students={p.students} 
          handleSelectedStudent={this.handleSelectedStudent}
          handleRemoveSelectedStudent={this.handleRemoveSelectedStudent}
        />
      </div>
    )
  }
});