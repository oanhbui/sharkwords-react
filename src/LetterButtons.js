import React from 'react';

const LetterButtons = ({clicked, endGame, onGuess}) => {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    const buttonHandler = (e) => {
        onGuess(e.target.getAttribute('data-alpha'));
    }

    return (
        <section id="letter-buttons">
            {[...ALPHABET].map((char) => <button key={char} data-alpha={char} onClick={buttonHandler} disabled={endGame || clicked.includes(char)}>{char}</button>)}
        </section>
    )
}

export default LetterButtons;