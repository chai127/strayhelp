import React from "react";
import Sidebar from "../NGO/Sidebar"; 

// Destructure role and setUserRole from props.
const WorkerDashboard = ({ role, setUserRole, setPage }) => {

    const workerUser = {
        username: "NGO Worker", // Display name
        role: role,             // Pass the actual role
        ngoName: "City Animal Rescue Foundation" 
    };

    return(
        <>
            <Sidebar user={workerUser} setUserRole={setUserRole} /> 


            <div style={{ marginLeft: '250px', padding: '20px' }}> 
                <h2>Worker Dashboard</h2>
                <p>Logged in as: <b>{role}</b></p>
                <p>List of reported animals assigned to this worker.</p>
                <button
                onClick={() => {
                    setUserRole(null);
                    setPage("main");
                }}
            >Logout</button>
            </div>
        </>
    );
}

export default WorkerDashboard;