import React from "react";
import Game from "./components/Game";
import { useEffect, useState } from "react";
import Styles from "./components/styles.css"; 

const App = () => {
  const [duration, setDuration] = useState(1);
  const [startGame, setStartGame] = useState(false);
  const [showElement, setShowElement] = useState("hidden");
  const [playAgain, setPlayAgain] = useState(true);

  const handleClick = (e) => {
    setStartGame(true);
    setShowElement("show");
  };

  return (
    <div className="app">
      <div className="center-content">
        <h1>Poke Memory</h1>
        <h2>Welcome to the game!</h2>
        <p>Is this a new pokemon? Click "yes" or "no".</p>
        {/* <h3>Play Again?</h3>
        <button>Yes</button>
        <button>No</button> */}
        <Game handleStart={handleClick} startGame={startGame} showElement={showElement} />
      </div>
    </div>
  );
};

export default App;

