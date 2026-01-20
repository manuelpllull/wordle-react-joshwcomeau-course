import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessSlot from '../GuessSlot';

function GuessList({ guesses = [] }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <GuessSlot key={i} guessWord={guesses[i]} />
      ))}
    </div>
  );
}

export default GuessList;
