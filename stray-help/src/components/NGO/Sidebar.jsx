// src/components/Sidebar.jsx

import React from "react";
// Assuming you'll add specific sidebar styles to NGODashboard.css or a dedicated file
import "../../styles/Sidebar.css";

const Sidebar = ({ user }) => {
  // Mock data for navigation links
  const navLinks = [
    { name: "Dashboard", icon: "🏠", key: "dashboard" },
    { name: "Triage Queue", icon: "🚨", key: "queue" },
    { name: "Case Tracker", icon: "📍", key: "tracker" },
    { name: "Vet Hospitals", icon: "🏥", key: "hospitals" },
    { name: "Reports & Analytics", icon: "📊", key: "reports" },
    { name: "Settings", icon: "⚙️", key: "settings" },
  ];

  return (
    <div className="ngo-sidebar">
      <div className="sidebar-header">
        {/* Replace with a logo or NGO name */}
        <h2>🐾 StrayHelp NGO</h2>
        <p className="ngo-name">
          Welcome, {user?.ngoName || "Rescue Team"}!
        </p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.key}>
              <a href={`#${link.key}`}>
                <span className="icon">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>Logged in as: {user?.username || "admin"}</p>
      </div>
    </div>
  );
};

export default Sidebar;