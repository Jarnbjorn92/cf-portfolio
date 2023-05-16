import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import NavBar from './NavBar';

function App() {

  const personalDetails = {
    name: "Connor Fleming",
    location: "Glasgow, Scotland",
    email: "connor.fleming1992@gmail.com",
    availability: "Open to work",
    statement: "Junior software developer driven by the rush and exhilaration that comes with building fullstack applications, bug fixes, and solving technical issues.",
  };

  const socialMedia = {
    linkedIn: "https://www.linkedin.com/in/connor-j-fleming/",
    gitHub: "https://github.com/Jarnbjorn92",
  };

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage personalDetails={personalDetails}/>} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
