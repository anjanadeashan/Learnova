import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock login - replace with actual authentication
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  const handleGuestLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>LEARNOVA</h1>
          <p>Hello! Welcome to Learnova</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'LOG IN'}
          </button>
          
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </form>
        
        <div className="auth-divider">
          <span>or login with</span>
        </div>
        
        <div className="social-login">
          <button className="social-btn linkedin">LinkedIn</button>
          <button className="social-btn instagram">Instagram</button>
          <button className="social-btn facebook">Facebook</button>
          <button className="social-btn google">Google</button>
          <button className="social-btn youtube">YouTube</button>
          <button className="social-btn github">GitHub</button>
          <button className="social-btn apple">Apple</button>
        </div>
        
        <div className="auth-footer">
          <button onClick={handleGuestLogin} className="guest-login">
            Continue as Guest
          </button>
          <p>
            Don't have an account? <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;