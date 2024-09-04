import { useNavigate } from "react-router-dom";
import "./App.css";
import Routes from "./routes/MyRoutes";
import { useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";



function App() {
  const [showSlogan, setShowSlogan] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showSlogan) return;

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
  }, [showSlogan, navigate]);

  return (
    <div className="App">
         {showSlogan ?  <WelcomePage/> : <Routes />}  
 
    </div>
  );
}

export default App;
