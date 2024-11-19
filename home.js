import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../styles/Home.css';
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Shubham_Rana@Deakin</h1>

        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>

        <div className="button-container">
          {currentUser ? (
            <button className="logout-button" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <>
              <button className="login-button" onClick={() => navigate('/login')}>
                <FaSignInAlt /> Login
              </button>
              <button className="signup-button" onClick={() => navigate('/signup')}>
                <FaUserPlus /> Sign Up
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
