import React from 'react';

function GuessList({ guesses }) {
  return (
  <div class="guess-results">
  {guesses.map((guess, index) => (
    <p key={crypto.randomUUID()} class="guess">{guess}</p>
  ))}
</div>);
}

export default GuessList;
