import React from 'react';

const Scoreboard = ({ currentScore, bestScore }) => {
return (
    <div className="scoreboard">
    <div className="score-box">
        <h2>Score</h2>
        <p>{currentScore}</p>
    </div>
    <div className="score-box">
        <h2>Best Score</h2>
        <p>{bestScore}</p>
    </div>
    </div>
);
};

export default Scoreboard;
