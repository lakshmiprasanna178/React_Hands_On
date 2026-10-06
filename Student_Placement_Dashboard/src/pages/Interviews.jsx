import { useState } from "react";
import interviews from "../data/interviews";
import Navbar from "../components/Navbar";

function Interviews() {
  const [modeFilter, setModeFilter] = useState("");

  const filteredInterviews = interviews.filter(
    (interview) =>
      modeFilter === "" || interview.mode === modeFilter
  );

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>Interview Schedule</h1>

        <select
          value={modeFilter}
          onChange={(e) => setModeFilter(e.target.value)}
        >
          <option value="">All Modes</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        <br />
        <br />

        {filteredInterviews.length === 0 ? (
          <div className="job-card">
            <p>No interviews found.</p>
          </div>
        ) : (
          filteredInterviews.map((interview) => (
            <div className="job-card" key={interview.id}>
              <h2>{interview.company}</h2>

              <p>
                <strong>Role:</strong> {interview.role}
              </p>

              <p>
                <strong>Date:</strong> {interview.date}
              </p>

              <p>
                <strong>Time:</strong> {interview.time}
              </p>

              <p>
                <strong>Mode:</strong> {interview.mode}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
  
export default Interviews;