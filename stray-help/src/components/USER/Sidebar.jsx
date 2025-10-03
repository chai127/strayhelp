import React from "react";
import "../../styles/Sidebar.css";

const IconStrayHelp = () => <span style={{ color: "#E53935", fontSize: "24px" }}>&#9829;</span>;
const IconReport = () => <span style={{ marginRight: "10px" }}>&#8631;</span>;
const IconMyReports = () => <span style={{ marginRight: "10px" }}>&#9776;</span>;
const IconHowItWorks = () => <span style={{ marginRight: "10px" }}>&#9432;</span>;
const IconSettings = () => <span style={{ marginRight: "10px" }}>&#9881;</span>;

function Sidebar() {
  return (
    <aside className="sb-container">
      <div className="sb-logo-section">
        {/* <IconStrayHelp /> */}
        <div className="sb-logo-text">
          <h2 className="sb-logo-title">StrayHelp</h2>
        </div>
      </div>

      <nav className="sb-menu">
        <div className="sb-item sb-active">
          <IconReport />
          <span>New Report</span>
        </div>
        <div className="sb-item">
          <IconMyReports />
          <span>My Reports</span>
        </div>
        <div className="sb-item">
          <IconHowItWorks />
          <span>How It Works</span>
        </div>
        <div className="sb-item">
          <IconSettings />
          <span>Settings</span>
        </div>
      </nav>

      <div className="sb-weather">
        <p>28°C Monthly Cloudy</p>
      </div>
    </aside>
  );
}

export default Sidebar;
