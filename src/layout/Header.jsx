// src/layout/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ toggleSidebar, sidebarOpen }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  const navigate = useNavigate();

  // Mock user data - replace with actual auth context
  const user = {
    isAuthenticated: true,
    name: "Samadhi",
    avatar: null
  };

  const handleProfileClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleNavDropdownClick = () => {
    setShowNavDropdown(!showNavDropdown);
    // Also toggle sidebar when nav dropdown is clicked
    if (!showNavDropdown) {
      toggleSidebar();
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    setShowUserMenu(false);
    navigate('/');
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-menu')) {
        setShowUserMenu(false);
      }
      if (!event.target.closest('.nav-dropdown-container')) {
        setShowNavDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className={`hamburger-menu ${sidebarOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <Link to="/" className="logo">
          <h1>LEARNOVA</h1>
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about" className="nav-link">ABOUT US</Link>
        <Link to="/contact" className="nav-link">CONTACT US</Link>
        <Link to="/privacy" className="nav-link">PRIVACY POLICY</Link>
        
        {/* New Navigation Dropdown */}
        <div className="nav-dropdown-container">
          
        </div>
      </nav>

      <div className="header-right">
        {user.isAuthenticated ? (
          <div className="user-menu">
            <button 
              className="user-avatar"
              onClick={handleProfileClick}
              aria-label="User menu"
            >
              {user.avatar ? (
                <img src={user.avatar} alt="User avatar" />
              ) : (
                <div className="avatar-placeholder">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </button>
            
            {showUserMenu && (
              <div className="user-dropdown">
                <div className="user-info">
                  <p className="user-greeting">Hello, {user.name}</p>
                  <p className="user-subtitle">Let's learn Something new today!</p>
                </div>
                <hr />
                <Link to="/profile" className="dropdown-item">
                  Profile Settings
                </Link>
                <Link to="/dashboard" className="dropdown-item">
                  Dashboard
                </Link>
                <hr />
                <button onClick={handleLogout} className="dropdown-item logout">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/signup" className="btn-signup">Sign Up</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;