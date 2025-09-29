import React from "react";
import "../../styles/About.css";
import missionIcon from "../../assets/mission.png";
import aiIcon from "../../assets/ai.png";
import communityIcon from "../../assets/community.png";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="section-header">
                <h2>About StrayHelp</h2>
                <p>Bridging the gap between citizens and NGOs to save injured strays.</p>
            </div>

            <div className="about-cards">
                {/* Mission */}
                <div className="about-card">
                    <img src={missionIcon} alt="Mission Icon" />
                    <h3>Our Mission</h3>
                    <p>
                        Empower everyday citizens to help stray animals, even if they’re busy.
                        A simple photo can save a life.
                    </p>
                </div>

                {/* AI Assistance */}
                <div className="about-card">
                    <img src={aiIcon} alt="AI Icon" />
                    <h3>AI Assistance</h3>
                    <p>
                        Our AI analyzes the uploaded photo, detects injury severity, identifies breed,
                        and generates a report automatically for NGOs.
                    </p>
                </div>

                {/* Community */}
                <div className="about-card">
                    <img src={communityIcon} alt="Community Icon" />
                    <h3>Community Impact</h3>
                    <p>
                        Builds awareness, strengthens community involvement, and connects volunteers
                        with NGOs seamlessly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
