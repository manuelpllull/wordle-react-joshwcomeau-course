import React from 'react';

function GuessSlot({GuessWord}) {
  return (
    <p 
      key={crypto.randomUUID()}  
      className="guess">
      <span className="cell">{GuessWord.substring(0,1)}</span>
      <span className="cell">{GuessWord.substring(1,2)}</span>
      <span className="cell">{GuessWord.substring(2,3)}</span>
      <span className="cell">{GuessWord.substring(3,4)}</span>
      <span className="cell">{GuessWord.substring(4,5)}</span>
    </p>
  );
}

export default GuessSlot;
