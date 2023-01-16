import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import GithubStats from "./Components/GithubStats";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#171923" }}>
      <NavBar />
      <Aboutme />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
    </div>
  );
}

export default App;
