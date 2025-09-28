import { useState, useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Footer from "./components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [page, setPage] = useState("main"); // "main", "login", "signup", "dashboard"
  const [user, setUser] = useState(null);

  // Listen to Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setPage("dashboard"); // Go to dashboard when logged in
      } else {
        setUser(null);
        setPage("main"); // Show main SPA when logged out
      }
    });

    return () => unsubscribe();
  }, []);

  // Dashboard view
  if (page === "dashboard") {
    return (
      <div>
        <Navbar setPage={setPage} />
        <h1>Dashboard</h1>
        <p>Welcome, {user?.email}</p>
        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    );
  }

  // Main SPA views
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
