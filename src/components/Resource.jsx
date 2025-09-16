import React from 'react';

const Resource = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Resources</h1>
        <p>Access study materials and learning resources</p>
      </div>
      
      <div className="resources-content">
        <div className="resource-categories">
          <div className="category-card">
            <h3>📚 Study Guides</h3>
            <p>Comprehensive study guides for all subjects</p>
            <span className="resource-count">24 resources</span>
          </div>
          
          <div className="category-card">
            <h3>📖 Reference Books</h3>
            <p>Digital library of reference materials</p>
            <span className="resource-count">156 books</span>
          </div>
          
          <div className="category-card">
            <h3>🎥 Video Tutorials</h3>
            <p>Video lectures and explanations</p>
            <span className="resource-count">89 videos</span>
          </div>
          
          <div className="category-card">
            <h3>📄 Past Papers</h3>
            <p>Previous exam papers and solutions</p>
            <span className="resource-count">67 papers</span>
          </div>
          
          <div className="category-card">
            <h3>🔗 External Links</h3>
            <p>Curated external learning resources</p>
            <span className="resource-count">45 links</span>
          </div>
          
          <div className="category-card">
            <h3>🎧 Podcasts</h3>
            <p>Educational podcasts and audio content</p>
            <span className="resource-count">32 episodes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;