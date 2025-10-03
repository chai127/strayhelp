import React from "react";
import "../../styles/TriageQueue.css";

// Mock data for incoming reports
const mockReports = [
    {
        id: 101,
        severity: "High",
        location: "Central Park, Near Gate 4",
        // FIXED: Removed brackets
        animal: "Dog - Beagle", 
        time: "5 min ago",
        injuryDetected: "Compound fracture on rear leg.",
    },
    {
        id: 102,
        severity: "Medium",
        location: "145 Main St, Apt 3B",
        // FIXED: Removed brackets
        animal: "Cat - Tabby",
        time: "15 min ago",
        injuryDetected: "Minor cuts on forepaw, hiding under porch.",
    },
    {
        id: 103,
        severity: "Low",
        location: "Schoolyard Bus Stop",
        // FIXED: Removed brackets
        animal: "Bird - Pigeon",
        time: "45 min ago",
        injuryDetected: "Injured left wing.",
    },
];

/**
 * TriageQueue Component
 * Displays a list of incoming reports for immediate triage review.
 * @param {function} props.setSelectedCase - Function to set the currently selected case.
 */
const TriageQueue = ({ setSelectedCase }) => {
    const reportCount = mockReports.length;

    const handleViewAll = () => {
        console.log(`Navigating to the comprehensive 'All Reports' page (${reportCount} cases)...`);
    };

    return (
        <div className="triage-queue">
            {/* Header and Button */}
            <div className="queue-header-controls">
                <h3>Incoming Reports</h3>
                <button
                    className="view-all-button"
                    onClick={handleViewAll}
                >
                    View All ({reportCount})
                </button>
            </div>

            {/* List of Reports */}
            <div className="queue-list">
                {reportCount === 0 ? (
                    <div className="empty-queue-message">
                        <p>All incoming reports have been processed.</p>
                    </div>
                ) : (
                    mockReports.map((report) => {
                        const severityLevel = report.severity.toLowerCase();

                        return (
                            <div
                                key={report.id}
                                className={`queue-item severity-${severityLevel}`}
                                onClick={() => setSelectedCase(report)}
                                role="button"
                                tabIndex={0}
                            >
                                {/* Primary Info */}
                                <div className="report-info">
                                    <h4 className="animal-type">{report.animal}</h4>
                                    
                                    {/* Line 1: Case ID and Location */}
                                    <p className="location-text">
                                        Case: <strong>{report.id}</strong> | {report.location}
                                    </p>
                                    
                                    {/* Line 2: Injury/Condition Summary */}
                                    {/* <p className="injury-text">
                                        {report.injuryDetected}
                                    </p> */}
                                </div>

                                {/* Meta Info */}
                                <div className="report-meta">
                                    <span className="severity-tag">{report.severity.toUpperCase()}</span>
                                    <span className="time-tag">{report.time}</span>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default TriageQueue;