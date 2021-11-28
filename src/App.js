import logo from "./logo.svg";
import "./App.scss";
import "./App.css";
import ScoreBoard from "./components/Scoreboard";
import AddPlayer from "./components/AddPlayerForm";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <ScoreBoard />
      </main>
    </div>
  );
}

export default App;
