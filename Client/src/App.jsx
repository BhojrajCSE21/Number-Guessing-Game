import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';


// Higher-order component for route protection
const ProtectedRoute = ({ element, user }) => {
  return user ? element : <Navigate to="/login" />;
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<HomePage user={user} />} user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/leaderboard" element={<ProtectedRoute element={<Leaderboard scores={[]} />} user={user} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile user={user} setUser={setUser} />} user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
