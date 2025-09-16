import React from 'react';

const Course = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Courses</h1>
        <p>Browse available courses and lessons</p>
      </div>
      
      <div className="courses-grid">
        <div className="course-card">
          <div className="course-header">
            <h3>IS Security and Risk Management Course</h3>
            <div className="course-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '45%'}}></div>
              </div>
              <span>45% Complete</span>
            </div>
          </div>
          
          <div className="course-lessons">
            <div className="lesson">
              <span className="lesson-number">01</span>
              <span className="lesson-title">Introduction to Information System Security and Risk Management</span>
              <span className="lesson-status completed">✓</span>
            </div>
            
            <div className="lesson">
              <span className="lesson-number">02</span>
              <span className="lesson-title">Cryptography</span>
              <span className="lesson-status completed">✓</span>
            </div>
            
            <div className="lesson">
              <span className="lesson-number">03</span>
              <span className="lesson-title">Modern Cryptosystem</span>
              <span className="lesson-status current">▶</span>
            </div>
          </div>
          
          <div className="course-actions">
            <button className="btn-primary">Continue Learning</button>
            <button className="btn-secondary">View Notes</button>
          </div>
        </div>
        
        <div className="course-card">
          <div className="course-header">
            <h3>Advanced Mathematics</h3>
            <div className="course-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '78%'}}></div>
              </div>
              <span>78% Complete</span>
            </div>
          </div>
          
          <div className="course-lessons">
            <div className="lesson">
              <span className="lesson-number">01</span>
              <span className="lesson-title">Calculus Fundamentals</span>
              <span className="lesson-status completed">✓</span>
            </div>
            
            <div className="lesson">
              <span className="lesson-number">02</span>
              <span className="lesson-title">Integration Techniques</span>
              <span className="lesson-status completed">✓</span>
            </div>
          </div>
          
          <div className="course-actions">
            <button className="btn-primary">Continue Learning</button>
            <button className="btn-secondary">View Notes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;