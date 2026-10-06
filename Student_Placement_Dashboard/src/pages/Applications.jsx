import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Applications() {
  const { applications } = useAuth();
  const [statusFilter, setStatusFilter] = useState("");

  const filteredApplications = applications.filter(
    (application) =>
      statusFilter === "" || application.status === statusFilter
  );

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>My Applications</h1>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Applied">Applied</option>
          <option value="Under Review">Under Review</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Selected">Selected</option>
        </select>

        <br />
        <br />

        {filteredApplications.length === 0 ? (
          <div className="job-card">
            <p>No applications found.</p>
          </div>
        ) : (
          filteredApplications.map((application) => (
            <div className="job-card" key={application.id}>
              <h2>{application.company}</h2>

              <p>
                <strong>Role:</strong> {application.role}
              </p>

              <p>
                <strong>Applied Date:</strong> {application.date}
              </p>

              <p>
                <strong>Status:</strong> {application.status}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Applications;