import './App.css';

function App() {

  const personalDetails = {
    name: "Connor Fleming",
    location: "Glasgow, Scotland",
    email: "connor.fleming1992@gmail.com",
    availability: "Open to work"
  };

  const socialMedia = {
    linkedIn: "https://www.linkedin.com/in/connor-j-fleming/",
    gitHub: "https://github.com/Jarnbjorn92",
    
  }

  return (
    <div className="App">
      <header className="App-header">
        Connor's portfolio
      </header>
    </div>
  );
}

export default App;
