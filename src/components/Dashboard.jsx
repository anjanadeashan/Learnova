import React from 'react';

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your learning overview</p>
      </div>
      
      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Hello, Samadhi</h2>
          <p>Let's learn something new today!</p>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Recent Notes</h3>
            <p>3 new notes uploaded this week</p>
          </div>
          
          <div className="dashboard-card">
            <h3>Study Progress</h3>
            <p>75% completed this semester</p>
          </div>
          
          <div className="dashboard-card">
            <h3>Upcoming Deadlines</h3>
            <p>2 assignments due soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;