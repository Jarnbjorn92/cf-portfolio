import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {

  const personalDetails = {
    name: "Connor Fleming",
    location: "Glasgow, Scotland",
    email: "connor.fleming1992@gmail.com",
    availability: "Open to work",
    statement: "Junior Software Developer",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
              <Route path='/' element={<LandingPage personalDetails={personalDetails}/>} />
              <Route path='/home' element={<HomePage personalDetails={personalDetails}/>} />
              <Route path='/about' element={<AboutPage/>} />
              <Route path='/contact' element={<ContactPage/>} />
            </Routes>
        </Router>
      </header>
      <div className='footer-cr'>Designed & Developed by Connor Fleming ©</div>
    </div>
  );
}

export default App;
