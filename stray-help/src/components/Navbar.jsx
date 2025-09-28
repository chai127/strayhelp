import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const scrollToSection = (id) => {
        setPage("main"); // ensure main content is shown
        setMenuOpen(false); // close mobile menu
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo / Brand */}
                <div className="logo">StrayHelp</div>

                {/* Hamburger */}
                <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Nav Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <button onClick={() => scrollToSection("home")}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("how-it-works")}>How It Works</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("about")}>About</button>
                    </li>
                    <div className="auth">
                        <li>
                            <button className="login" onClick={() => setPage("login")}>Login</button>
                        </li>
                        <li>
                            <button className="login" onClick={() => setPage("signup")}>Sign Up</button>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
