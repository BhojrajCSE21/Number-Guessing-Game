import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Game from './Game'; 
import Leaderboard from './Leaderboard'; 
import './HomePage.css'; 

const HomePage = ({ user }) => { 
  const [score, setScore] = useState(0); 
  const [highScore, setHighScore] = useState(0); 
  const [leaderboard, setLeaderboard] = useState([]); 
  const [view, setView] = useState('game'); 

  const updateScore = (newScore) => {
    const updatedScore = score + newScore;
    setScore(updatedScore);

    if (updatedScore > highScore) {
      setHighScore(updatedScore);
      alert('New high score! 🎉'); 
    }
    setLeaderboard((prev) => [
      ...prev,
      { name: user?.username || 'Player', score: updatedScore } 
    ]);
  };

  const Score = ({ score }) => {
    return <h3>🎯 Current Score: {score}</h3>;
  };

  const HighScore = ({ highScore }) => {
    return <h3>🏅 High Score: {highScore}</h3>;
  };

  const toggleView = (viewName) => {
    setView(viewName);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Number Guessing Game</h2>
        </div>
        <ul className="navbar-links">
          {user ? (
            <>
              <li><Link to="/profile" className="nav-btn">Profile</Link></li>
              <li><Link to="/leaderboard" className="nav-btn">Leaderboard</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="nav-btn">Login</Link></li>
              <li><Link to="/signup" className="nav-btn">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>

      <div className="content-container">
        {view === 'game' ? (
          <div className="game-container">
            <header>
              <button className="try-again-btn" onClick={() => setScore(0)}>
                Try Again!
              </button>
            </header>
            <h1>Predict My Number!</h1>
            <Game updateScore={(newScore) => updateScore(newScore)} />
            <footer>
              <Score score={score} /> 
              <HighScore highScore={highScore} /> 
            </footer>
          </div>
        ) : (
          <Leaderboard scores={leaderboard} /> 
        )}
      </div>
    </div>
  );
};

export default HomePage;
