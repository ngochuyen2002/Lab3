import PianoButtonComponent from "./PianoButtonComponent";
import "./pianoComponent.css";
import { useEffect, useState, useCallback } from "react";
import keyboardMapArray from "../../constants/keyboardMapArray";

const PianoKeyboardComponent = (props) => {
  const [pressedKeysArray, setPressedKeys] = useState([]);

  const handleKeyDown = useCallback((e) => {
    let keyNotation = e.key === "Shift" ? e.key : e.key.toUpperCase();
    let noteObj = keyboardMapArray.find((keyObj) => keyObj.keyNotation === keyNotation);
    let note = noteObj ? noteObj.basenote + noteObj.octave : null;
    if (note) handlePress(keyNotation, note);
  }, []);

  const handleKeyUp = useCallback((e) => {
    let keyNotation = e.key === "Shift" ? e.key : e.key.toUpperCase();
    handleUnpress(keyNotation);
  }, []);

  const handlePress = (keyNotation, note) => {
    setPressedKeys((prevState) => [...prevState, keyNotation]);
    props.handlePlayNote && props.handlePlayNote(note);
  };

  const handleUnpress = (keyNotation) => {
    setPressedKeys((prevState) => prevState.filter((element) => element !== keyNotation));
  };

  useEffect(() => {
    const handleKeyDownWrapper = (e) => handleKeyDown(e);
    const handleKeyUpWrapper = (e) => handleKeyUp(e);

    window.addEventListener("keydown", handleKeyDownWrapper);
    window.addEventListener("keyup", handleKeyUpWrapper);

    return () => {
      window.removeEventListener("keydown", handleKeyDownWrapper);
      window.removeEventListener("keyup", handleKeyUpWrapper);
    };
  }, [handleKeyDown, handleKeyUp]); // Include dependencies in the array

  return (
    <ul className="keyboard">
      {keyboardMapArray.map((keyObj, i) => (
        <PianoButtonComponent
          key={i}
          className={keyObj.className}
          keyNotation={keyObj.keyNotation}
          note={keyObj.basenote + keyObj.octave}
          isPressed={pressedKeysArray.includes(keyObj.keyNotation)}
          handlePress={handlePress}
          handleUnpress={handleUnpress}
        />
      ))}
    </ul>
  );
};

export default PianoKeyboardComponent;
