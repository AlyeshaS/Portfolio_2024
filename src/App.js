import "./App.css";
import logo from "./Images/Logo.png";
import portrait from "./Images/portrait.jpg";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img src={logo} alt="logo" class="logo"></img>
        <div className="button_pages">
          <p>Intro</p>
          <p>Experience</p>
          <p>Contract</p>
        </div>
        <div className="Social_Media">
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="Intro_Page">
        <div className="Portfolio_IMG">
          <img src={portrait} alt="portrait" class="portrait"></img>
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
