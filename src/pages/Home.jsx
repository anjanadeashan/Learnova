// src/pages/Home.jsx - Working Version with Visible Content
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      {/* Main Banner */}
      <div className="home-banner">
        <div className="banner-content">
          <h1>WELCOME!</h1>
          <p className="banner-subtitle">Empowering peers, Inspiring generations</p>
          <div className="banner-actions">
            <Link to="/dashboard" className="banner-btn primary">
              Get Started
            </Link>
            <Link to="/about" className="banner-btn secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="banner-image">
          <div className="tech-illustration">
            <div className="laptop-icon">💻</div>
            <div className="floating-elements">
              <span className="element">📚</span>
              <span className="element">🎓</span>
              <span className="element">💡</span>
              <span className="element">🔬</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="home-content">
        {/* Recently Accessed Section */}
        <div className="recently-accessed">
          <h2>Recently Accessed</h2>
          <div className="course-cards">
            <div className="course-card">
              <h3>Mathematics</h3>
              <p>Advanced Calculus</p>
              <span className="course-progress">Progress: 75%</span>
            </div>
            <div className="course-card">
              <h3>Physics</h3>
              <p>Quantum Mechanics</p>
              <span className="course-progress">Progress: 60%</span>
            </div>
            <div className="course-card">
              <h3>Computer Science</h3>
              <p>Data Structures</p>
              <span className="course-progress">Progress: 85%</span>
            </div>
          </div>
        </div>
        
        {/* Community Chat Preview */}
        <div className="community-chat-preview">
          <h3>Community Chat</h3>
          <div className="chat-preview">
            <div className="chat-item">
              <div className="chat-user">Name 01</div>
              <div className="chat-time">11:00 A.M</div>
            </div>
            <div className="chat-item">
              <div className="chat-user">Name 02</div>
              <div className="chat-time">01:00 P.M</div>
            </div>
            <div className="chat-item">
              <div className="chat-user">Name 03</div>
              <div className="chat-time">03:00 P.M</div>
            </div>
          </div>
          <Link to="/chat" className="view-all-btn">View All Chats</Link>
        </div>
        
        {/* AI Assistant Section */}
        <div className="start-sharing">
          <h2>Start Sharing</h2>
          <p className="sharing-subtitle">Knowledge</p>
          <p className="sharing-description">
            Connect with fellow students and share your learning materials
          </p>
          <Link to="/ai-chatbot" className="ai-assistant-btn">
            🤖 AI Assistant
          </Link>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <h2>What You Can Do</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Share Notes</h3>
            <p>Upload and download study materials from your peers</p>
            <Link to="/notes" className="feature-link">Explore Notes →</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Join Discussions</h3>
            <p>Connect with students in study groups and forums</p>
            <Link to="/chat" className="feature-link">Start Chatting →</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Take Courses</h3>
            <p>Access structured learning materials and courses</p>
            <Link to="/courses" className="feature-link">Browse Courses →</Link>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Smart Search</h3>
            <p>Find exactly what you need with our advanced search</p>
            <Link to="/search" className="feature-link">Try Search →</Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="stats-section">
        <h2>Join Our Growing Community</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Notes Shared</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Study Groups</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Universities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;