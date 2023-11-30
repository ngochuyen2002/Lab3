import React, { useEffect } from 'react';
import './App.css'; // Assuming you have this CSS file in the same directory as App.js

const DrumKitApp = () => {
  const kits = ["crash", "kick", "snare", "tom"];

  useEffect(() => {
    const handleKeyPress = (event) => {
      const kit = kits.find(k => event.key === k.slice(0, 1));
      if (kit) {
        const audioEl = new Audio(`sounds/${kit}.mp3`);
        audioEl.play();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">
      <h1>Drum Kits</h1>
      <div className="container">
        {kits.map((kit) => (
          <button
            key={kit}
            className="btn"
            onClick={() => {
              const audioEl = new Audio(`sounds/${kit}.mp3`);
              audioEl.play();
            }}
          >
            {kit}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DrumKitApp;
