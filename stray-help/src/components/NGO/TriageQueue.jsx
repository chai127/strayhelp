import React from "react";
import "../../styles/TriageQueue.css";

// Mock data for incoming reports
const mockReports = [
    {
        id: 101,
        severity: "🔴 High",
        location: "Central Park, Near Gate 4",
        animal: "Dog (Beagle)",
        time: "5 min ago",
        injuryDetected: "Compound fracture on rear leg."
    },
    {
        id: 102,
        severity: "🟠 Medium",
        location: "145 Main St, Apt 3B",
        animal: "Cat (Tabby)",
        time: "15 min ago",
        injuryDetected: "Minor cuts on forepaw, hiding under porch."
    },
    {
        id: 103,
        severity: "🟡 Low",
        location: "Schoolyard Bus Stop",
        animal: "Bird (Pigeon)",
        time: "45 min ago",
        injuryDetected: "Appears exhausted, no visible injury."
    },
];

/**
 * TriageQueue Component
 * Displays a list of incoming reports, ordered by urgency/time.
 * Clicking a report sets it as the selected case for detailed view.
 * @param {object} props
 * @param {function} props.setSelectedCase - Function to set the currently selected case.
 * @param {function} props.setPage (Conceptual) - Function to switch the main app page.
 */
// NOTE: I've conceptually added setPage, assuming your top-level component manages page state.
const TriageQueue = ({ setSelectedCase, setPage }) => { 
    const reportCount = mockReports.length;

    // Conceptual function to handle navigation
    const handleViewAll = () => {
        if (setPage) {
            // In a real app, this would switch the view to a 'Reports' page
            setPage('AllReports'); 
        } else {
            console.log("Navigating to the full 'All Reports' page...");
            alert("This button would navigate to the comprehensive 'All Reports' view.");
        }
    };

    return (
        <section id="triage-queue">
            <div className="triage-queue">
    
                <div className="queue-header-controls">
                    <h3>Incoming Reports</h3>
                    <button 
                        className="view-all-button"
                        onClick={handleViewAll}
                    >
                        View All ({reportCount})
                    </button>
                </div>

                <div className="queue-list">
                    {reportCount === 0 ? (
                        <div className="empty-queue-message">
                    
                            <p>All incoming reports have been processed.</p>
                        </div>
                    ) : (
                        mockReports.map((report) => {
                            const severityLevel = report.severity.split(' ')[1].toLowerCase();

                            return (
                                <div
                                    key={report.id}
                                    className={`queue-item severity-${severityLevel}`}
                                    onClick={() => setSelectedCase(report)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            setSelectedCase(report);
                                        }
                                    }}
                                >
                                    {/* Primary Info (Left side) */}
                                    <div className="report-info">
                                        <span className="case-id">Case: {report.id}</span>
                                        <h4 className="animal-type">{report.animal}</h4>
                                        <p className="location-text">📍 {report.location}</p>
                                    </div>

                                    {/* Meta Info (Right side) */}
                                    <div className="report-meta">
                                        <span className={`severity-tag severity-tag-${severityLevel}`}>{report.severity}</span>
                                        <span className="time-tag">🕒 {report.time}</span>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};

export default TriageQueue;