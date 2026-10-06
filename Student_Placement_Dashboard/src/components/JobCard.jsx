function JobCard({ job, onApply, applied }) {
  return (
    <div className="job-card">
      <h2>{job.company}</h2>

      <p>
        <strong>Role:</strong> {job.role}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Salary:</strong> {job.salary}
      </p>

      <p>
        <strong>Application Deadline:</strong> {job.deadline}
      </p>

      <button onClick={() => onApply(job)}>
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
}

export default JobCard;