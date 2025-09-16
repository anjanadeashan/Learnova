import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    setLoading(true);
    
    // Mock signup - replace with actual registration
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
          <h1>LEARNOVA</h1>
          <h2>SIGN UP</h2>
          <p>Welcome back! Please enter your details.</p>
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
          
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
          </div>
          
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'SIGN UP'}
          </button>
        </form>
        
        <div className="auth-divider">
          <span>or sign up with</span>
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
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;