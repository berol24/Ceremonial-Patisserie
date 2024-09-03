import { useNavigate } from "react-router-dom";
import "./App.css";
import Slogan from "./components/Slogan";
import Routes from "./routes/MyRoutes";
import { useEffect, useState } from "react";



function App() {
  const [showSlogan, setShowSlogan] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showSlogan) return;

    console.log("Timer started");

    const timer = setTimeout(() => {
      console.log("Redirecting to /home");
      setShowSlogan(false);
      navigate("/"); // Redirection vers la page d'accueil
    }, 3000);

    return () => {
      console.log("Timer cleared");
      clearTimeout(timer);
    };
  }, [showSlogan, navigate]);

  return (
    <div className="App">
        {showSlogan ?  <Slogan/> : <Routes />} 
  
    </div>
  );
}

export default App;
