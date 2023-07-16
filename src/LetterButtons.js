import React from 'react';

const LetterButtons = ({clicked, endGame, onGuess}) => {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    const buttonHandler = (e) => {
        
    }

    return (
        <section id="letter-buttons">
            {[...ALPHABET].map((char) => <button data-alpha={char} onClick={(e) => console.log(e) && onGuess(char)} disabled={endGame || clicked.includes(char)}>{char}</button>)}
        </section>
    )
}

export default LetterButtons;