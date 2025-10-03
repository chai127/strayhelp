import React from "react";
import "../../styles/KanbanBoard.css";

const KanbanBoard = ({ selectedCase }) => {
  if (!selectedCase) {
    return (
      <div className="kanban-board empty-state">
        <p>Select a case from the Incoming Reports to view details and start rescue.</p>
        <p>Case details, AI assessment, and actions will appear here.</p>
      </div>
    );
  }

  return (
    <section id="kanban-board">
    <div className="kanban-board details-view">
      <h3>Case Details: {selectedCase.id}</h3>
      <div className="details-container">
        {/* Placeholder for the AI-generated Report and Image */}
          <div className="report-summary">
            <h4>AI Report Summary</h4>
            <p><strong>Severity:</strong> <span className={`severity-tag ${selectedCase.severity.toLowerCase()}`}>{selectedCase.severity}</span></p>
            <p><strong>Animal/Breed:</strong> {selectedCase.animal}</p>
            <p><strong>Injury Detected:</strong> {selectedCase.injuryDetected}</p>
            <p><strong>Recommended Action:</strong> Immediate dispatch and transport to Vet Hospital.</p>
            <p><strong>Vet Hospitals Nearby:</strong> City Vet (2.1mi), Animal Care Clinic (4.5mi)</p>
          </div>

        
        <div className="case-image-placeholder">
            {/* The actual photo uploaded by the user */}
            
            <p className="image-caption">Uploaded by User ID: 5001 ({selectedCase.time})</p>
        </div>

        {/* Action buttons/Workflow */}
        <div className="case-actions">
            <button className="btn-primary">Dispatch Rescue Team</button>
            <button className="btn-secondary">Contact Reporter</button>
            <button className="btn-tertiary">Mark as Rescued</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default KanbanBoard;
