import { useState, useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/LandingPage/Login";
import SignUp from "./components/LandingPage/SignUp";
import Hero from "./components/LandingPage/Hero";
import HowItWorks from "./components/LandingPage/HowItWorks";
import About from "./components/LandingPage/About";
import Footer from "./components/Footer";
import UserDashboard from "./components/USER/UserDashboard"; 
import NGODashboard from "./components/NGO/NGODashboard"; 

function App() {
  // 'main', 'login', 'signup', 'dashboard' (dashboard is now inferred from userRole)
  const [page, setPage] = useState("main"); 
  
  // The 'user' object is now simplified to hold the logged-in role
  const [userRole, setUserRole] = useState(null); // null, 'user', 'ngo-admin', 'ngo-worker'
  
  
  // Function to be passed to Login component to handle mock login success
  const handleUserLogin = (role) => {
    setUserRole(role);
    // Optionally set page to 'dashboard' here, but the primary render logic
    // will now handle the dashboard view based on userRole being non-null.
    setPage('dashboard');
  };

  // 1. Dashboard view (visible if userRole is set)
  if (userRole) {
    return (
      <>
        {/* Render a specific dashboard based on the logged-in role */}
        {userRole === "user" && <UserDashboard  setPage={setPage} role={userRole} setUserRole={setUserRole} />}
        {userRole === "ngo-admin" && 
          <NGODashboard role={userRole}  setPage={setPage} setUserRole={setUserRole} />}
        
         
      </>
    );
  }

  // 2. Landing / Auth pages (visible if no userRole is set)
  return (
    <>
      <Navbar setPage={setPage} userRole={userRole} setUserRole={setUserRole} />

      {/* Pass the handleUserLogin function to the Login component */}
      {page === "login" && <Login setPage={setPage} setUserRole={handleUserLogin} />}
      
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