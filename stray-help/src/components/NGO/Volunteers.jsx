import React from "react";
import "../../styles/Volunteers.css";

const dummyVolunteers = [
  { id: 1, name: "Alice Johnson", contact: "9876543210", specialty: "Rescue & Handling", status: "Dispatched", lastDispatch: "1 hour ago" },
  { id: 2, name: "Bob Smith", contact: "9123456780", specialty: "Triage & First Aid", status: "Available", lastDispatch: "Yesterday" },
  { id: 3, name: "Charlie Brown", contact: "9988776655", specialty: "Driver/Transport", status: "Resting", lastDispatch: "3 hours ago" },
  { id: 4, name: "Diana Prince", contact: "9001122334", specialty: "Rescue & Handling", status: "Available", lastDispatch: "2 days ago" },
  { id: 5, name: "Ethan Hunt", contact: "9554433221", specialty: "Triage & First Aid", status: "Dispatched", lastDispatch: "30 mins ago" },
];

const Volunteers = () => {
    // Calculate the number of dispatched volunteers
    const dispatchedCount = dummyVolunteers.filter(v => v.status === "Dispatched").length;

    return (
        <section id="volunteers-panel" className="volunteers-panel">
            <div className="volunteers-header">
                <div className="dispatch-summary">
                    <span className="dispatched-count">
                        {dispatchedCount} Dispatched
                    </span>
                    <span className="available-count">
                        {dummyVolunteers.length - dispatchedCount} Available
                    </span>
                </div>
            </div>

            <ul className="volunteer-list">
                {dummyVolunteers.map((v) => (
                    <li key={v.id} className={`volunteer-card status-${v.status.toLowerCase()}`}>
                        <div className="volunteer-info">
                            <span className="volunteer-name">{v.name}</span>
                            <span className="volunteer-specialty">{v.specialty}</span>
                        </div>
                        
                        <div className="volunteer-details">
                            <div className="detail-item">
                                <span className="detail-label">Status:</span>
                                <span className="detail-value status-text">{v.status}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Contact:</span>
                                <span className="detail-value contact-number">{v.contact}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Last Activity:</span>
                                <span className="detail-value last-activity">{v.lastDispatch}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Volunteers;