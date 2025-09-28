import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
    const [page, setPage] = useState("main"); // "main", "login", "signup"

    return (
        <>
            <Navbar setPage={setPage} />

            {page === "login" && <Login setPage={setPage} />}
            {page === "signup" && <Signup setPage={setPage} />}
            {page === "main" && (
                <>
                    <Hero setPage={setPage} />
                    <HowItWorks />
                    <About />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
