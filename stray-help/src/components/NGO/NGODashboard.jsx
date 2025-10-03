// src/components/NGODashboard.jsx (Refined)

import { useState } from "react";
import "../../styles/NGODashboard.css";
import TriageQueue from "./TriageQueue";
import KanbanBoard from "./KanbanBoard";
import NGONavbar from "./NGONavbar";
import Volunteers from "./Volunteers";
import LiveMap from "./LiveMap"; 
import Adoption from "./Adoption";

const mockUser = {
    username: "ngo_admin",
    ngoName: "City Animal Rescue Foundation"
};

const NGODashboard = ({ setPage, user = mockUser, setUserRole }) => {
    const [selectedCase, setSelectedCase] = useState(null);

    return (
        <div className="ngo-dashboard">
            <NGONavbar user={user} setPage={setPage} setUserRole={setUserRole} />

            <div className="dashboard-content-wrapper">
                <div className="dashboard-main">
                    <h2>Case Management</h2>

                    <div className="dashboard-panels">
                        {/* NEW: Wrapper for Triage Queue to apply specific width rules 
                            and override the general flex: 1 1 0 rule.
                        */}
                        <div className="triage-panel">
                            <TriageQueue setSelectedCase={setSelectedCase} />
                        </div>
                        {/* The Kanban Board will take up the rest of the available space */}
                        <div className="kanban-panel">
                            <KanbanBoard selectedCase={selectedCase} />
                        </div>
                    </div>

                    <h2>Volunteer Management</h2>
                    <div className="dashboard-panels">
                        {/* Using explicit wrappers for consistency */}
                        <div className="volunteer-panel-container">
                            <Volunteers />
                        </div>
                        <div className="live-map-container">
                            <LiveMap /> 
                        </div>
                    </div>
                    
                    <h2>Adoption Management</h2>
                    <div className="dashboard-panels">
                        <div className="adoption-container-wrapper">
                            <Adoption/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NGODashboard;