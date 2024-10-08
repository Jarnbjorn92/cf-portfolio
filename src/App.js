import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import BackgroundImage from './components/assets/Trianglify-5s-1440px.svg';
import React from 'react';

function App() {

  const personalDetails = {
    name: "Connor Fleming",
    location: "Glasgow, Scotland",
    email: "connor.fleming1992@gmail.com",
    availability: "Open to work",
    statement: "Software Developer",
  };
  

  return (
    <>
    <div className="App">
    <img src={BackgroundImage} className='background' alt='background-img'/>
        <Router>
            <Routes>
              <Route path='/' element={<LandingPage personalDetails={personalDetails}/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='/portfolio' element={<PortfolioPage/>} />
              <Route path='/contact' element={<ContactPage personalDetails={personalDetails}/>} />
            </Routes>
        </Router>
    </div>
    <div className='footer-cr'>Designed & Developed by Connor Fleming ©</div>
    </>
  );
}

export default App;
