import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary cleanup or API calls for logging out
    setUser(null); // Clear user state
    navigate('/login'); // Redirect to login page
  };

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h1>{user.username}'s Profile</h1>
      <p>Email: {user.email}</p>
      <h2>Game Scores</h2>
      <ul>
        {user.scores ? (
          user.scores.map((score, index) => (
            <li key={index}>Score: {score}</li>
          ))
        ) : (
          <li>No scores available.</li>
        )}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
