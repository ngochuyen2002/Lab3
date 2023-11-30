import React, { useState } from 'react';
import './Piano.css'; // You can style your piano keys in a separate CSS file

const PianoKey = ({ note, isBlackKey, isPressed, onKeyClick }) => {
  const keyClassName = isBlackKey ? 'black-key' : 'white-key';
  const pressedClassName = isPressed ? 'pressed' : '';

  return (
    <div
      className={`piano-key ${keyClassName} ${pressedClassName}`}
      onClick={() => onKeyClick(note)}
    >
      {note}
    </div>
  );
};

const Octave = ({ octaveNumber, onKeyClick }) => {
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = ['C#', 'D#', 'F#', 'G#', 'A#'];

  return (
    <div className="octave">
      {whiteKeys.map((note) => (
        <PianoKey
          key={note}
          note={`${note}${octaveNumber}`}
          isBlackKey={false}
          onKeyClick={onKeyClick}
        />
      ))}
      {blackKeys.map((note) => (
        <PianoKey
          key={note}
          note={`${note}${octaveNumber}`}
          isBlackKey={true}
          onKeyClick={onKeyClick}
        />
      ))}
    </div>
  );
};

const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleKeyClick = (note) => {
    // Add your logic here to handle key clicks
    console.log(`Key clicked: ${note}`);
  };

  return (
    <div className="piano-container">
      {[1, 2, 3, 4, 5, 6, 7].map((octave) => (
        <Octave key={octave} octaveNumber={octave} onKeyClick={handleKeyClick} />
      ))}
    </div>
  );
};

export default Piano;
