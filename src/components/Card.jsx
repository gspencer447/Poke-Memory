import React, { useState } from "react";
import "./Card.css";

const Card = ({
  content,
  onClick,
  onGameOver,
  randomPokemon,
  startGame,
  handleStart,
  showElement,
}) => {
  const handleYesClick = () => {
    onClick(true);
    randomPokemon();
  };

  const handleNoClick = () => {
    onClick(false);
    randomPokemon();
  };

  return (
    <div className="card">
      <button onClick={handleStart}>Start Game</button>
      <h2 className={`${showElement}`}>{content.pokemon}</h2>
      <div className="button-container">
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
};

export default Card;
