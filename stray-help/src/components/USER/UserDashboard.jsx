import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ReportForm from "./Report";
import "../../styles/UserDashboard.css";

const mockUser = {
  username: "john_doe",
  fullName: "John Doe",
};

const UserDashboard = ({ setPage, userRole, setUserRole }, user = mockUser) => {
  return (
    <div className="ud-layout">
      {/* <Sidebar user={user} /> */}

      <div className="ud-main-area">
        <Header setPage={setPage} userRole={userRole} setUserRole={setUserRole} />

        <div className="ud-content-wrapper">
          <div className="ud-content-main">
            <div className="ud-panels">
              <ReportForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
