import React, { useState } from "react";
import "../../styles/NGONavbar.css";

const USERNavbar = ({ userRole, setPage, setUserRole, user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
        setPage('dashboard'); // ensure main content is shown
        setMenuOpen(false); // close mobile menu
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Brand */}
        <div className="logo">StrayHelp   <span><b>{user.username}</b></span></div>

        {/* Hamburger for mobile */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* <li>
            <button onClick={() => scrollToSection("dashboard")}>Dashboard</button>
          </li> */}
          <li>
            <button > New Report</button>
          </li>
          <li>
            <button >My Reports</button>
          </li>
          <li>
            <button>Adopt</button>
          </li>

          {/* User Menu */}
          <div className="auth">
            <li>
              <button className="login" onClick={() => scrollToSection("profile")}>
                {user?.email || "Profile"}
              </button>
            </li>
            <li>
              <button
                    className="login"
                    onClick={() => {
                      setUserRole(null); // clear the user role
                      setPage("main");   // return to landing page
                    }}
                  >
                    Logout
                  </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default USERNavbar;
