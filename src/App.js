import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <button>Logo</button>
        <button>Intro</button>
        <button>Experience</button>
        <button>Contract</button>
      </div>
      <div className="Intro_Page">
        <div className="Portfolio_IMG">
          <p>Insert Image</p>
        </div>
        <div className="Intro_Text">
          <h2 class="lighter">
            I am <span class="accent">Alyesha Singh</span>,
          </h2>
          <p>
            a university student blending creativity with computer science to
            sculpt immersive web experiences. Let's turn ideas into interactive
            art pieces, one pixel at a time.
          </p>
        </div>
      </div>
      <div className="Experience_Page">Experience</div>
      <div className="Contact_Page">Contact</div>
    </div>
  );
}

export default App;
