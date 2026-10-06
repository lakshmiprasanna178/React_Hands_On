import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user);
  const [email, setEmail] = useState("student@example.com");
  const [course, setCourse] = useState("B.Tech AI & Data Science");
  const [year, setYear] = useState("3rd Year");

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>Student Profile</h1>

        <div className="job-card">
          <h2>Personal Information</h2>

          <p>
            <strong>Name:</strong>{" "}
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              name
            )}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              email
            )}
          </p>

          <p>
            <strong>Course:</strong>{" "}
            {editing ? (
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            ) : (
              course
            )}
          </p>

          <p>
            <strong>Year:</strong>{" "}
            {editing ? (
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            ) : (
              year
            )}
          </p>

          {editing ? (
            <button onClick={handleSave}>Save Profile</button>
          ) : (
            <button onClick={() => setEditing(true)}>Edit Profile</button>
          )}
        </div>

        <div className="job-card">
          <h2>Skills</h2>

          <ul>
            <li>Python</li>
            <li>SQL</li>
            <li>React</li>
            <li>Data Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;