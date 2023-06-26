import React from "react";
import Game from "./components/Game";
import { useEffect, useState } from "react";

const App = () => {
  const [duration, setDuration] = useState(1);
  const [startGame, setStartGame] = useState(false);
  const [showElement, setShowElement] = useState("hidden");
const [playAgain, setPlayAgain] = useState(true);
  // useEffect(() => {
  //   let timerId;
  //   if (startGame || playAgain) {
  //     timerId = setInterval(() => {
  //       setDuration((prev) => prev - 1);
  //     }, 1000);
  //   };
    
  //   return function cleanup() {
  //     clearInterval(timerId);
  //   };
  // }, [startGame]);
  
  // if (duration == 0){
  //   console.log("alert")
  // }
  const handleClick = (e) => {
    setStartGame(true);
    setShowElement("show");
  };
  //a button starts the timer
  //pokemon name is revealed once the button is clicked
  //write a class that hides the pokemon name and that class gets removed once the button is clicked

  //need to display the timer countdown to the user
  //once that timer reaches 0, currentScore is set to bestScore
  //there is a button that resets the score
  //could we change the text content of the start game button to say 'reset' when the timer goes down?

  return (
    <div className="app">
      <h1>Poke Memory</h1>
      {duration >= 0 ? <h3>{duration}</h3> : setDuration(0)}

      <h2>Welcome to the game! </h2>
      <p>
        You will have 15 seconds to guess as many unique pokemon as you can.
      </p>
      <br></br>
      <p>
        Is this a new pokemon? Click "yes or no".
      </p>
      <h3>Play Again?</h3>
      <button>Yes</button>
      <button>No</button>
      <Game handleStart={handleClick} startGame={startGame} showElement={showElement} />
    </div>
  );
};

export default App;
