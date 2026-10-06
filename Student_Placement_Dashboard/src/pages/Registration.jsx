import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("Please fill all fields");
      return;
    }

    setError("");
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Student Placement Dashboard</h1>

        <h2>Registration</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;