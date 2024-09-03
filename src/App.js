import { useNavigate } from "react-router-dom";
import "./App.css";
import Slogan from "./components/Slogan";
import Routes from "./routes/MyRoutes";
import { useEffect, useState } from "react";


function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      navigate("/"); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="App">
        {showWelcome ?  <Slogan/> : <Routes />} 
  
    </div>
  );
}

export default App;
