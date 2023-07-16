import './App.css';
import LetterButtons from './LetterButtons';
import { useState, useEffect } from 'react';
import LetterDisplay from './LetterDisplay';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

function App() {
  const [word, setWord] = useState('');
  const [clickedButtons, setClickedButtons] = useState([]);
  const [correctToGuess, setCorrectToGuess] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(0);

  const newGame = () => {
    setClickedButtons([]);
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCorrectToGuess(word.length);
    setWrongGuess(0);
    setWord(word)
  }

  useEffect(() => {
    newGame();
  }, [])


  const handleGuess = (char) => {
    setClickedButtons((clickedButtons) => [...clickedButtons, char]);
    if (word.includes(char)) {
      let counter = 0;
      for (const letter of word) {
        if (letter === char) {
          counter += 1
        }
      }
      setCorrectToGuess((current) => current - counter)
    } else {
      setWrongGuess((current) => current + 1 )
    }
  }
  return (
    <div>
      
      <section id="shark-img">
        <img src={`/images/guess${wrongGuess}.png`} />
      </section>
      
      <a id="play-again" href="#" onClick={newGame} style={{display: wrongGuess === 5 ? "block" : "none"}}>
        The shark got you! Click here to play again.
      </a>
      <a id="win" href="#" onClick={newGame} style={{display: correctToGuess === 0 ? "block" : "none"}}>
        Congratulations! 🥳 You won!
      </a>

      <LetterDisplay word={word} clicked={clickedButtons} />

      <LetterButtons clicked={clickedButtons} endGame={wrongGuess === 5 || correctToGuess === 0} onGuess={handleGuess} />
    </div>
  );
}

export default App;
