import React from 'react';

const Cell = ({ content, status = 'unchecked', colIndex, isSubmitted }) => {
 
  return (
    <div
      className={`grid-cell ${status} ${ isSubmitted ? 'animate' : ''}`}
      style={{ animationDelay: `${colIndex * 0.1}s` }} 
    >
      {content}
    </div>
  );
};

export default Cell;