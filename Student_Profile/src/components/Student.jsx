function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Profile</h2>

      <p>Name : {props.name}</p>
      <p>Roll No : {props.rollNo}</p>
      <p>Course : {props.course}</p>
      <p>College : {props.college}</p>
    </div>
  );
}

export default Student;