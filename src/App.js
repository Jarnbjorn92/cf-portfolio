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
    statement: "Junior software developer driven by the rush and exhilaration that comes with building fullstack applications, bug fixes, and solving technical issues.",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
              <Route path='/' element={<LandingPage personalDetails={personalDetails}/>} />
              <Route path='/home' element={<HomePage/>} />
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
