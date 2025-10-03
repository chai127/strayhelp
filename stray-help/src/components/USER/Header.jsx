import React from "react";

const IconBell = () => <span style={{ fontSize: "20px" }}>&#128276;</span>;
const IconLogout = () => <span style={{ marginLeft: "5px" }}>&#x2192;</span>;
const IconReport = () => <span style={{ marginRight: "8px" }}>&#8631;</span>;
const IconMyReports = () => <span style={{ marginRight: "8px" }}>&#9776;</span>;
const IconHowItWorks = () => <span style={{ marginRight: "8px" }}>&#9432;</span>;
const IconSettings = () => <span style={{ marginRight: "8px" }}>&#9881;</span>;

function Header({ setPage, userRole, setUserRole }) {
  return (
    <header className="hd-container">
      {/* LEFT: Logo */}
       <div className="hd-content-wrapper-inner"> 
      <div className="hd-left">
        <h1 className="hd-logo">StrayHelp</h1>
</div>
         <div className="hd-right">
        <nav className="hd-nav">
          <button className="hd-nav-item hd-active">
            {/* <IconReport /> */}
             New Report
          </button>
          <button className="hd-nav-item">
            {/* <IconMyReports />  */}
            My Reports
          </button>
          <button className="hd-nav-item">
            {/* <IconHowItWorks />  */}
            Adopt
          </button>
          <button className="hd-nav-item">
            {/* <IconSettings /> */}
             Settings
          </button>
        </nav>
      </div>

      <div className="hd-actions">
        <button className="hd-icon-btn">
          <IconBell />
        </button>
        <button className="hd-btn hd-primary">My Account</button>
        <button
          className="hd-btn hd-primary"
          onClick={() => {
            setUserRole(null);
            setPage("main");
          }}
        >
          Logout 
          {/* <IconLogout /> */}
        </button>
      </div>
         </div>
    </header>
  );
}

export default Header;
