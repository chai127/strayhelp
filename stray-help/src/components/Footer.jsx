import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand */}
                <div className="footer-brand">
                    <span className="footer-logo">StrayHelp</span>
                    <p className="footer-tagline">
                        Connecting citizens with NGOs to save injured strays.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <a href="#" aria-label="Twitter">Twitter</a>
                    <a href="#" aria-label="Facebook">Facebook</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                </div>
            </div>

            {/* Bottom Copy */}
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} StrayHelp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

