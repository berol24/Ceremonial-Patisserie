// src/routes/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Slogan from '../components/Slogan';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';

const MyRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="slogan" element={<Slogan />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </Router>
);

export default MyRoutes;
