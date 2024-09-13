
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import "./App.css";
import MyRoutes from "./routes/MyRoutes";
import { useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [showSlogan, setShowSlogan] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    if (location.pathname !== "/") {
      setShowSlogan(false); 
      return;
    }

    
    if (showSlogan) {
      console.log("Timer started");

      const timer = setTimeout(() => {
        console.log("Redirecting to /home");
        setShowSlogan(false);
        navigate("/"); 
      }, 4000);

      return () => {
        console.log("Timer cleared");
        clearTimeout(timer); 
      };
    }
  }, [showSlogan, navigate, location.pathname]); 

  return (
    <div className="App">
  
      {showSlogan ? <WelcomePage /> : <MyRoutes />}
    </div>
  );
}

export default App;
