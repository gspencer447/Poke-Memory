import React, { useState, useEffect } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";

const pokemonList = [
  {pokemon: "Pikachu", shown: false},
  {pokemon: "Charizard", shown: false},
  {pokemon: "Scyther", shown: false},
  {pokemon: "Blastoise", shown: false},
  {pokemon: "Alakazam", shown: false},
  {pokemon: "Rhydon", shown: false},
  {pokemon: "Mewtwo", shown:false},
  {pokemon: "Gengar", shown: false},
  {pokemon: "Jolteon", shown: false},
  {pokemon: "Dragonite", shown: false}
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
  };

  const handleCardClick = (selection) => {
    if (userSelection === null) {
      setUserSelection(selection);

      if ((selection == true && shown == false)|| (selection == false && shown == true)) {
        setCurrentScore(currentScore + 1);
      } else {
        if (currentScore > bestScore) {
          setBestScore(currentScore);
        }
        setCurrentScore(0);
      }

      // if (currentPokemonIndex === pokemonList.length - 1) {
      //   // Reached the last Pokémon, reset the game
      //   setTimeout(() => {
      //     setCurrentPokemonIndex(0);
      //     displayRandomPokemon();
      //   }, 1000);
      // } else {
      //   // Move to the next Pokémon
      //   setTimeout(() => {
      //     setCurrentPokemonIndex(currentPokemonIndex + 1);
      //   }, 1000);
      // }
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
};

export default Game;
