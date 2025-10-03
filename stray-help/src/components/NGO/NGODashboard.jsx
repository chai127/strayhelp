// src/components/NGODashboard.jsx

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
                    <h2>Case Management & Workflow</h2>

                    <div className="dashboard-panels">
                        <TriageQueue setSelectedCase={setSelectedCase} />
                        <KanbanBoard selectedCase={selectedCase} />
                    </div>

                    <h2>Volunteer Management</h2>
                    <div className="dashboard-panels">
                        <div className="volunteer-panel-container">
                            <Volunteers />
                        </div>
                        <div className="live-map-container"> {/* Updated class name */}
                            <LiveMap /> 
                        </div>
                    </div>
                    <div className="dashboard-panels">
                            <div className="adoption-container">
                                <Adoption/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default NGODashboard;