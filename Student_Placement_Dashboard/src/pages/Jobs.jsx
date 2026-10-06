import { useState } from "react";
import jobs from "../data/jobs";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { useAuth } from "../context/AuthContext";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const { applications, addApplication } = useAuth();

  const filteredJobs = jobs.filter(
    (job) =>
      (job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.role.toLowerCase().includes(search.toLowerCase())) &&
      (location === "" || job.location === location) &&
      (company === "" || job.company === company)
  );

  const handleApply = (job) => {
    const alreadyApplied = applications.some(
      (application) => application.jobId === job.id
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    const newApplication = {
      id: applications.length + 1,
      jobId: job.id,
      company: job.company,
      role: job.role,
      date: "06 October 2026",
      status: "Applied",
    };

    addApplication(newApplication);

    alert(`Successfully applied for ${job.role} at ${job.company}`);
  };

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>Job Openings</h1>

        <input
          type="text"
          placeholder="Search company or job role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>

        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="">All Companies</option>
          <option value="Amazon">Amazon</option>
          <option value="TCS">TCS</option>
          <option value="Infosys">Infosys</option>
          <option value="Deloitte">Deloitte</option>
        </select>

        <br />
        <br />

        {filteredJobs.length === 0 ? (
          <div className="job-card">
            <p>No jobs found.</p>
          </div>
        ) : (
          filteredJobs.map((job) => {
            const alreadyApplied = applications.some(
              (application) => application.jobId === job.id
            );

            return (
              <JobCard
                key={job.id}
                job={job}
                onApply={handleApply}
                applied={alreadyApplied}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Jobs;