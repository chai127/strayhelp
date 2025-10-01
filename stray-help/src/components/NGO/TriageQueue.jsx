import React from "react";
import "../../styles/TriageQueue.css";

// --- Constants for mapping (a professional practice) ---
const SEVERITY_MAPPING = {
    "🔴": "High",
    "🟠": "Medium",
    "🟡": "Low",
};

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
 */
const TriageQueue = ({ setSelectedCase }) => {
    return (
        <section id="triage-queue">
        <div className="triage-queue">
            <h3>🚨 Incoming Triage Queue</h3>
            
            <div className="queue-list">
                {mockReports.map((report) => {
                    // Extracting the severity level (e.g., '🔴 High' -> 'high') for CSS class
                    const severityLevel = report.severity.split(' ')[1].toLowerCase();
                    
                    return (
                        <div 
                            key={report.id} 
                            // Add severity class for border color
                            className={`queue-item severity-${severityLevel}`}
                            onClick={() => setSelectedCase(report)} 
                            role="button" // Improve accessibility
                            tabIndex={0} // Make it focusable
                        >
                            <div className="report-info">
                                <h4>Case #{report.id} - {report.animal}</h4>
                                <p>📍 {report.location}</p>
                            </div>
                            <div className="report-meta">
                                {/* The severity class will style the tag with the correct background */}
                                <span className="severity-tag">{report.severity}</span>
                                <span className="time-tag">🕒 {report.time}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </section>
    );
};

export default TriageQueue;