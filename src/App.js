// import { useNavigate } from "react-router-dom";
// import "./App.css";
// import { useEffect, useState } from "react";
// import WelcomePage from "./components/WelcomePage";
// import MyRoutes from "./routes/MyRoutes";



// function App() {
//   const [showSlogan, setShowSlogan] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!showSlogan) return;

//     console.log("Timer started");

//     const timer = setTimeout(() => {
//       console.log("Redirecting to /home");
//       setShowSlogan(false);
//       navigate("/"); 
//     }, 4000);

//     return () => {
//       console.log("Timer cleared");
//       clearTimeout(timer);
//     };
//   }, [showSlogan, navigate]);

//   return (
//     <div className="App">
//           {showSlogan ?  <WelcomePage/> : <MyRoutes />} 
    
//     </div>
//   );
// }

// export default App;





import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Ajout de useLocation
import "./App.css";
import MyRoutes from "./routes/MyRoutes";
import { useEffect, useState } from "react";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [showSlogan, setShowSlogan] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Pour obtenir la route actuelle

  useEffect(() => {
    // Afficher le WelcomePage uniquement sur la route d'accueil "/"
    if (location.pathname !== "/") {
      setShowSlogan(false); // Si on est sur une autre route, désactiver WelcomePage
      return;
    }

    // Timer pour afficher WelcomePage pendant 4 secondes
    if (showSlogan) {
      console.log("Timer started");

      const timer = setTimeout(() => {
        console.log("Redirecting to /home");
        setShowSlogan(false);
        navigate("/"); // Redirection vers la page d'accueil après 4 secondes
      }, 4000);

      return () => {
        console.log("Timer cleared");
        clearTimeout(timer); // Nettoyage du timer
      };
    }
  }, [showSlogan, navigate, location.pathname]); // Ajout de location.pathname

  return (
    <div className="App">
      {/* Afficher WelcomePage uniquement si on est sur la route d'accueil */}
      {showSlogan ? <WelcomePage /> : <MyRoutes />}
    </div>
  );
}

export default App;
