import React from "react";

const LetterDisplay = ({word, clicked}) => {
    return (
        <section id="word-container">
            {[...word].map((char) => <div className="letter-box">{clicked.includes(char) ? char : null}</div>)}
        </section>
    )
}

export default LetterDisplay;