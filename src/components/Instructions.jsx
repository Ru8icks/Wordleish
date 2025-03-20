import React from 'react';

const Instructions = () => {
 
  return (
    <div>
      <h2>How to Play</h2>
      <p>Guess the 5-letter word in 6 tries or fewer.</p>
      <div>
        <span className="correct-example">Green</span> means the letter is correct and in the right position.
      </div>
      <div>
        <span className="present-example">Yellow</span> means the letter is in the word but in the wrong position.
      </div>
      <div>
        <span className="absent-example">Grey</span> means the letter isn't in the word.
      </div>
  </div>
  );
};

export default Instructions;