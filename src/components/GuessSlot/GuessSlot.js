import React from 'react';
import { range } from '../../utils';

function GuessSlot({guessWord = ''}) { 
  return (
    <p   
      className="guess">
        {range(5).map((index) => (
          <span key={index} className="cell">
            {guessWord ? guessWord[index] : ''}
          </span>
        ))}
    </p>
  );
} 

export default GuessSlot;
