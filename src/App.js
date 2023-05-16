import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import NavBar from './NavBar';
import LandingPage from './components/LandingPage';

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
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
