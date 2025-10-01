// src/components/NGODashboard.jsx

import { useState } from "react";
import "../../styles/NGODashboard.css";
import Sidebar from "./Sidebar"; 
import TriageQueue from "./TriageQueue";
import KanbanBoard from "./KanbanBoard";
import NGONavbar from "./NGONavbar"; 
import Volunteers from "./Volunteers";

// src/components/NGODashboard.jsx
// ... (imports remain the same)

const mockUser = {
    username: "ngo_admin",
    ngoName: "City Animal Rescue Foundation"
};

const NGODashboard = ({ setPage, user = mockUser,setUserRole }) => { 
    // selectedCase will hold the data of the report clicked in the TriageQueue
    const [selectedCase, setSelectedCase] = useState(null);

    return (
        <div className="ngo-dashboard">
            <NGONavbar user={user} setPage={setPage} setUserRole={setUserRole} />

            {/* The main layout container: Sidebar and Main Content */}
            <div className="dashboard-content-wrapper">
                <Sidebar user={user} /> {/* Sticky Sidebar */}

                <div className="dashboard-main">
                    <h2>Case Management & Workflow</h2>

                    {/* ROW 1: Triage Queue and Kanban Board are side-by-side */}
                    <div className="dashboard-panels">
                        <TriageQueue setSelectedCase={setSelectedCase} />
                        <KanbanBoard selectedCase={selectedCase} />
                    </div>
                    
                    {/* ROW 2: Volunteers (Left Panel) and an empty space/other component (Right Panel) */}
                    <h2>Volunteer Management</h2> {/* New section header */}
                    <div className="dashboard-panels">
                        <div className="volunteer-panel-container"> {/* New class for specific styling */}
                            <Volunteers/>
                        </div>
                        <div className="empty-panel-placeholder">
                            {/* Placeholder for future content or simply to maintain the two-column grid */}
                            <p>Analytics/Quick Actions Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NGODashboard;