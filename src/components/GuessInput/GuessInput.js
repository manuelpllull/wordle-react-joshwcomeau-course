import React from 'react';

function GuessInput({ guesses, setGuesses }) {
  const [input, setInput] = React.useState('');
  return (
    <form 
    className="guess-input-wrapper"
    onSubmit={(e) => {
      e.preventDefault();
      if (input.length !== 5) {
        window.alert('Guess must be 5 letters long💖');
        return;
      }
      const guess = input.toUpperCase().slice(0,5);
      setGuesses([...guesses, guess]);
      setInput('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        maxLength={5}
        minLength={5}
        id="guess-input" 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
    </form>
  );
}

export default GuessInput;
