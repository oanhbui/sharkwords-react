import './App.css';
import LetterButtons from './LetterButtons';
import { useState } from 'react';

function App() {
  const [clickedButtons, setClickedButtons] = useState([]);
  const handleGuess = (char) => {
    setClickedButtons((clickedButtons) => [...clickedButtons, char])
  }
  return (
    <div>
      <section id="shark-img">
        <img src="/images/guess0.png" />
      </section>

      <a id="play-again" href="#" style={{display: "none"}}>
        The shark got you! Click here to play again.
      </a>
      <a id="win" href="#" style={{display: "none"}}>
        Congratulations! 🥳 You won!
      </a>

      <section id="word-container"></section>

      <LetterButtons clicked={clickedButtons} endGame={false} onGuess={handleGuess} />
    </div>
  );
}

export default App;
