import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './navigationPages/profile/profile';
import Mission from './navigationPages/mission/missions';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" />
      <Route path="/mission" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
