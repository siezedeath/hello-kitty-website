import React from 'react';
import './App.css'; // Ensure the styles for drum animation are here

const Drum = ({ onClick }) => {
  return (
    <div className="drum" onClick={onClick}>
      <div className="side">
        <div className="side__bottom"></div>
        <div className="side__top"></div>
        <div className="pattern pattern-1"></div>
        <div className="pattern pattern-2"></div>
        <div className="pattern pattern-3"></div>
        <div className="pattern pattern-4"></div>
        <div className="pattern pattern-5"></div>
        <div className="pattern pattern-6"></div>
      </div>
      <div className="top"></div>

      {/* Drumsticks */}
      <div className="drum-stick drum-stick--left"></div>
      <div className="drum-stick-shadow drum-stick-shadow--left"></div>
      <div className="drum-stick drum-stick--right"></div>
      <div className="drum-stick-shadow drum-stick-shadow--right"></div>
    </div>
  );
};

export default Drum;
