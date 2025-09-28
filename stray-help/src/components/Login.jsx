import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ setPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login", { email, password });
        // TODO: Call backend API
    };

    return (
        <section className="auth-section">
            <div className="auth-container">
                <h2>Login</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
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

                    <button type="submit" className="auth-btn">Login</button>
                </form>
                <p className="auth-switch">
                    Don’t have an account? <button type="button" className="auth-btn-2" onClick={() => setPage("signup")}>Sign Up</button>
                </p>
            </div>
        </section>
    );
};

export default Login;
