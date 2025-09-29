import React, { useState } from "react";
import "../../styles/NGONavbar.css";

const NGONavbar = ({ user, setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Brand */}
        <div className="logo">StrayHelp <span>NGO</span></div>

        {/* Hamburger for mobile */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <button onClick={() => setPage("dashboard")}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => setPage("triage")}>Triage Queue</button>
          </li>
          <li>
            <button onClick={() => setPage("activeBoard")}>Active Board</button>
          </li>
          <li>
            <button onClick={() => setPage("volunteers")}>Volunteers</button>
          </li>

          {/* User Menu */}
          <div className="auth">
            <li>
              <button className="login" onClick={() => setPage("profile")}>
                {user?.email || "Profile"}
              </button>
            </li>
            <li>
              <button className="login" onClick={() => { setPage("main"); }}>Logout</button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NGONavbar;
