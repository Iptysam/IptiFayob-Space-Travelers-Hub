import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/profile';


const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    );
}

export default App;
