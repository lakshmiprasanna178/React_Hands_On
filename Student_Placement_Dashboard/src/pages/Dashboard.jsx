import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const { user, applications } = useAuth();

  const totalApplications = applications.length;

  const applicationsUnderReview = applications.filter(
    (application) => application.status === "Under Review"
  ).length;

  const placementData = [
    { month: "January", applications: 10 },
    { month: "February", applications: 15 },
    { month: "March", applications: 20 },
    { month: "April", applications: 18 },
    { month: "May", applications: 25 },
  ];

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>Student Placement Dashboard</h1>

        <h2>Welcome, {user}!</h2>

        <h2>Dashboard Overview</h2>

        <div className="dashboard-cards">
          <StatCard
            title="Total Jobs Applied"
            value={totalApplications}
          />

          <StatCard
            title="Applications Under Review"
            value={applicationsUnderReview}
          />

          <StatCard
            title="Interviews Scheduled"
            value={3}
          />

          <StatCard
            title="Students Selected"
            value={2}
          />
        </div>

        <h2>Upcoming Deadlines</h2>

        <ul>
          <li>Amazon - 10 October 2026</li>
          <li>TCS - 15 October 2026</li>
          <li>Infosys - 20 October 2026</li>
        </ul>

        <h2>Placement Trends</h2>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={placementData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h2>Company-wise Placement Statistics</h2>

        <p>Amazon - 8 Students Selected</p>
        <p>TCS - 12 Students Selected</p>
        <p>Infosys - 10 Students Selected</p>
      </div>
    </div>
  );
}

export default Dashboard;