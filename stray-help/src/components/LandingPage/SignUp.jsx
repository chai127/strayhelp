import React, { useState } from "react";
import "../../styles/SignUp.css";

const Signup = ({ setPage }) => { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup", { name, email, password });
        // TODO: Call backend API
    };

    return (
        <section className="auth-section">
            <div className="auth-container">
                <h2>Sign Up</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />

                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <p className="auth-switch">
                    Already have an account? <button type="button" className="auth-btn-2" onClick={() => setPage("login")}>Login</button>
                </p>
            </div>
        </section>
    );
};

export default Signup;
