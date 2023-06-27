import React, { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import Styles from "./styles.css";

const pokemonList = [
  { pokemon: "Pikachu", shown: false },
  { pokemon: "Charizard", shown: false },
  { pokemon: "Scyther", shown: false },
  { pokemon: "Blastoise", shown: false },
  { pokemon: "Alakazam", shown: false },
  { pokemon: "Rhydon", shown: false },
  { pokemon: "Mewtwo", shown: false },
  { pokemon: "Gengar", shown: false },
  { pokemon: "Jolteon", shown: false },
  { pokemon: "Dragonite", shown: false },
];

function Game({ startGame, handleStart, showElement }) {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [userSelection, setUserSelection] = useState(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    displayRandomPokemon();
  }, []);

  const displayRandomPokemon = () => {
    // console.log(currentPokemonIndex)
    setUserSelection(null);
    setCurrentPokemonIndex(Math.floor(Math.random() * pokemonList.length));
    // console.log(currentPokemonIndex)
    setShown(true);
  };

  const resetGame = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    pokemonList.forEach((pokemon) => {
      pokemon.shown = false;
    });
  };
  

  const handleCardClick = (selection) => {
    if (userSelection === null) {
      setUserSelection(selection);
  
      const currentPokemon = pokemonList[currentPokemonIndex];
      if (currentPokemon.shown && !selection) {
        setCurrentScore(currentScore + 1);
      } else if (!currentPokemon.shown && selection) {
        setCurrentScore(currentScore + 1);
      } else {
        resetGame();
      }
      currentPokemon.shown = true;
    }
  };
  

  return (
    <div className="game">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Card
        startGame={startGame}
        handleStart={handleStart}
        content={pokemonList[currentPokemonIndex]}
        onClick={handleCardClick}
        disabled={userSelection !== null}
        randomPokemon={displayRandomPokemon}
        showElement={showElement}
      />
    </div>
  );
}

export default Game;
