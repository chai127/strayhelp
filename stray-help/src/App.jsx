import { useState, useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/LandingPage/Login";
import SignUp from "./components/LandingPage/SignUp";
import Hero from "./components/LandingPage/Hero";
import HowItWorks from "./components/LandingPage/HowItWorks";
import About from "./components/LandingPage/About";
import Footer from "./components/Footer";
import Dashboard from "./components/NGO/NGODashboard"; 
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [page, setPage] = useState("main"); // "main", "login", "signup", "dashboard"
  const [user, setUser] = useState(null);

  // Listen to auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPage("dashboard"); //show dashboard on login
      } else {
        setUser(null);
        setPage("main"); //  back to landing page if logged out
      }
    });

    return () => unsubscribe();
  }, []);

  // Dashboard view (only visible when logged in)
  if (page === "dashboard" && user) {
    return (
      <div>
        {/* <Navbar setPage={setPage} /> */}
        <Dashboard user={user} /> 
      </div>
    );
  }

  // Landing / Auth pages
  return (
    <>
      <Navbar setPage={setPage} />

      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <SignUp setPage={setPage} />}
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
