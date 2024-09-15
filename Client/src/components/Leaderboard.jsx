import React from 'react';
import { Link } from 'react-router-dom'; 
import './Leaderboard.css'; 

const Leaderboard = ({ scores }) => {
  const sortedScores = [...scores].sort((a, b) => b.score - a.score).slice(0, 10);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Number Guessing Game</h2>
        </div>
        <ul className="navbar-links">
          <li><Link to="/login" className="nav-btn">Login</Link></li>
          <li><Link to="/signup" className="nav-btn">Signup</Link></li>
          <li><Link to="/" className="nav-btn">Home</Link></li>
        </ul>
      </nav>

      {/* Leaderboard Table */}
      <div className="leaderboard-container">
        <h2>Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.length > 0 ? (
              sortedScores.map((entry, index) => (
                <tr key={index} className="leaderboard-item">
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No scores yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
