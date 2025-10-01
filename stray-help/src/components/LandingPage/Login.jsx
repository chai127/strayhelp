import React, { useState } from "react";
import "../../styles/Login.css";

// WARNING: This is a MOCK data for frontend-only demonstration.
const MOCK_USERS = [
  { email: "user@app.com", password: "password", role: "user" },
  { email: "ngo_admin@app.com", password: "password", role: "ngo-admin" },
  // Adding a general fallback for the role selector
  { email: "guest@app.com", password: "password", role: "user" }, 
];

// setRole prop 
const Login = ({ setPage, setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user"); 
  const [error, setError] = useState("");

  // --- NEW FUNCTION TO HANDLE ROLE CHANGE AND AUTO-FILL ---
  const handleRoleChange = (e) => {
    const newRole = e.target.value;
    setSelectedRole(newRole);
    setError(""); // Clear any previous error

    // Find the first mock user that matches the newly selected role
    const mockUser = MOCK_USERS.find(user => user.role === newRole);

    if (mockUser) {
      // Auto-fill the email and password fields with the mock user's data
      setEmail(mockUser.email);
      setPassword(mockUser.password);
    } else {
      // If no mock user is found (shouldn't happen with the current MOCK_USERS)
      // Clear the fields to force manual entry.
      setEmail("");
      setPassword("");
    }
  };
  // --------------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Find the user in the mock database
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // 2. Check if the provided credentials match the selected role
      if (user.role === selectedRole) {
        // 3. SUCCESSFUL MOCK LOGIN
        // Pass the role up to the parent App component (using setUserRole prop)
        setUserRole(user.role); 
        
        // Since setPage is not strictly needed after a role is set, 
        // the parent App component (App.jsx) is expected to handle the redirect
        // based on the new user role state.

      } else {
        // Mismatch between credentials and the role chosen in the dropdown
        setError(`Login failed. These credentials do not belong to a ${selectedRole} account.`);
      }
    } else {
      // 4. FAILED LOGIN
      setError("Invalid email or password.");
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-container">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          
          {/* Role Selection Dropdown */}
          <label htmlFor="role-select">Login as</label>
          <select
            id="role-select"
            value={selectedRole}
            // --- Use the new handler here ---
            onChange={handleRoleChange} 
            // --------------------------------
            className="auth-select"
            required
          >
            <option value=""  disabled  selected>Select a Login Option</option>
            <option value="user">User</option>
            <option value="ngo-admin">NGO Admin</option>
          </select>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email (e.g., user@app.com)"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password (e.g., password)"
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </form>

        <p className="auth-switch">
          Don’t have an account?{" "}
          <button
            type="button"
            className="auth-btn-2"
            onClick={() => setPage("signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;