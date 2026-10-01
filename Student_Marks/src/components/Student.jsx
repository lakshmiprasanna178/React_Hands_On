import { useState } from "react";

function Student(props) {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    setMarks(marks + 10);
  };

  const decreaseMarks = () => {
    setMarks(marks - 10);
  };

  return (
    <div className="student-card">
      <h2>Student Marks</h2>

      <p>Student Name: {props.name}</p>
      <p>Subject: {props.subject}</p>

      <p>Marks: {marks}</p>

      <button onClick={increaseMarks}>Increase Marks</button>
      <button onClick={decreaseMarks}>Decrease Marks</button>
    </div>
  );
}

export default Student;