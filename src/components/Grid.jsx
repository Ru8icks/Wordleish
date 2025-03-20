import React from 'react';
import Cell from './Cell';

const Grid = ({ guesses, currentAttempt, currentGuess }) => {
  const rows = 6;
  const cols = 5;

  return (
    <div className="grid">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {Array.from({ length: cols }).map((_, colIndex) => {
            let cellContent = '';
            let cellStatus = ''; 
            const isSubmitted = rowIndex < currentAttempt;

            if (isSubmitted) {
              const guessResult = guesses[rowIndex];
              if (guessResult) {
                cellContent = guessResult[colIndex].letter;
                cellStatus = guessResult[colIndex].status;
              }
            } else if (rowIndex === currentAttempt) {
              cellContent = currentGuess[colIndex] || '';
            }

            return (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                content={cellContent}
                status={cellStatus}
                colIndex={colIndex}
                isSubmitted={isSubmitted}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;