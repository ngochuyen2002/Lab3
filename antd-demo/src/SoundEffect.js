import React from 'react';
import useSound from 'use-sound';

const SoundEffect = () => {
  const [playSound] = useSound('tom.mp3');

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
    </div>
  );
};

export default SoundEffect;