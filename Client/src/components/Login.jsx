import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    // form validation
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data && response.data.user) {
        setUser(response.data.user);
        navigate('/');
      } else {
        setError('Login failed. Please try again.');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Login failed:', error);

      // Set error based on the response or default message
      if (error.response && error.response.status === 400) {
        setError('Invalid username or password.');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p>Not a user? <span className="signup-link" onClick={handleSignUpRedirect}>Sign Up</span></p>
    </div>
  );
};

export default LoginForm;
