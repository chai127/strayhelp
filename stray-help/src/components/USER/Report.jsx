import React, { useState, useRef } from "react";

const IconUpload = () => <span style={{ fontSize: "48px", color: "#E53935" }}>&#8682;</span>;

function ReportForm() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="rf-card">
      <h2 className="rf-title">Report an Injured Stray Animal</h2>

<p className="rf-instruction">
  <ol>
    <li>Take a clear photo showing the animal and its condition.</li>
    <li>Upload Photo in the area below.</li>
    <li>Our system will automatically detect your location.</li>
    <li>A detailed report will be generated and sent to nearby animal welfare NGOs for immediate assistance.</li>
    <li>You can track the status of your report in your <i>My Reports</i>.</li>
  </ol>
</p>


      <div
        className="rf-upload-area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
        />

        {file ? (
          <p className="rf-file-name">File Selected: <strong>{file.name}</strong></p>
        ) : (
          <>
            <IconUpload />
            <p className="rf-upload-text">Click or Drag Photo Here</p>
          </>
        )}

        <p className="rf-limits">
          (JPG or PNG, max 5MB. GPS location will be automatically fetched.)
        </p>
      </div>

      {/* Uncomment this when you add backend submission */}
      {/* <button className="rf-submit-btn" disabled={!file}>Submit Report</button> */}
    </div>
  );
}

export default ReportForm;
