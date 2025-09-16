import React from 'react';

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About LEARNOVA</h1>
        <p>Empowering peers, Inspiring generations</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            LEARNOVA is dedicated to creating a collaborative learning environment where university students 
            can share knowledge, access study materials, and support each other's academic journey. We believe 
            in the power of peer-to-peer learning and aim to make quality education accessible to all.
          </p>
        </section>
        
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>📚 Note Sharing</h3>
              <p>Upload and download study notes across different academic years and semesters.</p>
            </div>
            <div className="feature-item">
              <h3>💬 Community Chat</h3>
              <p>Connect with fellow students through our interactive chat platform.</p>
            </div>
            <div className="feature-item">
              <h3>🤖 AI Assistant</h3>
              <p>Get instant help with your studies through our intelligent AI chatbot.</p>
            </div>
            <div className="feature-item">
              <h3>🔍 Smart Search</h3>
              <p>Find exactly what you need with our advanced search functionality.</p>
            </div>
            <div className="feature-item">
              <h3>🌐 Translation</h3>
              <p>Break language barriers with our built-in translation service.</p>
            </div>
            <div className="feature-item">
              <h3>📖 Resource Library</h3>
              <p>Access a vast collection of academic resources and materials.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become the leading platform for student collaboration and knowledge sharing, 
            fostering a global community of learners who support each other's academic success.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;