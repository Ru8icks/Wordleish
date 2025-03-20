import React from 'react';
import starPNG from '../assets/star.png';

const Stars = () => {
 

  return (
    <div className="shooting-stars">         
        <img src={starPNG} className="star" alt="shooting star" />
        <img src={starPNG} className="star" alt="shooting star" />
        <img src={starPNG} className="star" alt="shooting star" />
        <img src={starPNG} className="star" alt="shooting star" />
        <img src={starPNG} className="star" alt="shooting star" />  
    </div>
  );
};

export default Stars;