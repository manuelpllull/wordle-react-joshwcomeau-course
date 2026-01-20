import React from 'react';

function Guess({ guess = '' }) {
  const letters = Array.from({ length: 5 }, (_, i) => guess[i] || '');

  return (
    <p className="guess">
      {letters.map((letter, idx) => (
        <span key={idx} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
