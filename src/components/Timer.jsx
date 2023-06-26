import { useEffect, useState } from "react";

export default function Timer(props) {
    const [duration, setDuration] = useState(10);
    const [startGame, setStartGame] = useState(false);
  
    useEffect(() => {
      let timerId;
      if (startGame) {
        timerId = setInterval(() => {
          setDuration((prev) => prev - 1);
        }, 1000);
      }
  
      return function cleanup() {
        clearInterval(timerId);
      };
    }, [startGame]);
  
    const handleClick = (e) => {
       setStartGame(true) 
    };
  
    return (
      <>
        {duration >= 0 ? <h3>{duration}</h3> : setDuration(0)}
        <button startGame={startGame} onClick={handleClick}>Start Game</button>
      </>
    );
  }