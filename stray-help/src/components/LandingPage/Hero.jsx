import React from "react";
import "../../styles/Hero.css";
import dogImage from '../../assets/doggo.png'; 

const Hero = ({ setPage }) => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                {/* Left Side */}
                <div className="hero-text">
                    <h1 className="hero-heading">Report injured strays in seconds</h1>
                    <p className="hero-subheading">
                        Upload a photo and we’ll notify the nearest NGOs. AI detects injury severity and automatically generates a report.
                    </p>
                    <a
                        href="#report"
                        className="hero-cta"
                        onClick={(e) => {
                            e.preventDefault();
                            setPage("login"); // require login first
                        }}
                    >
                        Report Now
                    </a>
                </div>

                {/* Right Side */}
                <div className="hero-image">
                    <img src={dogImage} alt="Injured Dog" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
