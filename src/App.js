import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#171923" }}>
      <NavBar />
      <Aboutme />
    </div>
  );
}

export default App;
