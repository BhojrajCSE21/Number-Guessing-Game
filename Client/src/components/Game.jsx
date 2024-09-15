import React, { useState } from 'react';
import './Game.css'; // Assuming you will add styles for the popups and animations

const Game = ({ updateScore }) => {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleGuess = () => {
    if (parseInt(guess) === randomNumber) {
      setPopupMessage('🎉 Congratulations! Correct guess!');
      setIsCorrect(true);
      updateScore(10); // Update score by 10 points
    } else {
      setPopupMessage(` Wrong guess! The correct number was ${randomNumber}. Try again.`);
      setIsCorrect(false);
    }
    setShowPopup(true); // Show the popup card
    setGuess('');
    setRandomNumber(Math.floor(Math.random() * 10) + 1); // Reset the number for the next round
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  return (
    <div className="input-section">
      <h2>Guess the number between 1 and 10</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button className="confirm-btn" onClick={handleGuess}>Submit</button>

      {/* Popup card for displaying messages */}
      {showPopup && (
        <div className={`popup ${isCorrect ? 'popup-success' : 'popup-failure'}`}>
          <div className="popup-message">
            {popupMessage}
          </div>
          <button className="close-popup-btn" onClick={handleClosePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
