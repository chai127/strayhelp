import React from "react";
import "../../styles/HowItWorks.css";
import step1Icon from "../../assets/step1.png"; // camera icon
import step2Icon from "../../assets/step2.png"; // location/map icon
import step3Icon from "../../assets/step3.png"; // heart/NGO icon

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how-it-works">
            <div className="section-header">
                <h2>How StrayHelp Works</h2>
                <p>Helping injured strays is as easy as 1-2-3!</p>
            </div>

            <div className="steps-container">
                {/* Step 1 */}
                <div className="step-card">
                    <div className="step-icon">
                        <img src={step1Icon} alt="Upload Photo" />
                    </div>
                    <h3>Upload Photo</h3>
                    <p>
                        Snap or upload a photo of the injured animal. Our AI validates it instantly.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="step-card">
                    <div className="step-icon">
                        <img src={step2Icon} alt="Location Auto-Fetch" />
                    </div>
                    <h3>Auto Location & AI Check</h3>
                    <p>
                        Your location is detected automatically. AI checks the injury severity and prepares a report.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="step-card">
                    <div className="step-icon">
                        <img src={step3Icon} alt="Rescue & Track" />
                    </div>
                    <h3>NGO Rescue & Track</h3>
                    <p>
                        Nearby NGOs receive the alert instantly. Track the rescue progress directly in your dashboard.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
