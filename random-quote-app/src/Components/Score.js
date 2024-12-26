import React from 'react';

const Score = ({ score }) => (
  <div className="score">
    <h2>Score</h2>
    <p>Correct: {score.correct}</p>
    <p>Total: {score.total}</p>
  </div>
);

export default Score;
