// src/routes/Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Slogan from "../components/Slogan";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Update from "../components/Update/Update";
import Catalogues from "../components/Catalogues/Catalogues";
import Realisations from "../components/Realisations/Realisations";
import Apropos from "../components/Apropos/Apropos";
import Contact from "../components/Contact/Contact";
import Favoris from "../components/Favoris/Favoris";
import CakeDetail from "../components/CakeDetail/CakeDetail";
import VideoPresentation from "../components/VideoPresentation/VideoPresentation";

const MyRoutes = () => (
  <Router>
     
    <Routes>
      <Route exact path="/" element={<Home />}/>
        <Route path="slogan" element={<Slogan />} />
        <Route path="update" element={<Update />} />
        <Route path="catalogues" element={<Catalogues />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favoris" element={<Favoris />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/cake/:id" element={<CakeDetail />} />
        <Route path="videopresentation" element={<VideoPresentation />} />
    </Routes>
    
  </Router>
);

export default MyRoutes;
